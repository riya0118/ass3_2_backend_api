const express = require("express");
const app = express();
const cors = require('cors');
const helmet = require("helmet")
const morgan = require("morgan")
require("dotenv").config()

const CartRouter = require("./routers/CartRouter");

app.use(express.urlencoded({extended: true}))
app.use(morgan('combined'))
app.use(helmet())
app.use(cors())
app.use(express.json())

app.use("/carts", CartRouter);

app.listen(9000);
console.log("Server is listening on port 9000");