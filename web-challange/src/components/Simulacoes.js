import React from "react";
import Cabecalho from "./Cabecalho";
import Footer from "./Footer";
import Jogo from '../Img/Simulacoes/simulacao.png'

export default function Simulacoes() {

    return (
        <div id="simulacoes">
            <Cabecalho />
            <main id="main-simulacoes">
                <figure id="fig-simulacoes">
                    <img id='img-jogo' src={Jogo} alt={'Jogo simulação de investimento'}/>
                </figure>
            </main>
            <Footer />
        </div>
    )
    
}