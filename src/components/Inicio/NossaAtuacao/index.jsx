import React from "react";
import Mapa from "../../../assets/Inicio/images/Mapa.svg";
import Icon from "../../../assets/Inicio/icons/IconAtuacao.svg";

export default function NossaAtuacao() {
  return (
    <div className="container font-regular text-green my-5">
      <div className="row pb-4">
        <div className="col text-start">
          <h2 className="display-5 pt-4 pb-4 font-bold">Nossa Atuação</h2>
        </div>
      </div>
      <div className="row align-items-center justify-content-start">
        <div id="carouselAtuacao" className="carousel slide  col-md-5 me-md-4 mb-4 mb-md-0">
          <img src={Mapa} className="img-fluid" id="carouselAtuacao" alt="" />
        </div>
        <div className="row col-12 col-sm-7">
          <div className="row pb-4 ps-5 align-items-start ">
            <div className="col-2 col-sm-1 ">
              <img src={Icon} alt="" />
            </div>
            <div className="col-10 col-sm-11 fs-5 ps-5">
              <p>
              São Paulo, <br/>São Paulo, Brasil
              </p>
            </div>
          </div>
          <div className="row pt-4 ps-5 ps-md-5 align-items-start">
            <div className="col-2 col-sm-1">
              <img src={Icon} alt="" />
            </div>
            <div className="col-10 col-sm-11 fs-5 ps-5 ps-md-5">
              <p>
              Porto Murtinho, Pantanal<br/>Mato Grosso do Sul, Brasil
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
  );
}
