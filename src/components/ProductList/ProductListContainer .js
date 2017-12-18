import React, { Component } from 'react';
//Product card component inport
import ProductCardComponent from './ProductCardComponent '

//samsung image 
import samsung from './samsung.jpg'
//axios
import axios from 'axios';

import PropTypes from 'prop-types';

class ProductContainer extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            productList:'',
        }  
   
    }
    componentWillMount = () =>{
        axios.get('http://localhost:8080/api/product/')
        .then( (response) => {
            this.setState({
                productList:response.data.map(this.composeProductList)
            })
        })
        .catch( (erorr) => {
            console.log("Got erorr =>>> " + erorr)
            
        })
    }
    composeProductList = (product, index) => {
       return( <ProductCardComponent
        key={index}
        id={product.id}
        image={samsung}
        name={product.name}
        description={product.description}
        price={product.price}
        
    />)
    }
    render(){
            return (
                <div>
                    <h1>User: {this.context.userName}</h1>
                    {this.state.productList }
                </div>)
        
    }
}

ProductContainer.contextTypes = {
    userName: PropTypes.string
  };

export default ProductContainer