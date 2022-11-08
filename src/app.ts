import express from "express";
import { task } from "./routers/task.router.js";

const app = express();
app.use(express.json());

app.get("/status", (req, res) => {
  res.status(200).send("Hey, I'm alive!");
});

app.use(task);

app.listen(4000, () => console.log("I'm workin on port 4000!"));
