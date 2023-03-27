import React, { Fragment } from "react";
import Dever_logo_mini from '../source/DE.png';

export const Footer = () => {
    return (
        <Fragment>
        <footer>
      <div className="quote_footer">
        Дюжина
        <p className="pink">модных</p>
        вещей, которые вы заслужили!
      </div>
      <div className="main_footer">
        <div className="container">
          <div className="el_list_footer">
            <ul className="el_ul_footer">
              <li>
                <a href="./pages/content.html" className="el_footer">Футболки</a>
              </li>
              <li><a href="./pages/hoodie.html" className="el_footer">Худи</a></li>
              <li><a href="#" className="el_footer">Штаны</a></li>
              <li><a href="#" className="el_footer">Кепки</a></li>
              <li><a href="#" className="el_footer">Рюкзаки</a></li>
              <li><a href="#" className="el_footer">Сувениры</a></li>
              <li><a href="./pages/info.html" className="el_footer">Faq</a></li>
            </ul>
          </div>

          <div className="info_footer">
            <div className="logo_footer">
              <img src={Dever_logo_mini} alt="DE_logo" />
              <p>© 2021, Dever.com</p>
            </div>
            <div className="text_footer">
              <div>E-MAIL:</div>
              <div className="email_footer">dever@gmail.com</div>
              <div>ВРЕМЯ РАБОТЫ СЛУЖБЫ ПОДДЕРЖКИ:</div>
              <div>ПН-ЧТ: 9:00 - 21:00</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </Fragment>
    )
}