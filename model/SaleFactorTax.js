const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const SaleFactorTax = sequelize.define(
  "saleFactorTax",
  {
    saleFactorConfirmationID: {
      type: DataTypes.BIGINT,
      field: "SaleFactorConfirmationID",
      // autoIncrement: false,
    },
    billType: {
      type: DataTypes.TINYINT,
      field: "BillType",
    },
    postType: {
      type: DataTypes.TINYINT,
      field: "PostType",
    },
    creationDate: {
      type: DataTypes.DATE,
      field: "CreationDate",
    },
    settlementMethod: {
      type: DataTypes.TINYINT,
      field: "SettlementMethod",
    },
    cashAmount: {
      type: DataTypes.FLOAT,
      field: "CashAmount",
    },
    loanAmount: {
      type: DataTypes.FLOAT,
      field: "LoanAmount",
    },
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      field: "ID",
      autoIncrement: true,
    },
  },
  {
    tableName: "SaleFactorTax",
    timestamps: false,
  }
);

module.exports = SaleFactorTax;
