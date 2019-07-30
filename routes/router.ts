import { Router, Request, Response } from 'express';

var BDDMySql = require('mysql');

var connection = BDDMySql.createConnection({
    host: 'localhost',
    user: 'salvador',
    password: '1234',
    database: 'proyecto_final_cliente',
    port: '3306'
});

connection.connect(function(error:any){
    if(error)throw error;
    else{
        console.log("conexion correta");
    }
});

const router = Router();

//ALUMNO
//--------------------------------------------------------------------------------------------------------------------------
//agregar alumno
router.post('/api/alumno',(request: Request, response: Response)=>{
    connection.query('insert into alumno(nombre, a_paterno, a_materno, edad, direccion, correo, genero) values(?,?,?,?,?,?,?)',
    [request.body.nombre, request.body.a_paterno, request.body.a_materno, request.body.edad, request.body.direccion, request.body.correo, request.body.genero],
    function(error:any, result:any){
        if(error){
            throw error
        }
        else{
            response.json({
                mensaje: "alumno agregado exitosamente"
            });
        }
    })
});

//otbener lista de alumnos
router.get('/api/alumnos', async (request: Request, response: Response)=>{
    connection.query('select * from alumno',
    function(error:any, result:any){
        if(error){
            throw error
        }
        else{
            response.json({
                mensaje: result
            });
        }
    })
});
//obtener 1 alumno
router.get('/api/alumno/:id',(request: Request, response: Response)=>{
    const id = request.params.id;
    connection.query('select * from alumno where alumno.id='+"'"+id+"'",
    function(error:any, result:any){
        if(error){
            throw error
        }
        else{
            response.json({
                mensaje: result
            });
        }
    })
});

//borrar alumno
router.delete('/api/alumno/:id', (request: Request, response: Response)=>{
    const id = request.params.id;
    connection.query('delete from alumno where alumno.id='+"'"+id+"'",
    function(error:any, result:any){
        if(error){
            throw error
        }
        else{
            response.json({
                mensaje: "el alumno se ha borrado"
            });
        }
    })
});

//actualizar alumno
router.put('/api/alumno/:id',(request: Request, response: Response)=>{
    const id = request.params.id;
    connection.query('update alumno set alumno.nombre='+"'"+request.body.nombre+"',"+
    'alumno.a_paterno='+"'"+request.body.a_paterno+"',"+
    'alumno.a_materno='+"'"+request.body.a_materno+"',"+
    'alumno.edad='+"'"+request.body.edad+"',"+
    'alumno.direccion='+"'"+request.body.direccion+"',"+
    'alumno.edad='+"'"+request.body.edad+"',"+
    'alumno.correo='+"'"+request.body.correo+"',"+
    'alumno.genero='+"'"+request.body.genero+"'"+
    'where alumno.id='+"'"+id+"'",
    function(error:any, result:any){
        if(error){
            throw error
        }
        else{
            response.json({
                mensaje: "alumno modificado exitosamente"
            });
        }
    })
});

//Asignatura
//--------------------------------------------------------------------------------------------------------------------------
//agregar asignatura
router.post('/api/asignatura',(request: Request, response: Response)=>{
    connection.query('insert into asignatura(materia, horario) values(?,?)',
    [request.body.materia, request.body.horario],
    function(error:any, result:any){
        if(error){
            throw error
        }
        else{
            response.json({
                mensaje: "materia agregada exitosamente"
            });
        }
    })
});

//otbener lista de asignaturas
router.get('/api/asignatura', async (request: Request, response: Response)=>{
    connection.query('select * from asignatura',
    function(error:any, result:any){
        if(error){
            throw error
        }
        else{
            response.json({
                mensaje: result
            });
        }
    })
});
//obtener 1 asignatura
router.get('/api/asignatura/:id',(request: Request, response: Response)=>{
    const id = request.params.id;
    connection.query('select * from asignatura where asignatura.id_materia='+"'"+id+"'",
    function(error:any, result:any){
        if(error){
            throw error
        }
        else{
            response.json({
                mensaje: result
            });
        }
    })
});

