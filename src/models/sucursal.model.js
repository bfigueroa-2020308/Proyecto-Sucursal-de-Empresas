'use strict'

const mongoose = require('mongoose');

const sucursalSchema ={
    direccion : String,
    telefono : String,
    productos : [{type : mongoose.Schema.ObjectID, ref : 'ProductoSucursal'}],
    empresa : {type : mongoose.Schema.ObjectID, ref:'Empresa'}
}