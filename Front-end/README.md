# Sistema de Gestión Hotelera - Chelenko Lodge

Sistema integral de gestión hotelera desarrollado para Chelenko Lodge, que permite administrar reservas, pagos, inventario de cabañas y reportes históricos. La aplicación está construida con una arquitectura moderna de cliente-servidor, utilizando React para el frontend y Node.js con Express para el backend.

## Características Principales

### Frontend

- Panel de control (Dashboard) con métricas en tiempo real
- Control de inventario de cabañas
- Informes históricos de transacciones
- Interfaz responsiva y moderna
- Exportación de reportes en CSV

### Backend

- API RESTful con Express.js
- Base de datos MongoDB con Mongoose
- Sistema de autenticación con API Keys
- Tareas programadas para manejo de datos históricos
- Validación de datos
- Manejo de múltiples modelos de datos:
  - Cabañas
  - Reservas
  - Pagos
  - Clientes
  - Usuarios
  - Registros históricos

## Tecnologías Utilizadas

### Frontend

- React 18
- React Router DOM
- Recharts para visualización de datos
- CSS Modules
- Vite como bundler
- Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- node-cron
- bcrypt para encriptación
- dotenv para variables de entorno
