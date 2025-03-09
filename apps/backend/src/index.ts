import express from "express";
import { router } from "./routes";
import bodyParser from "body-parser";

const app = express();

const PORT = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api",router);

app.listen(PORT, () => {
  console.log(`Server is running on port${PORT}`);
});
