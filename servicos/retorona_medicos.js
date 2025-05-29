import pool from './conexao.js';

export const retornaMedicos = async () => {
  try {
    const conexao = await pool.getConnection();
    console.log("🔍 Buscando dados na tabela 'medicos'");

    const resultado_query = await conexao.query("SELECT nome, telefone, email, descricao FROM clinicapediatradb.medicos;");
    const resultado = resultado_query[0];

    conexao.release();
    return resultado;
  } catch (error) {
    console.error("❌ Erro ao buscar médicos:", error);
    throw error;
  }
};
