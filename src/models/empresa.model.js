'use strict'

const mongoose = require('mongoose');

const empresaSchema = {
    nombre : String,
    municipio : String,
    tipo : String,
    telefono : String,
    contraseña : String,
    role : String
}

module.exports = mongoose.model('Empresa', empresaSchema)