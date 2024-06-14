import Home  from './components/Home/Home';
import Produtos from './components/Produtos/Produtos';
import Contatos from './components/contatos/Contatos';
import Sobrenos from './components/sobrenos/Sobrenos';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Teladeregistro from './components/Teladeregistro/Teladeregistro'
import Telalogin from './components/TelaLogin/Telalogin';
import Envelope from './components/Envelope/Envelope';
import Pastas from './components/Pastas/Pastas';
import PaymentForm from './components/Paginapagamento/Paginapagamento';
import Folheto from './components/Folheto/Folheto';
import Blocos from './components/Blocos/Blocos';
import Paginaupload from './components/Paginaupload/PaginaUpload';
import CartaoVisita from './components/Cartao_de_visita/CartaoVisita';
import Banner from './components/Banner/Banner';
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
         <Route path='/sobrenos' element={<Sobrenos/>}/>
         <Route path='/telalogin' element={<Telalogin/>}/>
         <Route path='/teladeregistro' element={<Teladeregistro/>} />
         <Route path='/cartaovisita' element={<CartaoVisita/>} />
         <Route path='/banner' element={<Banner/>} />
         <Route path='/envelope' element={<Envelope/>} />
         <Route path='/pastas' element={<Pastas/>} />
         <Route path='/folheto' element={<Folheto/>} />
         <Route path='/blocos' element={<Blocos/>} />
         <Route path='/paginaupload' element={<Paginaupload/>} />




         <Route path='/paginapagamento' element={<PaymentForm/>} />


         </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
