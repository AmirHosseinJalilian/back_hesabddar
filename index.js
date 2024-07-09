const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');

const saleFactorRoutes = require('./routes/saleFactor');
const saleFactorTaxRoutes = require('./routes/saleFactorTax');
const saleFactorTaxStatusRoutes = require('./routes/saleFactorTaxStatus');
// const dataBaseConfigRoutes = require('./routes/dataBaseConfig');


const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/saleFactors', saleFactorRoutes);
app.use('/api/saleFactorTaxes', saleFactorTaxRoutes);
app.use('/api/saleFactorTaxStatuses', saleFactorTaxStatusRoutes);
// app.use('/api/dataBaseConfig', dataBaseConfigRoutes);

sequelize.authenticate()
  .then(() => {
    console.log('Connected to SQL Server database.');
    return sequelize.sync();
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });