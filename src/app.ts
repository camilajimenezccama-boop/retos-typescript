// RETO 1

console.log('--- RETO 1 ---');

interface UsuarioAPI {
  id: number;
  username: string;
  email: string;
  rol: 'admin' | 'editor' | 'alumno';
  token?: string;
}

const usuarioValido: UsuarioAPI = {
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

interface Tarea {
  id: number;
  titulo: string;
  completada: boolean;
  prioridad: 'Alta' | 'Media' | 'Baja';
  fechaEntrega?: string;
}

const misTareas: Tarea[] = [
  { id: 1, titulo: 'Instalar TypeScript', completada: true, prioridad: 'Alta' },
  { id: 2, titulo: 'Repasar interfaces y clases', completada: false, prioridad: 'Alta' },
  { id: 3, titulo: 'Empezar con Angular', completada: false, prioridad: 'Media' }
];

function completarTarea(lista: Tarea[], idBuscar: number): Tarea[] {
  return lista.map((tarea) =>
    tarea.id === idBuscar ? { ...tarea, completada: true } : tarea
  );
}

const tareasActualizadas = completarTarea(misTareas, 2);

console.log('Lista original (intacta):', misTareas);
console.log('Lista nueva (inmutable):', tareasActualizadas);


// RETO 3
console.log('--- RETO 3 ---');

class ProductComponent {
  private iva: number = 0.21;

  constructor(
    public nombreProducto: string,
    private precioBase: number
  ) {}

  public obtenerPrecioFinal(): number {
    return Number((this.precioBase * (1 + this.iva)).toFixed(2));
  }
}

const producto = new ProductComponent('Teclado Mecánico', 80);

console.log(`Producto: ${producto.nombreProducto}`);
console.log(`Precio con IVA: ${producto.obtenerPrecioFinal()} €`);

// producto.precioBase = 10; // Error: La propiedad 'precioBase' es privada y solo se puede acceder a ella desde la clase 'ProductComponent'.


// RETO 4
console.log('--- RETO 4 ---');

interface RespuestaServidor {
  status: 'success' | 'error';
  data?: string[];
  mensajeError?: string;
}

function procesarRespuesta(res: RespuestaServidor): void {
  if (res.status === 'success') {
  
    if (res.data) {
      console.log('Datos recibidos del servidor:');
      res.data.forEach((item) => console.log(` - ${item}`));
    }
  } else {
    console.error(`Error del servidor: ${res.mensajeError ?? 'Error desconocido'}`);
  }
}

const respuestaOk: RespuestaServidor = {
  status: 'success',
  data: ['Elemento A', 'Elemento B', 'Elemento C']
};

const respuestaFallo: RespuestaServidor = {
  status: 'error',
  mensajeError: '404 - Recurso no encontrado'
};

procesarRespuesta(respuestaOk);
procesarRespuesta(respuestaFallo);


// RETO 5
console.log('--- RETO 5 ---');

class ServicioDatos {
  constructor(public endpoint: string) {}

  public conectar(): void {
    console.log('Conectando a ' + this.endpoint);
  }
}

class ServicioUsuarios extends ServicioDatos {
  public entidad: string = 'usuarios';

  constructor(endpoint: string) {
    super(endpoint);
  }

  public obtenerRutaCompleta(): void {
    this.conectar();
    console.log(`Consultando entidad: ${this.endpoint}/${this.entidad}`);
  }
}

const servicioUsuarios = new ServicioUsuarios('https://api.miempresa.com/v1');
servicioUsuarios.obtenerRutaCompleta();