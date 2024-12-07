import React from "react";
import Style from "./style.css";
import Logo from "../../../assets/Global/images/logo-simios.png"
import Ana from "../../../assets/Global/images/Ana-Martins.png"
import Erick from "../../../assets/Global/images/Erick-Rosa.png"
import Luis from "../../../assets/Global/images/Luis-Duarte.png"
import Julie from "../../../assets/Global/images/Julie-Godoi.png"
import Denner from "../../../assets/Global/images/Denner-Bernardes.png"
import Siqueira from "../../../assets/Global/images/Dhemeson-Siqueira.png"
import Juan from "../../../assets/Global/images/Juan-Mendes1.png"
import Leonarda from "../../../assets/Global/images/Leonarda-Oliveira1.png"
import Gabriela from "../../../assets/Global/images/Gabriela-Ribeiro.png"
import Melissa from "../../../assets/Global/images/Melissa-Almeida.png"
import Camila from "../../../assets/Global/images/Camila-Maciel.png"
import Priscila from "../../../assets/Global/images/Priscila-Matrone.png"



export default function Header() {
    return(
        <div className={Style}>
            <div>
                <div class="row ">
                    <div class="col-md-6">
                     <p class="simios mt-5">O Grupo Símios é um coletivo de desenvolvimento profissional, que busca 
                        aprimorar habilidades profissionais através do engajamento em projetos voluntários, como o
                        auxílio na criação de websites institucionais para ONGs em todo o Brasil.</p>
                    </div>
                    <div class="col-md-6">
                        <img src={Logo} class="imglogo mt-5 mb-5" alt="" />
                    </div>
                </div>
                <div>
                    <div class="row fundo  mt-5 " >
                        <div class="col-md-6 mt-5">
                        <h1>Projeto ONGs <br/>na Web</h1>
                        </div>
                        <div class="col-md-6 mt-5">
                        <p>O primeiro projeto do coletivo é o ONGs na WEB, com o propósito de auxiliar organizações não governamentais a terem um site de apresentação para aumentar sua visibilidade.
                        Esta iniciativa nasceu da necessidade dos profissionais envolvidos de aplicarem os seus conhecimentos e construir portfólios, ao mesmo tempo em que reconhecem a invisibilidade
                        enfrentada por muitas ONGs no Brasil que não possuem recursos para ter uma presença online. </p>
                        <p class="mt-4">Esta iniciativa nasceu da necessidade dos profissionais envolvidos de aplicarem os seus conhecimentos e construir portfólios, ao mesmo tempo em que reconhecem a
                         invisibilidade enfrentada por muitas ONGs no Brasil que não possuem recursos para ter uma presença online. </p>
                        </div>
                    </div>

                </div>
                <div>
                    <div class="equipe mt-5">
                        <h2>Equipe</h2>
                        <h3 class="mt-3">conheça o nosso time</h3>
                        <h3 class="mt-5">Equipe de Gestão e Teste</h3>
                    </div>
                </div>
                <div>
                    <div class="row mt-5">
                        <div class="col-md-4 qana">
                          <img src={Ana} class="imgana" alt="" />
                          <h6 class="nome">Ana Martins</h6>
                          <p class="cargo">Organizadora e Buscadora de<br/> clientes</p>
                        </div>
                        <div class="col-md-4 qerick">
                          <img src={Erick} class="imgerick" alt="" />
                          <h6 class="nome">Erick Rosa</h6>
                          <p class="cargo">Organizador, Buscador de clientes e Analista</p>
                        </div>
                        <div class="col-md-4 qluis">
                          <img src={Luis} class="imgluis" alt="" />
                          <h6 class="nome">Luís Duarte</h6>
                          <p class="cargo">Documenter</p>
                        </div>
                    </div>
                    <h3 class="mt-5">Equipe de Desenvolvimento</h3>
                    <div class="row mt-5">
                        <div class="col-md-2 qjulie">
                          <img src={Julie} class="imjulie" alt="" />
                          <h6 class="nome">Julie Godoi</h6>
                          <p class="cargo">Coordenadora da Equipe de Desenvolvimento</p>
                        </div>
                        <div class="col-md-2 qdenner">
                          <img src={Denner} class="imgdenner" alt="" />
                          <h6 class="nome">Denner Bernardes</h6>
                          <p class="cargo">Desenvolvedor</p>
                        </div>
                        <div class="col-md-2 qsiqueira">
                          <img src={Siqueira} class="imgsiqueira" alt="" />
                          <h6 class="nome">Dhemeson Siqueira</h6>
                          <p class="cargo">Desenvolvedor</p>
                        </div>
                        <div class="col-md-2 qjuan">
                          <img src={Juan} class="imgjuan" alt="" />
                          <h6 class="nome">Juan Mendes</h6>
                          <p class="cargo">Desenvolvedor</p>
                        </div>
                        <div class="col-md-2 qleonarda">
                          <img src={Leonarda} class="imgleonarda" alt="" />
                          <h6 class="nome">Leonarda Oliveira</h6>
                          <p class="cargo">Desenvolvedora</p>
                        </div>
                        <div class="col-md-2 qgabriela">
                          <img src={Gabriela} class="imggabriela" alt="" />
                          <h6 class="nome">Gabriela Ribeiro</h6>
                          <p class="cargo">Desenvolvedora</p>
                        </div>
                    </div>
                    <h3 class="mt-5">Equipe de Design</h3>
                    <div class="row mt-5 mb-5">
                        <div class="col-md-4 qmelissa">
                          <img src={Melissa} class="imgmelissa" alt="" />
                          <h6 class="nome">Melissa Almeida</h6>
                          <p class="cargo">Coordenadora da Equipe de Design</p>
                        </div>
                        <div class="col-md-4 qcamila">
                          <img src={Camila} class="imgcamila" alt="" />
                          <h6 class="nome">Camila Maciel</h6>
                          <p class="cargo">Designer</p>
                        </div>
                        <div class="col-md-4 qpriscila">
                          <img src={Priscila} class="imgpriscila" alt="" />
                          <h6 class="nome">Priscila Matrone</h6>
                          <p class="cargo">Designer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}