import * as express from "express";
import healthCheckHandler from "./handlers/health";
const app = express();

app.get("/", healthCheckHandler);

// tslint:disable-next-line:no-console
app.listen(3000, () => console.log("Example app listening on port 3000!"));
