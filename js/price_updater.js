class PriceUpdater {
    constructor() {
        this.poeNinjaBaseUrl = 'https://poe.ninja/api/data';
        this.priceDataUrl = 'data/price_data.json';
    }

    async fetchDivinePrice() {
        try {
            const response = await fetch(`${this.poeNinjaBaseUrl}/currencyoverview?league=Affliction`);
            const data = await response.json();
            const divineOrb = data.lines.find(currency => currency.currencyTypeName === 'Divine Orb');
            return divineOrb ? divineOrb.chaosEquivalent : 0;
        } catch (error) {
            console.error('Error fetching divine price:', error);
            throw error;
        }
    }

    async fetchUniqueItems() {
        try {
            const response = await fetch(`${this.poeNinjaBaseUrl}/itemoverview?league=Affliction&type=UniqueWeapon,UniqueArmour,UniqueAccessory`);
            const data = await response.json();
            return data.lines;
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
                let priceInChaos = item.chaosValue;
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

// Create a button to trigger the update
document.addEventListener('DOMContentLoaded', () => {
    const container = document.createElement('div');
    container.className = 'card mb-4';
    
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    
    const updateButton = document.createElement('button');
    updateButton.className = 'btn btn-secondary';
    updateButton.textContent = 'Update Price Data';
    updateButton.addEventListener('click', async () => {
        try {
            updateButton.disabled = true;
            updateButton.textContent = 'Updating...';
            
            const updater = new PriceUpdater();
            await updater.updatePrices();
            
            updateButton.textContent = 'Update Complete!';
            setTimeout(() => {
                updateButton.textContent = 'Update Price Data';
                updateButton.disabled = false;
            }, 3000);
        } catch (error) {
            console.error('Error:', error);
            updateButton.textContent = 'Update Failed';
            setTimeout(() => {
                updateButton.textContent = 'Update Price Data';
                updateButton.disabled = false;
            }, 3000);
        }
    });
    
    cardBody.appendChild(updateButton);
    container.appendChild(cardBody);
    
    // Insert the update button after the analyze button
    const analyzeCard = document.querySelector('.card');
    if (analyzeCard) {
        analyzeCard.parentNode.insertBefore(container, analyzeCard.nextSibling);
    } else {
        document.body.appendChild(container);
    }
}); 