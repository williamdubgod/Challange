import React from "react";
import Homem from "../Img/Home/homem.png"
import Cabecalho from "./Cabecalho";
import Footer from "./Footer";
import 'animate.css/animate.min.css';
import './style.css'

export default function Home() {
    return (
        <body>
          <Cabecalho />
          <main id="conteudo-principal">
    
            <article id="second-article">
    
              <section className="img-2">
                <figure className="img-2-2">
                  <img src={Homem} alt={'Imagem de um homem feliz investindo'} id="aprenda-investir-img"/>
                </figure>   
              </section>
    
              <section id="frase-2">
                <aside>
                  <h2 id="palavra-chave" className="frases-efeito animate__animated animate__bounceInRight"> Aprenda a investir</h2>
                  <h2 className="frases-efeito animate__animated animate__bounceInRight">Enquanto você se diverte</h2>
                  <h3>Cadastre-se e venha aprender na prática como <br/>
                    você pode investir na bolsa de valores por meio do IPO </h3>
                  <input type="button" id="cadastre-se" value="cadastre-se" action="cadastro.html" />
                </aside>
              </section>
            </article>
          </main>
          <Footer />
        </body>
      )
}