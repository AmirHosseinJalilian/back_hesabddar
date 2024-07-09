const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Pepole = require("./Pepole");

const PepoleDescription = sequelize.define(
  "pepoleDescription",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      field: "ID",
    },
    pepoleID: {
      type: DataTypes.BIGINT,
      field: "PepoleID",
    },
    address: {
      type: DataTypes.STRING,
      field: "Address",
    },
    phone: {
      type: DataTypes.STRING,
      field: "Phone",
    },
    nationalityCode: {
      type: DataTypes.STRING,
      field: "NationalityCode",
    },
  },
  {
    tableName: "PepoleDescription",
    timestamps: false,
  }
);

// PepoleDescription.belongsTo(Pepole, {
//   foreignKey: "id",
// });
// Pepole.hasMany(PepoleDescription, {
// foreignKey: "pepoleID",
// }); // اضافه کردن این خط

// PepoleDescription.belongsTo(Pepole, {
//   foreignKey: "ID",
// });
// PepoleDescription.hasOne(Pepole, {
//   foreignKey: "PepoleID",
// });
// SaleFactorConfirmationDetails.belongsTo(Commodity, {
//   foreignKey: "ID",
// });
module.exports = PepoleDescription;
