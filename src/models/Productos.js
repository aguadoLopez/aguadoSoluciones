class Productos {
    constructor(id, nombre, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
    }

    // Método estático para crear un objeto Course a partir de los datos que tenemos en la base de datos
    static fromDatabase(data) {
        return new Productos(
            data.id,
            data.nombre,
            data.imagen,
        );
    }

    // Este método convierte el objeto Course a formato JSON
    toJSON() {
        return {
            id: this.id,
            nombre: this.nombre,
            imagen: this.imagen,
        };
    }
}

export default Productos;