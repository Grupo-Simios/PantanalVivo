import React from "react";
import Cidade from '../../../assets/Inicio/images/Cidade.png';

export default function contato() {
    return (
        <div className="container-fluid bg-dark-orange rounded-3">
            <div className="row">
                <div className="col-6"></div>
                <div className="col-6">
                    <img src={Cidade} alt="" className="img-fluid" />
                </div>          
            </div>              
            
        </div>
    );
}