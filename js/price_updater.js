class PriceUpdater {
    constructor() {
        this.poeNinjaBaseUrl = 'https://poe.ninja/api/data';
        this.corsProxyUrl = 'https://corsproxy.io/?';
        this.priceDataUrl = 'data/price_data.json';
        this.league = 'Phrecia';
        this.priceData = null;
    }

    async fetchWithCors(url) {
        try {
            const response = await fetch(this.corsProxyUrl + encodeURIComponent(url));
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }

    async fetchDivinePrice() {
        try {
            const data = await this.fetchWithCors(`${this.poeNinjaBaseUrl}/currencyoverview?league=${this.league}&type=Currency`);
            const divineOrb = data.lines.find(currency => currency.currencyTypeName === 'Divine Orb');
            return divineOrb ? divineOrb.chaosEquivalent : 0;
        } catch (error) {
            console.error('Error fetching divine price:', error);
            throw error;
        }
    }

    async fetchUniqueItems() {
        try {
            // Fetch weapons, armour, and accessories separately
            const [weapons, armour, accessories] = await Promise.all([
                this.fetchWithCors(`${this.poeNinjaBaseUrl}/itemoverview?league=${this.league}&type=UniqueWeapon`),
                this.fetchWithCors(`${this.poeNinjaBaseUrl}/itemoverview?league=${this.league}&type=UniqueArmour`),
                this.fetchWithCors(`${this.poeNinjaBaseUrl}/itemoverview?league=${this.league}&type=UniqueAccessory`)
            ]);
            
            // Combine all items
            const allItems = [
                ...(weapons.lines || []),
                ...(armour.lines || []),
                ...(accessories.lines || [])
            ];
            
            return allItems;
        } catch (error) {
            console.error('Error fetching unique items:', error);
            throw error;
        }
    }

    async updatePrices() {
        try {
            // Get divine price
            const divinePrice = await this.fetchDivinePrice();
            console.log(`Current Divine price: ${divinePrice} chaos`);

            // Get unique items
            const items = await this.fetchUniqueItems();
            console.log(`Fetched ${items.length} unique items`);

            // Process items
            const uniqueItems = items.map(item => {
                // Convert divine price to chaos if needed
                let priceInChaos = item.chaosValue || 0;
                if (item.divineValue > 0) {
                    priceInChaos = item.divineValue * divinePrice;
                }

                return {
                    name: item.name,
                    chaosValue: priceInChaos
                };
            });

            // Create the price data structure
            this.priceData = {
                lastUpdated: new Date().toISOString().split('T')[0],
                uniqueItems: uniqueItems
            };

            // Save to localStorage for persistence
            localStorage.setItem('poePriceData', JSON.stringify(this.priceData));
            
            // Update the price data display if it exists
            this.updatePriceDataDisplay();

            console.log('Price data has been updated and saved to localStorage');
            return this.priceData;
        } catch (error) {
            console.error('Error updating prices:', error);
            throw error;
        }
    }

    updatePriceDataDisplay() {
        const priceDataDisplay = document.getElementById('price-data-display');
        if (!priceDataDisplay) return;
        
        // Clear previous content
        priceDataDisplay.innerHTML = '';
        
        if (!this.priceData) {
            priceDataDisplay.innerHTML = '<p>No price data available.</p>';
            return;
        }
        
        // Create price data card
        const card = document.createElement('div');
        card.className = 'price-data-card';
        
        // Add last updated date
        const lastUpdated = document.createElement('p');
        lastUpdated.textContent = `Last Updated: ${this.priceData.lastUpdated}`;
        card.appendChild(lastUpdated);
        
        // Add item count
        const itemCount = document.createElement('p');
        itemCount.textContent = `Items: ${this.priceData.uniqueItems.length}`;
        card.appendChild(itemCount);
        
        // Add download button
        const downloadBtn = document.createElement('a');
        downloadBtn.href = '#';
        downloadBtn.className = 'download-btn';
        downloadBtn.textContent = 'Download Price Data';
        downloadBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.downloadPriceData();
        });
        card.appendChild(downloadBtn);
        
        priceDataDisplay.appendChild(card);
    }

    downloadPriceData() {
        if (!this.priceData) {
            console.error('No price data available to download');
            return;
        }
        
        // Convert to JSON string with nice formatting
        const jsonString = JSON.stringify(this.priceData, null, 2);

        // Create a download link
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'price_data.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    loadFromLocalStorage() {
        try {
            const savedData = localStorage.getItem('poePriceData');
            if (savedData) {
                this.priceData = JSON.parse(savedData);
                console.log('Loaded price data from localStorage');
                this.updatePriceDataDisplay();
                return true;
            }
        } catch (error) {
            console.error('Error loading from localStorage:', error);
        }
        return false;
    }
}

// Initialize the price updater on page load
document.addEventListener('DOMContentLoaded', async () => {
    try {
        console.log('Initializing price updater...');
        const updater = new PriceUpdater();
        
        // Get status element
        const statusElement = document.getElementById('price-status');
        if (!statusElement) return;
        
        // Try to load from localStorage first
        const loadedFromStorage = updater.loadFromLocalStorage();
        
        if (loadedFromStorage) {
            statusElement.textContent = 'Price data loaded from cache. Updating in background...';
            statusElement.className = 'updating';
            
            // Update in the background
            updater.updatePrices().catch(error => {
                console.error('Background update failed:', error);
                statusElement.textContent = 'Background update failed. Using cached data.';
                statusElement.className = 'error';
            });
        } else {
            // No cached data, update now
            statusElement.textContent = 'Updating price data...';
            statusElement.className = 'updating';
            
            await updater.updatePrices();
            
            statusElement.textContent = 'Price data updated successfully!';
            statusElement.className = 'success';
        }
    } catch (error) {
        console.error('Error initializing price updater:', error);
        
        // Show error status
        const statusElement = document.getElementById('price-status');
        if (statusElement) {
            statusElement.textContent = 'Failed to update price data. Please try again later.';
            statusElement.className = 'error';
        }
    }
}); 