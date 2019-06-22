import Sequelize from 'sequelize';

require('dotenv').config()

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    dialectOptions: {
      ssl: true
    }
  });

sequelize
    .authenticate()
    .then(() => {
        console.log("Connection has been stablished successfully.");
    })
    .catch(err => {
        console.log("Unable to connect to the database:", err);
    });

export default sequelize;