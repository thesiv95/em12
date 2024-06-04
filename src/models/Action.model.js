import { DataTypes, Model } from 'sequelize';
import sequelize from '../../db.config.js'; 
import { EventTypeEnum } from '../consts.js';

const Action = sequelize.define(
  'action',
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0
      }
    },
    action: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: Object.values(EventTypeEnum)
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            max: 1000
        }
    },
  },
);

export default Action;