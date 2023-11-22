const adminControllers = {
    admin: (req, res) => res.send('Route for Admin View'),
    createGet: (req, res) => res.send('Route for Admin Create View'),
    createPost: (req, res) => res.send('Route for Admin Create POST View'),
    edit: (req, res) => res.send('Route for Admin Edit for ID'),
    editPut: (req, res) => res.send('Route for Admin Edit item for ID PUT'),
    delete: (req, res) => res.send('Route for Admin Delete item for ID View')
}

module.exports = adminControllers;