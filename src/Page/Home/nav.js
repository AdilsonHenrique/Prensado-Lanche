import React from 'react';
import Header from '../../components/Header/header';
import Categoria from '../Categoria/categoria';
import HomeCardapio from '../Home_Cardapio/homecardapio';
import './nav.css';


const nav = () => {
  return (



    <div>

      <div className='title1'>
        Olá
      </div>
      <div className='title2'>
        Seja Bem-vindo(a) a Lanchonete Prensadão
      </div>


      <Header />
      <Categoria />
      <HomeCardapio />


    </div>






  )
}

export default nav;