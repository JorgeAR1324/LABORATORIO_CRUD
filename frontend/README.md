# LAB CRUD - FRONTEND

React + Vite para consumir el backend del laboratorio

## Requisitos

- Node.js 20+
- Backend ejecutandose en `http//localhost:3000`
- Base de datos `lab_crud`

## Instalar 

```bash
npm install
```

## Ejecutar

```bash
npm run dev
```

Frontend : `http//localhost:5173`

## Usuario de Prueba

Admin:
- `admin@labcrud.local`
- `Admin123*`

Cliente:
- `cliente@labcrud.local`
- `Cliente123*`

## Responsabilidades

- `assets`: estilos y recursos.
- `components`: componente reutilizables.
- `config`: configuración del frontend.
- `context`: estado global de autenticación.
- `hooks`: hooks propios.
- `pages`: pantallas.
- `services`: comunicación con la API.
- `utils`: almacenamiento de la sesión.

## Flujo

Login -> AuthContext -> JWT en localStorage -> `api.js` agrega Bearer token -> backend verifica JWT -> autorización por rol.

El botón Eliminar solo aparece para `admin`, pero el backend también verifica el rol. Ocultar un botón en React no constituye seguridad.