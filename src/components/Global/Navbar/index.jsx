import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Style from './style.css';
import Logo from '../../../assets/images/Logo.svg';

export default function Navbar() {
  const location = useLocation();

  return (
    <div className={Style}>
      {/*nav lg*/}
      <nav className="navbar navbar-expand-md bg-transparent font-regular nav-large position-absolute w-100 top-0 z-3 shadow rounded-bottom-4">
        <div className="container-fluid px-5 mx-3">
          <img src={Logo} className="rounded-circle" alt="Logo Ajude O Pantanal"/>
          <button className="navbar-toggler rounded-circle p-2 border border-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span>
              <i className="bi bi-list fs-1 text-white"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto gap-5 me-5">
              <li className="nav-item">
                <Link className={`nav-link fs-5 text-white ${location.pathname === '/' ? 'active' : ''}`} to="/">Início</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link fs-5 text-white ${location.pathname === '/quem-somos' ? 'active' : ''}`} to="/quem-somos">
                  Quem Somos
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link fs-5 text-white ${location.pathname === '/nossos-projetos' ? 'active' : ''}`} to="/nossos-projetos">
                  Nossos Projetos
                </Link>
              </li>
              <li className="nav-item d-block d-md-none">
                <Link className="nav-link fs-5 text-white" to="/doar">Doe agora</Link>
              </li>
            </ul>
            <button type="button" className="btn btn-outline-light btn-lg custum-btn rounded-5 ps-4 pe-4 fw-bold d-none d-md-block">
              Doe agora
            </button>
          </div>
        </div>
      </nav>
      {/*nav sm*/}
      <div className="offcanvas offcanvas-end rounded-5 shadow h-75" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <button type="button" className="btn-close fs-2 btn-close-white rounded-circle pt-5 ps-5 " data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body ps-5 pe-5">
          <ul className="navbar-nav m-auto gap-3">
            <li className="nav-item">
              <Link className={`nav-link text-white ${location.pathname === '/' ? 'active' : ''}`} to="/">Início</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-white ${location.pathname === '/quem-somos' ? 'active' : ''}`} to="/quem-somos">
                Quem Somos
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-white ${location.pathname === '/nossos-projetos' ? 'active' : ''}`} to="/nossos-projetos">
                Nossos Projetos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Doe agora</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
