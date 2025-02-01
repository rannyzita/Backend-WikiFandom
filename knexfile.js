module.exports = {
    development: {
        client: "mysql2",
        connection: {
            host: "localhost", // Remova a porta daqui e coloque no lugar certo
            port: 3306, // Adicione a porta corretamente
            user: "root",
            password: "Maria0206_",
            database: "wikifandom"
        },
        migrations: {
            directory: "./src/db/migrations"
        },
        seeds: {
            directory: "./src/db/seeders"
        }
    }
};
