/**
 * UI components and display logic for POE Dust Analyzer
 */
export class PriceDisplay {
    /**
     * Create a new price display
     * @param {string} displayElementId The ID of the element to display prices in
     * @param {string} statusElementId The ID of the element to display status messages in
     */
    constructor(displayElementId = 'price-data-display', statusElementId = 'price-status') {
        this.displayElement = document.getElementById(displayElementId);
        this.statusElement = document.getElementById(statusElementId);
    }

    /**
     * Update the status message
     * @param {string} message The message to display
     * @param {string} type The type of message ('info', 'success', 'error')
     */
    updateStatus(message, type = 'info') {
        if (this.statusElement) {
            this.statusElement.textContent = message;
            this.statusElement.className = type;
        }
    }

    /**
     * Calculate adjusted dust value based on item level and quality
     * @param {number} baseDustValue Base dust value
     * @param {number} itemLevel Item level (65-84)
     * @param {number} quality Item quality (0-20)
     * @returns {number} Adjusted dust value
     */
    calculateAdjustedDustValue(baseDustValue, itemLevel, quality) {
        // Ensure item level is between 65 and 84
        const t = Math.min(Math.max(itemLevel, 65), 84);
        // Ensure quality is non-negative
        const n = Math.max(0, quality);
        
        // Calculate adjusted dust value using the formula
        return Math.round(100 * baseDustValue * (20 - (84 - t)) * (1 + n / 100));
    }

