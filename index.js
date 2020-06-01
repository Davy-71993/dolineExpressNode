const express = require('express');



// Initialize the App;
const app = express()

// Import routes
const authRouts = require('./routes/auth');
const routes = require('./routes/routes')

// Ruter middleares;
app.use(express.json())
app.use('/users', authRouts);
app.use('/users', routes);



const PORT = process.env.PORT || 3000;
app.listen(3000, ()=>console.log(`Server running on port: ${PORT}`))