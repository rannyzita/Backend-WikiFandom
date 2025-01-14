const bcrypt = require('bcrypt'); // hash de senhas, em resumo importa um método para criptografar senhas
const jwt = require('jsonwebtoken'); // tokens JWT (validar acesso do usuário)
const knex = require('../db/knex'); // importa o banco de dados que foi configurado com knex

// registrando um usuário novo
module.exports = {
    // registra um novo usuário
    async registro (req, res){
        const {nome, email, senha} = req.body;

        if (!nome || !email || !senha){
            return res.status(400).json({message: 'Todos campos são obrigatórios!'});
        }

        try{
            const usuarioExiste = await UsuarioRepository.findByEmail(email);
            if (usuarioExiste) {
                return res.status(400).json({ message: 'Usuário já existe.' });
            }

            const senha = await bcrypt.hash(senha, 8);
            await knex('Usuario').insert({
                nome,
                email,
                senha: senha
            })
            return res.status(201).json({message: 'Usuário registrado.'});
        } catch(erro){
            return res.status(500).json({message: 'Erro ao registrar usuário.', erro});
        }
    },

    async login(req, res){
        const {email, senha} = req.body;

        if (!email || !senha){
            return res.status(400).json({message: 'Email e senha obrigatórios'});
        }

        try{
            const usuario = await UsuarioRepository.findByEmail(email);
            if (!usuario || !(await bcrypt.compare(senha, usuario.senha))){
                return res.status(401).json({message: 'Credenciais inválidas'})
            }

            const secreto = process.env.JWT_SECRET;
            if (!secret) {
                throw new Error("JWT_SECRET não está configurado.");
            }

            const token = jwt.sign(
                {id: usuario.id},
                secreto,
                {expiresIn: '8h'}
            );

            return res.json({ token });
        } catch (erro){
            return res.status(500).json({ message: 'Erro ao realizar seu login', erro});
        }
    },
};

    