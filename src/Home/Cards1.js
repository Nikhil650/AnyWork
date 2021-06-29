import React from 'react';
import './Cards1.css';
import CardItem from '../components/Card/CardItem';

function Cards1() {
  return (
    <div className='cards1'>
      <div className='cards__container1'>
        <div className='cards__wrapper1'>
          <ul className='cards__items1'>
            <CardItem
              src='assets/images/Forms-bro.png'
              text='Akshat Awasthi'
            />
            <CardItem
              src='assets/images/Forms-bro.png'
              text='Nikhil Agarwal'
            />
            <CardItem
              src='assets/images/Forms-bro.png'
              text='Vardan Sharma'
            />
          </ul>
        </div>
      </div>
    </div>
    
  );
}

export default Cards1;