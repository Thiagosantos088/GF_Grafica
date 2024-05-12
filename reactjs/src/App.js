import Home  from './components/Home/Home';
import Produtos from './components/Produtos/Produtos';
import Contatos from './components/contatos/Contatos';
import Sobrenos from './components/sobrenos/Sobrenos';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Teladeregistro from './components/Teladeregistro/Teladeregistro'
import Telalogin from './components/TelaLogin/Telalogin';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/contatos' element={<Contatos/>}/>
         <Route path='/home' element={<Home/>}/>
         <Route path='/produtos' element={<Produtos/>}/>
         <Route path='/sobrenos' element={<Sobrenos/>}/>
         <Route path='/telalogin' element={<Telalogin/>}/>
         <Route path='/teladeregistro' element={<Teladeregistro/>} />

         </Routes>
    </Router>
    
    </>
  );
}

export default App;
