// // Evitamos generar la página como HTML estático y la ejecutamos en el servidor en cada solicitud 
// export const prerender = false;

// // Importamos la librería Resend para enviar correos electrónicos
// import { Resend } from 'resend';
// // Creamos una instancia del cliente de Resend utilizando la clave API almacenada en las variables de entorno
// const resend = new Resend(import.meta.env.RESEND_API_KEY);

// /**
//  * Método que maneja una solicitud POST para enviar un correo electrónico utilizando Resend
//  * @param {Object} request - Solicitud HTTP con un cuerpo JSON que contiene los datos del formulario de contacto
//  * @returns Devuelve una respuesta JSON con éxito o error según el resultado del intento de envío del correo
//  */

// export async function POST({ request }) {
//   try {
//     // Extraemos los datos del cuerpo de la solicitud (nombre, teléfono, email, asunto y mensaje)
//     const body = await request.json();
//     const { email, subject, message, nombre, telefono } = body;

//     // Enviamos el correo electrónico usando Resend
//     await resend.emails.send({
//         from: 'onboarding@resend.dev', // Dirección remitente definida por Resend
//         to: 'marialuna.garcia-arcicollar@a.vedrunasevillasj.es',
//         subject,
//         html: `
//           <p><strong>Nombre:</strong> ${nombre}</p>
//           <p><strong>Teléfono:</strong> ${telefono}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Mensaje:</strong><br>${message}</p>
//         `
//       });
      

//     //Manejo de errores
//     return new Response(JSON.stringify({ success: true }), {
//       status: 200,
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });

//   } catch (err) {
//     console.error(err);
//     return new Response(JSON.stringify({ error: 'Error al enviar el correo' }), {
//       status: 500,
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//   }
// }