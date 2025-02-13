const bcrypt = require('bcrypt'); // hash de senhas, em resumo importa um método para criptografar senhas
const jwt = require('jsonwebtoken'); // tokens JWT (validar acesso do usuário)
const knex = require('../db/connection.js'); // importa o banco de dados que foi configurado com knex
const { v4: uuidv4 } = require('uuid');
const AuthRepository = require('../models/AuthRepository.js')

class AuthController{   
    // promises
    async registro (req, res){
        const {nome, email, senha} = req.body;

        if (!nome || !email || !senha){
            return res.status(400).json({message: 'Todos campos são obrigatórios!'});
        }

        try{
            const usuarioExiste = await AuthRepository.findByEmail(email);
            if (usuarioExiste) {
                return res.status(400).json({ message: 'Usuário já existe.' });
            }

            const senhaCriptografada = await bcrypt.hash(senha, 8);

            await knex('Usuario').insert({
                id: uuidv4(),
                nome: nome,
                email: email,
                senha: senhaCriptografada
            })
            return res.status(201).json({message: 'Usuário registrado.'});
        } catch(erro){
            return res.status(500).json({message: 'Erro ao registrar usuário.', erro});
        }
    }

    async login(req, res){
        const { email, senha } = req.body;

        if (!email || !senha){
            return res.status(400).json({message: 'Email e senha obrigatórios'});
        }

        try{

            const usuario = await AuthRepository.findByEmail(email);
            const senhaEncontrada = await AuthRepository.findSenha({email, senha});

            if (!usuario || !(await bcrypt.compare(senha, senhaEncontrada))){
                return res.status(401).json({message: 'Credenciais inválidas'})
            }

            // chave secreta utilizada verificar a autenticidade de tokens JWT
            const secret = process.env.JWT_SECRET;
            // assinado com um segredo para garantir que a informação não tenha sido alterada

            if (!secret) {
                throw new Error("JWT_SECRET não está configurado.");
            }

            // gerar o token JWT
            const token = jwt.sign(
                {id: usuario.id},
                secret,
                {expiresIn: '8h'}
            );

            // se as credenciais forem válidas, gera um token JWT assinado com o segredo configurado
            return res.json({token,userId:usuario.id});
        
        } catch (erro){
            console.error('Erro ao realizar login:', erro);  // logar os erros no console para melhor diagnóstico
            return res.status(500).json({ message: 'Erro ao realizar seu login', erro});
        }
    }
}

module.exports = new AuthController();
