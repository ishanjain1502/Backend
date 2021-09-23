const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    "postgres",
    "postgres",
    "123456789",
    {
        host: "localhost",
        dialect: "postgres"
    }
);

sequelize.sync();

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection Estd. with DataBase");
    } catch (err) {
        console.error("Unable to connect to DataBase");
    }
})();

module.exports = sequelize;