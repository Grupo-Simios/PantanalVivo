import React from "react";
import TestQs from "../../assets/images/TestQs.jpg";
import HeaderQsStyle from "./HeaderQsStyle.css";

export default function HeaderQss() {
    return(
        <div className={HeaderQsStyle}>
            <div className="headerQs pb-5 pt-5 rounded-3">
                <div className="row align-items-center mt-5 ms-0 me-0">
                    <div className="col-4 ps-5 d-flex row justify-content-center align-items-center">
                        <h1 className="text-start pt-5 ps-5 display-3 h1Qs">Quem Somos</h1>
                        <p className="text-start ps-5 pt-2 fs-5 textoQs">Nossa história é a força da esperança e da transformação. Descubra como cada passo é uma jornada de respeito, proteção e renovação</p>
                    </div>
                    <div className="col-8 ps-5 pt-5">
                        <img src={TestQs} className="rounded mx-auto d-block img-fluid imgTest " alt="" />
                    </div>
                </div>
            </div>
        </div>
    );

}