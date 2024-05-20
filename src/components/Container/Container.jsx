import React from 'react';
import ContainerStyle from './ContainerStyle.css';

export default function Container({children}) {
  return (
    <div className={ContainerStyle}>
      <div className='containerFather'>
        {children}
      </div>
    </div>
  );
}