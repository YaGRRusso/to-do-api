import { Model, DataTypes } from "sequelize";
import { sequelize } from '../database/postgresql'

export interface TodoTS extends Model {
    id: number,
    title: string,
    done: number
}

export const Todo = sequelize.define<TodoTS>('Todo', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    title: {
        type: DataTypes.STRING
    },
    done: {
        type: DataTypes.TINYINT,
        defaultValue: 0
    }
}, {
    tableName: 'tasks',
    timestamps: false
})