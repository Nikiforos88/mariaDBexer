const userEntity = require('../model/User').UserEntity; // Assuming the correct model name is UserEntity
const dataSource = require('../connect').dataSource;

async function findAll() {
    const result = await dataSource
        .getRepository(userEntity)
        .createQueryBuilder()
        .select("user")
        .from(userEntity, 'user')
        .getMany();

    return result;
}

async function findOne(id) {
    const result = await dataSource
        .getRepository(userEntity)
        .createQueryBuilder()
        .select('user')
        .from(userEntity, 'user')
        .where("user.id = :id", { id: id })
        .getOne();

    return result;
}

async function create(userData) {
    const result = await dataSource
        .getRepository(userEntity)
        .save(userData)
        .catch(error => console.log(error));

    return result;
}

async function update(id, userData) {
    const result = await dataSource
        .createQueryBuilder()
        .update(userEntity)
        .set(userData)
        .where("id = :id", { id: id })
        .execute()
        .catch(error => console.log(error));

    return result;
}

async function deleteById(id) {
    const result = await dataSource
        .createQueryBuilder()
        .delete()
        .from(userEntity)
        .where("id = :id", { id: id })
        .execute()
        .catch(error => console.log(error));

    return result;
}

module.exports = { findAll, findOne, create, update, deleteById };
