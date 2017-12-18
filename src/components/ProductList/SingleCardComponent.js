import React, { Component } from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';




var styles = {
  thumbnail: {
    maxWidth: '242px',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  image: { 
    width: '100%', 
    height: '200px', 
    display: 'block'}
};



var SingleCardComponent = (props) =>{
   
    return (
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail" style={styles.thumbnail}>
            <img src={props.image} style={styles.image} alt="..."/>
            <div className="caption">
              <h3>{props.name}</h3>
              <p>{props.description}</p>
              <p>{props.price} Eur</p>
              <form onSubmit={props.onClick}>
              <input type="number" onChange={props.onAmountChange} name="quantity" min="0" max={props.quantity}/>
              <button type="submit" className="btn btn-success">Add to cart</button>
              </form>
            </div>
          </div>
        </div>
      );
  }
  
  

  export default SingleCardComponent