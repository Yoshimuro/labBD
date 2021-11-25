import {Router} from "express";
import DetailCtrl from "./detailCtrl";

const router = Router()
const detailCtrl = new DetailCtrl();

router.route('/detail')
    .get(detailCtrl.getAllDetails)
    .post(detailCtrl.createDetail)
//
// router.route('/detail/:id')
//     .get(detailCtrl.getOneDetail)
//     .put(detailCtrl.updateDetail)
//     .delete(detailCtrl.deleteDetail)

export default router