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
    UpdatedAt, ForeignKey, AllowNull, BelongsTo
} from 'sequelize-typescript';
import {DataTypes} from "sequelize";
import {Col} from "sequelize/types/lib/utils";
import Product from './Product.model';
import Detail from "../detail/Detail.model";

@Table({
    tableName: 'ProductToDetail'
})
class ProductToDetail extends Model<ProductToDetail>{
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

    @ForeignKey(() => Product)
    @AllowNull(false)
    @Column
    productId: string;
    @BelongsTo(() => Product)
    product?: Product;

    @ForeignKey(() => Detail)
    @AllowNull(false)
    @Column
    detailId: string;
    @BelongsTo(()=> Detail)
    detail?: Detail;

    // this is for count details on Product
    @AllowNull(false)
    @Column
    counter: number;



    @CreatedAt
    readonly createdAt?: Date;

    @UpdatedAt
    readonly updatedAt?: Date;
}

export default ProductToDetail;