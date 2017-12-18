import React, { Component } from 'react';
import {Link} from 'react-router';


var NavigationComponent = (props) =>{
    return (
        <nav className="navbar navbar-default">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li><a href="#">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#admin">Admin</a></li>
            <li>
              <div className="navbar-form">
                <input className="form-control"type="text" value={props.userName} placeholder="User name" onChange={props.userNameHandler} />
              </div>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
              <li><a href={props.link}><span className="glyphicon glyphicon-shopping-cart"></span>
              &nbsp; {props.productsInCart}</a></li>
               
            </ul>
        </div>
      </nav>
    )
}

export default NavigationComponent