const authControllers = {
    login: (req, res) => res.send('Route for Login GET'),
    loginPost: (req, res) => res.send('Route for Login POST'),
    register: (req, res) => res.send('Route for Register GET'),
    registerPost: (req, res) => res.send('Route for Register POST'),
    logout: (req, res) => res.send('Route for Logout')
}

module.exports = authControllers;