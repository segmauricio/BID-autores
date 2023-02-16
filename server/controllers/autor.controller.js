const { Autor } = require("../models/autor.model");

module.exports.createAutor = async (request, response) => {
    try {
        const { nombre, cita } = request.body;
        autor = await Autor.create({
            nombre,
            cita
        });
        response.json(autor);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.getAllAutores = async (request, response) => {
    try {
        const persons = await Autor.find({})
        response.json(persons);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.getAutor = async (request, response) => {
    try {
        const autor = await Autor.findOne({_id:request.params.id})
        response.json(autor);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.updateAutor = async (request, response) => {
    try {
        const autor = await Autor.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        response.json(autor);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.deleteAutor = async (request, response) => {
    try {
        const autor = await Autor.deleteOne({ _id: request.params.id })
        response.json(autor);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}