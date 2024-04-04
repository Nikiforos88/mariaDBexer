const productEntity = require('../model/User').ProductEntity; // Assuming the correct model name is ProductEntity
const dataSource = require('../connect').dataSource;

async function findAll() {
    const result = await dataSource
        .getRepository(productEntity)
        .createQueryBuilder()
        .select("product")
        .from(productEntity, 'product')
        .getMany();

    return result;
}

async function findOne(id) {
    const result = await dataSource
        .getRepository(productEntity)
        .createQueryBuilder()
        .select('product')
        .from(productEntity, 'product')
        .where("product.id = :id", { id: id })
        .getOne();

    return result;
}

async function create(productData) {
    const result = await dataSource
        .getRepository(productEntity)
        .save(productData)
        .catch(error => console.log(error));

    return result;
}

async function update(id, productData) {
    const result = await dataSource
        .createQueryBuilder()
        .update(productEntity)
        .set(productData)
        .where("id = :id", { id: id })
        .execute()
        .catch(error => console.log(error));

    return result;
}

async function deleteCategory(id) {
    const result = await dataSource
        .createQueryBuilder()
        .delete()
        .from(productEntity)
        .where("id = :id", { id: id })
        .execute()
        .catch(error => console.log(error));

    return result;
}

module.exports = { findAll, findOne, create, update, deleteCategory };
