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
    UpdatedAt, BelongsTo
} from 'sequelize-typescript';
import {DataTypes} from "sequelize";
import exp from "constants";
import Material from "../material/Material.model";

@Table({
    tableName: 'Detail'
})
class Detail extends Model<Detail>{
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

    @BelongsTo(() => Material)
    material?: Material[];

    @CreatedAt
    readonly createdAt?: Date;

    @UpdatedAt
    readonly updatedAt?: Date;
}

export default Detail