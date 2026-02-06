# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Caffee - Gestión de Catálogo Cafetero

### Descripción general del proyecto
[cite_start]Caffee es una aplicación web de tipo **SPA (Single Page Application)** diseñada para la administración de un catálogo de café de especialidad[cite: 5, 7]. [cite_start]El proyecto permite a los usuarios autenticados gestionar productos mediante un sistema **CRUD** (Crear, Leer, Actualizar y Borrar), ofreciendo una interfaz dinámica y segura integrada con servicios de Backend-as-a-Service[cite: 17, 21, 29].

### Tecnologías utilizadas
* [cite_start]**React JS**: Biblioteca principal para la construcción de la interfaz de usuario basada en componentes[cite: 7, 59].
* [cite_start]**Firebase Authentication**: Gestión de registro e inicio de sesión de usuarios[cite: 11, 15, 60].
* [cite_start]**Firebase Firestore**: Base de datos NoSQL para la persistencia de los productos en tiempo real[cite: 7, 29, 60].
* [cite_start]**React Router DOM**: Manejo de la navegación y protección de rutas privadas[cite: 7, 38, 59].
* [cite_start]**CSS Nativo**: Estilizado personalizado sin dependencias externas, aplicando Flexbox para el diseño responsivo[cite: 7, 39, 62].

### Instrucciones para instalar y ejecutar
Para correr este proyecto localmente, sigue estos pasos:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/nombre-del-repo.git](https://github.com/tu-usuario/nombre-del-repo.git)
    cd nombre-del-repo
    ```
2.  **Instalar dependencias:**
    ```bash
    npm install
    ```
3.  **Configurar Firebase:**
    * Crea un proyecto en [Firebase Console](https://console.firebase.google.com/).
    * Habilita *Authentication* (Email/Password) y *Cloud Firestore*.
    * Crea un archivo `.env` o configura tus credenciales en `src/config/firebase.js`.
4.  **Iniciar la aplicación:**
    ```bash
    npm run dev
    ```

### Breve explicación de la estructura del proyecto
[cite_start]El proyecto se organiza de forma modular para separar la lógica de la vista y los datos[cite: 47, 61]:
* [cite_start]`src/components`: Componentes reutilizables como Header, Footer y la lógica de `ProtectedRoute`[cite: 47].
* [cite_start]`src/views`: Páginas principales de la aplicación (Home, Login, Registro, Quienes Somos)[cite: 47].
* [cite_start]`src/context`: Implementación del `AuthContext` para la gestión global de la sesión[cite: 12, 16, 47].
* [cite_start]`src/services`: Funciones de comunicación con la API de Firebase para el manejo del CRUD[cite: 47].
* [cite_start]`src/styles`: Archivos CSS nativos específicos para cada sección[cite: 39, 47].
* `src/config`: Configuración técnica del SDK de Firebase.

### Consideraciones generales sobre el desarrollo
* [cite_start]**Gestión de Sesión**: Se implementó el hook `useContext` para evitar el *prop drilling*, permitiendo que cualquier componente acceda a los datos del usuario de forma eficiente[cite: 12, 59].
* [cite_start]**Rutas Protegidas**: Se diseñó un componente *Wrapper* que verifica la existencia de un usuario activo antes de permitir el acceso al Dashboard, redirigiendo automáticamente al Login en caso contrario[cite: 19, 38].
* [cite_start]**Persistencia**: Se utilizó el observador `onAuthStateChanged` de Firebase para garantizar que la sesión no se pierda al recargar el navegador[cite: 16, 58].
* [cite_start]**Validaciones**: Los formularios incluyen manejo de estados para capturar errores de autenticación y proporcionar feedback visual al usuario en tiempo real[cite: 13].
