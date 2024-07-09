const express = require('express');
const { createSaleFactorTax } = require('../services/saleFactorTaxService');
const router = express.Router();

router.post('/', createSaleFactorTax);

module.exports = router;