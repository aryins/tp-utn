import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import "../styles/Home.css";
import { Footer } from "../components/Footer";


const Home = () => {

  
  const [area, funcionQueActualizaElEstado] = useState("cafe");
  const cambiarArea = () => {
    funcionQueActualizaElEstado("cafeteras");
  }
  
  const handleClick = () => {
    cambiarArea(valorPrevio => valorPrevio === "cafe" ? "cafeteras" : "cafe");
  }

  return (
    <>
      
      <Header />
      <h1>Café de la mejor calidad, siempre Caffee</h1>
      <section>
        <p>Bienvenidos a Caffee</p>
        <button onClick={handleClick}>Cambiar área</button>
      </section>
      <section>
        <h2>Portal de Sensaciones</h2>
      <div className="products-list">
        <div>
          <img src="https://www.nespresso.com/ecom/medias/sys_master/public/44327065813022/C-1324-OL-PLP-320x320.png?impolicy=small&imwidth=200&imdensity=1" alt="Producto 1" />
          <h3>Cápsula Vaniglia Descaffeinato</h3>
          <p>Sabor a Vainilla y sin cafeína</p>
        <p>$700</p>
        <button>Agregar al carrito</button>
        </div>

        <div>
        <img src="https://www.nespresso.com/ecom/medias/sys_master/public/16653932462110/ispirazione-roma-2x.png?impolicy=small&imwidth=200&imdensity=1" alt="Producto 2" />
        <h3>Cápsula Espresso Intenso</h3>
       <p>$750</p>
        <button>Agregar al carrito</button>
      </div>

      <div>
        <img src="https://www.nespresso.com/ecom/medias/sys_master/public/45772094013470/C-1350-PLP-320x320.png?impolicy=small&imwidth=200&imdensity=1" alt="Producto 3" />
        <h3>Cápsula Lungo Classico</h3>
        <p>Sabor equilibrado y suave</p>
        <p>$720</p>
        <button>Agregar al carrito</button>
      </div>

      <div>
        <img src="https://www.nespresso.com/ecom/medias/sys_master/public/16724973486110/shangai-lungo-2x.png?impolicy=small&imwidth=200&imdensity=1" alt="Producto 4" />
        <h3>Cápsula Cappuccino</h3>
        <p>Mezcla cremosa con leche</p>
        <p>$800</p>
        <button>Agregar al carrito</button>
      </div>

      <div>
        <img src="https://www.nespresso.com/ecom/medias/sys_master/public/33381856575518/vienna-lungo-decaf-2x.png?impolicy=small&imwidth=200&imdensity=1" alt="Producto 5" />
        <h3>Cápsula Caramel Macchiato</h3>
        <p>Dulce toque de caramelo</p>
        <p>$850</p>
        <button>Agregar al carrito</button>
      </div>

      <div>
        <img src="https://www.nespresso.com/ecom/medias/sys_master/public/44950693150750/Ristretto-Deca-320x320.png?impolicy=small&imwidth=200&imdensity=1" alt="Producto 6" />
        <h3>Cápsula Ristretto</h3>
        <p>Café corto e intenso</p>
        <p>$730</p>
        <button>Agregar al carrito</button>
      </div>

      <div>
        <img src="https://www.nespresso.com/ecom/medias/sys_master/public/16653730414622/corto-2x.png?impolicy=small&imwidth=200&imdensity=1" alt="Producto 7" />
        <h3>Cápsula Mocha</h3>
        <p>Chocolate y café en equilibrio</p>
        <p>$870</p>
        <button>Agregar al carrito</button>
      </div>

      <div>
        <img src="https://www.nespresso.com/ecom/medias/sys_master/public/16724849066014/vienna-lungo-2x.png?impolicy=small&imwidth=200&imdensity=1" alt="Producto 8" />
        <h3>Cápsula Latte</h3>
        <p>Café suave con leche espumosa</p>
        <p>$780</p>
        <button>Agregar al carrito</button>
      </div>

            <div>
        <img src="https://www.nespresso.com/ecom/medias/sys_master/public/45823818727454/C-1351-PLP-320x320.png?impolicy=small&imwidth=200&imdensity=1" alt="Producto 9" />
        <h3>Cápsula Costa Rica</h3>
        <p>Café con notas frutales</p>
        <p>$820</p>
        <button>Agregar al carrito</button>
      </div>

      <div>
        <img src="https://www.nespresso.com/ecom/medias/sys_master/public/16653733724190/ethiopia-2x.png?impolicy=small&imwidth=200&imdensity=1" alt="Producto 10" />
        <h3>Cápsula Ethiopia</h3>
        <p>Aromas florales y delicados</p>
        <p>$840</p>
        <button>Agregar al carrito</button>
      </div>

      <div>
        <img src="https://www.nespresso.com/ecom/medias/sys_master/public/16653527384094/colombia-2x.png?impolicy=small&imwidth=200&imdensity=1" alt="Producto 11" />
        <h3>Cápsula Colombia</h3>
        <p>Sabor afrutado y balanceado</p>
        <p>$860</p>
        <button>Agregar al carrito</button>
      </div>

      <div>
        <img src="https://www.nespresso.com/ecom/medias/sys_master/public/16724845232158/tokyo-lungo-2x.png?impolicy=small&imwidth=200&imdensity=1" alt="Producto 12" />
        <h3>Cápsula India</h3>
        <p>Notas especiadas e intensas</p>
        <p>$880</p>
        <button>Agregar al carrito</button>
      </div>

      <div>
        <img src="https://www.nespresso.com/ecom/medias/sys_master/public/16724841758750/stockholm-lungo-2x.png?impolicy=small&imwidth=200&imdensity=1" alt="Producto 13" />
        <h3>Cápsula México</h3>
        <p>Café con cuerpo y carácter</p>
        <p>$790</p>
        <button>Agregar al carrito</button>
      </div>

      <div>
        <img src="https://www.nespresso.com/ecom/medias/sys_master/public/45970564808734/maple-pecan-ol-320x320.png?impolicy=small&imwidth=200&imdensity=1" alt="Producto 14" />
        <h3>Cápsula Guatemala</h3>
        <p>Sabor intenso con notas de cacao</p>
        <p>$810</p>
        <button>Agregar al carrito</button>
      </div>

      <div>
        <img src="https://www.nespresso.com/ecom/medias/sys_master/public/16654101577758/rio-de-janeiro-2x.png?impolicy=small&imwidth=200&imdensity=1" alt="Producto 15" />
        <h3>Cápsula Brasil</h3>
        <p>Café suave con notas de cereal</p>
        <p>$770</p>
        <button>Agregar al carrito</button>
      </div>

      <div>
        <img src="https://www.nespresso.com/ecom/medias/sys_master/public/16653500481566/buenos-aires-lungo-2x.png?impolicy=small&imwidth=200&imdensity=1" alt="Producto 16" />
        <h3>Cápsula Argentina</h3>
        <p>Mezcla robusta y equilibrada</p>
        <p>$800</p>
        <button>Agregar al carrito</button>
      </div>

      <div>
        <img src="https://www.nespresso.com/ecom/medias/sys_master/public/16724971225118/paris-2x.png?impolicy=small&imwidth=200&imdensity=1" alt="Producto 17" />
        <h3>Cápsula Perú</h3>
        <p>Sabor suave con notas de nuez</p>
        <p>$830</p>
        <button>Agregar al carrito</button>
      </div>

      <div>
        <img src="https://www.nespresso.com/ecom/medias/sys_master/public/45970564808734/maple-pecan-ol-320x320.png?impolicy=small&imwidth=200&imdensity=1" alt="Producto 18" />
        <h3>Cápsula Kenya</h3>
        <p>Café vibrante con acidez cítrica</p>
        <p>$850</p>
        <button>Agregar al carrito</button>
      </div>

      <div>
        <img src="https://www.nespresso.com/ecom/medias/sys_master/public/45486078885918/C-1346-PLP-320x320.png?impolicy=small&imwidth=200&imdensity=1" alt="Producto 19" />
        <h3>Cápsula Puerto Rico</h3>
        <p>Notas dulces y afrutadas</p>
        <p>$880</p>
        <button>Agregar al carrito</button>
      </div>

      <div>
        <img src="https://www.nespresso.com/ecom/medias/sys_master/public/17432222531614/C-1062-Responsive-PLP.png?impolicy=small&imwidth=200&imdensity=1" alt="Producto 20" />
        <h3>Cápsula Hawaii</h3>
        <p>Café exótico con notas tropicales</p>
        <p>$900</p>
        <button>Agregar al carrito</button>
      </div>


        </div>
      </section>
      <Footer />
    </>
   
  )
}

export { Home }