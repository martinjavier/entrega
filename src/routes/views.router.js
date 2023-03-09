import { Router } from "express";
import ProductManager from "../ProductManager.js";

const router = Router();

let products = [];

router.get("/real-time-products", async (req, res) => {
  let prodManager = new ProductManager("./src/Products.json");
  let products = await prodManager.getProducts();
  console.log(products);
  res.render("real_time_products", { products: products });
});

export default router;
