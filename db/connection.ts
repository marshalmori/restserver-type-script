import { Sequelize } from 'sequelize';


const db = new Sequelize('restserver', 'marshal', '601077', {
    host: 'localhost',
    dialect:'mariadb',
    // define: {
    //     timestamps: false
    // }
    // logging: false,
});

export default db;