import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import Button from '../button/button.component';

import './checkout-item.styles.scss';

const CheckOutItem = ({cartItem: { name, imageUrl, price, quantity }}) => {
  return(
    <div className='checkout-item'>
      <div className='image-container'>
        <img alt='item' src={imageUrl}/>
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>      
      <div className='className'>&#10005;</div>
    </div>
  );
}

export default CheckOutItem;