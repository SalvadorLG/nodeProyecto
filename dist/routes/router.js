"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
var BDDMySql = require('mysql');
var connection = BDDMySql.createConnection({
    host: 'localhost',
    user: 'salvador',
    password: '1234',
    database: 'proyecto_final_cliente',
    port: '3306'
});
connection.connect(function (error) {
    if (error)
        throw error;
    else {
        console.log("conexion correta");
    }
});
const router = express_1.Router();
//ALUMNO
//--------------------------------------------------------------------------------------------------------------------------
//agregar alumno
router.post('/api/alumno', (request, response) => {
    connection.query('insert into alumno(nombre, a_paterno, a_materno, edad, direccion, correo, genero) values(?,?,?,?,?,?,?)', [request.body.nombre, request.body.a_paterno, request.body.a_materno, request.body.edad, request.body.direccion, request.body.correo, request.body.genero], function (error, result) {
        if (error) {
            throw error;
        }
        else {
            response.json({
                mensaje: "alumno agregado exitosamente"
            });
        }
    });
});
//otbener lista de alumnos
router.get('/api/alumnos', (request, response) => __awaiter(this, void 0, void 0, function* () {
    connection.query('select * from alumno', function (error, result) {
        if (error) {
            throw error;
        }
        else {
            response.json({
                mensaje: result
            });
        }
    });
}));
//obtener 1 alumno
router.get('/api/alumno/:id', (request, response) => {
    const id = request.params.id;
    connection.query('select * from alumno where alumno.id=' + "'" + id + "'", function (error, result) {
        if (error) {
            throw error;
        }
        else {
            response.json({
                mensaje: result
            });
        }
    });
});
//borrar alumno
router.delete('/api/alumno/:id', (request, response) => {
    const id = request.params.id;
    connection.query('delete from alumno where alumno.id=' + "'" + id + "'", function (error, result) {
        if (error) {
            throw error;
        }
        else {
            response.json({
                mensaje: "el alumno se ha borrado"
            });
        }
    });
});
//actualizar alumno
router.put('/api/alumno/:id', (request, response) => {
    const id = request.params.id;
    connection.query('update alumno set alumno.nombre=' + "'" + request.body.nombre + "'," +
        'alumno.a_paterno=' + "'" + request.body.a_paterno + "'," +
        'alumno.a_materno=' + "'" + request.body.a_materno + "'," +
        'alumno.edad=' + "'" + request.body.edad + "'," +
        'alumno.direccion=' + "'" + request.body.direccion + "'," +
        'alumno.edad=' + "'" + request.body.edad + "'," +
        'alumno.correo=' + "'" + request.body.correo + "'," +
        'alumno.genero=' + "'" + request.body.genero + "'" +
        'where alumno.id=' + "'" + id + "'", function (error, result) {
        if (error) {
            throw error;
        }
        else {
            response.json({
                mensaje: "alumno modificado exitosamente"
            });
        }
    });
});
//Asignatura
//--------------------------------------------------------------------------------------------------------------------------
//agregar asignatura
router.post('/api/asignatura', (request, response) => {
    connection.query('insert into asignatura(materia, horario) values(?,?)', [request.body.materia, request.body.horario], function (error, result) {
        if (error) {
            throw error;
        }
        else {
            response.json({
                mensaje: "materia agregada exitosamente"
            });
        }
    });
});
//otbener lista de asignaturas
router.get('/api/asignatura', (request, response) => __awaiter(this, void 0, void 0, function* () {
    connection.query('select * from asignatura', function (error, result) {
        if (error) {
            throw error;
        }
        else {
            response.json({
                mensaje: result
            });
        }
    });
}));
//obtener 1 asignatura
router.get('/api/asignatura/:id', (request, response) => {
    const id = request.params.id;
    connection.query('select * from asignatura where asignatura.id_materia=' + "'" + id + "'", function (error, result) {
        if (error) {
            throw error;
        }
        else {
            response.json({
                mensaje: result
            });
        }
    });
});
//borrar asignatura
router.delete('/api/asignatura/:id', (request, response) => {
    const id = request.params.id;
    connection.query('delete from asignatura where asignatura.id_materia=' + "'" + id + "'", function (error, result) {
        if (error) {
            throw error;
        }
        else {
            response.json({
                mensaje: "la materia se ha borrado"
            });
        }
    });
});
//actualizar asignatura
router.put('/api/asignatura/:id', (request, response) => {
    const id = request.params.id;
    connection.query('update asignatura set asignatura.materia=' + "'" + request.body.materia + "'," +
        'asignatura.horario=' + "'" + request.body.horario + "'" +
        ' where asignatura.id_materia=' + "'" + id + "'", function (error, result) {
        if (error) {
            throw error;
        }
        else {
            response.json({
                mensaje: "materia modificada exitosamente"
            });
        }
    });
});
//Profesor
//--------------------------------------------------------------------------------------------------------------------------
//agregar profesor
router.post('/api/profesor', (request, response) => {
    connection.query('insert into profesor(nombre, a_paterno, a_materno, edad, direccion, correo, genero, alumno_id, materia_id) values(?,?,?,?,?,?,?,?,?)', [request.body.nombre, request.body.a_paterno, request.body.a_materno, request.body.edad, request.body.direccion, request.body.correo, request.body.genero, request.body.alumno_id, request.body.materia_id], function (error, result) {
        if (error) {
            throw error;
        }
        else {
            response.json({
                mensaje: "profesor agregado exitosamente"
            });
        }
    });
});
//otbener lista de profesores
router.get('/api/profesores', (request, response) => __awaiter(this, void 0, void 0, function* () {
    connection.query('select * from profesor', function (error, result) {
        if (error) {
            throw error;
        }
        else {
            response.json({
                mensaje: result
            });
        }
    });
}));
//obtener 1 profesor
router.get('/api/profesor/:id', (request, response) => {
    const id = request.params.id;
    connection.query('select * from profesor where profesor.id=' + "'" + id + "'", function (error, result) {
        if (error) {
            throw error;
        }
        else {
            response.json({
                mensaje: result
            });
        }
    });
});
//borrar profesor
router.delete('/api/profesor/:id', (request, response) => {
    const id = request.params.id;
    connection.query('delete from profesor where profesor.id=' + "'" + id + "'", function (error, result) {
        if (error) {
            throw error;
        }
        else {
            response.json({
                mensaje: "el profesor se ha borrado"
            });
        }
    });
});
//actualizar profesor
router.put('/api/profesor/:id', (request, response) => {
    const id = request.params.id;
    connection.query('update profesor set profesor.nombre=' + "'" + request.body.nombre + "'," +
        'profesor.a_paterno=' + "'" + request.body.a_paterno + "'," +
        'profesor.a_materno=' + "'" + request.body.a_materno + "'," +
        'profesor.edad=' + "'" + request.body.edad + "'," +
        'profesor.direccion=' + "'" + request.body.direccion + "'," +
        'profesor.edad=' + "'" + request.body.edad + "'," +
        'profesor.correo=' + "'" + request.body.correo + "'," +
        'profesor.genero=' + "'" + request.body.genero + "'," +
        'profesor.alumno_id=' + "'" + request.body.alumno_id + "'," +
        'profesor.materia_id=' + "'" + request.body.materia_id + "'" +
        ' where profesor.id=' + "'" + id + "'", function (error, result) {
        if (error) {
            throw error;
        }
        else {
            response.json({
                mensaje: "profesor modificado exitosamente"
            });
        }
    });
});
exports.default = router;
