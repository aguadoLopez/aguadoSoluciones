import MarcasProductos from "../models/MarcasProductos.js";
import { db } from "../utils/db.js";

/**
 * Función para obtener todas las marcas de productos almacenados en la base de datos con paginación
 * @param {number} page - Página actual
 * @param {number} limit - Número de elementos por página
 * @returns Devuelve las marcas de productos paginados y el total de marcas de productos disponibles
 */
export const getAllMarcasProductos = async (page, limit) => {
    try {
      // Calculamos el OFFSET
      const offset = (page - 1) * limit;
  
      // Hacemos la consulta a la base de datos para obtener las marcas de productos con paginación
      const [result] = await db.query('SELECT * FROM aguado.marcasproductos LIMIT ? OFFSET ?', [limit, offset]);
      
      if (!Array.isArray(result)) {
        throw new Error('The query result is not an array');
      }
  
      // Mapeamos los resultados para crear instancias de la clase MarcasProductos
      const marcasProductos = result.map(marcaproductos => MarcasProductos.fromDatabase(marcaproductos));
  
      // Obtenemos el total de marcas de productos para calcular el número total de páginas
      const [countResult] = await db.query('SELECT COUNT(*) AS total FROM aguado.marcasproductos');
      const totalMarcasProductos = countResult[0].total;
  
      return { marcasProductos, totalMarcasProductos};
  
    } catch (error) {
      // Manejo de errores
      console.error('Error getting marcasproductos with pagination:', error.message);
      throw new Error('Could not fetch the marcasproductos');
    }
  };