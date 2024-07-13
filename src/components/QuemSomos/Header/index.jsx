import React from "react";
import TestQs from "../../../assets/QuemSomos/images/TestQs.jpg";
import Style from "./style.css";

export default function HeaderQss() {
    return(
        <div className={Style}>
            <div className="headerQs pb-5 pt-5 rounded-bottom-4">
                <div className="row align-items-center mt-5 ms-0 me-0">
                    <div className="col-12 col-md-4 ps-md-5 d-flex flex-column ">
                        <h1 className="text-start pt-5 ps-md-5 display-3 h1Qs">Quem Somos</h1>
                        <p className="text-start ps-md-5 pt-2 fs-4 textoQs">Nossa história é a força da esperança e da transformação. Descubra como cada passo é uma jornada de respeito, proteção e renovação</p>
                    </div>
                    <div className="col-12 col-md-8 ps-md-5 pt-5 px-auto">
                        <img src={TestQs} className="rounded mx-auto d-block img-fluid imgTest " alt="" />
                    </div>
                </div>
            </div>
        </div>
    );

}