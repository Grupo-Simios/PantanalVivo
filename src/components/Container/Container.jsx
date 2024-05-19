import React from 'react';
import ContainerStyles from './ContainerStyles.css';

export default function Container({children}) {
  return (
    <div className={ContainerStyles}>
      <div className='containerFather'>
        {children}
      </div>
    </div>
  );
}