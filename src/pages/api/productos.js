// Importamos los métodos útiles para interactuar con la base de datos
import { getAllProductos } from '../../services/productoService.js';

/**
 * Método que obtiene todos los productos almacenados en la base de datos con paginación
 * @param {Object} request - Solicitud HTTP que puede contener parámetros de consulta `page` y `limit`
 * @returns Devuelve el cuerpo de la respuesta y el status en el que se encuentra, controlando posibles errores
 */
export async function GET({ request }) {
    try {
      // Extraemos los parámetros de paginación de la consulta (query)
      const url = new URL(request.url);
      const page = parseInt(url.searchParams.get('page')) || 1; // Página (por defecto 1)
      const limit = parseInt(url.searchParams.get('limit')) || 5; // Limite (por defecto 5)
  
      // Validación simple de los parámetros
      if (page < 1 || limit < 1) {
        return new Response(JSON.stringify({ error: 'Page and limit must be greater than 0' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
  
      // Llamamos al servicio para obtener los productos con paginación
      const { productos, totalProductos } = await getAllProductos(page, limit);
  
      // Devuelve la respuesta con los productos paginados y la información de paginación
      return new Response(JSON.stringify({
        productos,
        pagination: {
          currentPage: page,
          totalProductos,
          totalPages: Math.ceil(totalProductos / limit),
          limit,
        }
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
  
    } catch (error) {
      // Manejo de errores
      return new Response(JSON.stringify({ error: 'No se pudieron obtener los productos' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }