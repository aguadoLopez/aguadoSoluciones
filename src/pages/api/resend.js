export const prerender = false;

import { Resend } from 'resend';
const resend = new Resend(import.meta.env.RESEND_API_KEY);

export async function POST({ request }) {
  try {
    // const { subject, message, email, nombre, telefono } = await request.json();

    const body = await request.json();
    const { email, subject, message, nombre, telefono } = body;

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'marialuna.garcia-arcicollar@a.vedrunasevillasj.es',
        subject,
        html: `
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Teléfono:</strong> ${telefono}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong><br>${message}</p>
        `
      });
      

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Error al enviar el correo' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}