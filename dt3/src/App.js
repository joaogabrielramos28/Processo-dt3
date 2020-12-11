import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './assets/logos/Logo3.png';

import {Tab,Tabs} from 'react-bootstrap';
import { Button, Badge } from "react-bootstrap";
import { Container, Row, Col } from 'react-bootstrap';
import { Carousel, CarouselItem } from 'react-bootstrap';
import {Table} from 'react-bootstrap'

import CartIcon from "./assets/icons/shopping-cart.svg";
import RateIcon from "./assets/icons/rate.png";
import Instagram from "./assets/icons/instagram.svg";
import Facebook from './assets/icons/facebook.svg';
import Twitter from './assets/icons/twitter.svg';
import Youtube from './assets/icons/youtube.svg';

import RhinoBlueCarousel from './assets/carousel/carousel-blue.png';
import RhinoGreenCarousel from "./assets/carousel/carousel-green.png";
import RhinoOrangeCarousel from "./assets/carousel/carousel-orange.png";
import RhinoRedCarousel from './assets/carousel/carousel-red.png';
import RhinoWhiteCarousel from './assets/carousel/carousel-white.png';
import RhinoBlackCarousel from './assets/carousel/carousel-black.png';


import RhinoBlack from './assets/cadeiras-semFundo/Rhino-Black.png';
import RhinoRed from './assets/cadeiras-semFundo/Rhino-Red.png';
import RhinoBlue from './assets/cadeiras-semFundo/Rhino-Blue.png'
import RhinoOrange from './assets/cadeiras-semFundo/Rhino-Orange.png';
import RhinoGreen from './assets/cadeiras-semFundo/Rhino-Green.png';
import RhinoWhite from './assets/cadeiras-semFundo/Rhino-White.png';

import RhinoCapa from './assets/capas/CAPA.jpg';
import Design from './assets/capas/design.jpg';
import Video from './assets/capas/video.mp4'; 
import Garantia from './assets/capas/garantia-Elite.jpg';
import VideoEncosto from './assets/capas/video2.mp4';
import RhinoFrontal from './assets/capas/Rhino-Frontal.svg';
import RhinoLateral from './assets/capas/Rhino-Lateral.svg';




