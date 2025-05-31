# 🧱 Aguado Soluciones - Web de Servicios Profesionales 🛠️

**Desarrollo de Aplicaciones Web (DAW)**  
**María Luna García-Arcicóllar Merino**

---

## 📚 Índice

- [📌 Index](https://aguadoapp-a8b6gtejekcqdyar.spaincentral-01.azurewebsites.net)
- [🔧 Servicios](https://aguadoapp-a8b6gtejekcqdyar.spaincentral-01.azurewebsites.net/servicios)
- [🧺 Productos](https://aguadoapp-a8b6gtejekcqdyar.spaincentral-01.azurewebsites.net/productos)
- [📬 Contacto](https://aguadoapp-a8b6gtejekcqdyar.spaincentral-01.azurewebsites.net/contacto)

---

## 📌 Introducción

**Aguado Soluciones** es una plataforma web sencilla que tiene como objetivo ofrecer y mostrar una variedad de **servicios profesionales** como albañilería, pintura, aire acondicionado, fontanería, e instalación de placas solares.  

### 🎯 Objetivos

- Centralizar en una sola web los servicios que una empresa puede ofrecer.
- Permitir a los usuarios visualizar los productos y servicios disponibles sin necesidad de registro.
- Mantener la información clara, bien organizada y optimizada para dispositivos móviles.

### 💡 Motivación

Este proyecto surge con fines educativos, como práctica del ciclo formativo **DAW (Desarrollo de Aplicaciones Web)**, poniendo en práctica el desarrollo full-stack (base de datos, API, frontend, despliegue).

---

## 🚀 Funcionalidades y Tecnologías

### Funcionalidades

- Listado de servicios y productos ofrecidos.
- Información detallada con imagen y descripción.
- Formulario de contacto que envía mensajes por correo electrónico.
- API propia para consumo de datos desde la base de datos.

### Tecnologías utilizadas

- **Frontend**: [Astro](https://astro.build/) con enfoque mobile-first
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Diseño**: [Figma](https://figma.com/) para la interfaz
- **Backend / API**: Astro Endpoints (Node.js) para servir servicios y productos, y gestionar formularios
- **Correo**: Integración del backend con la API externa de [Resend](https://resend.com) para el envío de formularios de contacto
- **Base de datos**: MySQL alojado en Azure (Azure Database for MySQL Flexible Server)
- **Despliegue**: [Azure App Service](https://azure.microsoft.com/es-es/products/app-service/) para la app web + Azure Database for MySQL

---

## 🔧 Guía de Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/lunaMerino/aguadoSoluciones.git
cd repositorio
```

2. Instala dependencias:
```bash
npm install
```

3. Configura el archivo .env con tus variables de entorno:

4. npm run dev

## 🧑‍💻 Guía de Uso

- Accede al sitio desplegado en: [https://aguadoapp-a8b6gtejekcqdyar.spaincentral-01.azurewebsites.net](https://aguadoapp-a8b6gtejekcqdyar.spaincentral-01.azurewebsites.net)
- Navega entre las secciones disponibles:
  - `Inicio`
  - `Servicios`
  - `Productos`
  - `Contacto`
- Explora los servicios y productos disponibles.
- Usa el formulario de contacto para enviar un mensaje al correo del administrador.

---

## 📄 Documentación Técnica

Puedes consultar la documentación técnica completa, que incluye diagramas UML, diseño de base de datos, arquitectura del sistema y casos de prueba, en el siguiente enlace: [https://github.com/lunaMerino/aguadoDocu](https://github.com/lunaMerino/aguadoDocu)

👉 La documentación aún no está desplegada online, pero puedes visualizarla localmente siguiendo estos pasos:
```bash
cd docs
npm install
npm run dev
```

---

## 🎨 Diseño en Figma

Aquí puedes consultar el prototipo de diseño de la interfaz creado en Figma:

👉 [Ver diseño en Figma](https://www.figma.com/design/7YHCAuhILgwV6RyWGS0jP6/tfg?node-id=0-1&t=GVGwVUkjpOY4wAW8-1)

---

## ✅ Conclusión

El desarrollo de este proyecto ha permitido aplicar una arquitectura sencilla pero completa basada en buenas prácticas: separación de capas, API propia, base de datos relacional y despliegue en la nube. Gracias al uso de Astro en modo SSR, se ha logrado un sitio dinámico optimizado y bien estructurado, con una API funcional integrada y un backend eficiente desplegado en la nube.El objetivo final, mostrar información de servicios profesionales de forma clara y accesible, ha sido cumplido.

---

## 🤝 Contribuciones y Agradecimientos

- Profesorado del módulo de Desarrollo Web.
- Recursos utilizados: documentación oficial de Astro, Tailwind CSS, MySQL y Azure.

---

## 📝 Licencia

Este proyecto está bajo la licencia **MIT**. Puedes reutilizar y modificar este repositorio libremente con atribución.

---

## 📬 Contacto

**María Luna García-Arcicóllar Merino**  
📧 Correo: lunagmerino@gmail.com  
🌐 GitHub: [https://https://github.com/lunaMerino](https://https://github.com/lunaMerino)