import express from 'express';
import cors from 'cors';
import { retornaMedicos } from './servicos/retorona_medicos.js';


const app = express();

app.use(cors());

app.get('/medicos', async (req, res) => {
  const medicos = await retornaMedicos();
  res.json(medicos);
})

app.listen(8080, () => {
  const date = new Date();
  console.log(`Servidor iniciado em ${date}`)
})