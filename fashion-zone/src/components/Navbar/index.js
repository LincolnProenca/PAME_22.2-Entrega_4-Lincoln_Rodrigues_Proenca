import React from "react";
import "./styles.css";
import search from "./assets/search_icon.svg";
import bag from "./assets/shop_bag.svg";
import user from "./assets/user.png";
import nav from "./assets/nav.svg";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="divisor">
        <div className="esquerda">
          <div className="texto-cont">
            <p className="texto">Fashion</p>
            <p className="texto">zone</p>
          </div>
        </div>
        <div className="meio">
          <img className="nav-icon" src={nav} alt=""></img>
          <span className="categorias">verão</span>
          <span className="categorias">novidades</span>
          <span className="categorias">pijamas</span>
          <span className="categorias">roupas</span>
          <span className="categorias">conjuntos</span>
          <span className="categorias">social</span>
        </div>
        <div className="direita">
          <input type="text" placeholder="Pesquisar"></input>
          <img src={search} alt=""></img>
          <img src={bag} alt=""></img>
          <img src={user} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
