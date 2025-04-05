# Path of Exile Dust Value Analyzer

A web-based tool that analyzes unique items from Path of Exile to find the most valuable items in terms of dust value per chaos. It combines static price data with dust values to help identify the best items for dust farming.

## Features

- Uses static price data for unique items
- Automatically converts Divine prices to Chaos
- Calculates dust value per chaos for each unique item
- Sorts items by dust efficiency
- Mobile-friendly interface

## Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/poe-dust-analyzer.git
cd poe-dust-analyzer
```

2. Open `index.html` in your web browser

## Usage

1. Click the "Analyze Items" button
2. View the top 20 most efficient items for dust farming
3. The results will show:
   - Item Name
   - Price in Chaos
   - Dust Value
   - Dust per Chaos ratio

## Data Sources

- Item prices: Static JSON data file (`data/price_data.json`)
- Dust values: [poe-dust.csv](https://gist.githubusercontent.com/alserom/22bdd4106806cbd4f85a5cb8c4345c08/raw/696fcafd2ed2ff4807e155bc8ef79270367b6fbb/poe-dust.csv)

## Updating Price Data

To update the price data:

1. Edit the `data/price_data.json` file
2. Update the `divinePrice` value
3. Update or add items to the `uniqueItems` array
4. Update the `lastUpdated` date

## Technologies Used

- HTML5
- CSS3 (Bootstrap 5)
- JavaScript (ES6+)
- Fetch API for data retrieval

## Troubleshooting

If you encounter any issues:
1. Check that all data files are present in the correct locations
2. Check the browser's developer console (F12) for detailed error messages

## Contributing

Feel free to submit issues and enhancement requests! 