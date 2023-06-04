import React from 'react'
import Porcoes1 from '../../assets/img-porcoes/CheddarFrita.png'
import Porcoes2 from '../../assets/img-porcoes/Calabresa.png'
import { Link } from 'react-router-dom';
import Header from '../../components/Header/header';
import './porcoes.css'



const porcoes = () => {
    return (

        <div>
            <div className='dogs_title'>
                Porções
            </div>

            < Header />

            <div className='box_cardapio1'>

                <div className='container_cardapio'>
                    <div className='cardapio_menu'>

                        <div className='cardapio_box'>
                            <Link to='/Burger-Produto'> <div className='box'>
                                <img src={Porcoes1} alt='Burger' />
                                <div className='title_lanche'> <h3> Fritas com Cheddar</h3> </div>
                                <div className='ingredientes'><p>Fritas com Cheddar e Bacon</p></div>
                                <div className='valor'><p>Valor: R$20,00</p></div>
                            </div></Link>
                        </div>

                        <div className='cardapio_box'>
                            <div className='box'>
                                <img src={Porcoes2} alt='Burger' />
                                <div className='title_lanche'> <h3> Calabresa Acebolada </h3> </div>
                                <div className='ingredientes'><p>Porção de calabresa acebolada </p></div>
                                <div className='valor'><p>Valor: R$25,00</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default porcoes