const express = require("express");
const route = express.Router();
const { createFormMongoDB } = require("../controller/formControllerMongoDB");
const { createFormMySql } = require("../controller/formControllerMySql2");

route.post("/createFormForMongoDB", createFormMongoDB);
route.post("/createFormForMySql", createFormMySql);

module.exports = route;
