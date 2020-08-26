
const { Route, view, middleware } = require("@mvcnpm/framework")








Route.get("/", function (req, res) {
    res.send(view("welcome", { title: "Hello World" }))
})






Route.get("/user", "UserController@index", middleware("auth"))
Route.get("/profile/:id", "UserController@profile", middleware("auth"))














Route.listen()