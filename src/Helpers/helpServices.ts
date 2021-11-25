import { Response } from 'express';
import httpStatus from 'http-status';

interface APIResponseType {
    res: Response;
    data?: any;
}

export const APIResponse = ({ res, data = null }: APIResponseType) => {
    return res.status(httpStatus.OK).json({
        status: httpStatus.OK,
        data,
    });
};

interface APIErrorType {
    res: Response;
    status: number;
    message: string;
    error?: any;
}

export const APIError = ({ res, status, message, error = null }: APIErrorType) => {
    console.error(error || message);
    return res.status(httpStatus.OK).json({ status, message });
};
