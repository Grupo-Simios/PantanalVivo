import React from 'react';

export default function Header() {
  return (
    <div className="container-fluid bg-dark-green rounded-bottom-4">
      <div className="row">
        <div className="col mt-5 p-5">
          <h1 className='text-white display-3 font-medium mt-5 pt-5 d-none d-md-block'>Nossos Projetos</h1>
          <h1 className='text-white display-3 font-medium mt-5 pt-5 d-block d-md-none'>Nossos <br /> Projetos</h1>
        </div>
      </div>
    </div>
  )
}