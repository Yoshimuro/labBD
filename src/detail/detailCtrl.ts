import Detail, {createDetailI} from "./Detail.model";
import {APIError, APIResponse} from "../Helpers/helpServices";
import httpStatus from "http-status";
import {Request, Response} from "express";


class DetailCtrl {
    createDetail = async (req: Request, res: Response) => {
    try {
        const params: createDetailI = req.body.detail
        const newDetail = await Detail.create({
            ...params
        })

        return APIResponse({
            res,
            data: {
                result: newDetail,
                message: 'Деталь успешно создана'
            }
        })
    }
    catch (err){
        throw APIError({
            res,
            status: httpStatus.INTERNAL_SERVER_ERROR,
            message: 'Ошибка при создании детали',
            error: err
        })
    }
    }

    updateDetail = async (req: Request, res: Response) => {

    }

    getAllDetails = async (req: Request, res: Response) => {

    }

    deleteDetail = async (req: Request, res: Response) => {

    }

    getOneDetail= async (req: Request, res: Response) => {

    }
}

export default DetailCtrl;