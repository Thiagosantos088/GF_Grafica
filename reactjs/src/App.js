 import Home  from './components/Home/Home';
 import Produtos from './components/Produtos/Produtos';
 import Contatos from './components/Contatos/Contatos';
// import Sobrenos from './components/sobrenos/Sobrenos';
 import Header from './components/Header/Header';
 
 import Footer from './components/Footer/Footer';
  // import Teladeregistro from './components/Teladeregistro/Teladeregistro'
  // import Telalogin from './components/TelaLogin/Telalogin';
  import CartaoVisita from './components/Cartao_de_visita/CartaoVisita';
//import Banner from './components/Banner/Banner';
import { BrowserRouter as Router, Route, Routes, BrowserRouter  } from 'react-router-dom';

 function App() {
   return (
     <>
     <BrowserRouter>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contatos' element={<Contatos/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/produtos' element={<Produtos/>}/>
          {/* <Route path='/sobrenos' element={<Sobrenos/>}/>
          <Route path='/telalogin' element={<Telalogin/>}/>
          <Route path='/teladeregistro' element={<Teladeregistro/>} />
          <Route path='/cartaovisita' element={<CartaoVisita/>} />
          <Route path='/banner' element={<Banner/>} /> */}
          </Routes>
     </BrowserRouter>
    
     </>
   );
 }

 export default App;