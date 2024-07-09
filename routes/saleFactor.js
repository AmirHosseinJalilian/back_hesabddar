const express = require('express');
const { getSaleFactors } = require('../services/saleFactorService');
const router = express.Router();

router.get('/', getSaleFactors);
// router.post('/', createSaleFactor);

module.exports = router;

// const express = require('express');
// const { getSaleFactors, createSaleFactor } = require('../services/saleFactorService');
// const router = express.Router();

// router.get('/', getSaleFactors);
// router.post('/', createSaleFactor);

// module.exports = router;

// // services/saleFactorService.js
// const SaleFactor = require('../models/SaleFactor');
// const Commodity = require('../models/Commodity');

// const getSaleFactors = async (req, res) => {
//   const { limit = 10, offset = 0, page = 1, id } = req.query;

//   const options = {
//     limit: parseInt(limit),
//     offset: parseInt(offset),
//     include: [{ model: Commodity }]
//   };

//   if (id) {
//     options.where = { id: parseInt(id) };
//   }

//   try {
//     const saleFactors = await SaleFactor.findAndCountAll(options);
//     res.status(200).json({
//       statusCode: 200,
//       data: {
//         limit: parseInt(limit),
//         offset: parseInt(offset),
//         page: parseInt(page),
//         totalRows: saleFactors.count,
//         totalPages: Math.ceil(saleFactors.count / limit),
//         items: saleFactors.rows
//       }
//     });
//   } catch (err) {
//     res.status(500).json({ error: `Failed to retrieve data: ${err.message}` });
//   }
// };

// const createSaleFactor = async (req, res) => {
//   const { body } = req;

//   try {
//     const saleFactor = await SaleFactor.create(body);
//     res.status(201).json(saleFactor);
//   } catch (err) {
//     res.status(500).json({ error: `Failed to create SaleFactor: ${err.message}` });
//   }
// };

// module.exports = {
//   getSaleFactors,
//   createSaleFactor
// };