import React from 'react';
import ParceirosStyles from './ParceirosStyles.css';

export default function Parceiros() {
  return (
    <div className={ParceirosStyles}>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card m-3">
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Primary card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
