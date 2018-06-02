import * as bodyParser from "body-parser";
import * as express from "express";
import routes from "./routes";

const app = express();
app.use(bodyParser.json());

routes.forEach((route) => app[route.method](route.path, route.handler));

// tslint:disable-next-line:no-console
app.listen(3000, () => console.log("Example app listening on port 3000!"));
