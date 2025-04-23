class Servicios {
    constructor(id, nombre, descripcion, desglose,imagen) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.desglose = desglose;
        this.imagen = imagen;
    }

    // Método estático para crear un objeto Course a partir de los datos que tenemos en la base de datos
    static fromDatabase(data) {
        return new Servicios(
            data.id,
            data.nombre,
            data.descripcion,
            data.desglose,
            data.imagen,
        );
    }

    // Este método convierte el objeto Course a formato JSON
    toJSON() {
        return {
            id: this.id,
            nombre: this.nombre,
            descripcion: this.descripcion,
            desglose: this.desglose,
            imagen: this.imagen,
        };
    }
}

export default Servicios;