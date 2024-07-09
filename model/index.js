// // const Commodity = require('./Commodity');
// // const SaleFactor = require('./SaleFactor');
// // const SaleFactorConfirmationDetails = require('./SaleFactorConfirmationDetails');

// // // Define associations
// // Commodity.hasMany(SaleFactorConfirmationDetails, { foreignKey: 'CommodityID' });
// // SaleFactorConfirmationDetails.belongsTo(Commodity, { foreignKey: 'CommodityID' });

// // SaleFactor.hasMany(SaleFactorConfirmationDetails, { foreignKey: 'SaleFactorConfirmationID' });
// // SaleFactorConfirmationDetails.belongsTo(SaleFactor, { foreignKey: 'SaleFactorConfirmationID' });

// // module.exports = {
// //   Commodity,
// //   SaleFactor,
// //   SaleFactorConfirmationDetails
// // };

// const Commodity = require("./Commodity");
// const SaleFactor = require("./SaleFactor");
// const SaleFactorConfirmationDetails = require("./SaleFactorConfirmationDetails");
// const Grouping = require("./Grouping");
// const Pepole = require("./Pepole");
// const PepoleDescription = require("./PepoleDescription");
// const SaleFactorTax = require("./SaleFactorTax");
// const SaleFactorTaxStatus = require("./SaleFactorTaxStatus");

// // Define associations
// // Commodity.hasMany(SaleFactorConfirmationDetails, { foreignKey: "ID" });
// // SaleFactorConfirmationDetails.belongsTo(Commodity, {
// //   foreignKey: "Commodity",
// // });

// // SaleFactor.hasMany(SaleFactorConfirmationDetails, {
// //   foreignKey: "SaleFactorConfirmationID",
// // });
// // SaleFactorConfirmationDetails.belongsTo(SaleFactor, {
// //   foreignKey: "SaleFactorConfirmationID",
// // });

// SaleFactor.belongsTo(Grouping, { foreignKey: "PepoleGroupingID" });
// Grouping.hasOne(SaleFactor, { foreignKey: "ID" });

// SaleFactor.hasOne(SaleFactorTax, { foreignKey: "SaleFactorConfirmationID" });
// SaleFactorTax.belongsTo(SaleFactor, { foreignKey: "SaleFactorConfirmationID" });

// SaleFactor.hasOne(SaleFactorTaxStatus, {
//   foreignKey: "SaleFactorConfirmationID",
// });
// SaleFactorTaxStatus.belongsTo(SaleFactor, {
//   foreignKey: "SaleFactorConfirmationID",
// });

// Grouping.hasMany(Pepole, { foreignKey: "GroupingID" });
// Pepole.belongsTo(Grouping, { foreignKey: "GroupingID" });

// Pepole.hasOne(PepoleDescription, { foreignKey: "PepoleID" });
// PepoleDescription.belongsTo(Pepole, { foreignKey: "PepoleID" });

// module.exports = {
//   Commodity,
//   SaleFactor,
//   SaleFactorConfirmationDetails,
//   Grouping,
//   Pepole,
//   PepoleDescription,
//   SaleFactorTax,
//   SaleFactorTaxStatus,
// };
