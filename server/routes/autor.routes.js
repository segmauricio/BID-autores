const AutorController = require('../controllers/autor.controller');

module.exports = function(app){
    app.post('/api/autores', AutorController.createAutor);
    app.get('/api/autores',AutorController.getAllAutores);
    app.get('/api/autores/:id',AutorController.getAutor);
    app.put('/api/autores/:id',AutorController.updateAutor);
    app.delete('/api/autores/:id',AutorController.deleteAutor);
}
