import materialRoute from "./material/materialRoute";

require('dotenv').config();

import express from 'express';
import cors from 'cors';
import sequelize from '../src/config/db'
import detailRoute from "./detail/detailRoute";


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/api', materialRoute)
app.use('/api', detailRoute)

const PORT = process.env.PORT;

const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e){
        console.log(e)
    }
}

start()