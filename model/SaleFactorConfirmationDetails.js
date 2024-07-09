const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Commodity = require("./Commodity");
const SaleFactor = require("./SaleFactor"); // اضافه کردن این خط

const SaleFactorConfirmationDetails = sequelize.define(
  "details",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      field: "ID",
    },
    saleFactorConfirmationID: {
      type: DataTypes.BIGINT,
      field: "SaleFactorConfirmationID",
    },
    count: {
      type: DataTypes.FLOAT,
      field: "Count",
    },
    unitCost: {
      type: DataTypes.FLOAT,
      field: "UnitCost",
    },
    commodityDiscount: {
      type: DataTypes.FLOAT,
      field: "CommodityDiscount",
    },
    iSCommodityDiscount: {
      type: DataTypes.BOOLEAN,
      field: "ISCommodityDiscount",
    },
    vat: {
      type: DataTypes.FLOAT,
      field: "Vat",
    },
    commodityID: {
      type: DataTypes.BIGINT,
      field: "Commodity",
    },
  },
  {
    tableName: "SaleFactorConfirmationDetails",
    timestamps: false,
  }
);

SaleFactorConfirmationDetails.belongsTo(Commodity, {
  foreignKey: "commodityID",
});
Commodity.hasOne(SaleFactorConfirmationDetails, {
  foreignKey: "id",
});

module.exports = SaleFactorConfirmationDetails;
