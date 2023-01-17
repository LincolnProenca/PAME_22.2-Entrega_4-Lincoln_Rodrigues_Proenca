import React from "react";
import "./styles.css";
import arrow from "../banner/assets/arrow.png";
import fb from "./assets/fb.svg";
import inst from "./assets/inst.svg";
import tt from "./assets/tt.svg";

function Footer() {
  return (
    <div>
      <div className="Footer_container">
        <div className="f_cadastro_cont">
          <h1 className="f_cadastro">
            Cadastre-se aqui e fique por dentro das novidades da Fashion Zone!
          </h1>
          <div className="f_input_div">
            <input className="f_input" placeholder="email"></input>
            <img className="f_arrow" src={arrow} alt=""></img>
          </div>
        </div>
        <hr className="f_divisor"></hr>
        <p className="f_cadastro">
          Fashion Zone • Nova Friburgo - RJ • Fale conosco: +55 (21) 2391-9271 •
          Juliano Ferreira
        </p>

        <hr className="f_divisor"></hr>
        <div className="f_redes">
          <img className="redes" src={fb} alt=""></img>
          <img className="redes" src={inst} alt=""></img>
          <img className="redes" src={tt} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default Footer;
