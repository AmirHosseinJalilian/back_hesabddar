const SaleFactorTax = require("../model/SaleFactorTax");

const createSaleFactorTax = async (req, res) => {
  const { body } = req;

  try {
    const saleFactorTax = await SaleFactorTax.create(body);
    res.status(201).json(saleFactorTax);
  } catch (err) {
    res.status(500).json({ error: `Failed to create SaleFactorTax: ${err.message}` });
  }
};

module.exports = {
  createSaleFactorTax
};
// const { QueryTypes } = require('sequelize');

// const createSaleFactorTax = async (req, res) => {
//   const { body } = req;

//   try {
//     await sequelize.query("SET IDENTITY_INSERT SaleFactorTax ON", { type: QueryTypes.RAW });
//     const saleFactorTax = await SaleFactorTax.create(body);
//     await sequelize.query("SET IDENTITY_INSERT SaleFactorTax OFF", { type: QueryTypes.RAW });
//     res.status(201).json(saleFactorTax);
//   } catch (err) {
//     res.status(500).json({ error: `Failed to create SaleFactorTax: ${err.message}` });
//   }
// };

// module.exports = {
//   createSaleFactorTax
// };