'use strict'

class Auth {
    index(req, res, next) {
        console.log("auth Required")
        next()
    }

    async isAdmin(req, res, next) {
        console.log("isAdmin")
        next()
    }
}


module.exports = Auth