/**
 * Cache management for POE price data
 */
export class PriceCache {
    constructor() {
        this.cacheKey = 'poePriceData';
        this.cacheExpiryKey = 'poePriceDataExpiry';
        this.cacheDuration = 60 * 60 * 1000; // 1 hour in milliseconds
    }

    /**
     * Load price data from cache if available and not expired
     * @returns {Object|false} The cached price data if valid, false otherwise
     */
    loadFromCache() {
        try {
            const cachedData = localStorage.getItem(this.cacheKey);
            const expiryTime = localStorage.getItem(this.cacheExpiryKey);
            
            if (!cachedData || !expiryTime) {
                console.log('No cached data found');
                return false;
            }
            
            const now = new Date().getTime();
            const expiry = parseInt(expiryTime, 10);
            
            if (now > expiry) {
                console.log('Cache expired');
                return false;
            }
            
            const priceData = JSON.parse(cachedData);
            console.log('Loaded price data from cache');
            return priceData;
        } catch (error) {
            console.error('Error loading from cache:', error);
            return false;
        }
    }

    /**
     * Save price data to cache with expiry
     * @param {Object} priceData The price data to cache
     * @returns {boolean} True if successfully cached, false otherwise
     */
    saveToCache(priceData) {
        try {
            if (!priceData) {
                console.error('No price data to cache');
                return false;
            }
            
            const expiryTime = new Date().getTime() + this.cacheDuration;
            
            localStorage.setItem(this.cacheKey, JSON.stringify(priceData));
            localStorage.setItem(this.cacheExpiryKey, expiryTime.toString());
            
            console.log(`Cached price data until ${new Date(expiryTime).toLocaleString()}`);
            return true;
        } catch (error) {
            console.error('Error saving to cache:', error);
            return false;
        }
    }
} 