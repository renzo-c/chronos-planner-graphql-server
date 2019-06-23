import Sequelize from "sequelize";
import waiterModel from "./models/waiter";

require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: true
    }
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been stablished successfully.");
  })
  .catch(err => {
    console.log("Unable to connect to the database:", err);
  });

const Waiter = sequelize.define('waiter', waiterModel);

sequelize.sync({force: true}).then(() => {
    return Waiter.create({
        firstName: 'John',
        lastName: 'Arsenevich',
        user: 'jarsenevich',
        password: 'joe12345',
        dni: 56821450,
        address: 'Denver St. 123',
        phone: 980043456,
        email: 'jarsenevich@gmail.com'
    });
});

export default sequelize;
