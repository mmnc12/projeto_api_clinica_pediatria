import pool from './conexao.js';

export const retornaMedicos = async () => {
  const conexao = await pool.getConnection();

  const resultado_query = await conexao.query("select nome, telefone, email, descricao from medicos");
  const resultado = resultado_query[0];

  conexao.release();

  return resultado;
}