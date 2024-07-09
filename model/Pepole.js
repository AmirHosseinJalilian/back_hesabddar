const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const PepoleDescription = require("./PepoleDescription");

const Pepole = sequelize.define(
  "pepoles",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      field: "ID",
    },
    name: {
      type: DataTypes.STRING,
      field: "Name",
    },
    pepoleType: {
      type: DataTypes.TINYINT,
      field: "PepoleType",
    },
    codPepole: {
      type: DataTypes.STRING,
      field: "CodPepole",
    },
  },
  {
    tableName: "Pepole",
    timestamps: false,
  }
);
// Pepole.belongsTo(PepoleDescription, {
//     foreignKey: "PepoleID",
//   });
//   PepoleDescription.hasOne(Pepole, {
//   foreignKey: "id",
// }); // اضافه کردن این خط

// Pepole.belongsTo(PepoleDescription, {
//   foreignKey: "PepoleID",
// });
// PepoleDescription.hasOne(Pepole, {
//   foreignKey: "id",
// });

Pepole.hasOne(PepoleDescription, {
  foreignKey: "PepoleID",
}); // اضافه کردن این خط

module.exports = Pepole;
