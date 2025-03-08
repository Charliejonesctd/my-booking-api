const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Booking endpoint to receive booking data
app.post('/bookings', (req, res) => {
  const bookingData = req.body;
  
  // Basic validation (expand as needed)
  if (!bookingData.name || !bookingData.email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  // Here you would typically insert the data into a database
  console.log('Received booking:', bookingData);

  // Respond with a success message
  res.status(201).json({ message: 'Booking received', data: bookingData });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

