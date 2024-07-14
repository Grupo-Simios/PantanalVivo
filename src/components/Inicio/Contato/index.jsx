import React from "react";
import Cidade from '../../../assets/Inicio/images/Cidade.png';
import Vector2 from '../../../assets/Inicio/images/Vector2.svg';
import phone from '../../../assets/Inicio/icons/phone.svg'
import IconMsg from '../../../assets/Inicio/icons/IconMsg.svg'
import Smile from '../../../assets/Inicio/icons/message-smile-circle.svg'

export default function contato() {
    return (
        <div className="my-5">
            <img src={Vector2} alt="" className='img-fluid w-100'/>
            <div className="container-fluid bg-light-orange rounded-3">
                <div className="row">
                    <div className="col-sm-6 col-12 d-flex flex-column align-items-center justify-content-center">
                        <div className="d-flex flex-column align-items-start mt-4 mt-md-0 pt-5 pt-md-0 ">
                            <h2 className="text-green font-bold display-6 display-md-0">Nosso contato</h2>
                            <p className="text-green font-regular fs-5 pb-1">Você tem alguma dúvida?<br/>Fale conosco</p>
                            <div className="d-flex flex-column justify-content-start gap-2">
                                <div className=" d-flex align-items-start gap-2">
                                    <img src={phone} alt="" />
                                    <p className="fs-5 font-regular text-white">99 99999-9999</p>
                                </div>
                                <div className=" d-flex align-items-start gap-3 ">
                                    <img src={IconMsg} alt="" />
                                    <p className="fs-5 font-regular text-white">email@email.com</p>
                                </div>
                            </div>
                        
                        <button type="button" className="btn btn-light d-flex align-items-center rounded-5 px-4 px-md-5 py-2 mx-1 shadow gap-2 text-green font-bolder" >
                            Fale no nosso WhatsApp
                            <img src={Smile} alt="" />
                        </button>
                        
                        </div>
                        
                        
                    </div>
                    <div className="col-sm-6 col-12 text-center">
                        <img src={Cidade} alt="" className="img-fluid w-75 py-5" />
                    </div>          
                </div>              
            </div>
        </div>
    );
}