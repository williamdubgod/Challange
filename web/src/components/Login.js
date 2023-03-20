import React from "react";
import {Link} from 'react-router-dom'
import ImgLogin from "../Img/Login/img-login.jpg"
import Cabecalho from "./Cabecalho";
import './style.css'

export default function Login() {

    function Logar() {

        let email = document.getElementById("email");
        let password = document.getElementById("password");
    
        if (email.value !== "".trim() && password !== "".trim()) {
            alert("Preencha todos os campos")
        }
    
    }
    
    return (
        <div id="login">
            <Cabecalho />
            <body id="body-login">
                <main id="main-login">
                    <img src={ImgLogin} alt={'Mulher fazendo login'} id="img-principal" />   
                    <div id="info-formulario">
                        <form name="form" action="/">
                            <h1 id="titulo-login"><strong>LOGIN</strong></h1>
                            <br />
                            <p>
                                <label for="email">E-mail ou Telefone</label> 
                                <br />
                                <input type="text" id="email" />
                            </p>  
                            <br />
                            <p>
                                <label for="senha">Senha</label> 
                                <br />
                                <input type="password" id="password" />
                            </p>
                            <br />
                            <input accesskey="l" type="submit" value="LOGIN" id="botao-login" onClick={Logar} />
                            <br />
                            <Link to="/cadastro" id="link-criar-conta">Criar uma Conta</Link>
                        </form>
                    </div>
                </main>
            </body>
        </div>
    )
    
}