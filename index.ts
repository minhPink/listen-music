import express, { Express } from "express";
import dotenv from "dotenv";
import * as database from "./config/database";
import ClientRoutes from "./routes/client/index.route";

dotenv.config();
database.connect();
const app: Express = express();
const port: number | string = process.env.PORT || 3000;
app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');
app.use(express.static(`${__dirname}/public`));


ClientRoutes(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})