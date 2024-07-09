const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const SaleFactorConfirmationDetails = require("./SaleFactorConfirmationDetails"); // اضافه کردن این خط
const Grouping = require("./Grouping");
const SaleFactorTax = require("./SaleFactorTax");
const SaleFactorTaxStatus = require("./SaleFactorTaxStatus");

const SaleFactor = sequelize.define(
  "SaleFactor",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      field: "ID",
    },
    dateFactorSale: {
      type: DataTypes.DATE,
      field: "DateFactorSale",
    },
    factorNumber: {
      type: DataTypes.STRING,
      field: "FactorNumber",
    },
    saleType: {
      type: DataTypes.INTEGER,
      field: "SaleType",
    },
    pepoleGroupingID: {
      type: DataTypes.INTEGER,
      field: "PepoleGroupingID",
    },
  },
  {
    tableName: "SaleFactorConfirmation",
    timestamps: false,
  }
);

SaleFactor.hasMany(SaleFactorConfirmationDetails, {
  foreignKey: "saleFactorConfirmationID",
}); // اضافه کردن این خط
SaleFactor.belongsTo(Grouping, {
  foreignKey: "pepoleGroupingID",
});
Grouping.hasOne(SaleFactor, {
  foreignKey: "id",
});
SaleFactor.hasMany(SaleFactorTax, {
  foreignKey: "saleFactorConfirmationID",
}); 
SaleFactor.hasOne(SaleFactorTaxStatus, {
  foreignKey: "SaleFactorConfirmationID",
}); 

module.exports = SaleFactor;