function App() {
  // Funções para mudar a cor da cadeira do vestuario
  function alteraCor(cor) {
    //Pegando a foto principal
    var foto = document.querySelector("#principal");
    //Mudando o atributo src da imagem
    foto.setAttribute('src', cor);
  }

  return (
    <div id="hotsite">

      {/* Navbar */}

      <div className="navbar">
        <Container fluid>
          <Row lg={1}>
            <Col><a id="logo" href="#"><img className="logotipo" src={Logo} /></a></Col>
          </Row>
          <Row lg={1}>
            <Col>
              <a href="https://www.dt3sports.com.br/">Store</a>
              <a href="#design-title">Design</a>
              <a href="#footer">Redes sociais</a>
              <a href="https://dt3.zendesk.com/hc/pt-br">Suporte</a>
              

            </Col>
            <Col></Col>
            <Col></Col>
          </Row>

        </Container>
      </div>

      {/* Título da cadeira */}
      <Container className="detalhes-cadeira">
        <div className="titulo">
          <h2>DT3sports Rhino</h2>
          <h3 className="slogan">ALWAYS <strong>GAMER</strong></h3>
        </div>

        {/* Filtros da cadeira */}
        <div className="filtro">
          <Button>Gamer<Badge></Badge></Button>
          <Button>Cadeira<Badge></Badge></Button>

          <div className="preço">
            <h2><strong>R$</strong> 2.249</h2>
          </div>

        </div>
        <div className="comprar">
          <img src={RateIcon} className="rate" />
          <a href="https://www.dt3sports.com.br/loja/elite-series/cadeira-gamer-dt3sports-rhino/"><button >COMPRE AGORA <img src={CartIcon} /></button></a>

        </div>

        <div className="cadeira-principal">
          <img id="principal" src={RhinoBlack} />
        </div>

        <div className="sobre">
          <p>Apoio de braço 4D ajustável. Estrutura 100% de
          aço reforçado para suportar maior peso. Estofamento
          de couro sintético PU “Premium Label Edition” com
          maior espessura. Rodas especiais de 75mm super
          resistentes para piso ou carpete. Duas almofadas
          inclusas para apoio lombar e pescoço. Ambas com
          logos bordados. Mecanismo Frog com trava do sistema rocking
          </p>
        </div>
        {/* Carousel de cores da cadeira */}
        <div className="cores-cadeira">
          <Carousel indicators={false}>
            <CarouselItem interval={5000}>
              <img id="blue" src={RhinoBlueCarousel}
                width="95px"
                height="95px"
                onClick={() => alteraCor(RhinoBlue)} />
              <img id="green" src={RhinoGreenCarousel}
                width="95px"
                height="95px"
                onClick={() => alteraCor(RhinoGreen)} />
              <img id="orange" src={RhinoOrangeCarousel}
                width="95px"
                height="95px"
                onClick={() => alteraCor(RhinoOrange)} />
            </CarouselItem>
            <CarouselItem interval={5000}>
              <img id="red" src={RhinoRedCarousel}
                width="95px"
                height="95px"
                onClick={() => alteraCor(RhinoRed)} />
              <img id="black" src={RhinoBlackCarousel}
                width="95px"
                height="95px"
                onClick={() => alteraCor(RhinoBlack)} />
              <img id="white" src={RhinoWhiteCarousel}
                width="95px"
                height="95px"
                onClick={() => alteraCor(RhinoWhite)} />


            </CarouselItem>


          </Carousel>
        </div>

      </Container>
      <div className="design">
        <img src={RhinoCapa} />
        
        <Tabs defaultActiveKey="design" id="uncontrolled-tab-example" id="design">
          <Tab eventKey="design" title="Design" id="design">
            <img src={Design} /><h2 id="design-title">Design inovador</h2>
            <p id="design-text">A costura com padrão hexagonal da Rhino complementa
               o estilo racing com um toque refinado.
            </p>
          </Tab>
          <Tab eventKey="Sistema-Frog" title="Sistema Frog" id="frog">
            <video  autoplay="1" loop="1" preload="auto" src={Video}></video>
            <h2 id="frog-title">Sistema Frog</h2>
            <p id="frog-text">A exclusividade de poder travar em qualquer ângulo. O mecanismo frog
              , proporciona a mesma sensação que as clássicas poltronas de avô dão
              , onde você sente o seu corpo totalmente em repouso sem forçar a musculatura
               para atingir a posição ideal e mais confortável.</p>
          </Tab>
          <Tab eventKey="encosto" title="Encosto" id="encosto">
            <video  autoplay="1" loop="1" preload="auto" src={VideoEncosto}></video>
            <h2 id="frog-title">RECLÍNIO DE ATÉ 180º</h2>
            <p id="frog-text">Com o encosto reclinável mais o ajuste do sistema frog, os modelos da Elite Series chegam até 180º da
             forma mais ergonômica possível. Para melhor
              posicionamento durante o gameplay ou descanso durante os intervalos.</p>
          </Tab>
          <Tab eventKey="Garantia" title="Garantia" id="garantia">
            <img src={Garantia} />
            <ul>
              <h2 id="garantia-title">Todas as cadeiras da Elite Series contam com:</h2>
              <li>6 anos na estrutura de aço</li>
              <li>3 anos na base e rodinhas</li>
              <li>2 anos no cilíndro de gás</li>
              <li>1 ano nas demais partes</li>
            </ul>
            
          </Tab>
          <Tab eventKey="especificacao" title="Especificações" id="especificacao">
            <div className="fotos">
            <img src={RhinoFrontal} style={{width:'400px',height:"400px"}}/>

            <Table striped bordered hover variant="dark">
                <tbody>
                  <tr>
                    <td>Revestimento</td>
                    <td>Couro PU Premium</td>
                  </tr>
                  <tr>
                    <td>Estrutura</td>
                    <td>100% Aço 2.0mm</td>
                  </tr>
                  <tr>
                    <td>Densidade do estofamento</td>
                    <td>65D</td>
                  </tr>
                  <tr>
                    <td>Espessura do assento</td>
                    <td>12 cm</td>
                  </tr>
                  <tr>
                    <td>Braço</td>
                    <td>4D</td>
                  </tr>
                  <tr>
                    <td>Almofadas</td>
                    <td>Pescoço e lombar</td>
                  </tr>
                  <tr>
                    <td>Rodas</td>
                    <td>Nylon com acabamento em PU, 75mm</td>
                  </tr>

                  
                </tbody>
              </Table>
              
            </div>


          
            
              

          </Tab>
          
        </Tabs>
      </div>

      <div className="footer" id="footer">
        <footer>
          
        <div className="rede-sociais">
          <a href="https://www.instagram.com/dt3sports/"><img  src={Instagram} /></a>
          <a href="https://www.facebook.com/DT3sports/"><img src={Facebook} /></a>
          <a href="https://twitter.com/dt3sports"><img src={Twitter}/></a>
          <a href="https://www.youtube.com/dt3sports"><img src={Youtube} /></a>
          <h3>/dt3sports</h3>
        </div>
         
        </footer>
      </div>
    </div>

  );
}

export default App;
