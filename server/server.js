
import express from 'express';
// import router from './routes/auth';
import  fs  from 'fs';
const morgan = require ('morgan');
import cors from 'cors'
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


mongoose
  .connect(process.env.DATABASE, {
    
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB Error => ", err));



// route middleware
// automatic load routes
fs.readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)))
// app.use('/api', router);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));