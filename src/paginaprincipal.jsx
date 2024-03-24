import './paginaprincipal.css'
import Footer from './components/footer.jsx'
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
            <img src="./src/assets/ods.png" />
        </a>
        
        <h2 id="t2">Criador da pagina:</h2>
        <a href="mim" id="mim">
            <img src="./src/assets/foto.png" />
        </a>
        <Footer/>
        </>
    )
}

export default Paginaprincipal