import React from 'react';
import { Link } from 'react-router-dom';
import Lanches from "../../assets/img-icons/lanches.png";
import Hotdog from "../../assets/img-icons/hot-dog.png";
import Hot_prato from "../../assets/img-icons/dog_prato.png";
import Bebidas from "../../assets/img-icons/bebidas.png";
import Porcoes from "../../assets/img-icons/Porções.png";
import Combos from "../../assets/img-icons/combos.png";
import './categoria.css'

const categoria = () => {
  return (

    <div className='box_categoria'>

      <h2 className='title_categoria'>Categorias</h2>

      <div className='container_categoria'>
        <div className='box_menu'>

          <Link to='/Lanches'><div className='categoria_box'>
            <div className='icons_categoria2'> <img src={Lanches} alt='Lanches' /> <div className='name_categoria'>Lanches</div> </div>
          </div></Link>


          <Link to='/Dogs'><div className='categoria_box'>
            <div className='icons_categoria2'> <img src={Hotdog} alt='Dogs' /> <div className='name_categoria'> Dog's</div> </div>
          </div></Link>

          <Link to='/DogPrato'><div className='categoria_box'>
            <div className='icons_categoria2'> <img src={Hot_prato} alt='dog-prato' />
              <div className='name_categoria2'>Dog's no</div> <div className='name_categoria2'>Prato</div> </div>
          </div></Link>

          <Link to='/Bebidas'><div className='categoria_box'>
            <div className='icons_categoria2'> <img src={Bebidas} alt='bebidas' /> <div className='name_categoria'>Bebidas</div> </div>
          </div></Link>

          <Link to='/Porcao'><div className='categoria_box'>
            <div className='icons_categoria2'> <img src={Porcoes} alt='Porções' /> <div className='name_categoria'>Porções</div> </div>
          </div></Link>

          <Link to='/Combos'><div className='categoria_box'>
            <div className='icons_categoria2'> <img src={Combos} alt='Combos' /> <div className='name_categoria'>Combos</div> </div>
          </div></Link>
        </div>
      </div>
    </div>

  )
}

export default categoria;
