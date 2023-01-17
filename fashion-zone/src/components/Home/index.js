import React from "react";
import Anuncio from "../anuncio";
import Banner from "../banner";
import Navbar from "../Navbar";

function Home() {
  return (
    <div>
      <Anuncio></Anuncio>
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
}

export default Home;
