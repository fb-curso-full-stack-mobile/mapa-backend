import POIRouter from "./routes/poi";
import PolygonRouter from "./routes/polygon";
import PositionRouter from "./routes/position";
import cors from "cors";
import express from "express";

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3001;

app.get("/", (_, res) => {
  res.send("OK");
});

app.use("/v1", POIRouter);
app.use("/v1", PositionRouter);
app.use("/v1", PolygonRouter);

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
