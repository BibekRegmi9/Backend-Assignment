const validateUserRequest = (req, res, next) => {
    if(!req.body.name || 
        !req.body.age||
        !req.body.address||
        !req.body.email
        ){
            return res.status(400).json({
                success: false,
                data: {},
                message: 'Required fields are missing, Please enter all the required fields.',
                err: 'Name/Age/Address/Email is missing'
            })
    }
    next();
}


module.exports = {
    validateUserRequest
}