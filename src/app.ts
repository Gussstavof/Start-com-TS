import 'reflect-metadata'
import routes from "./routes/routes";

const express = require("express");

const app = express();

app.use(express.json());

app.use('/', routes);
export default app
