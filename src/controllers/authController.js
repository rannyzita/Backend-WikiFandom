const bcrypt = require('bcrypt'); // hash de senhas
const jwt = require('jsonwebtoken'); // tokens JWT
const knex = require('../db/knex'); // banco de dados que foi configurado com knex

module.exports = {
    // registrar um novo usuário
    async registro (req, res){
        const {nome, email, senha} = req.body;

        //verificando se todos os campos obrigatório foram preenchidos
        if (!nome || !email || !senha){
            return res.status(400).json({message: 'Todos campos são obrigatórios!'});
        }

        try{
            const hashedSenha = await bcrypt.hash(senha, 8);

            await knex('Usuario').insert({
                email,
                senha: hashedSenha,
                nome: nome,
            })
            return res.status(201).json({message: 'Usuário registrado.'});
        } catch(error){
            return res.status(500).json({message: 'Erro ao registrar usuário.', error});
        }
    },

    async login(req, res){
        const {email, senha} = req.body;

        if (!email || !senha){
            return res.status(400).json({message: 'Email e senha obrigatórios'});
        }

        try{
            const usuario = await knex('Usuario').where({ email }).first();

            if (!usuario || !(await bcrypt.compare(senha, usuario.senha))){
                return res.status(401).json({message: 'Credenciais inválidas'})
            }

            const token = jwt.sing
        }
    }
}

    