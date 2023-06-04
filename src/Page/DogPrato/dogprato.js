import React from 'react'
import Dogprato from '../../assets/img-dogp/Dog-Prato.png'
import { Link } from 'react-router-dom';
import Header from '../../components/Header/header';
import './dogprato.css'


function dogprato() {
    return (
        <div>

            <div className='dogsP_title'>
                Dog's no prato
            </div>

            <Header />

            <div className='box_cardapio1'>

                <div className='container_cardapio'>
                    <div className='cardapio_menu'>

                        <div className='cardapio_box'>
                            <Link to='/Burger-Produto'> <div className='box'>
                                <img src={Dogprato} alt='Burger' />
                                <div className='title_lanche'> <h3> Dog no Prato</h3> </div>
                                <div className='ingredientes'><p>Salsicha, Molho, Milho, Vinagrete, Purê, Batata Palha, Bacon e Cheddar</p></div>
                                <div className='valor'><p>Valor: R$16,00</p></div>
                            </div></Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default dogprato