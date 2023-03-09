import { Router } from "express";
import ProductManager from "../ProductManager.js";

const router = Router();

let products = [];

router.get("/real-time-products", (req, res) => {
  res.render("real_time_products", {
    ...products,
  });
});

export default router;
