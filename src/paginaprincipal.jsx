import './paginaprincipal.css'
import Footer from './components/footer.jsx'
import imagemods from "../src/assets/ods.png"
import imagemfoto from "../src/assets/foto.png"
function Paginaprincipal (){
    return (
        
        <>
        <div id="barra">
      
        </div>
        <div id="container">
        </div>

        <h1 id="h1p">Usando React Router</h1>
        <h2 id="t1">Sobre a Ods:</h2>
        
        <a href="/ods" id="saiba">
            <img src={imagemods} />
        </a>
        
        <h2 id="t2">Criador da pagina:</h2>
        <a href="mim" id="mim">
            <img src={imagemfoto} />
        </a>
        <Footer/>
        </>
    )
}

export default Paginaprincipal
