const { Server, Env } = require("@mvcnpm/framework")



Server.appRoot(__dirname).fireHttpServer().catch(console.error)
