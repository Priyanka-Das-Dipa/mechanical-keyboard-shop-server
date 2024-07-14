import express, { Request, Response } from "express";
import cors from "cors";
import router from "./app/routes/routers";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", router);

app.use(globalErrorHandler);
// app.use(notFound);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
