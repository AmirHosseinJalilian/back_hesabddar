const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Commodity = sequelize.define(
  "commodity",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      field: "ID",
    },
    comodityCod: {
      type: DataTypes.STRING,
      field: "ComodityCod",
    },
    commodityName: {
      type: DataTypes.STRING,
      field: "CommodityName",
    },
    unitCount: {
      type: DataTypes.BIGINT,
      field: "UnitCount",
    },
    basePrice: {
      type: DataTypes.BIGINT,
      field: "BasePrice",
    },
  },
  {
    tableName: "Commoditym",
    timestamps: false,
  }
);

module.exports = Commodity;
