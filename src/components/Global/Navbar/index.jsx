import React, { useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import Style from './style.css';
import Logo from '../../../assets/images/Logo.svg';

export default function Navbar() {
  const location = useLocation();

  return (
      <div className={Style}>
        <nav className="navbar navbar-expand-md bg-transparent font-regular nav-large position-absolute w-100 top-0 z-3 shadow rounded-bottom-4">
          <div className="container-fluid px-5 mx-3">
            <img src={Logo} className="rounded-circle" alt="Logo Ajude O Pantanal"/>
            <button className="navbar-toggler rounded-circle p-2 border border-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span><i className='bi bi-list fs-1 text-white'></i></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav m-auto gap-3 gap-lg-5 me-lg-5 pt-4 pb-4 pt-md-0 pb-md-0">
                <li className="nav-item">
                  <Link className={`nav-link fs-5 text-white ${location.pathname === '/' ? 'active' : ''}`} to="/">Início</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link fs-5 text-white ${location.pathname === '/quem-somos' ? 'active' : ''}`} to="/quem-somos">Quem Somos</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link fs-5 text-white ${location.pathname === '/nossos-projetos' ? 'active' : ''}`} to="/nossos-projetos">Nossos Projetos</Link>
                </li>
                <li className='nav-item'>
                  <Link className="nav-link fs-5 text-white d-block d-md-none">Doe agora</Link>
                </li>
              </ul>
              <button type="button" className="btn btn-outline-light btn-lg custum-btn rounded-5 ps-4 pe-4 fw-bold d-none d-md-block">Doe agora</button>
            </div>
          </div>
        </nav>
      </div>
  );
}