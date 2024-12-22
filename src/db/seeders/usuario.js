const { v4: uuidv4 } = require('uuid');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("Usuario").del()
  await knex("Usuario").insert([
    {
      id: uuidv4(),
      nome: 'Maria Vitória',
      email: 'maria@gmail.com',
      senha: 'senha123', 
      foto_perfil: 'http://surl.li/ybmyaa', // encurtador de url: surl
      biografia: 'Desenvolvedora backend e entusiasta de tecnologia!',
      data_criacao: new Date(),
    },
    {
      id: uuidv4(),
      nome: 'João Silva',
      email: 'joao.silva@gmail.com',
      senha: 'senha456',
      foto_perfil: null,
      biografia: 'Aprendendo programação todos os dias.',
      data_criacao: new Date(),
    },
  ]);
};
