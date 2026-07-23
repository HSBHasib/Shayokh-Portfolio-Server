const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve the JSON file
app.get('/api/portfolio-data', (req, res) => {
  try {
    const data = require('./data/portfolioData.json');
    res.json(data);
  } catch (error) {
    console.error('Error loading portfolio data:', error);
    res.status(500).json({ error: 'Failed to load portfolio data' });
  }
});

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio API is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
