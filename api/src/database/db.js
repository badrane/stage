import Sequelize from "sequelize";

function createSequelize(database, username, password) {
  const sequelize = new Sequelize(database, username, password, {
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: false,
    define: {
      timestamps: false
    }
  });

  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch(err => {
      console.error("Unable to connect to the database:", err);
    });

  return sequelize;
}

export default createSequelize;
