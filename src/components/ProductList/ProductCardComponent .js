import React, { Component } from 'react';
import {Link} from 'react-router';


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

var ProductCardComponent = (props) => {
    return (
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail" style={styles.thumbnail}>
            <img src={props.image} style={styles.image} alt="..."/>
            <div className="caption">
              <h3>{props.name}</h3>
              <p>{props.description}</p>
              <p>{props.price} Eur</p>
              <Link to={'/product/'+props.id } className="btn btn-primary">Details</Link>
            </div>
          </div>
        </div>
      );
}






export default ProductCardComponent;

