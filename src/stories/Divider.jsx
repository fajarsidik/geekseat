import React from 'react';
import PropTypes from 'prop-types';
import './divider.scss';

export const Divider = ({ alignment, line, weight, label, ...props }) => {
  const [user, setUser] = React.useState();

  return (
    <div 
      className={['divider',`divider--${alignment}`,`divider--${line}`, `divider--${weight}`].join(' ')} 
      {...props}
      >
        {label}
    </div>    
    /*
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
    */
  );
};

Divider.propTypes = {
 
  alignment: PropTypes.oneOf(['start', 'center', 'end']),
 
  line: PropTypes.oneOf(['solid', 'dashed', 'dotted']),

  weight: PropTypes.oneOf(['light', 'regular', 'heavy']),
  
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Divider.defaultProps = {  
  alignment: 'start',
  weight: 'regular',
  line: 'solid',
  label: 'Start',
  onClick: undefined,
};
