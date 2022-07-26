import React from 'react';

import { Header } from './Header';
import './divider.scss';

export const Divider = () => {
  const [user, setUser] = React.useState();

  return (
    <article>
      <section>
        <div className="row">
          <div className="col-md-8 mx-auto">

            <div className="mb-4">
              <div className='divider divider--start'>Text divider</div>
            </div>
            <div className="mb-4">
              <div className='divider divider--center'>Text divider</div>
            </div>
            <div className="mb-5">
              <div className='divider divider--end'>Text divider</div>
            </div>

            <div className="mb-4">
              <div className='divider divider--center divider--solid'>Solid</div>
            </div>
            <div className="mb-4">
              <div className='divider divider--center divider--dashed'>Dashed</div>
            </div>
            <div className="mb-5">
              <div className='divider divider--center divider--dotted'>Dotted</div>
            </div>

            <div className="mb-4">
              <div className='divider divider--center divider--light'>Light</div>
            </div>
            <div className="mb-4">
              <div className='divider divider--center divider--regular'>Regular</div>
            </div>
            <div className="mb-4">
              <div className='divider divider--center divider--heavy'>Heavy</div>
            </div>

           

          </div>
        </div>
      </section>
    </article>
  );
};
