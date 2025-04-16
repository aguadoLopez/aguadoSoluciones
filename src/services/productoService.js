import Productos from "../pages/productos.astro";
import { db } from "../utils/db";

/**
 * Función para obtener todos los productos almacenados en la base de datos con paginación
 * @param {number} page - Página actual
 * @param {number} limit - Número de elementos por página
 * @returns Devuelve los productos paginados y el total de productos disponibles
 */
export const getAllProductos = async (page, limit) => {
    try {
      // Calculamos el OFFSET
      const offset = (page - 1) * limit;
  
      // Hacemos la consulta a la base de datos para obtener los productos con paginación
      const [result] = await db.query('SELECT * FROM aguado.productos LIMIT ? OFFSET ?', [limit, offset]);
      
      // Verificación de que el resultado es un array
      if (!Array.isArray(result)) {
        throw new Error('The query result is not an array');
      }
  
      // Mapeamos los resultados para crear instancias de la clase Productos
      const productos = result.map(producto => Productos.fromDatabase(productos));
  
      // Obtenemos el total de productos para calcular el número total de páginas
      const [countResult] = await db.query('SELECT COUNT(*) AS total FROM aguado.productos');
      const totalProductos = countResult[0].total;
  
      // Devolvemos los productos y el total de productos
      return { productos, totalProductos};
  
    } catch (error) {
      // Manejo de errores
      console.error('Error getting productos with pagination:', error.message);
      throw new Error('Could not fetch the productos');
    }
  };