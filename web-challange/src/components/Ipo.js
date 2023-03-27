import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Cabecalho from "./Cabecalho";
import ImgSmartFit from '../Img/IPO/b3-smartfit.jpg'
import ImgProspecto from '../Img/IPO/prospecto01.png'
import Footer from "./Footer";

export default function Ipo() {
    useEffect(() => {
        AOS.init({
          duration: 1000 // define a duração da animação em milissegundos
        });
      }, []);
    return (
        <div id="ipo">

            <Cabecalho />

            <main id="conteudo-ipo">

                <article id="article-img">
                    <div id="img-ipo"></div>
                </article>

                <article id="whats-ipo" className="artigos-ipo">

                    <section>

                        <h1 className="titulos-conteudo-ipo">O que é IPO?</h1>

                        <p>O IPO significa <i>“Initial Public Offering”</i>, uma sigla em inglês que significa “Oferta Pública Inicial”. Mas o que realmente é uma oferta pública inicial? Essa oferta se refere a um evento realizado na Bolsa de Valores, na qual uma empresa, pela primeira vez, oferece a oportunidade de investidores, como você, se tornararem sócios dela por meio da compra de ações.</p>

                        <p>Esse acontecimento, também é chamado de abertura de capital. A partir desse momento, a empresa tem parte do seu patrimônio negociado na Bolsa de Valores através de ações. Dessa forma, investidores podem comprar e vender pequenas partes da empresa que dão alguns direitos de propriedade, como recebimento de lucros ou voto em assembleias. As empresas que estão no estágio de IPO geralmente estão prontas para crescer. Isso significa que elas estão dispostas a vender uma parte do seu patrimônio a investidores para arrecadar fundos que possibilitem o investimento no seu crescimento. Por isso, o motivo principal pela qual uma empresa faz a abertura do seu capital no mercado é o levantamento de recursos líquidos para serem investidos.</p>
                    </section>

                </article>

                <article className="artigos-ipo" data-aos="fade-up">

                    <section className="conteudo-section">
                        <div className="texto-img-section">
                            <h1 className="titulos-conteudo-ipo">Como uma empresa abre seu capital na bolsa?</h1>
                            <p>Primeiro a empresa deve fazer uma avaliação, e discutir se de fato estão dispostos abrir o seu capital, afinal essa decisão mudará significativamente a estrutura organizacional da empresa, aumentará a transparência e mudará a forma como ela é vista pelo mercado e a sociedade.</p>
                        </div>

                        <div>
                            <figure>
                                <img src={ImgSmartFit} alt={'Grupo Smart Fit B3'} id="img-abrircapital" />
                            </figure>
                        </div>


                    </section>

                </article>

                <article className="artigos-ipo" data-aos="fade-up">

                    <section  className="conteudo-section">

                        <div>
                            <figure className="texto-img-section">
                                <img src={ImgProspecto} alt={'Prospecto'} id="img-prospecto" />
                            </figure>
                        </div>

                        <div>
                            <h1 className="titulos-conteudo-ipo">O que é o prospecto?</h1>
                            <p>O prospecto é o documento mais importante de um IPO. Muitas vezes ele tem centenas de páginas. Isso porque a proposta é que ele apresente informações essenciais para que o investidor conheça a empresa que está abrindo o capital, por esse motivo o prospecto é útil de modo que o investidor possa tomar uma decisão de investimento bem embasada.</p>
                        </div>
                    </section>

                </article>
            </main>
            <Footer />

        </div>
    )
}

