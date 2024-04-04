const EntitySchema = require('typeorm').EntitySchema;

const ProductEntity = new EntitySchema({
    name: "Product",
    target: "Product",
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        title: {
            type: 'varchar'
        },
        test: {
            type: 'text'
        }
    },
    relation: {
        categories: {
            target: "User",
            type: "many-to-many",
            joinTable: true,
            cascade: true
        }
    }
});

module.exports = { ProductEntity }