import {RequestHandler} from "express-serve-static-core";
import expense from "./handlers/expense";
import healthCheckHandler from "./handlers/health";

enum Method {
    get = "get",
    post = "post",
}

export interface IRoute {
    path: string;
    handler: RequestHandler;
    method: Method;
}

const routes: IRoute[] = [
    {
        handler: healthCheckHandler,
        method: Method.get,
        path: "/",
    },
    {
        handler: expense.create,
        method: Method.post,
        path: "/expense",
    },
];

export default routes;
