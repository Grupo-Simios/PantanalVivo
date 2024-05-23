import React from 'react';

export default function Container({children}) {
  return (
    <div className='bg-default'>
      {children}
    </div>
  );
}