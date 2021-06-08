import React from 'react';
import './Cards1.css';
import CardItem from '../components/Card/CardItem';

function Cards1() {
  return (
    <div className='cards1'>
      <div className='cards__container1'>
        <div className='cards__wrapper1'>
          <ul className='cards__items'>
            <CardItem
              src='assets/images/Forms-bro.png'
              text='An excellent job done by the developer XYZ.'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='assets/images/Forms-bro.png'
              text='An excellent job done by the developer XYZ.'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
    
  );
}

export default Cards1;