const shopControllers = {
    shop: (req, res) => res.send ('Route for Shop View'),
    item: (req, res) => res.send ('Route for encontrar y devolver el producto por un ID'),
    itemAdd: (req, res) => res.send ('Route for añadir un item nuevo al carrito'),
    cart: (req, res) => res.send ('Route for Shop cart View'),
    cartPost: (req, res) => res.send ('Route for checkout page - pagina carrito')
}

module.exports = shopControllers;