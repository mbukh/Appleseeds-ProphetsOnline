const errorHandlerUser = require("../UserErrors/UsersError");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case errorHandlerUser.NOT_FOUND:
            res.json({ title: "not Found", massege: err.massege, stackTrace: err.stack });
            return;

        case errorHandlerUser.VALIDATION_ERROR:
            res.json({ title: "Validation failed", massege: err.massege, stackTrace: err.stack });
            return;

        case errorHandlerUser.UNAUTHORIZED:
            res.json({ title: "UNAUTHORIZED", massege: err.massege, stackTrace: err.stack });
            return;

        case errorHandlerUser.FORBIDDEN:
            res.json({ title: "FORBIDDEN", massege: err.massege, stackTrace: err.stack });
            return;

        default:
            console.log("inside");
            res.statusCode = 500;
            res.json({ title: "SERVER_ERROR", massege: err.massege, stackTrace: err.stack });
            return;


    }
    // next()
}

module.exports = { errorHandler };