import React from "react";
import "./styles.css";

function Produto({ nomeProduto, imgProduto, precoProduto }) {
  return (
    <div>
      <div className="prod_container">
        <div className="prod_img">
          <img className="img1_prod" src={imgProduto} alt=""></img>
        </div>
        <div className="prod_text">
          <div className="prod_name">{nomeProduto}</div>
          <div className="prod_price">R$ {precoProduto}</div>
          <div className="prod_price2">
            10x de R$ {(precoProduto / 10).toFixed(2)} sem juros
          </div>
        </div>
      </div>
    </div>
  );
}

export default Produto;
