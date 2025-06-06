const express = require('express');

const cors = require('cors');

const screenerRoutes = require('./routes/screener');



const app = express();

const PORT = process.env.PORT || 5000;



app.use(cors());

app.use(express.json());

app.use('/api/screener', screenerRoutes);



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

