const productService = require('../services/product.services');

exports.findAll = async (req, res) => {
    console.log("Find all categories");
    try {
        const result = await productService.findAll();
        res.status(200).json({ data: result });
        console.log("Success in reading all categories");
    } catch (err) {
        res.status(500).json({ error: err.message });
        console.error("Problem in reading all categories:", err);
    }
}

exports.findOne = async (req, res) => {
    const id = req.params.id;
    console.log("Find category:", id);
    try {
        const result = await productService.findOne(id);
        res.status(200).json({ data: result });
        console.log("Success in reading category");
    } catch (err) {
        res.status(500).json({ error: err.message });
        console.error("Problem in reading category:", err);
    }
}

exports.create = async (req, res) => {
    const { product_name, cost, description, quantity } = req.body;
    console.log("Insert product:", product_name);

    try {
        const result = await productService.create(product_name, cost, description, quantity);
        res.status(201).json({ data: result });
        console.log("Success in inserting product");
    } catch (err) {
        res.status(500).json({ error: err.message });
        console.error("Problem in inserting product:", err);
    }
}

exports.update = async (req, res) => {
    const id = req.params.id;
    console.log("Update Product with id:", id);

    try {
        const result = await productService.update(id, req.body);
        res.status(200).json({ data: result });
        console.log("Success in updating product");
    } catch (err) {
        res.status(500).json({ error: err.message });
        console.error("Problem in updating product:", err);
    }
}

exports.delete = async (req, res) => {
    const id = req.params.id;
    console.log("Delete Product with id:", id);

    try {
        const result = await productService.delete(id);
        res.status(200).json({ data: result });
        console.log("Success in deleting product");
    } catch (err) {
        res.status(500).json({ error: err.message });
        console.error("Problem in deleting product:", err);
    }
}