    /**
     * Create filter controls for the price display
     * @returns {Object} The filter container and input elements
     */
    createFilterControls() {
        const filterContainer = document.createElement('div');
        filterContainer.className = 'filter-container';
        
        // Create chaos filter group
        const chaosFilterGroup = document.createElement('div');
        chaosFilterGroup.className = 'filter-group-container';
        
        const chaosGroupTitle = document.createElement('h4');
        chaosGroupTitle.textContent = 'Chaos Value';
        chaosFilterGroup.appendChild(chaosGroupTitle);
        
        // Create min chaos filter
        const minChaosFilterContainer = document.createElement('div');
        minChaosFilterContainer.className = 'filter-group';
        
        const minChaosLabel = document.createElement('label');
        minChaosLabel.textContent = 'Min:';
        minChaosLabel.htmlFor = 'min-chaos-filter';
        
        const minChaosInput = document.createElement('input');
        minChaosInput.type = 'number';
        minChaosInput.id = 'min-chaos-filter';
        minChaosInput.min = '0';
        minChaosInput.step = '1';
        minChaosInput.placeholder = 'No min';
        
        minChaosFilterContainer.appendChild(minChaosLabel);
        minChaosFilterContainer.appendChild(minChaosInput);
        
        // Create max chaos filter
        const maxChaosFilterContainer = document.createElement('div');
        maxChaosFilterContainer.className = 'filter-group';
        
        const maxChaosLabel = document.createElement('label');
        maxChaosLabel.textContent = 'Max:';
        maxChaosLabel.htmlFor = 'max-chaos-filter';
        
        const maxChaosInput = document.createElement('input');
        maxChaosInput.type = 'number';
        maxChaosInput.id = 'max-chaos-filter';
        maxChaosInput.min = '0';
        maxChaosInput.step = '1';
        maxChaosInput.placeholder = 'No max';
        
        maxChaosFilterContainer.appendChild(maxChaosLabel);
        maxChaosFilterContainer.appendChild(maxChaosInput);
        
        // Add chaos filters to group
        chaosFilterGroup.appendChild(minChaosFilterContainer);
        chaosFilterGroup.appendChild(maxChaosFilterContainer);
        
        // Create dust filter group
        const dustFilterGroup = document.createElement('div');
        dustFilterGroup.className = 'filter-group-container';
        
        const dustGroupTitle = document.createElement('h4');
        dustGroupTitle.textContent = 'Dust Value';
        dustFilterGroup.appendChild(dustGroupTitle);
        
        // Create min dust filter
        const minDustFilterContainer = document.createElement('div');
        minDustFilterContainer.className = 'filter-group';
        
        const minDustLabel = document.createElement('label');
        minDustLabel.textContent = 'Min:';
        minDustLabel.htmlFor = 'min-dust-filter';
        
        const minDustInput = document.createElement('input');
        minDustInput.type = 'number';
        minDustInput.id = 'min-dust-filter';
        minDustInput.min = '0';
        minDustInput.step = '1';
        minDustInput.placeholder = 'No min';
        
        minDustFilterContainer.appendChild(minDustLabel);
        minDustFilterContainer.appendChild(minDustInput);
        
        // Create max dust filter
        const maxDustFilterContainer = document.createElement('div');
        maxDustFilterContainer.className = 'filter-group';
        
        const maxDustLabel = document.createElement('label');
        maxDustLabel.textContent = 'Max:';
        maxDustLabel.htmlFor = 'max-dust-filter';
        
        const maxDustInput = document.createElement('input');
        maxDustInput.type = 'number';
        maxDustInput.id = 'max-dust-filter';
        maxDustInput.min = '0';
        maxDustInput.step = '1';
        maxDustInput.placeholder = 'No max';
        
        maxDustFilterContainer.appendChild(maxDustLabel);
        maxDustFilterContainer.appendChild(maxDustInput);
        
        // Add dust filters to group
        dustFilterGroup.appendChild(minDustFilterContainer);
        dustFilterGroup.appendChild(maxDustFilterContainer);
        
        // Create item level and quality group
        const itemLevelQualityGroup = document.createElement('div');
        itemLevelQualityGroup.className = 'filter-group-container';
        
        const itemLevelQualityTitle = document.createElement('h4');
        itemLevelQualityTitle.textContent = 'Item Properties';
        itemLevelQualityGroup.appendChild(itemLevelQualityTitle);
        
        // Create item level filter
        const itemLevelFilterContainer = document.createElement('div');
        itemLevelFilterContainer.className = 'filter-group';
        
        const itemLevelLabel = document.createElement('label');
        itemLevelLabel.textContent = 'Item Level:';
        itemLevelLabel.htmlFor = 'item-level';
        
        const itemLevelInput = document.createElement('input');
        itemLevelInput.type = 'number';
        itemLevelInput.id = 'item-level';
        itemLevelInput.min = '65';
        itemLevelInput.max = '100';
        itemLevelInput.value = '84';
        itemLevelInput.step = '1';
        
        itemLevelFilterContainer.appendChild(itemLevelLabel);
        itemLevelFilterContainer.appendChild(itemLevelInput);
        
        // Create quality filter
        const qualityFilterContainer = document.createElement('div');
        qualityFilterContainer.className = 'filter-group';
        
        const qualityLabel = document.createElement('label');
        qualityLabel.textContent = 'Quality:';
        qualityLabel.htmlFor = 'item-quality';
        
        const qualityInput = document.createElement('input');
        qualityInput.type = 'number';
        qualityInput.id = 'item-quality';
        qualityInput.min = '0';
        qualityInput.max = '20';
        qualityInput.value = '0';
        qualityInput.step = '1';
        
        qualityFilterContainer.appendChild(qualityLabel);
        qualityFilterContainer.appendChild(qualityInput);
        
        // Add item level and quality filters to group
        itemLevelQualityGroup.appendChild(itemLevelFilterContainer);
        itemLevelQualityGroup.appendChild(qualityFilterContainer);
        
        // Add filter groups to container
        filterContainer.appendChild(chaosFilterGroup);
        filterContainer.appendChild(dustFilterGroup);
        filterContainer.appendChild(itemLevelQualityGroup);
        
        return {
            container: filterContainer,
            inputs: {
                minChaos: minChaosInput,
                maxChaos: maxChaosInput,
                minDust: minDustInput,
                maxDust: maxDustInput,
                itemLevel: itemLevelInput,
                quality: qualityInput
            }
        };
    }

    /**
     * Update the price data display
     * @param {Object} priceData The price data to display
     */
    updatePriceDataDisplay(priceData) {
        if (!this.displayElement) return;
        
        // Clear previous content
        this.displayElement.innerHTML = '';
        
        if (!priceData) {
            this.displayElement.innerHTML = '<p>No price data available.</p>';
            return;
        }
        
        // Create price data card
        const card = document.createElement('div');
        card.className = 'price-data-card';
        
        // Add last updated date
        const lastUpdated = document.createElement('p');
        const date = new Date(priceData.lastUpdated);
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: 'numeric'
        };
        lastUpdated.textContent = `Last Updated: ${date.toLocaleDateString('en-US', options)}`;
        card.appendChild(lastUpdated);
        
        // Add item count
        const itemCount = document.createElement('p');
        itemCount.textContent = `Items: ${priceData.uniqueItems.length}`;
        card.appendChild(itemCount);
        
        // Create filter controls
        const filterControls = this.createFilterControls();
        card.appendChild(filterControls.container);
        
        // Create table for items sorted by dust per chaos
        const table = document.createElement('table');
        table.className = 'items-table';
        
