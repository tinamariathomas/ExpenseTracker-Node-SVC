import {RequestHandler} from "express-serve-static-core";
import healthCheckHandler from "./handlers/health";

export interface IRoute {
    path: string;
    handler: RequestHandler;
}

const routes : IRoute[] = [
    {path: '/', handler: healthCheckHandler},
];

export default routes;
