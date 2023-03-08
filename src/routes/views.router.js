import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("real_time_products");
});

export default router;
