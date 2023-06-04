import React from 'react';
import Tradicional from "../../assets/img-cardapio/Dog-Tradicional.png";
import PrensadoC from "../../assets/img-dog/prensado-catupiry.png"
import Prensado from "../../assets/img-cardapio/Prensadão.png";
import PrensadoB from "../../assets/img-dog/prensado-bacon.png";
import PrensadoFC from "../../assets/img-dog/prensado-frango-catupiry.png";
import PrensadoCH from "../../assets/img-dog/prensado-cheddar.png";
import PrensadoO from "../../assets/img-dog/prensado-ovo.png";
import PrensadoP from "../../assets/img-dog/prensado-pure.png";
import { Link } from 'react-router-dom';
import Header from '../../components/Header/header';
import './Dogs.css';


function Dogs() {
  return (

    <div>
      <div className='dogs_title'>
        Dog's
      </div>

      <Header />


      <div className='box_cardapio1'>

        <div className='container_cardapio'>
          <div className='cardapio_menu'>

            <div className='cardapio_box'>
              <Link to='/Burger-Produto'> <div className='box'>
                <img src={Tradicional} alt='Burger' />
                <div className='title_lanche'> <h3> Dog Tradicional </h3> </div>
                <div className='ingredientes'><p>Pão, Salsicha, Molho, Milho, Vinagrete, Purê e Batata Palha</p></div>
                <div className='valor'><p>Valor: R$9,00</p></div>
              </div></Link>
            </div>

            <div className='cardapio_box'>
              <div className='box'>
                <img src={Prensado} alt='Burger' />
                <div className='title_lanche'> <h3> Dog Prensado </h3> </div>
                <div className='ingredientes'><p>Pão, Salsicha, mussarela, Presunto, Alface, Milho e Batata Palha</p></div>
                <div className='valor'><p>Valor: R$9,50</p></div>
              </div>
            </div>

            <div className='cardapio_box'>
              <div className='box'>
                <img src={PrensadoO} alt='Burger' />
                <div className='title_lanche'> <h3> Dog Prensado com Ovo </h3> </div>
                <div className='ingredientes'><p>Pão, Salsicha, mussarela, Presunto, Alface, Milho , Batata Palha e Ovo</p></div>
                <div className='valor'><p>Valor: R$11,00</p></div>
              </div>
            </div>

            <div className='cardapio_box'>
              <div className='box'>
                <img src={PrensadoP} alt='Burger' />
                <div className='title_lanche'> <h3> Dog Prensado com Purê </h3> </div>
                <div className='ingredientes'><p>Pão, Salsicha, mussarela, Presunto, Alface, Milho, Batata Palha e Purê</p></div>
                <div className='valor'><p>Valor: R$11,00</p></div>
              </div>
            </div>

          </div>
        </div >

        <div className='box_cardapio2'>

          <div className='container_cardapio'>
            <div className='cardapio_menu2'>

              <div className='cardapio_box'>
                <div className='box'>
                  <img src={PrensadoCH} alt='Burger' />
                  <div className='title_lanche'> <h3> Dog Prensado com Cheddar </h3> </div>
                  <div className='ingredientes'><p>Pão, Salsicha, mussarela, Presunto, Alface, Milho, Batata Palha e Cheddar</p></div>
                  <div className='valor'><p>Valor: R$11,00</p></div>
                </div>
              </div>

              <div className='cardapio_box'>
                <div className='box'>
                  <img src={PrensadoC} alt='Burger' />
                  <div className='title_lanche'> <h3> Dog Prensado com Catupiry </h3></div>
                  <div className='ingredientes'><p>Pão, Salsicha, mussarela, Presunto, Alface, Milho, Batata Palha e Catupiry</p></div>
                  <div className='valor'><p>Valor: R$11,00</p></div>
                </div>
              </div>

              <div className='cardapio_box'>
                <div className='box'>
                  <img src={PrensadoFC} alt='Burger' />
                  <div className='title_lanche'> <h3> Dog Prensado com Frango</h3></div>
                  <div className='ingredientes'><p>Pão, Salsicha, mussarela, Presunto, Alface, Milho, Batata Palha, Frango e Catupiry</p></div>
                  <div className='valor'><p>Valor: R$13,00</p></div>
                </div>
              </div>

              <div className='cardapio_box'>
                <div className='box'>
                  <img src={PrensadoB} alt='Burger' />
                  <div className='title_lanche'> <h3> Dog Prensado com Bacon </h3></div>
                  <div className='ingredientes'><p>Pão, Salsicha, mussarela, Presunto, Alface, Milho, Batata Palha e Bacon</p></div>
                  <div className='valor'><p>Valor: R$12,00</p></div>
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>
    </div>





  )
}

export default Dogs