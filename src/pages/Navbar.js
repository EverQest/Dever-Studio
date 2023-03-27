import React, { Fragment } from "react";
import Dever_logo from '../source/DEVER.png';

export const Navbar = () => {
    return (
    <Fragment>
    <header>
      <div className="header_first">
        <div className="header_main_logo">
          <a href="./index.html"
            ><img src={Dever_logo} alt="logo_mini_black"
          /></a>
        </div>
      </div>
      <div className="header_second">
        <ul className="header_main">
          <li>
            <a href="./pages/content.html" className="header_main_item">Футболки</a>
          </li>
          <li>
            <a href="./pages/hoodie.html" className="header_main_item">Худи</a>
          </li>
          <li><a href="#" className="header_main_item">Штаны</a></li>
          <li><a href="#" className="header_main_item">Кепки</a></li>
          <li><a href="#" className="header_main_item">Рюкзаки</a></li>
          <li><a href="#" className="header_main_item">Сувениры</a></li>
          <li><a href="./pages/info.html" className="header_main_item">Faq</a></li>
        </ul>
      </div>
    </header>
    </Fragment>
    )
}