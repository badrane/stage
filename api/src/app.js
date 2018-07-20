import express from "express";
import createSequelize from "./database/db";
import { config } from "dotenv";
import Sequelize from "sequelize";

config();

const { MYSQL_DATABASE, MYSQL_USERNAME, MYQSL_PASSWORD } = process.env;

const sequelize = createSequelize(
  MYSQL_DATABASE,
  MYSQL_USERNAME,
  MYQSL_PASSWORD
);

const User = sequelize.define("user", {
  firstname: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});

const app = express();

User.findAll().then(user => console.log(user[0].dataValues.firstname));

app.listen(3001, () => {
  console.log("bien connecter");
});
