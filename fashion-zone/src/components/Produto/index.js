import React from "react";
import "./styles.css";

function Produto({
  nomeProduto,
  imgProduto,
  precoProduto,
  materialProduto,
  tamanhoProduto,
}) {
  return (
    <div className="prod-cont-cont">
      <div className="prod_container">
        <div className="prod_img">
          <img className="img1_prod" src={imgProduto} alt=""></img>
        </div>
        <div className="prod_text">
          <div className="prod_name">{nomeProduto}</div>
          <div className="prod_mat">
            Confeccionado em {materialProduto} | Tamanho: {tamanhoProduto}
          </div>
          <div className="prod_price">R$ {precoProduto},00</div>
          <div className="prod_price2">
            10x de R$ {(precoProduto / 10).toFixed(2)} sem juros
          </div>
        </div>
      </div>
    </div>
  );
}

export default Produto;
