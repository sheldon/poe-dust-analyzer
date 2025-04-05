class PoeDataAnalyzer {
    constructor() {
        this.dustDataUrl = 'https://gist.githubusercontent.com/alserom/22bdd4106806cbd4f85a5cb8c4345c08/raw/696fcafd2ed2ff4807e155bc8ef79270367b6fbb/poe-dust.csv';
        this.priceDataUrl = 'data/price_data.json';
        this.dustData = null;
        this.priceData = null;
    }

    async getDivinePrice() {
        try {
            // Get price data from static JSON file
            if (!this.priceData) {
                const response = await fetch(this.priceDataUrl);
                this.priceData = await response.json();
            }
            
            // Get divine price from static data
            return this.priceData.divinePrice || 0;
        } catch (error) {
            console.error('Error fetching divine price:', error);
            throw error;
        }
    }

    async getUniqueItems() {
        try {
            // Get price data from static JSON file
            if (!this.priceData) {
                const response = await fetch(this.priceDataUrl);
                this.priceData = await response.json();
            }
            
            // Get unique items from static data
            return this.priceData.uniqueItems || [];
        } catch (error) {
            console.error('Error fetching unique items:', error);
            throw error;
        }
    }

    async getDustData() {
        if (this.dustData) return this.dustData;

        try {
            const response = await fetch(this.dustDataUrl, {
                method: 'GET',
                headers: {
                    'Accept': 'text/csv'
                }
            });
            const csvText = await response.text();
            const lines = csvText.split('\n');
            const headers = lines[0].split(',');
            
            this.dustData = {};
            for (let i = 1; i < lines.length; i++) {
                if (!lines[i].trim()) continue;
                const values = lines[i].split(',');
                const item = {};
                headers.forEach((header, index) => {
                    item[header] = values[index];
                });
                this.dustData[item.name] = parseFloat(item.dustVal);
            }
            return this.dustData;
        } catch (error) {
            console.error('Error fetching dust data:', error);
            throw error;
        }
    }

    async analyzeItems() {
        try {
            // Get divine price for conversion
            const divinePrice = await this.getDivinePrice();
            
            // Get unique items
            const items = await this.getUniqueItems();
            
            // Get dust data
            const dustValues = await this.getDustData();
            
            // Process items and calculate dust per chaos
            const analyzedItems = [];
            for (const item of items) {
                const name = item.name;
                if (dustValues[name]) {
                    // Convert price to chaos if in divines
                    let priceInChaos = item.chaosValue;
                    if (item.divineValue > 0) {
                        priceInChaos = item.divineValue * divinePrice;
                    }
                    
                    if (priceInChaos > 0) {  // Avoid division by zero
                        const dustPerChaos = dustValues[name] / priceInChaos;
                        analyzedItems.push({
                            name: name,
                            priceChaos: priceInChaos,
                            dustValue: dustValues[name],
                            dustPerChaos: dustPerChaos
                        });
                    }
                }
            }
            
            // Sort by dust per chaos
            analyzedItems.sort((a, b) => b.dustPerChaos - a.dustPerChaos);
            
            return {
                divinePrice,
                items: analyzedItems
            };
        } catch (error) {
            console.error('Error analyzing items:', error);
            throw error;
        }
    }
}

// UI Handling
document.addEventListener('DOMContentLoaded', () => {
    const analyzer = new PoeDataAnalyzer();
    const analyzeBtn = document.getElementById('analyzeBtn');
    const loadingDiv = document.getElementById('loading');
    const errorDiv = document.getElementById('error');
    const divinePriceDiv = document.getElementById('divinePrice');
    const resultsTable = document.getElementById('resultsTable');
    const resultsBody = resultsTable.querySelector('tbody');

    analyzeBtn.addEventListener('click', async () => {
        try {
            // Show loading state
            loadingDiv.style.display = 'block';
            errorDiv.style.display = 'none';
            divinePriceDiv.style.display = 'none';
            resultsTable.style.display = 'none';
            analyzeBtn.disabled = true;

            // Perform analysis
            const results = await analyzer.analyzeItems();

            // Display divine price
            divinePriceDiv.textContent = `Current Divine price: ${results.divinePrice.toFixed(2)} chaos`;
            divinePriceDiv.style.display = 'block';

            // Clear previous results
            resultsBody.innerHTML = '';

            // Display top 20 items
            results.items.slice(0, 20).forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.name}</td>
                    <td>${item.priceChaos.toFixed(2)}</td>
                    <td>${item.dustValue.toFixed(2)}</td>
                    <td>${item.dustPerChaos.toFixed(2)}</td>
                `;
                resultsBody.appendChild(row);
            });

            resultsTable.style.display = 'table';
        } catch (error) {
            errorDiv.textContent = `Error: ${error.message}`;
            errorDiv.style.display = 'block';
        } finally {
            loadingDiv.style.display = 'none';
            analyzeBtn.disabled = false;
        }
    });
}); 