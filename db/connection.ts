import { Sequelize } from 'sequelize';


const db = new Sequelize('restserver', 'marshal', '601077', {
    host: 'localhost',
    dialect:'mariadb',
    // logging: false,
});

export default db;