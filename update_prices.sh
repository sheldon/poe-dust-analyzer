#!/bin/bash

# Create data directory if it doesn't exist
mkdir -p data

# Fetch divine price
echo "Fetching divine orb price..."
DIVINE_RESPONSE=$(curl -s "https://poe.ninja/api/data/currencyoverview?league=Phrecia")
if [ -z "$DIVINE_RESPONSE" ]; then
    echo "Error: Failed to fetch divine price data"
    exit 1
fi

DIVINE_PRICE=$(echo "$DIVINE_RESPONSE" | python3 -c "
import sys, json
try:
    data = json.load(sys.stdin)
    if 'lines' not in data:
        print('0')
        sys.exit(1)
    divine = next((item for item in data['lines'] if item['currencyTypeName'] == 'Divine Orb'), None)
    print(divine['chaosEquivalent'] if divine else '0')
except Exception as e:
    print('0')
    sys.exit(1)
")

if [ "$DIVINE_PRICE" = "0" ]; then
    echo "Warning: Could not fetch divine price, using 0"
else
    echo "Divine price: $DIVINE_PRICE chaos"
fi

# Fetch unique weapons
echo "Fetching unique weapons..."
WEAPONS_RESPONSE=$(curl -s "https://poe.ninja/api/data/itemoverview?league=Phrecia&type=UniqueWeapon")
if [ -z "$WEAPONS_RESPONSE" ]; then
    echo "Error: Failed to fetch unique weapons data"
    exit 1
fi

# Fetch unique armour
echo "Fetching unique armour..."
ARMOUR_RESPONSE=$(curl -s "https://poe.ninja/api/data/itemoverview?league=Phrecia&type=UniqueArmour")
if [ -z "$ARMOUR_RESPONSE" ]; then
    echo "Error: Failed to fetch unique armour data"
    exit 1
fi

# Fetch unique accessories
echo "Fetching unique accessories..."
ACCESSORIES_RESPONSE=$(curl -s "https://poe.ninja/api/data/itemoverview?league=Phrecia&type=UniqueAccessory")
if [ -z "$ACCESSORIES_RESPONSE" ]; then
    echo "Error: Failed to fetch unique accessories data"
    exit 1
fi

# Process all items
echo "Processing items..."
python3 -c "
import sys, json
from datetime import datetime

try:
    # Load the divine price
    divine_price = float('$DIVINE_PRICE')
    
    # Load all item data
    weapons_data = json.loads('''$WEAPONS_RESPONSE''')
    armour_data = json.loads('''$ARMOUR_RESPONSE''')
    accessories_data = json.loads('''$ACCESSORIES_RESPONSE''')
    
    # Combine all items
    all_items = []
    if 'lines' in weapons_data:
        all_items.extend(weapons_data['lines'])
    if 'lines' in armour_data:
        all_items.extend(armour_data['lines'])
    if 'lines' in accessories_data:
        all_items.extend(accessories_data['lines'])
    
    # Process items
    unique_items = []
    for item in all_items:
        # Convert divine price to chaos if needed
        price_in_chaos = item.get('chaosValue', 0)
        if item.get('divineValue', 0) > 0:
            price_in_chaos = item['divineValue'] * divine_price
        
        unique_items.append({
            'name': item['name'],
            'chaosValue': price_in_chaos
        })

    # Create the final data structure
    price_data = {
        'lastUpdated': datetime.now().strftime('%Y-%m-%d'),
        'uniqueItems': unique_items
    }

    # Write to file
    with open('data/price_data.json', 'w') as f:
        json.dump(price_data, f, indent=2)
    print(f'Successfully processed {len(unique_items)} items')
except Exception as e:
    print(f'Error: {str(e)}', file=sys.stderr)
    sys.exit(1)
"

if [ $? -eq 0 ]; then
    echo "Price data has been updated and saved to data/price_data.json"
else
    echo "Error: Failed to process price data"
    exit 1
fi 