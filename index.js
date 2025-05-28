import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { retornaMedicos } from './servicos/retorona_medicos.js';

dotenv.config();

const app = express();

app.use(cors());

app.get('/medicos', async (req, res) => {
  try {
    const medicos = await retornaMedicos();
    res.json(medicos);
  } catch (error) {
    console.error("Erro ao buscar o médico:", error);
    res.status(500).json({ mensagem: "Erro ao buscar os dados." })
  }
})

app.listen(8080, () => {
  const date = new Date();
  console.log(`Servidor iniciado em ${date}`)
})