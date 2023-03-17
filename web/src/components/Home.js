import React from "react";
import Homem from "../Img/Home/homem.png"
import {Link} from 'react-router-dom'
import './style.css'

export default function Home() {
    return (
        <body>
            <header id="cabecalho-do-site">
                <div id="layout-logo">
                    <h1 id="itech-future">
                        <Link to="/" id="link-itech-future">iTech Future</Link>
                    </h1>
                </div>
                <nav>
                    <ul id="list-ul-nav">
                        <li className="list-li-nav">
                            <Link to="/" className="link-pages">Principal</Link>
                        </li>

                        <li className="list-li-nav">
                            <Link to="/simulacoes" className="link-pages">Simulações</Link>
                        </li>

                        <li className="list-li-nav">
                            <Link to="/ipo" className="link-pages">O que é IPO</Link>
                        </li>

                        <li className="list-li-nav">
                            <Link to="/login" className="link-pages">Login</Link>
                        </li>
                    </ul>     
                </nav>
            </header>
            <main id="conteudo-principal">

                <article id="second-article">

                    <section className="img-2">
                        <figure className="img-2-2">
                            <img src={Homem} alt={'Imagem de um homem feliz investindo'} id="aprenda-investir-img"/>
                        </figure>   
                    </section>

                    <section id="frase-2">
                        <aside>
                            <h2 id="palavra-chave" className="frases-efeito"> Aprenda a investir</h2>
                            <h2 className="frases-efeito">Enquanto você se diverte</h2>
                            <h3>Cadastre-se e venha aprender na prática como <br/>
                             você pode investir na bolsa de valores por meio do IPO </h3>
                            <input type="button" id="cadastre-se" value="cadastre-se" action="cadastro.html" />
                        </aside>
                    </section>
                </article>
            </main>
            <footer id="rodape">
                <h2 id="direitos-autorais">
                    &copy; iTech Future
                </h2>
            </footer>
        </body>
    )
}