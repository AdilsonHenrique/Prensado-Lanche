import React from 'react';
import { Link } from 'react-router-dom';
import Catalog from "../../assets/img-icons/Catalog.png";
import Bag from "../../assets/img-icons/bag.png"
import Barsearch from "../Bar_Search/bar_search";

import './header.css'



function header() {
  return (


    <div className='nav_box'>

      <div className='container_page'>
        <div className='nav_menu'>

          <div className='nav_itens'>
            <Link to="/"> <img src={Catalog} alt='CardapioIcon' /> Cardapío </Link>
          </div>

          <div className='nav_itens'>
            <Link to="/Pedido"> <img src={Bag} alt='Bag' /> Pedido </Link>
          </div>

        </div>
      </div>


    </div>


  )
}

export default header