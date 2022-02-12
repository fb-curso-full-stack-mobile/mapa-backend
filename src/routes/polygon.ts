import { Polygon } from "@prisma/client";
import express from "express";
import polygonController from "../controllers/polygon-controller";

const router = express.Router();

router.get("/polygon", async (req, res) => {
  const polygons = await polygonController.fetch();
  res.json({ polygons });
});

router.post("/polygon", async (req, res) => {
  const polygon: Polygon = req.body;
  const coordinates = (polygon as any).coordinates;
  delete (polygon as any)["coordinates"];
  const updated = await polygonController.insert(polygon, coordinates);
  res.json({ updated });
});
export default router;
