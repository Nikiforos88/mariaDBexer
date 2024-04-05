const EntitySchema = require('typeorm').EntitySchema;

class User {
    constructor(id, name) {
        this.id = id;
        this.name = name
    }
}

const UserEntity = new EntitySchema({
    name: "User",
    target: User,
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        name: {
            type: 'varchar'
        }

    }
});

module.exports = { UserEntity }