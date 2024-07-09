const express = require('express');
const { createSaleFactorTaxStatus } = require('../services/aleFactorTaxStatusService');
const router = express.Router();

router.post('/', createSaleFactorTaxStatus);

module.exports = router;