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
    UpdatedAt, BelongsTo, HasMany, HasOne, ForeignKey, AllowNull
} from 'sequelize-typescript';
import {DataTypes} from "sequelize";
import Material from "../material/Material.model";
import ProductToDetail from "../product/ProductToDetail.model";


export interface createDetailI {
    name: string;
    weight: number;
    materialId: string;
}



@Table({
    tableName: 'Detail'
})
class Detail extends Model{
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

    @Column
    weight: number;

    @ForeignKey(() => Material)
    @AllowNull(false)
    @Column
    materialId: string;

    @BelongsTo(() => Material)
    material?: Material[];
    @HasOne(() => ProductToDetail)
    productToDetail: ProductToDetail;

    @CreatedAt
    readonly createdAt?: Date;

    @UpdatedAt
    readonly updatedAt?: Date;
}

export default Detail