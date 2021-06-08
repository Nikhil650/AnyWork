import React from 'react';
import { Link } from 'react-router-dom';
import '../app.css';
import { Button } from '../components/Button/Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-main'>
      <div className='hero-container'>
      <h1>GET YOUR WORK COMPLETED</h1><br />
      <p>Faster, Efficient, Remote <br />
      <br />
        Get work done in almost 3 steps according to <br />
        your satisfaction and budget with professional <br />
        and trusted workers all around the globe.
      </p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div>
      </div>
      <div className='hero-container'>
        <img src="assets/images/Forms-bro.png" />
      </div>
    </div>
  );
}

export default HeroSection;
