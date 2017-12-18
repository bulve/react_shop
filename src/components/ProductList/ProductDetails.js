import React, { Component } from 'react';
import axios from 'axios';
import samsung from './samsung.jpg'
import PropTypes from 'prop-types';


import SingleCardComponent from './SingleCardComponent'
import ProductCardComponent from './ProductCardComponent '

class ProductDetails extends Component{
    constructor(){
        super()
        this.state = {
            product:'',
            amount:0

        }
    }
    componentWillMount = () =>{
        axios.get('http://localhost:8080/api/product/'+this.props.params.id)
        .then((response) => {
            this.setState({
                product:response.data
            })
        })
        .catch((erorr) => {
            console.log("Got erorr... " + erorr)
        })
    }

    addToCart = (e) => {
        console.log("Trying to add product " + this.state.product.id + " to customer " + this.context.userName)
        axios.post('http://localhost:8080/api/cart/'+this.context.userName+'/product/'+this.state.product.id)
        .then((response)=>{
            console.log("Success!  "+response.status)
        })
        .catch((erorr)=>{
            console.log("WE GOT ERORR...." + erorr)
        })
        e.preventDefault() 
    }

    setProductAmount = (e) =>{
        this.setState({
            amount:e.target.value
        })
        //atsilieka output value nuo relaus
        console.log(this.state.amount);
    }


    render(){
        return(<div>
            <h1>User: {this.context.userName}</h1>
            <SingleCardComponent
            name={this.state.product.name}
            description={this.state.product.description}
            price={this.state.product.price}
            quantity={this.state.product.quantity}
            image={samsung}
            onClick={this.addToCart}
            onAmountChange={this.setProductAmount}
            /></div>
        )
    }
}


ProductDetails.contextTypes = {
    userName:PropTypes.string
  }


export default ProductDetails