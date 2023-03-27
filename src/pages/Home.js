import React, { Fragment } from "react";
import { Looper } from "../script/preloader";

export const Home = () => {
    return (
    <Fragment>

    <Looper />
    <main>
      {/* <!-- //ФОТО --> */}
      <div className="wraper">
        <h1 className="main_tag">Вiдрiзнятись не заборонено</h1>
        <div className="main_button">
            <a href="#">Колекцiя</a>
            </div>
      </div>
      <div className="push"></div>
    </main>

    </Fragment>
    )
}