import React from 'react';
import FontAwesome from 'react-fontawesome';

const Footer = ()=> {
  return(
    <div className='footer-div'>
      <div className='profile-div'>

        <div><i className="fa fa-github-square" aria-hidden="true"></i></div>
        <div><i className="fa fa-linkedin-square" aria-hidden="true"></i></div>
        <h1>Harvey Mirijanyan</h1>
        <div>
          <a href='https://github.com/harvey93'>Github</a>
        </div>
        <div>
          <a href='https://www.linkedin.com/in/harvey-mirijanyan-79a133ba'>Linkedin</a>
        </div>
      </div>
      <div className='profile-div'>
        <h1>Ryley Sill</h1>
        <div>
          <a href='https://github.com/RyleySill93'>Github</a>
        </div>
        <div>
          <a href='https://www.linkedin.com/in/ryleysill/'>Linkedin</a>
        </div>
      </div>
      <div className='profile-div'>
        <h1>Daniel Cheng</h1>
        <div>
          <a href='https://github.com/MrDSGC'>Github</a>
        </div>
        <div>
          <a href='https://www.linkedin.com/in/dcheng47/'>Linkedin</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
