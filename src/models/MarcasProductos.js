class MarcasProductos {
    constructor(id, nombre, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
    }

    // Método estático para crear un objeto MarcasProductos a partir de los datos que tenemos en la base de datos
    static fromDatabase(data) {
        return new MarcasProductos(
            data.id,
            data.nombre,
            data.imagen,
        );
    }

    // Este método convierte el objeto MarcasProductos a formato JSON
    toJSON() {
        return {
            id: this.id,
            nombre: this.nombre,
            imagen: this.imagen,
        };
    }
}

export default MarcasProductos;