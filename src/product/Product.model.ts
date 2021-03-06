import {
    Table,
    Column,
    Model,
    IsUUID,
    PrimaryKey,
    Unique,
    Default,
    AutoIncrement,
    CreatedAt,
    UpdatedAt, BelongsToMany, HasMany
} from 'sequelize-typescript';
import {DataTypes} from "sequelize";
import Detail from "../detail/Detail.model";
import ProductToDetail from "./ProductToDetail.model";

@Table({
    tableName: 'Product'
})
class Product extends Model<Product>{
    @IsUUID(4)
    @PrimaryKey
    @Unique
    @Default(DataTypes.UUIDV4)
    @Column
    id?: string;

    @Unique
    @AutoIncrement
    @Column({
        type: DataTypes.INTEGER,
    })
    idInt?: number;

    @Column
    name: string;

    @HasMany(() => ProductToDetail)
    productToDetail: ProductToDetail[];

    @CreatedAt
    readonly createdAt?: Date;

    @UpdatedAt
    readonly updatedAt?: Date;
}

export default Product;