import React from "react";
import Produto from "../Produto";
import "./styles.css";
import img1 from "./assets/img1.webp";

function Listaproduto() {
  return (
    <div className="lista_produtos_container-cont">
      <div className="lista_produtos_container">
        <Produto
          nomeProduto={"Pijama Nana Sea Skull"}
          imgProduto={img1}
          precoProduto={538}
          materialProduto={"Viscose"}
          tamanhoProduto={"P"}
        ></Produto>
        <Produto
          nomeProduto={"Pijama Nana Sea Skull"}
          imgProduto={img1}
          precoProduto={538}
          materialProduto={"Viscose"}
          tamanhoProduto={"M"}
        ></Produto>
        <Produto
          nomeProduto={"Pijama Nana Sea Skull"}
          imgProduto={img1}
          precoProduto={538}
          materialProduto={"Viscose"}
          tamanhoProduto={"GG"}
        ></Produto>
        <Produto
          nomeProduto={"Pijama Nana Sea Skull"}
          imgProduto={img1}
          precoProduto={538}
          materialProduto={"Viscose"}
          tamanhoProduto={"M"}
        ></Produto>
        <Produto
          nomeProduto={"Pijama Nana Sea Skull"}
          imgProduto={img1}
          precoProduto={538}
          materialProduto={"Viscose"}
          tamanhoProduto={"G"}
        ></Produto>
        <Produto
          nomeProduto={"Pijama Nana Sea Skull"}
          imgProduto={img1}
          precoProduto={538}
          materialProduto={"Viscose"}
          tamanhoProduto={"P"}
        ></Produto>
        <Produto
          nomeProduto={"Pijama Nana Sea Skull"}
          imgProduto={img1}
          precoProduto={538}
          materialProduto={"Viscose"}
          tamanhoProduto={"PP"}
        ></Produto>
        <Produto
          nomeProduto={"Pijama Nana Sea Skull"}
          imgProduto={img1}
          precoProduto={538}
          materialProduto={"Viscose"}
          tamanhoProduto={"M"}
        ></Produto>
      </div>
    </div>
  );
}

export default Listaproduto;
