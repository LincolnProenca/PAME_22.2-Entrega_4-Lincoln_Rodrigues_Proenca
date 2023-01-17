import React from "react";
import "./styles.css";
import arrow from "./assets/arrow.png";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import { useState } from "react";

function Banner() {
  const [position, setposition] = useState(0);
  function PassarBanner(direção) {
    if (direção === "esquerda") {
      setposition(position > 0 ? position - 1 : 2);
    } else {
      setposition(position < 2 ? position + 1 : 0);
    }
  }

  return (
    <div>
      <div className="banner-container">
        <div
          className="banner-arrow-cont"
          onClick={() => {
            PassarBanner("esquerda");
          }}
        >
          <img className="banner-arrow-left" src={arrow} alt=""></img>
        </div>
        <div
          className="banner-arrow-cont"
          onClick={() => {
            PassarBanner("direita");
          }}
        >
          <img className="banner-arrow-right" src={arrow} alt=""></img>
        </div>
        <div
          className="banners"
          style={{
            transform: "translate(" + String(position * -100) + "vw)",
          }}
        >
          <div className="banner1">
            <div className="img1">
              <img className="img1" src={img1} alt=""></img>
            </div>

            <div className="Textos">
              <h1 className="text-head">Moda verão 40% off</h1>
              <button className="vermais">Ver mais</button>
            </div>
          </div>
          <div className="banner2">
            <div className="img2">
              <img className="img2" src={img2} alt=""></img>
            </div>

            <div className="Textos">
              <h1 className="text-head">Populares</h1>
              <button className="vermais">Ver mais</button>
            </div>
          </div>
          <div className="banner3">
            <div className="img3">
              <img className="img3" src={img3} alt=""></img>
            </div>
            <div className="Textos">
              <h1 className="text-head">Novidades</h1>
              <button className="vermais">Ver mais</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
