import React from 'react'
import './categoria.css'

export default function categoria() {
  return (
    <div className='box_categoria'>
      
<h2 id='title_categoria'>Categorias</h2>

<div className='container_categoria'>
  <div className='box_menu'>    

    <div className='categoria_box'>
      <div className='box'>Lanches</div>
    </div>

    <div className='categoria_box'>
      <div className='box'>Dog's</div>
    </div>

    <div className='categoria_box'>
      <div className='box'>Dog's no <p>prato</p></div>
    </div>

    <div className='categoria_box'>
      <div className='box'>bebidas</div>
    </div>

    <div className='categoria_box'>
      <div className='box'>Porções</div>
    </div>

    <div className='categoria_box'>
      <div className='box'>Combos</div>
    </div>

  </div>  
</div>
    </div>
)
}
