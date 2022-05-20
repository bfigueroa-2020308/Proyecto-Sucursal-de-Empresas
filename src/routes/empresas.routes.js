'use strict'

const express = require('express');
const app = express.Router();
const empresaController = require('../controllers/empresa.controller');
const mdAuth = require('../services/authenticated');

app.post('/agregarEmpresa',[mdAuth.ensureAuth, mdAuth.isAdmin], empresaController.agregarEmpresa);
app.get('/login', empresaController.login);
app.put('/actualizarEmpresa/:id', [mdAuth.ensureAuth, mdAuth.isAdmin], empresaController.actualizarEmpresa)
app.delete('/eliminarEmpresa/:id', [mdAuth.ensureAuth, mdAuth.isAdmin], empresaController.eliminarEmpresa);
app.get('/verEmpresas', [mdAuth.ensureAuth], empresaController.verEmpresas);
app.get('/verEmpresa',[mdAuth.ensureAuth], empresaController.verEmpresa);
app.post('/agregarProducto', [mdAuth.ensureAuth]);
app.post('/enviarProducto/:id',[mdAuth.ensureAuth], empresaController.enviarProducto);

module.exports= app;