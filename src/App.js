//HomePage
import Nav from './Page/Home/nav';


//Capadaio
import Dogs from './Page/Dogs/Dogs';
import Lanches from './Page/Lanches/lanches';
import Combos from './Page/Combos/combos'
import DogPrato from './Page/DogPrato/dogprato'
import Porcao from './Page/Porcao/porcoes'
import Bebidas from './Page/Bebidas/bebidas'


//Produtos
import Produtos from './Page/Produtos/produto'





//Pedidos
import Pedido from './Page/Pedido/pedido'



//Rotas
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



import './App.css';

function App() {
  return (



    <Router>
      <Routes>

        <Route path='/' element={<Nav />} />
        <Route path='/Dogs' element={<Dogs />} />
        <Route path='/DogPrato' element={<DogPrato />} />
        <Route path='/Pedido' element={<Pedido />} />
        <Route path='/Lanches' element={<Lanches />} />
        <Route path='/Combos' element={<Combos />} />
        <Route path='/Bebidas' element={<Bebidas />} />
        <Route path='/Porcao' element={<Porcao />} />
        <Route path='/Burger-Produto' element={<Produtos />} />


      </Routes>
    </Router>



  );
}

export default App;
