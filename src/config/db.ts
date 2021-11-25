import { Sequelize} from "sequelize-typescript";
import {DB_HOST, DB_PORT} from "./env";
import Detail from "../detail/Detail.model";
import Material from "../material/Material.model";
import ProductToDetail from "../product/ProductToDetail.model";
import Product from "../product/Product.model";

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
    host: DB_HOST,
    port: DB_PORT,
    dialect:'postgres',
    models:[
        // Detail Model
        Detail,
        // Material model
        Material,
        // Product models
        Product,
        ProductToDetail,
    ],
})

export default sequelize;