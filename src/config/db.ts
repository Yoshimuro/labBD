import { Sequelize} from "sequelize-typescript";
import {DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME} from "./env";

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
    host: DB_HOST,
    port: DB_PORT,
    dialect:'postgres',
    models:[],
})

export default sequelize;