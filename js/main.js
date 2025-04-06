import { DUST_VALUES } from './config.js';
import { PoeNinjaApi } from './api.js';
import { PriceCache } from './cache.js';
import { PriceDisplay } from './ui.js';

class PriceUpdater {
    constructor(league = 'Phrecia') {
        this.api = new PoeNinjaApi(league);
        this.cache = new PriceCache();
        this.display = new PriceDisplay();
        this.priceData = null;
    }

    /**
     * Initialize the price updater
     */
    async init() {
        try {
            // Try to load from cache first
            this.priceData = this.cache.loadFromCache();
            
            if (this.priceData) {
                this.display.updateStatus('Loaded cached price data', 'success');
                this.display.updatePriceDataDisplay(this.priceData);
            }
            
            // Update prices in the background
            await this.updatePrices();
        } catch (error) {
            console.error('Error initializing price updater:', error);
            this.display.updateStatus('Error initializing price data', 'error');
        }
    }

    /**
     * Update prices from the API
     */
    async updatePrices() {
        try {
            this.display.updateStatus('Updating prices...', 'info');
            
            // Fetch divine price and unique items
            const divinePrice = await this.api.fetchDivinePrice();
            const uniqueItems = await this.api.fetchUniqueItems();
            
            // Process items to add dust values
            const processedItems = uniqueItems.map(item => ({
                ...item,
                dustValue: DUST_VALUES[item.name] || 0
            }));
            
            // Create price data object
            this.priceData = {
                lastUpdated: Date.now(),
                divinePrice,
                uniqueItems: processedItems
            };
            
            // Save to cache
            this.cache.saveToCache(this.priceData);
            
            // Update display
            this.display.updateStatus('Prices updated successfully', 'success');
            this.display.updatePriceDataDisplay(this.priceData);
        } catch (error) {
            console.error('Error updating prices:', error);
            this.display.updateStatus('Error updating prices', 'error');
        }
    }
}

// Initialize price updater when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const updater = new PriceUpdater();
    updater.init();
}); 