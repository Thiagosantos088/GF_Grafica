import Home  from './components/Home/Home';
import Produtos from './components/Produtos/Produtos';
import Contatos from './components/contatos/Contatos';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Telalogin from './components/TelaLogin/Telalogin';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
         <Route path='/' element={<Header/>}/>
         <Route path='/contatos' element={<Contatos/>}/>
         <Route path='/home' element={<Home/>}/>
         <Route path='/produtos' element={<Produtos/>}/>
         <Route path='/telalogin' element={<Telalogin/>}/>

         </Routes>
    </Router>
    
    </>
  );
}

export default App;
