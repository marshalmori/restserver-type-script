"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('restserver', 'marshal', '601077', {
    host: 'localhost',
    dialect: 'mariadb',
    // define: {
    //     timestamps: false
    // }
    // logging: false,
});
exports.default = db;
//# sourceMappingURL=connection.js.map