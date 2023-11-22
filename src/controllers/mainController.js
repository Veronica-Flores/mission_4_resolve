const mainControllers = {
    home: (req, res) => res.send('Ruta de página de Home'),
    contact: (req, res) => res.send('Ruta de página de Contacto'),
    about: (req, res) => res.send('Ruta de página sobre Nosotros'),
    faqs: (req, res) => res.send('Route for Faqs View')
}

module.exports = mainControllers;