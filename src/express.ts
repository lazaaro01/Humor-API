import express from "express";
import { gerarHumor } from "./utils/humorGenerator";

const app = express();
app.use(express.json());

app.get("/humor", (req, res) => {
  const nome = req.query.nome || "Visitante";
  const humor = gerarHumor();

  res.json({ nome, humor });
});

app.listen(3000, () => {
  console.log("Express rodando em http://localhost:3000");
});