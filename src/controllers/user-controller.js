const  UserService  = require('../services/user-service');

const userService = new UserService();


// POST METHOD
// data -> req.body
const create = async(req, res) => {
    try {
        const user = await userService.createUser(req.body);
        return res.status(201).json({
            data: user,
            success: true,
            message: 'Successfully created a user',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Cannot create a user',
            err: error
        })
    }
}



// DELETE Method
// data -> /user/:id
const destroy = async(req, res) => {
    try {
        const response = await userService.deleteUser(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted a user',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Cannot delete a user',
            err: error
        })
    }
}


// GET Method
// GET -> /user/:id
const get = async(req, res) => {
    try {
        const response = await userService.getUser(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched a user',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Cannot get a user',
            err: error
        })
    }
}


// PATCH Method
// patch -> /user/:id
const update = async(req, res) => {
    try {
        const response = await userService.updateUser(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully updated a user',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Cannot update a user',
            err: error
        })
    }
}


module.exports = {
    create,
    destroy,
    get,
    update
}