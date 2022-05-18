'use strict'

const mongoose = require('mongoose');

const productoEmpresaSchema = {
    nombre : String,
    proveedor : String,
    stock : Number,
    empresa : {type: mongoose.Schema.ObjectID, ref:'Empresa'}
}

module.exports = mongoose.model('ProductoEmpresa',productoEmpresaSchema)