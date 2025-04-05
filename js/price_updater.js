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
            const data = await this.fetchWithCors(`${this.poeNinjaBaseUrl}/currencyoverview?league=${this.league}`);
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
        // Create or update the price data display
        let priceDataContainer = document.getElementById('priceDataContainer');
        
        if (!priceDataContainer) {
            priceDataContainer = document.createElement('div');
            priceDataContainer.id = 'priceDataContainer';
            priceDataContainer.className = 'card mb-4';
            
            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';
            
            const title = document.createElement('h5');
            title.className = 'card-title';
            title.textContent = 'Current Price Data';
            
            const lastUpdated = document.createElement('p');
            lastUpdated.className = 'text-muted';
            lastUpdated.id = 'lastUpdated';
            
            const itemCount = document.createElement('p');
            itemCount.className = 'text-muted';
            itemCount.id = 'itemCount';
            
            const downloadBtn = document.createElement('button');
            downloadBtn.className = 'btn btn-sm btn-secondary mt-2';
            downloadBtn.textContent = 'Download Price Data';
            downloadBtn.addEventListener('click', () => this.downloadPriceData());
            
            cardBody.appendChild(title);
            cardBody.appendChild(lastUpdated);
            cardBody.appendChild(itemCount);
            cardBody.appendChild(downloadBtn);
            priceDataContainer.appendChild(cardBody);
            
            // Insert after the analyze card
            const analyzeCard = document.querySelector('.card');
            if (analyzeCard) {
                analyzeCard.parentNode.insertBefore(priceDataContainer, analyzeCard.nextSibling);
            } else {
                document.body.appendChild(priceDataContainer);
            }
        }
        
        // Update the display with current data
        if (this.priceData) {
            document.getElementById('lastUpdated').textContent = `Last Updated: ${this.priceData.lastUpdated}`;
            document.getElementById('itemCount').textContent = `Items: ${this.priceData.uniqueItems.length}`;
        }
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
        
        // Create a status indicator
        const statusContainer = document.createElement('div');
        statusContainer.className = 'card mb-4';
        
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        
        const statusText = document.createElement('p');
        statusText.className = 'mb-0';
        statusText.textContent = 'Loading price data...';
        
        cardBody.appendChild(statusText);
        statusContainer.appendChild(cardBody);
        
        // Insert the status indicator after the analyze button
        const analyzeCard = document.querySelector('.card');
        if (analyzeCard) {
            analyzeCard.parentNode.insertBefore(statusContainer, analyzeCard.nextSibling);
        } else {
            document.body.appendChild(statusContainer);
        }
        
        // Try to load from localStorage first
        const loadedFromStorage = updater.loadFromLocalStorage();
        
        if (loadedFromStorage) {
            statusText.textContent = 'Price data loaded from cache. Updating in background...';
            statusText.className = 'mb-0 text-info';
            
            // Update in the background
            updater.updatePrices().catch(error => {
                console.error('Background update failed:', error);
            });
        } else {
            // No cached data, update now
            statusText.textContent = 'Updating price data...';
            await updater.updatePrices();
            statusText.textContent = 'Price data updated successfully!';
            statusText.className = 'mb-0 text-success';
        }
        
        // Remove status after 5 seconds
        setTimeout(() => {
            statusContainer.remove();
        }, 5000);
    } catch (error) {
        console.error('Error initializing price updater:', error);
        
        // Show error status
        const errorContainer = document.createElement('div');
        errorContainer.className = 'alert alert-danger mt-3';
        errorContainer.textContent = 'Failed to update price data. Please try again later.';
        
        const analyzeCard = document.querySelector('.card');
        if (analyzeCard) {
            analyzeCard.parentNode.insertBefore(errorContainer, analyzeCard.nextSibling);
        } else {
            document.body.appendChild(errorContainer);
        }
    }
}); 