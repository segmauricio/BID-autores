const mongoose = require('mongoose');

const AutorSchema = new mongoose.Schema({
    nombre: { 
        type: String,
        minlength:[3, 'El minimo es de 3'] 
    },
    cita: {
        type: String,
        minlength:[3, 'El minimo es de 3'] 
    },
}, { timestamps: true });

module.exports.Autor = mongoose.model('Autor', AutorSchema);

