/**
 * API client for fetching POE price data from poe.ninja
 */
export class PoeNinjaApi {
    constructor(league = 'Phrecia') {
        this.poeNinjaBaseUrl = 'https://poe.ninja/api/data';
        this.corsProxyUrl = 'https://corsproxy.io/?';
        this.league = league;
    }

    /**
     * Fetch data through CORS proxy
     * @param {string} url The URL to fetch from
     * @returns {Promise<Object>} The JSON response
     */
    async fetchWithCors(url) {
        try {
            const proxyUrl = `${this.corsProxyUrl}url=${encodeURIComponent(url)}`;
            console.log(`Fetching through CORS proxy: ${proxyUrl}`);
            
            const response = await fetch(proxyUrl);
            
            if (!response.ok) {
                console.error(`HTTP error! status: ${response.status}`, response.statusText);
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                console.error(`Expected JSON response but got: ${contentType}`);
                throw new Error(`Expected JSON response but got: ${contentType}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }

    /**
     * Fetch current divine orb price in chaos orbs
     * @returns {Promise<number>} The price of a divine orb in chaos orbs
     */
    async fetchDivinePrice() {
        try {
            const url = `${this.poeNinjaBaseUrl}/currencyoverview?league=${this.league}&type=Currency`;
            console.log(`Fetching divine price from: ${url}`);
            
            const data = await this.fetchWithCors(url);
            
            if (!data || !data.lines) {
                console.error('Invalid response format:', data);
                throw new Error('Invalid response format from poe.ninja API');
            }
            
            const divineOrb = data.lines.find(currency => currency.currencyTypeName === 'Divine Orb');
            
            if (!divineOrb) {
                console.error('Divine Orb not found in response:', data.lines);
                throw new Error('Divine Orb not found in response');
            }
            
            console.log(`Found Divine Orb price: ${divineOrb.chaosEquivalent} chaos`);
            return divineOrb.chaosEquivalent;
        } catch (error) {
            console.error('Error fetching divine price:', error);
            throw error;
        }
    }

    /**
     * Fetch all unique items from poe.ninja
     * @returns {Promise<Array>} Array of unique items with their prices
     */
    async fetchUniqueItems() {
        try {
            // Fetch data from all three endpoints
            const [weaponsData, armourData, accessoriesData] = await Promise.all([
                this.fetchWithCors(`${this.poeNinjaBaseUrl}/itemoverview?league=${this.league}&type=UniqueWeapon`),
                this.fetchWithCors(`${this.poeNinjaBaseUrl}/itemoverview?league=${this.league}&type=UniqueArmour`),
                this.fetchWithCors(`${this.poeNinjaBaseUrl}/itemoverview?league=${this.league}&type=UniqueAccessory`)
            ]);

            // Process each type of item and add type information
            const weapons = this.processItems(weaponsData.lines || [], 'weapon');
            const armour = this.processItems(armourData.lines || [], 'armour');
            const accessories = this.processItems(accessoriesData.lines || [], 'accessory');

            // Combine all items
            return [...weapons, ...armour, ...accessories];
        } catch (error) {
            console.error('Error fetching unique items:', error);
            throw error;
        }
    }

    processItems(items, type) {
        return items.map(item => ({
            name: item.name,
            chaosValue: item.chaosValue,
            divineValue: item.divineValue,
            type: type // Add the item type to each item
        }));
    }
} 