        // Add table header
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        
        const headers = ['Item Name', 'Chaos Value', 'Estimated Dust', 'Dust/Chaos Ratio'];
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
        
        thead.appendChild(headerRow);
        table.appendChild(thead);
        
        // Add table body with sorted items
        const tbody = document.createElement('tbody');
        tbody.id = 'items-table-body';
        
        // Function to update the table with filtered items
        const updateTable = () => {
            // Clear table body
            tbody.innerHTML = '';
            
            // Get filter values
            const minChaos = parseFloat(filterControls.inputs.minChaos.value) || 0;
            const maxChaos = parseFloat(filterControls.inputs.maxChaos.value) || Infinity;
            const minDust = parseFloat(filterControls.inputs.minDust.value) || 0;
            const maxDust = parseFloat(filterControls.inputs.maxDust.value) || Infinity;
            const itemLevel = parseInt(filterControls.inputs.itemLevel.value) || 84;
            const quality = parseInt(filterControls.inputs.quality.value) || 0;
            
            // Sort items by dust per chaos ratio (highest first)
            const sortedItems = [...priceData.uniqueItems].sort((a, b) => {
                // Calculate adjusted dust values
                const adjustedDustA = this.calculateAdjustedDustValue(a.dustValue, itemLevel, quality);
                const adjustedDustB = this.calculateAdjustedDustValue(b.dustValue, itemLevel, quality);
                
                // Calculate dust per chaos ratio
                const ratioA = a.chaosValue > 0 ? adjustedDustA / a.chaosValue : 0;
                const ratioB = b.chaosValue > 0 ? adjustedDustB / b.chaosValue : 0;
                
                // Sort in descending order
                return ratioB - ratioA;
            });
            
            // Filter and add items to table
            let filteredCount = 0;
            
            sortedItems.forEach((item, index) => {
                // Calculate adjusted dust value
                const adjustedDustValue = this.calculateAdjustedDustValue(item.dustValue, itemLevel, quality);
                
                // Apply filters
                if (item.chaosValue < minChaos || item.chaosValue > maxChaos || 
                    adjustedDustValue < minDust || adjustedDustValue > maxDust) {
                    return; // Skip this item
                }
                
                filteredCount++;
                
                const row = document.createElement('tr');
                
                // Calculate dust per chaos ratio
                const ratio = item.chaosValue > 0 ? adjustedDustValue / item.chaosValue : 0;
                
                // Create cells with link for name
                const nameCell = document.createElement('td');
                const link = document.createElement('a');
                
                // Determine the correct URL based on the item type
                let itemType = 'weapons'; // default to weapons
                if (item.type === 'armour') {
                    itemType = 'armours';
                } else if (item.type === 'accessory') {
                    itemType = 'accessories';
                }
                
                link.href = `https://poe.ninja/economy/phrecia/unique-${itemType}?name=${encodeURIComponent(item.name)}`;
                link.target = '_blank';
                link.textContent = item.name;
                nameCell.appendChild(link);
                
                const chaosCell = document.createElement('td');
                chaosCell.textContent = Math.round(item.chaosValue);
                
                const estimatedDustCell = document.createElement('td');
                estimatedDustCell.textContent = Math.round(adjustedDustValue);
                
                const ratioCell = document.createElement('td');
                ratioCell.textContent = Math.round(ratio);
                
                // Add color coding to ratio cell based on value
                if (ratio > 2) {
                    ratioCell.classList.add('high-ratio');
                } else if (ratio > 1) {
                    ratioCell.classList.add('medium-ratio');
                } else if (ratio < 0.5) {
                    ratioCell.classList.add('low-ratio');
                }
                
                // Add cells to row
                row.appendChild(nameCell);
                row.appendChild(chaosCell);
                row.appendChild(estimatedDustCell);
                row.appendChild(ratioCell);
                
                // Add alternating row class
                if (index % 2 === 1) {
                    row.classList.add('alternate-row');
                }
                
                // Add row to table
                tbody.appendChild(row);
            });
            
            // Update item count
            itemCount.textContent = `Items: ${filteredCount} of ${priceData.uniqueItems.length}`;
        };
        
        // Add event listeners to filters
        Object.values(filterControls.inputs).forEach(input => {
            if (input) {
                input.addEventListener('input', updateTable);
            }
        });
        
        // Initial table update
        updateTable();
        
        table.appendChild(tbody);
        card.appendChild(table);
        
        this.displayElement.appendChild(card);
    }
} 