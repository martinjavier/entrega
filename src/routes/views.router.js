import { Router } from "express";
import ProductManager from "../ProductManager.js";

const router = Router();

let products = [];

router.get("/real-time-products", (req, res) => {
  let prodManager = new ProductManager();
  let products = prodManager.getProducts();
  let product = products[0];

  res.render("real_time_products", {
    ...product,
    style: "real_time_products",
  });
});

export default router;
