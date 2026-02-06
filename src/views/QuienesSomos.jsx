import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import "../styles/QuienesSomos.css" 


const QuienesSomos = () => {
    return (
        <>
            <Header />
            <main className="info-container">
                <section className="info-section">
                    <h1>Documentación del Proyecto: Caffee</h1>
                    <hr />

                    <h3>Descripción general del proyecto</h3>
                    <p>
                        Caffee es una aplicación web diseñada para crear tus propias ideas de café. 
                        Permite a los usuarios visualizar, agregar, editar y eliminar variedades de café, 
                        ofreciendo una experiencia súper personalziada!.
                    </p>

                    <h3>Tecnologías utilizadas</h3>
                    <ul>
                        <li><strong>React:</strong> Biblioteca principal para la interfaz de usuario.</li>
                        <li><strong>React Router:</strong> Manejo de navegación y rutas protegidas.</li>
                        <li><strong>Firebase:</strong> Utilizado para la autenticación de usuarios y almacenamiento de datos.</li>
                    </ul>

                    <h3>Estructura del proyecto</h3>
                    <p>El proyecto sigue una arquitectura prolija organizada por carpetas:</p>
                    <ul>
                        <li><code>/components</code>: Elementos reutilizables como Header, Footer y el protector de rutas.</li>
                        <li><code>/views</code>: Páginas completas que representan las diferentes secciones de la app (Home, Login, Registro, etc.).</li>
                        <li><code>/context</code>: Contiene el AuthProvider que envuelve la aplicación para compartir el estado del usuario.</li>
                        <li><code>/services</code>: Funciones asíncronas para interactuar con Firebase (API).</li>
                        <li><code>/router</code>: Configuración centralizada de las rutas y acceso público/privado.</li>
                        <li><code>/config</code>: Inicialización de la conexión técnica con el SDK de Firebase.</li>
                        <li><code>/styles</code>: Archivos CSS específicos para el diseño visual de la marca Caffee.</li>
                    </ul>

                    <h3>Implementación del AuthContext y manejo de sesión</h3>
                    <p>
                        Se implementó un <strong>Context API</strong> para centralizar el estado del usuario. 
                        Utiliza el hook <code>onAuthStateChanged</code> de Firebase para detectar si hay una sesión activa de forma persistente.
                    </p>
                    <p>
                        El manejo de la sesión se complementa con un componente <code>ProtectedRoute</code>, el cual verifica la existencia de un usuario 
                        en el contexto antes de permitir el acceso a la vista principal (Home).
                    </p>

                    <h3>Decisiones técnicas relevantes</h3>
                    <ul>
                        <p>
                            Se optó por seguir la arquitectura al pie de la letra según lo visto en clase, gracias a ello reconocer los errores se volvía más fácil.
                            Gracias a seguir paso a paso las unidades vistas, se logró una comprensión total del proyecto y su implementación.
                            Se le dedicó un rol más importante al header para manejar usuarios y login de forma más sencilla y clara para el usuario.
                        </p>
                    </ul>

                    <h3>Dificultades encontradas y soluciones</h3>
                    <p>
                        <li>Uno de los mayores retos fue la organización del proyecto y reconocer cómo se debía implementar la correcta arquitectura. Se resolvió analizando las tareas específicas de cada archivo y separánolas por sus respectivas acciones </li>
                        <li>Una de las mayores dificultades fue comenzar el desarrollo, me vi envuelta en una variedad de caminos a seguir sin saber cual tomar. Logré realizar el proyecto comprendiendo paso por paso lo que se hacía gracias a estar detrás de cada unidad vista en clase </li>
                        <li>Otra dificultad fue la implementación de rutas protegidas y el manejo del estado de autenticación. Lo resolví revisando cada una de las importaciones debidas y logrando seguir el trayecto mentalmente de cómo aplicarlo en mi web</li>
                    </p>
                </section>
            </main>
            <Footer />
        </>
    )
}

export { QuienesSomos }