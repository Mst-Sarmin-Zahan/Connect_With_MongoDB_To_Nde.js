let express = require("express");
let app = express();
let router = require("./src/Routes/api");
let run = require("./src/Database/dbConnect");

//Security middleware

const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");






app.use(helmet());
app.use(cors());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
});
app.use(limiter);
app.use(mongoSanitize);
app.use(hpp);
app.use(run);


// Defined routes here
app.use("/api",router);

// undefined routes and set 404 status code
app.use("*",(req, res, next) => {
    res.status(404).json({status:"fail", data: "404 - Not Found"})
});


module.exports = app;

