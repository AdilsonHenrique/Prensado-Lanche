import React from 'react'
import Burger from "../../assets/img-cardapio/X-Burger.png";
import Salada from "../../assets/img-cardapio/X-Salada.png"
import Egg from "../../assets/img-cardapio/X-Egg.png"
import Bacon from "../../assets/img-cardapio/X-Bacon.png"
import Frango from "../../assets/img-cardapio/X-File.png"
import Tudo from "../../assets/img-cardapio/X-Tudo.png"
import { Link } from 'react-router-dom'
import Header from '../../components/Header/header'
import './lanches.css'



function lanches() {
  return (

    <div>
      <div className='dogs_title'>
        Lanches
      </div>

      <Header />

      <div className='box_cardapio1'>

        <div className='container_cardapio'>
          <div className='cardapio_menu'>

            <div className='cardapio_box'>
              <Link to='/Burger-Produto'> <div className='box'>
                <img src={Burger} alt='Burger' />
                <div className='title_lanche'> <h3> X-Burger </h3> </div>
                <div className='ingredientes'><p>Pão, Hamburguer, Presunto e Mussarela</p></div>
                <div className='valor'><p>Valor: R$10,00</p></div>
              </div></Link>
            </div>

            <div className='cardapio_box'>
              <div className='box'>
                <img src={Salada} alt='Burger' />
                <div className='title_lanche'> <h3> X-Salada </h3> </div>
                <div className='ingredientes'><p>Pão, Hamburguer, Mussarela, Alface e Tomate</p></div>
                <div className='valor'><p>Valor: R$10,00</p></div>
              </div>
            </div>

            <div className='cardapio_box'>
              <div className='box'>
                <img src={Egg} alt='Burger' />
                <div className='title_lanche'> <h3> X-Egg </h3> </div>
                <div className='ingredientes'><p>Pão, Hamburguer, Mussarela, Presunto, Ovo, Alface e Tomate</p></div>
                <div className='valor'><p>Valor: R$10,00</p></div>
              </div>
            </div>

            <div className='cardapio_box'>
              <div className='box'>
                <img src={Bacon} alt='Burger' />
                <div className='title_lanche'> <h3> X-Bacon </h3> </div>
                <div className='ingredientes'><p>Pão, Hamburguer, Mussarela, Presunto, Bacon, Alface e Tomate</p></div>
                <div className='valor'><p>Valor: R$10,00</p></div>
              </div>
            </div>

          </div>
        </div >

        <div className='box_cardapio2'>

          <div className='container_cardapio'>
            <div className='cardapio_menu2'>

              <div className='cardapio_box'>
                <div className='box'>
                  <img src={Frango} alt='Burger' />
                  <div className='title_lanche'> <h3> X-Filé de Frango </h3> </div>
                  <div className='ingredientes'><p>Pão, Filé de Frango, Mussarela, Presunto, Alface e Tomate</p></div>
                  <div className='valor'><p>Valor: R$10,00</p></div>
                </div>
              </div>

              <div className='cardapio_box'>
                <div className='box'>
                  <img src={Tudo} alt='Burger' />
                  <div className='title_lanche'> <h3> X-Tudo </h3></div>
                  <div className='ingredientes'><p>Pão, Hamburguer, Mussarela, Presunto, Ovo, Bacon, Calabresa</p></div>
                  <div className='valor'><p>Valor: R$10,00</p></div>
                </div>
              </div>



            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default lanches