import { Request, Response, NextFunction, ErrorRequestHandler } from "express";

export const notFounderHandler = (req:Request, res:Response, next : NextFunction) =>{
    res.status(404).json({
error : "Not Found",
message: `The request URL ${req.originalUrl} was not found on this server.`
})
}

export const wrongMethod = (req:Request, res:Response, next : NextFunction) =>{
    res.status(405).json({
error : "Not Found",
})
}

export const errorHandler: ErrorRequestHandler = (error, req, res, next) =>{
    const status = error.status || 500;
    res.status(status).json({
error : error.message ||  "Server error",
})
}
