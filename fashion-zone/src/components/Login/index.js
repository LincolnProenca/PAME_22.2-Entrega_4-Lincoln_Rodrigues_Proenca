import React from "react";
import "./styles.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Home() {
  return (
    <div className="home">
      <Navbar></Navbar>
      <div className="login-container">
        <h1>Entre ou cadastre-se</h1>
        <div className="login2-cont">
          <div className="entrar-cont">
            <h1 className="log-text">Já sou cliente</h1>
            <input className="input-login" placeholder="email"></input>
            <input className="input-login" placeholder="senha"></input>
            <p className="esqueci">Esqueci minha senha</p>
            <button className="login-button">Entrar</button>
          </div>
          <div className="cadastro-cont">
            <h1 className="log-text">Ainda não tenho cadastro</h1>
            <input className="input-login" placeholder="nome"></input>
            <input className="input-login" placeholder="sobrenome"></input>
            <input className="input-login" placeholder="email"></input>
            <input className="input-login" placeholder="senha"></input>
            <input
              className="input-login"
              placeholder="confirme a senha"
            ></input>
            <button className="login-button">Criar conta</button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
