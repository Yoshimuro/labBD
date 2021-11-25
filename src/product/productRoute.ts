import {Router} from "express";
import ProductCtrl from "./productCtrl";

const router = Router()
const productCtrl = new ProductCtrl()

// router.route('/product')
//     .get(productCtrl.getAllProducts)
//     .post(productCtrl.createProduct)
//
// router.route('product/:id')
//     .put(productCtrl.updateProduct)
//     .delete(productCtrl.deleteProduct)
//     .get(productCtrl.getOneProduct);

// router.route('/product/stats').get(productCtrl.getStatsProduct)