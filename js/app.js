class PoeDataAnalyzer {
    constructor() {
        this.priceData = null;
        this.dustValue = 1; // Default dust value in chaos
        this.loadPriceData();
    }

    loadPriceData() {
        try {
            const savedData = localStorage.getItem('poePriceData');
            if (savedData) {
                this.priceData = JSON.parse(savedData);
                console.log('Loaded price data from localStorage');
                return true;
            }
        } catch (error) {
            console.error('Error loading price data from localStorage:', error);
        }
        return false;
    }

    async fetchPriceData() {
        try {
            const response = await fetch('data/price_data.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.priceData = await response.json();
            return this.priceData;
        } catch (error) {
            console.error('Error fetching price data:', error);
            throw error;
        }
    }

    async analyzeItems(itemData) {
        // Try to load price data from localStorage first
        if (!this.loadPriceData()) {
            // If not in localStorage, try to fetch from file
            try {
                await this.fetchPriceData();
            } catch (error) {
                console.error('Failed to load price data:', error);
                throw new Error('Unable to load price data. Please try again later.');
            }
        }

        if (!this.priceData || !this.priceData.uniqueItems) {
            throw new Error('Price data is not available. Please try again later.');
        }

        // Parse the item data
        const items = this.parseItemData(itemData);
        
        // Analyze each item
        const results = items.map(item => {
            const priceInfo = this.findItemPrice(item);
            const dustValue = this.calculateDustValue(item);
            const profitLoss = priceInfo.price - dustValue;
            
            return {
                name: item.name,
                price: priceInfo.price,
                dustValue: dustValue,
                profitLoss: profitLoss,
                isProfitable: profitLoss > 0
            };
        });
        
        // Sort by profit/loss (highest profit first)
        results.sort((a, b) => b.profitLoss - a.profitLoss);
        
        return results;
    }

    parseItemData(itemData) {
        // Split the input by newlines and filter out empty lines
        const lines = itemData.split('\n').filter(line => line.trim());
        
        // Extract item names
        const items = [];
        for (const line of lines) {
            // Look for item names in the format "Item Name"
            const match = line.match(/"([^"]+)"/);
            if (match && match[1]) {
                items.push({ name: match[1] });
            }
        }
        
        return items;
    }

    findItemPrice(item) {
        // Find the item in the price data
        const priceInfo = this.priceData.uniqueItems.find(
            priceItem => priceItem.name.toLowerCase() === item.name.toLowerCase()
        );
        
        return {
            price: priceInfo ? priceInfo.chaosValue : 0,
            found: !!priceInfo
        };
    }

    calculateDustValue(item) {
        // For now, we'll use a fixed dust value
        // In the future, this could be more sophisticated
        return this.dustValue;
    }
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const analyzeBtn = document.getElementById('analyzeBtn');
    const itemDataInput = document.getElementById('itemData');
    const loadingDiv = document.getElementById('loading');
    const errorDiv = document.getElementById('error');
    const resultsTable = document.getElementById('resultsTable');
    const resultsBody = resultsTable?.querySelector('tbody');
    
    // Check if all required elements exist
    if (!analyzeBtn || !itemDataInput || !loadingDiv || !errorDiv || !resultsTable || !resultsBody) {
        console.error('Required DOM elements not found:', {
            analyzeBtn: !!analyzeBtn,
            itemDataInput: !!itemDataInput,
            loadingDiv: !!loadingDiv,
            errorDiv: !!errorDiv,
            resultsTable: !!resultsTable,
            resultsBody: !!resultsBody
        });
        return;
    }
    
    // Create the analyzer
    const analyzer = new PoeDataAnalyzer();
    
    // Add event listener to the analyze button
    analyzeBtn.addEventListener('click', async () => {
        try {
            // Get the item data
            const itemData = itemDataInput.value.trim();
            
            if (!itemData) {
                throw new Error('Please enter item data to analyze.');
            }
            
            // Show loading indicator
            loadingDiv.classList.remove('d-none');
            errorDiv.classList.add('d-none');
            resultsTable.parentElement.classList.add('d-none');
            
            // Analyze the items
            const results = await analyzer.analyzeItems(itemData);
            
            // Display the results
            displayResults(results);
            
            // Hide loading indicator
            loadingDiv.classList.add('d-none');
        } catch (error) {
            console.error('Error analyzing items:', error);
            
            // Show error message
            errorDiv.textContent = error.message || 'An error occurred while analyzing items.';
            errorDiv.classList.remove('d-none');
            
            // Hide loading indicator
            loadingDiv.classList.add('d-none');
        }
    });
    
    function displayResults(results) {
        // Clear previous results
        resultsBody.innerHTML = '';
        
        // Add each result to the table
        results.forEach(result => {
            const row = document.createElement('tr');
            
            // Add name cell
            const nameCell = document.createElement('td');
            nameCell.textContent = result.name;
            row.appendChild(nameCell);
            
            // Add price cell
            const priceCell = document.createElement('td');
            priceCell.textContent = result.price.toFixed(2);
            row.appendChild(priceCell);
            
            // Add dust value cell
            const dustCell = document.createElement('td');
            dustCell.textContent = result.dustValue.toFixed(2);
            row.appendChild(dustCell);
            
            // Add profit/loss cell
            const profitCell = document.createElement('td');
            profitCell.textContent = result.profitLoss.toFixed(2);
            profitCell.className = result.isProfitable ? 'text-success' : 'text-danger';
            row.appendChild(profitCell);
            
            // Add the row to the table
            resultsBody.appendChild(row);
        });
        
        // Show the results table
        resultsTable.parentElement.classList.remove('d-none');
    }
}); 