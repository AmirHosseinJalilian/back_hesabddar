const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const SaleFactorTax = sequelize.define(
  "saleFactorTax",
  {
    saleFactorConfirmationID: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      field: "SaleFactorConfirmationID",
      // autoIncrement: false,
    },
    billType: {
      type: DataTypes.BOOLEAN,
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
  },
  {
    tableName: "SaleFactorTax",
    timestamps: false,
  }
);

module.exports = SaleFactorTax;
