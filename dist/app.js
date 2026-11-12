"use strict";
// RETO 1
console.log('--- RETO 1 ---');
const usuarioValido = {
    id: 101,
    username: 'manuel_daw',
    email: 'manuel@instituto.es',
    rol: 'admin'
};
console.log('Usuario válido:', usuarioValido);
/*
const usuarioInvalido: UsuarioAPI = {
  id: 102,
  username: 'curioso',
  email: 'curioso@correo.com',
  rol: 'invitado' // Error: El tipo '"invitado"' no se puede asignar al tipo '"admin" | "editor" | "alumno"'
};
*/
// RETO 2
console.log('--- RETO 2 ---');
const misTareas = [
    { id: 1, titulo: 'Instalar TypeScript', completada: true, prioridad: 'Alta' },
    { id: 2, titulo: 'Repasar interfaces y clases', completada: false, prioridad: 'Alta' },
    { id: 3, titulo: 'Empezar con Angular', completada: false, prioridad: 'Media' }
];
function completarTarea(lista, idBuscar) {
    return lista.map((tarea) => tarea.id === idBuscar ? { ...tarea, completada: true } : tarea);
}
const tareasActualizadas = completarTarea(misTareas, 2);
console.log('Lista original (intacta):', misTareas);
console.log('Lista nueva (inmutable):', tareasActualizadas);
// RETO 3
console.log('--- RETO 3 ---');
class ProductComponent {
    nombreProducto;
    precioBase;
    iva = 0.21;
    constructor(nombreProducto, precioBase) {
        this.nombreProducto = nombreProducto;
        this.precioBase = precioBase;
    }
    obtenerPrecioFinal() {
        return Number((this.precioBase * (1 + this.iva)).toFixed(2));
    }
}
const producto = new ProductComponent('Teclado Mecánico', 80);
console.log(`Producto: ${producto.nombreProducto}`);
console.log(`Precio con IVA: ${producto.obtenerPrecioFinal()} €`);
// producto.precioBase = 10; // Error: La propiedad 'precioBase' es privada y solo se puede acceder a ella desde la clase 'ProductComponent'.
// RETO 4
console.log('--- RETO 4 ---');
function procesarRespuesta(res) {
    if (res.status === 'success') {
        if (res.data) {
            console.log('Datos recibidos del servidor:');
            res.data.forEach((item) => console.log(` - ${item}`));
        }
    }
    else {
        console.error(`Error del servidor: ${res.mensajeError ?? 'Error desconocido'}`);
    }
}
const respuestaOk = {
    status: 'success',
    data: ['Elemento A', 'Elemento B', 'Elemento C']
};
const respuestaFallo = {
    status: 'error',
    mensajeError: '404 - Recurso no encontrado'
};
procesarRespuesta(respuestaOk);
procesarRespuesta(respuestaFallo);
// RETO 5
console.log('--- RETO 5 ---');
class ServicioDatos {
    endpoint;
    constructor(endpoint) {
        this.endpoint = endpoint;
    }
    conectar() {
        console.log('Conectando a ' + this.endpoint);
    }
}
class ServicioUsuarios extends ServicioDatos {
    entidad = 'usuarios';
    constructor(endpoint) {
        super(endpoint);
    }
    obtenerRutaCompleta() {
        this.conectar();
        console.log(`Consultando entidad: ${this.endpoint}/${this.entidad}`);
    }
}
const servicioUsuarios = new ServicioUsuarios('https://api.miempresa.com/v1');
servicioUsuarios.obtenerRutaCompleta();
