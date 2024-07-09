const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const SaleFactorTaxStatus = sequelize.define(
  "saleFactorTaxStatus",
  {
    saleFactorConfirmationID: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      field: "SaleFactorConfirmationID",
      autoIncrement: false,
    },
    status: {
      type: DataTypes.TINYINT,
      field: "Status",
    },
    statusDate: {
      type: DataTypes.DATE,
      field: "StatusDate",
    },
  },
  {
    tableName: "SaleFactorTaxStatus",
    timestamps: false,
  }
);

module.exports = SaleFactorTaxStatus;
