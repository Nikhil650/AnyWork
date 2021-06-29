import React from 'react';
import './Cards.css';
import CardItem from '../components/Card/CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these user reviews!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='assets/images/Forms-bro.png'
              text='An excellent job done by the developer XYZ.'
              label='Web Development'
              //path='/services'
            />
            <CardItem
              src='assets/images/Forms-bro.png'
              text='An excellent job done by the developer XYZ.'
              label='Web Design'
              //path='/services'
            />
            <CardItem
              src='assets/images/Forms-bro.png'
              text='An excellent job done by the developer XYZ.'
              label='Graphic Design'
              //path='/services'
            />
          </ul>
          
        </div>
      </div>
    </div>
    
  );
}

export default Cards;