//borrar asignatura
router.delete('/api/asignatura/:id', (request: Request, response: Response)=>{
    const id = request.params.id;
    connection.query('delete from asignatura where asignatura.id_materia='+"'"+id+"'",
    function(error:any, result:any){
        if(error){
            throw error
        }
        else{
            response.json({
                mensaje: "la materia se ha borrado"
            });
        }
    })
});

//actualizar asignatura
router.put('/api/asignatura/:id',(request: Request, response: Response)=>{
    const id = request.params.id;
    connection.query('update asignatura set asignatura.materia='+"'"+request.body.materia+"',"+
    'asignatura.horario='+"'"+request.body.horario+"'"+
    ' where asignatura.id_materia='+"'"+id+"'",
    function(error:any, result:any){
        if(error){
            throw error
        }
        else{
            response.json({
                mensaje: "materia modificada exitosamente"
            });
        }
    })
});

//Profesor
//--------------------------------------------------------------------------------------------------------------------------
//agregar profesor
router.post('/api/profesor',(request: Request, response: Response)=>{
    connection.query('insert into profesor(nombre, a_paterno, a_materno, edad, direccion, correo, genero, alumno_id, materia_id) values(?,?,?,?,?,?,?,?,?)',
    [request.body.nombre, request.body.a_paterno, request.body.a_materno, request.body.edad, request.body.direccion, request.body.correo, request.body.genero, request.body.alumno_id, request.body.materia_id],
    function(error:any, result:any){
        if(error){
            throw error
        }
        else{
            response.json({
                mensaje: "profesor agregado exitosamente"
            });
        }
    })
});

//otbener lista de profesores
router.get('/api/profesores', async (request: Request, response: Response)=>{
    connection.query('select * from profesor',
    function(error:any, result:any){
        if(error){
            throw error
        }
        else{
            response.json({
                mensaje: result
            });
        }
    })
});
//obtener 1 profesor
router.get('/api/profesor/:id',(request: Request, response: Response)=>{
    const id = request.params.id;
    connection.query('select * from profesor where profesor.id='+"'"+id+"'",
    function(error:any, result:any){
        if(error){
            throw error
        }
        else{
            response.json({
                mensaje: result
            });
        }
    })
});

//borrar profesor
router.delete('/api/profesor/:id', (request: Request, response: Response)=>{
    const id = request.params.id;
    connection.query('delete from profesor where profesor.id='+"'"+id+"'",
    function(error:any, result:any){
        if(error){
            throw error
        }
        else{
            response.json({
                mensaje: "el profesor se ha borrado"
            });
        }
    })
});

//actualizar profesor
router.put('/api/profesor/:id',(request: Request, response: Response)=>{
    const id = request.params.id;
    connection.query('update profesor set profesor.nombre='+"'"+request.body.nombre+"',"+
    'profesor.a_paterno='+"'"+request.body.a_paterno+"',"+
    'profesor.a_materno='+"'"+request.body.a_materno+"',"+
    'profesor.edad='+"'"+request.body.edad+"',"+
    'profesor.direccion='+"'"+request.body.direccion+"',"+
    'profesor.edad='+"'"+request.body.edad+"',"+
    'profesor.correo='+"'"+request.body.correo+"',"+
    'profesor.genero='+"'"+request.body.genero+"',"+
    'profesor.alumno_id='+"'"+request.body.alumno_id+"',"+
    'profesor.materia_id='+"'"+request.body.materia_id+"'"+
    ' where profesor.id='+"'"+id+"'",
    function(error:any, result:any){
        if(error){
            throw error
        }
        else{
            response.json({
                mensaje: "profesor modificado exitosamente"
            });
        }
    })
});


export default router;