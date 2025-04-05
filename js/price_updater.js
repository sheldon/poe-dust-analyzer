class PriceUpdater {
    constructor() {
        this.poeNinjaBaseUrl = 'https://poe.ninja/api/data';
        this.corsProxyUrl = 'https://corsproxy.io/?';
        this.priceDataUrl = 'data/price_data.json';
        this.league = 'Phrecia';
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
            const priceData = {
                lastUpdated: new Date().toISOString().split('T')[0],
                uniqueItems: uniqueItems
            };

            // Convert to JSON string with nice formatting
            const jsonString = JSON.stringify(priceData, null, 2);

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

            console.log('Price data has been downloaded. Replace the contents of data/price_data.json with this file.');
            return priceData;
        } catch (error) {
            console.error('Error updating prices:', error);
            throw error;
        }
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
        statusText.textContent = 'Updating price data...';
        
        cardBody.appendChild(statusText);
        statusContainer.appendChild(cardBody);
        
        // Insert the status indicator after the analyze button
        const analyzeCard = document.querySelector('.card');
        if (analyzeCard) {
            analyzeCard.parentNode.insertBefore(statusContainer, analyzeCard.nextSibling);
        } else {
            document.body.appendChild(statusContainer);
        }
        
        // Update prices
        await updater.updatePrices();
        
        // Update status
        statusText.textContent = 'Price data updated successfully!';
        statusText.className = 'mb-0 text-success';
        
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