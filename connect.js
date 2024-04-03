require('dotenv').config();
const typeorm = require('typeorm');

const UserEntity = require('./model/User').UserEntity;
const ProductEntity = require('./model/Product').ProductEntity;

const dataSource = new typeorm.DataSource({
    type: "mariadb",
    port: 3306,
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    synchronize: true,
    entities: [UserEntity, ProductEntity]
});

dataSource
    .initialize()
    .then( function() {
        console.log('Connected to database');
        
    })
    .catch( function(error) {
        console.log("Problem connection database" + error);
    });

module.exports = { dataSource };
