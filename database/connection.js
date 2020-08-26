const { Database } = require("@mvcnpm/framework")




module.exports = Database.getDbConnection(require("sequelize"));
global.sequelize = Database.getDbConnection(require("sequelize"));
