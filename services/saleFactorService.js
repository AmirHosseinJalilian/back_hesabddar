// const { Op } = require('sequelize');
// const SaleFactor = require('../model/SaleFactor');
// const SaleFactorConfirmationDetails = require('../model/SaleFactorConfirmationDetails');
// const Grouping = require('../model/Grouping');
// const SaleFactorTax = require('../model/SaleFactorTax');
// const SaleFactorTaxStatus = require('../model/SaleFactorTaxStatus');

// const getSaleFactors = async (req, res) => {
//   const { limit = 10, offset = 0, page = 1, id } = req.query;

//   const options = {
//     limit: parseInt(limit),
//     offset: parseInt(offset),
//     // include: [
//     //   { model: SaleFactorConfirmationDetails },
//     //   { model: Grouping }, // Ensure this is a correct association based on foreign key
//     //   { model: SaleFactorTax },
//     //   { model: SaleFactorTaxStatus }
//     // ]
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

// // const createSaleFactor = async (req, res) => {
// //   const { body } = req;

// //   try {
// //     const saleFactor = await SaleFactor.create(body);
// //     res.status(201).json(saleFactor);
// //   } catch (err) {
// //     res.status(500).json({ error: `Failed to create SaleFactor: ${err.message}` });
// //   }
// // };

// module.exports = {
//   getSaleFactors,
//   // createSaleFactor
// };
// // const { Commodity, SaleFactor, SaleFactorConfirmationDetails } = require('../model');

// // const getSaleFactors = async (req, res) => {
// //   const { limit = 10, offset = 0, page = 1, id } = req.query;

// //   const options = {
// //     limit: parseInt(limit),
// //     offset: parseInt(offset),
// //     include: [{
// //       model: SaleFactorConfirmationDetails,
// //       include: [Commodity]
// //     }]
// //   };

// //   if (id) {
// //     options.where = { id: parseInt(id) };
// //   }

// //   try {
// //     const saleFactors = await SaleFactor.findAndCountAll(options);
// //     res.status(200).json({
// //       statusCode: 200,
// //       data: {
// //         limit: parseInt(limit),
// //         offset: parseInt(offset),
// //         page: parseInt(page),
// //         totalRows: saleFactors.count,
// //         totalPages: Math.ceil(saleFactors.count / limit),
// //         items: saleFactors.rows
// //       }
// //     });
// //   } catch (err) {
// //     console.error('Error fetching sale factors:', err);  // Detailed error logging
// //     res.status(500).json({ error: `Failed to retrieve data: ${err.message}` });
// //   }
// // };

// // const createSaleFactor = async (req, res) => {
// //   const { body } = req;

// //   try {
// //     const saleFactor = await SaleFactor.create(body);
// //     res.status(201).json(saleFactor);
// //   } catch (err) {
// //     console.error('Error creating sale factor:', err);  // Detailed error logging
// //     res.status(500).json({ error: `Failed to create SaleFactor: ${err.message}` });
// //   }
// // };

// // module.exports = {
// //   getSaleFactors,
// //   createSaleFactor
// // };

const { Op } = require("sequelize");
const SaleFactor = require("../model/SaleFactor");
const SaleFactorConfirmationDetails = require("../model/SaleFactorConfirmationDetails");
const Grouping = require("../model/Grouping");
const Pepole = require("../model/Pepole");
const PepoleDescription = require("../model/PepoleDescription");
const SaleFactorTax = require("../model/SaleFactorTax");
const SaleFactorTaxStatus = require("../model/SaleFactorTaxStatus");
const Commodity = require("../model/Commodity");

const getSaleFactors = async (req, res) => {
  const { limit = 100,  page = 1, id ,sortBy = 'dateFactorSale', order = 'ASC' } = req.query;

  const offset = (parseInt(page) - 1) * parseInt(limit);

  const options = {
    limit: parseInt(limit),
    offset: parseInt(offset),
    order: [[sortBy, order.toUpperCase()]], // Sorting option
    include: [
      {
        model: SaleFactorConfirmationDetails,
        include: [{ model: Commodity }],
      },
      {
        model: Grouping,
        include: [
          {
            model: Pepole,
            include: [PepoleDescription],
          },
        ],
      },
      SaleFactorTax,
      SaleFactorTaxStatus,
    ],
  };

  if (id) {
    options.where = { id: parseInt(id) };
  }

  
  try {
    const saleFactors = await SaleFactor.findAndCountAll(options);

    const processedItems = saleFactors.rows.map(saleFactor => {
      const saleFactorJSON = saleFactor.toJSON();
      if (saleFactorJSON.saleFactorTax && saleFactorJSON.saleFactorTax.length > 0) {
        saleFactorJSON.saleFactorTax = [saleFactorJSON.saleFactorTax[saleFactorJSON.saleFactorTax.length - 1]];
      }
      return saleFactorJSON;
    });

    // const itemsWithRowID = saleFactors.rows.map((item, index) => ({
    //   ...item.toJSON(),
    //   rowID: offset + index + 1, // Compute local rowID

      
    // }));
    res.status(200).json({
      statusCode: 200,
      data: {
        limit: parseInt(limit),
        offset: offset,
        page: parseInt(page),
        totalRows: saleFactors.count,
        totalPages: Math.ceil(saleFactors.count / limit),
        items: processedItems,
      },
    });
  } catch (err) {
    res.status(500).json({ error: `Failed to retrieve data: ${err.message}` });
  }
};

module.exports = {
  getSaleFactors,
};
