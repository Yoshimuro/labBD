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
    UpdatedAt, HasMany
} from 'sequelize-typescript';
import {DataTypes} from "sequelize";
import Detail from "../detail/Detail.model";


export interface CreateMaterialI{
    name: string;
    price: number;
}



@Table({
    tableName: 'Material'
})
class Material extends Model{
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
    price: number;

    @HasMany(() => Detail, )
    detail?: Detail[];



    @CreatedAt
    readonly createdAt?: Date;

    @UpdatedAt
    readonly updatedAt?: Date;
}

export default Material;