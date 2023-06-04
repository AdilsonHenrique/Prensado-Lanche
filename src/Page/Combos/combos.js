import React from 'react';
import Combo1 from '../../assets/img-porcao/combo1.png';
import Combo2 from '../../assets/img-porcao/combo2.png';
import Header from '../../components/Header/header';
import { Link } from 'react-router-dom';
import './combos.css'


const combos = () => {
    return (

        <div>
            <div className='dogs_title'>
                Combos
            </div>

            < Header />

            <div className='box_cardapio1'>

                <div className='container_cardapio'>
                    <div className='cardapio_menu'>

                        <div className='cardapio_box'>
                            <Link to='/Burger-Produto'> <div className='box'>
                                <img src={Combo1} alt='Burger' />
                                <div className='title_lanche'> <h3> Três Prensados + Fritas </h3> </div>
                                <div className='ingredientes'><p>Prensado + Fritas</p></div>
                                <div className='valor'><p>Valor: R$44,00</p></div>
                            </div></Link>
                        </div>

                        <div className='cardapio_box'>
                            <div className='box'>
                                <img src={Combo2} alt='Burger' />
                                <div className='title_lanche'> <h3> Três X Bacon + Fritas </h3> </div>
                                <div className='ingredientes'><p>X Bacon + Fritas</p></div>
                                <div className='valor'><p>Valor: R$58,00</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default combos