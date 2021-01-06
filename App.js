import aguja from './img/aguja.png';
import aviso from './img/aviso.png';
import avisoH from './img/avisoH.png';
import boton from './img/boton.png';
import boton1 from './img/boton1.png';
import boton1H from './img/boton1H.png';
import boton2 from './img/boton2.png';
import boton2H from './img/boton2H.png';
import boton3 from './img/boton3.png';
import boton3H from './img/boton3H.png';
import boton4 from './img/boton4.png';
import boton4H from './img/boton4H.png';
import boton5 from './img/boton5.png';
import boton5H from './img/boton5H.png';
import botona from './img/botona.png';
import botonA from './img/botonaA.png';
import botonC from './img/botonC.png';
import botonCA from './img/botonCA.png';
import botonM from './img/botonM.png';
import botonMA from './img/botonMA.png';
import explosion from './img/explosion.gif';
import fondo from './img/fondo.jpg';
import fuego from './img/fuego.png';
import fuel from './img/fuel.png';
import medidor from './img/medidor.png';
import nave from './img/nave.png';
import './App.css';

function App() {

  return (
    <div className="App">

      <div id="nave">
        <img id="imgnave" src={nave} alt="img nave" />
        <img id="imgnaveon" src={fuego} alt="img naveon" />
      </div>

      <div class="a">

        <div id="cpanel">

          <div id="marco1"></div>

          <div id="marco2"></div>

          <div id="marco3"></div>

          <div id="text1">
            <p>VELOCIDAD:</p>
          </div>

          <div id="text2">
            <p>ALTURA:</p>
          </div>

          <div id="text3">
            <p>COMBUSTIBLE:</p>
          </div>

          <div id="velocidad"> </div>

          <div id="altura"> </div>
          <div id="combustible">100</div>

        </div>
      </div>

      <div class="b">

      </div>

      <div class="c">

        <div id="menuMovil">
          <div id="plantilla"></div>
          <div id="guiaMovil">
            <a href="guia.html">GUIA</a>
          </div>
          <div id="PausaMovil"> </div>
          <div id="JugarMovil"> </div>
          <div id="reinicioMovil"> </div>
          <div id="confMovil"> </div>
        </div>

        <div id="menu">

          <div id="guia">
            <a href="guia.html">GUIA</a>
          </div>

          <div id="Pausa"> </div>
          <div id="Jugar"> </div>
          <div id="reinicio"> </div>
          <div id="conf"> </div>

        </div>

        <div id="boton"> </div>

        <div id="ajustes">
          <div id="finalizar"></div>
          <div id="finalizarMovil"></div>
          <h3>Ajustes</h3>
          <p>Elije una dificultad</p>
          <br/>
            <button id="dificultad">Basica</button>
            <br/>
        </div>
 	
      </div>
          <div class="d">
            <div id="planet"> </div>
          </div>
        </div>
  );
}

export default App;
