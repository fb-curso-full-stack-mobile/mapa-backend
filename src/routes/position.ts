import { Position } from "@prisma/client";
import express from "express";
import positionController from "../controllers/position-controller";

const router = express.Router();

router.post("/position", async (req, res) => {
  const position: Position = req.body;
  try {
    const updated = await positionController.save(position);
    return res.json({ updated });
  } catch (e) {
    console.log("position post", e);
    return res
      .status(500)
      .json({ message: "Não foi possível salvar a posição." });
  }
});

router.put("/position", async (req, res) => {
  const position: Position = req.body;
  try {
    const updated = await positionController.save(position);
    return res.json({ updated });
  } catch (e) {
    console.log("position put", e);
    return res
      .status(500)
      .json({ message: "Não foi possível atualizar a posição." });
  }
});

router.get("/position", async (_, res) => {
  try {
    const positions = await positionController.fetch();
    return res.json({ positions });
  } catch (e) {
    console.log("position get", e);
    return res
      .status(500)
      .json({ message: "Não foi possível obter as posições." });
  }
});

export default router;
