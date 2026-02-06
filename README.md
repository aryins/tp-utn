# Caffee - Crea tu café

### Descripción general del proyecto
Caffee es una aplicación web diseñada para la administración de un catálogo de café que vos mismo creas. 
El proyecto permite a los usuarios autenticados gestionar productos mediante un sistema **CRUD** (Crear, Leer, Actualizar y Borrar), ofreciendo una interfaz dinámica y segura integrada con servicios de Backend-as-a-Service.

### Tecnologías utilizadas
* **React JS**: Biblioteca principal para la construcción de la interfaz de usuario basada en componentes
* **Firebase Authentication**: Gestión de registro e inicio de sesión de usuarios
* **Firebase Firestore**: Base de datos NoSQL para la persistencia de los productos en tiempo real
* **React Router DOM**: Manejo de la navegación y protección de rutas privadas
***CSS Nativo**: Estilizado personalizado sin dependencias externas, aplicando Flexbox para el diseño responsivo

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
El proyecto se organiza de forma modular para separar la lógica de la vista y los datos:
*`src/components`: Componentes reutilizables como Header, Footer y la lógica de `ProtectedRoute`.
*`src/views`: Páginas principales de la aplicación (Home, Login, Registro, Quienes Somos).
*`src/context`: Implementación del `AuthContext` para la gestión global de la sesión.
*`src/services`: Funciones de comunicación con la API de Firebase para el manejo del CRUD.
*`src/styles`: Archivos CSS nativos específicos para cada sección.
*`src/config`: Configuración técnica del SDK de Firebase.

### Consideraciones generales sobre el desarrollo
* **Gestión de Sesión**: Se implementó el hook `useContext` para evitar el *prop drilling*, permitiendo que cualquier componente acceda a los datos del usuario de forma eficiente.
* **Rutas Protegidas**: Se diseñó un componente *Wrapper* que verifica la existencia de un usuario activo antes de permitir el acceso al Dashboard, redirigiendo automáticamente al Login en caso contrario.
* **Persistencia**: Se utilizó el observador `onAuthStateChanged` de Firebase para garantizar que la sesión no se pierda al recargar el navegador.
* **Validaciones**: Los formularios incluyen manejo de estados para capturar errores de autenticación y proporcionar feedback visual al usuario en tiempo real.
