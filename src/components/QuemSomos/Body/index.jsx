import React from "react";
import Style from "./style.css";

export default function BodyQss() {
    return(
        <div className={Style}>
            <div className="bodyQs pt-5">
                <div className=" d-flex justify-content-end rounded-start-3 fundo-tittle position-absolute start-50 end-0 mt-4">
                    <h1 className=" text-center pt-2 pb-2 ps-5 pe-5 tittleQs ">Nossa História</h1>
                </div>
                <div className="row container contNs pt-5 align-items-center rounded-end-4 gap-5 ps-5">
                    <div className="col-6 TextNh pt-5 mt-4 pb-3">
                        <p>Somos uma Organização da Sociedade Civil  (OSC) com sede em SP -Capital e sub sede em Miranda - MS. <br/>Formada por indígenas e não indígenas, atuamos junto aos Povos Originários em situação de vulnerabilidade social na região pantaneira.</p>
                    </div>
                    <div className="col-6 TextNh pt-5 mt-4 pb-3">
                        <p>O IAPO nasceu como Movimento AJude o Pantanal Oficial em Setembro de 2020 na Terra Indígena Baía dos Guató - MS, a partir de uma situação emergencial onde 83% da aldeia foi consumida pelo fogo, ocorrendo assim a maior tragédia ambiental e social no Pantanal , gerando prejuízos ambientais, econômicos e sociais sem precedentes, em Abril de 2022 constituímos a nossa OSC.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}