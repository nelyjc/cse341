const express = require('express');
const app = express();
const PORT = 8080;

// Allow frontend to connect (CORS)
const cors = require('cors');
app.use(cors());

// Example data (you’ll update this to match what the frontend expects)
const data = {
  id: 1,
  title: "My Sample Project",
  description: "This is the data returned by the API.",
  link: "https://example.com",
  image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUg..." // example base64 string
};

// GET endpoint
app.get('/api/data', (req, res) => {
  res.json(data);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
