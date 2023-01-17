import React from "react";
import "./styles.css";
import Anuncio from "../anuncio";
import Banner from "../banner";
import Navbar from "../Navbar";
import Listaproduto from "../Lista_produtos";
import Footer from "../Footer";

function Home() {
  return (
    <div className="home">
      <Anuncio></Anuncio>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="Prin-prod">
        <h1 className="Prin-prod">Principais produtos</h1>
      </div>
      <Listaproduto></Listaproduto>
      <Footer></Footer>
    </div>
  );
}

export default Home;
