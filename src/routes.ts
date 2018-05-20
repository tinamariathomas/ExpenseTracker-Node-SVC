import {RequestHandler} from "express-serve-static-core";
import healthCheckHandler from "./handlers/health";
import expense from "./handlers/expense";

enum Method{
    get = 'get',
    post = 'post',
}

export interface IRoute {
    path: string;
    handler: RequestHandler;
    method: Method;
}

const routes : IRoute[] = [
    {
        path: '/',
        handler: healthCheckHandler,
        method: Method.get
    },
    {
        path: '/expense',
        handler: expense.create,
        method: Method.post
    },
];

export default routes;
