import React from 'react'
import { Link } from 'react-router-dom';
import Refrigerantes from '../../assets/img-bebidas/refrigerantes-lata.png'
import Sucos from '../../assets/img-bebidas/sucos.png'
import Refrigerante2L from '../../assets/img-bebidas/refrigerante-2L.png'

import Header from '../../components/Header/header';
import './bebidas.css'

function bebidas() {
    return (

        <div>

            <div className='dogs_title'>
                Bebidas
            </div>

            <Header />


            <div className='box_cardapio1'>

                <div className='container_cardapio'>
                    <div className='cardapio_menu'>

                        <div className='cardapio_box'>
                            <Link to='/Burger-Produto'> <div className='box'>
                                <img src={Refrigerantes} alt='Burger' />
                                <div className='title_lanche'> <h3> X-Burger </h3> </div>
                                <div className='ingredientes'><p>Coca, Sprite, Fanta</p></div>
                                <div className='valor'><p>Valor: R$10,00</p></div>
                            </div></Link>
                        </div>

                        <div className='cardapio_box'>
                            <div className='box'>
                                <img src={Sucos} alt='Burger' />
                                <div className='title_lanche'> <h3> X-Salada </h3> </div>
                                <div className='ingredientes'><p>Uva, Limão, Tangerina</p></div>
                                <div className='valor'><p>Valor: R$10,00</p></div>
                            </div>
                        </div>

                        <div className='cardapio_box'>
                            <div className='box'>
                                <img src={Refrigerante2L} alt='Burger' />
                                <div className='title_lanche'> <h3> X-Egg </h3> </div>
                                <div className='ingredientes'><p>Pepsi, Xereta</p></div>
                                <div className='valor'><p>Valor: R$10,00</p></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default bebidas;