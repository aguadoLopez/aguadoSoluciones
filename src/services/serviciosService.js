import Servicios from "../models/Servicios.js";
import { db } from "../utils/db";

/**
 * Función para obtener todos los servicios almacenados en la base de datos con paginación
 * @param {number} page - Página actual
 * @param {number} limit - Número de elementos por página
 * @returns Devuelve los servicios paginados y el total de servicios disponibles
 */
export const getAllServicios = async (page, limit) => {
    try {
      // Calculamos el OFFSET
      const offset = (page - 1) * limit;
  
      // Hacemos la consulta a la base de datos para obtener los servicios con paginación
      const [result] = await db.query('SELECT * FROM aguado.servicios LIMIT ? OFFSET ?', [limit, offset]);
      
      if (!Array.isArray(result)) {
        throw new Error('The query result is not an array');
      }
  
      // Mapeamos los resultados para crear instancias de la clase Servicios
      const servicios = result.map(servicio => Servicios.fromDatabase(servicio));
  
      // Obtenemos el total de servicios para calcular el número total de páginas
      const [countResult] = await db.query('SELECT COUNT(*) AS total FROM aguado.servicios');
      const totalServicios = countResult[0].total;
  
      return { servicios, totalServicios};
  
    } catch (error) {
      // Manejo de errores
      console.error('Error getting servicios with pagination:', error.message);
      throw new Error('Could not fetch the servicios');
    }
  };