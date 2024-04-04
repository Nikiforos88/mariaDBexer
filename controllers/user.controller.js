const userService = require('../services/user.services');

exports.findAll = async(req, res) => {
    console.log("Find all users");
    try {
        const result = await userService.findAll();
        res.status(200).json({ data: result });
        console.log("Success in reading all users");
    } catch(err) {
        res.status(500).json({ error: err.message });
        console.error("Problem in reading all users:", err);
    }
}

exports.findOne = async(req, res) => {
    const id = req.params.id;
    console.log("Find user:", id);
    try {
        const result = await userService.findOne(id);
        res.status(200).json({ data: result });
        console.log("Success in reading user");
    } catch(err) {
        res.status(500).json({ error: err.message });
        console.error("Problem in reading user:", err);
    }
}

exports.create = async(req, res) => {
    const { username, password, name, surname, email, area, road, home_phone, mobile_phone } = req.body;
    console.log("Insert user:", username);

    try {
        const result = await userService.create(username, password, name, surname, email, area, road, home_phone, mobile_phone);
        res.status(201).json({ data: result });
        console.log("Success in inserting user");
    } catch(err) {
        res.status(500).json({ error: err.message });
        console.error("Problem in inserting user:", err);
    }
}

exports.update = async(req, res) => {
    const id = req.params.id;
    console.log("Update User with id:", id);

    try {
        const result = await userService.update(id, req.body);
        res.status(200).json({ data: result });
        console.log("Success in updating user");
    } catch(err) {
        res.status(500).json({ error: err.message });
        console.error("Problem in updating user:", err);
    }
}

exports.delete = async(req, res) => {
    const id = req.params.id;
    console.log("Delete User with id:", id);

    try {
        const result = await userService.delete(id);
        res.status(200).json({ data: result });
        console.log("Success in deleting user");
    } catch(err) {
        res.status(500).json({ error: err.message });
        console.error("Problem in deleting user:", err);
    }
}
