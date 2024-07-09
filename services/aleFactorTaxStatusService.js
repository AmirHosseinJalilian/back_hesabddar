const SaleFactorTaxStatus = require("../model/SaleFactorTaxStatus");

const createSaleFactorTaxStatus = async (req, res) => {
  const { body } = req;

  try {
    const saleFactorTaxStatus = await SaleFactorTaxStatus.create(body);
    res.status(201).json(saleFactorTaxStatus);
  } catch (err) {
    res.status(500).json({ error: `Failed to create SaleFactorTaxStatus: ${err.message}` });
  }
};

module.exports = {
  createSaleFactorTaxStatus
};