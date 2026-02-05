import { Footer } from "../components/Footer"
import { Header } from "../components/Header" 

const NotFound = () => {        
    return (    
        <>
            <Header />
            <main>
                <h2>Página no encontrada</h2>
                <p>Lo sentimos, tu café se ha derramado</p>
                <p>¡preparemos otro!</p>
            </main>
            <Footer />
        </>
    );  
}   

export { NotFound };