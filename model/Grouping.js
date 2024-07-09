const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Pepole = require("./Pepole");
const SaleFactor = require("./SaleFactor");
const PepoleDescription = require("./PepoleDescription");

const Grouping = sequelize.define(
  "pepoleGrouping",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      field: "ID",
    },
    objectValue: {
      type: DataTypes.STRING,
      field: "ObjectValue",
    },
  },
  {
    tableName: "Grouping",
    timestamps: false,
  }
);
// SaleFactor.belongsTo(Grouping, {
//   foreignKey: "PepoleGroupingID",
// });
// Grouping.hasOne(SaleFactor, {
//   foreignKey: "ID",
// });
Grouping.belongsTo(Pepole, {
  foreignKey: "objectValue",
});
Pepole.hasOne(Grouping, {
  foreignKey: "id",
});

// Pepole.belongsTo(PepoleDescription, {
//     foreignKey: "pepoleID",
//   });
//   PepoleDescription.hasOne(Pepole, {
//   foreignKey: "id",
// }); // اضافه کردن این خط

module.exports = Grouping;
