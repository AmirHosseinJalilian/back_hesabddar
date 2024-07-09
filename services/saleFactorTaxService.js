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