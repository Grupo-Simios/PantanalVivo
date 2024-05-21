import React from 'react';
import Style from './style.css';

export default function Container({children}) {
  return (
    <div className={Style}>
      <div className='containerFather'>
        {children}
      </div>
    </div>
  );
}