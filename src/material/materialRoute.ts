import {Router} from "express";
import MaterialCtrl from "./materialCtrl";

const router = Router();
const materialCtrl = new MaterialCtrl();

router.route('/material')
    .get(materialCtrl.getAllMaterials)
    .post(materialCtrl.createMaterial)

// router.route('/material/:id')
//     .get(materialCtrl.getOneMaterial)
//     .put(materialCtrl.updateMaterial)
//     .delete(materialCtrl.deleteMaterial)
//
// router.route('/material/stats').get(materialCtrl.getStatsMaterial)

export default router;