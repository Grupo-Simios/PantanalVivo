import React from "react";
import Style from "./style.css";

export default function Header() {
    return(
        <div className={Style}>
            <div className="header pt-5">
                <div className=" mt-5">
                    <div className="ps-5">
                        <h1 className=" pt-5 ps-5 title">Nossos Projetos</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}