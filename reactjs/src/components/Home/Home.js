import './Home.css'
import React from 'react';

import HC from '../../img/HC.png';
import HS from '../../img/HS.png';
import HP from '../../img/HP.png';
import HD from '../../img/HD.png';
import HE from '../../img/HE.png';
import HV from '../../img/HV.png';
import HB from '../../img/HB.png';
import HEM from '../../img/HEM.png';
import HM from '../../img/HM.png';
import HCO from '../../img/HCO.png';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Home(){
    return(
     <>
     <Header/>
      {/*P1*/}
      <div id="home">
        <div id="Header">
            <div className="body">
                 <img src={HC} id="img"/>
                 <h1>Melhores</h1>
                 <h1>preços</h1>
            </div>
            <div className="body">
                 <img src={HS} id="img"/>
                 <h1>Melhores</h1>
                 <h1>preços</h1>
            </div>
            <div className="body">
                 <img src={HP} id="img"/>
                 <h1>Melhores</h1>
                 <h1>preços</h1>
            </div>
            <div className="body">
                 <img src={HD} id="img"/>
                 <h1>Melhores</h1>
                 <h1>preços</h1>
            </div>
        </div>
        
        {/*P2*/}
        <div class="vao">
        <div class="buque" id="marh">
          <h2>OS MAIS VENDIDOS</h2>
          <div id="imgcf">
          <img src={HE} id="imge" class="imge"/>
          <img src={HV} id="imge" class="imge"/>
          <img src={HB} id="imge" class="imge"/>
          </div>
          <p id='pon'><u>VER TODOS</u></p> 
          </div>
          </div>
        {/*P3*/}
        <div class="empre">
          <img src={HEM} id="em"/>
          <h3 id="emp">A empresa se destaca não apenas pela capacidade técnica, mas também pela dedicação em entender as necessidades específicas de cada cliente. Seja na produção de materiais promocionais, embalagens personalizadas ou projetos gráficos complexos, a GF Gráfica se empenha em entregar resultados que superam as expectativas.</h3>
        </div>

        {/*P4*/}
        <div class="desta">
          <h3 id="dest">Destaque-se no mercado e fortaleça sua presença com os serviços gráficos excepcionais da nossa empresa, elevando o impacto e a memorabilidade da sua marca.</h3>
          <img src={HM} id="des"/>
        </div>
        
        {/*P5*/}
        <div class="nato" >
        <div class="notu">

        <div class="noti">
          <img src={HCO} id="no"/>
        </div>

        <div class="noc">
        <div class="osdl">
        <h3 id="h3-1">Inscreva-se em nossa newsletter</h3>
        <h3 id="h3-2">para receber últimas noticias e descontos exclusivos</h3>
        </div>  
        <input id='email' type='text' placeholder='DIGITE O EMAIL'/>
        <div >
        <button>Inscreva</button>
        </div>
        </div>
        </div>
        </div>
        </div>
        <Footer/>
     </>          
    )
}
export default Home;