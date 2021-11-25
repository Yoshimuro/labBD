import Material, {CreateMaterialI} from "./Material.model";
import {Request, Response} from "express";
import {APIError, APIResponse} from "../Helpers/helpServices";
import httpStatus from "http-status";


class MaterialCtrl {
    createMaterial = async (req: Request, res: Response) => {
        try {
            const params: CreateMaterialI = req.body.material
            const newMaterial = await Material.create(
                {
                name: params.name,
                price: params.price
            })

            return APIResponse({
                res,
                data :{
                    result: newMaterial,
                    message: 'Материал успешно создан'
                }
            })
        }
        catch (err){
            throw APIError({
                res,
                status: httpStatus.INTERNAL_SERVER_ERROR,
                message: 'Ошибка при создании материала',
                error: err
            })
        }

    }

    updateMaterial = async (req: Request, res: Response) => {

    }

    getAllMaterials = async (req: Request, res: Response) => {

    }

    deleteMaterial = async (req: Request, res: Response) => {

    }

    getOneMaterial= async (req: Request, res: Response) => {

    }

    getStatsMaterial = async (req: Request, res: Response) => {

    }
}

export default MaterialCtrl;