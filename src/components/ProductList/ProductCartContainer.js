import React, {Component} from 'react'
import axios from 'axios';
import { Router, Route } from 'react-router' 

import ProductCartListComponent from './ProductCartListComponent'

var styles = {
    listItem: {
      textAlign: 'left',
      height:'125px',

    },
    image: { 
      float:'left',
      height:'100px',
      paddingRight:'20px'
    }
  };
  

class ProductCartContainer extends Component{
    constructor(props){
        super(props)
        this.userName = props.params.userName
        this.state = {
            products:''
        }
    }

    componentWillMount = () =>{
        axios.get('http://localhost:8080/api/cart/'+this.userName+'/product')
        .then((response) => {
            this.setState({
                products:response.data.map(this.composeProducts)
            })
            console.log("Success... " + response.status)
        })
        .catch((erorr) => {
            console.log("We got erorr... ;/ " + erorr)
        })
    }

    removeProduct = (id) =>{
        axios.delete('http://localhost:8080/api/cart/'+this.userName+'/remove/'+id)
        .then((response) => {
            console.log("Success... " + response.status + ', user: ' + this.userName)
            //this.props.router.push('/'+this.userName+'/cart')
            
        })
        .catch((erorr) => {
            console.log("We got erorr... ;/ " + erorr)
        })
        this.componentWillMount()
        
    }

    composeProducts = (product, index) =>{
        return(
            <li key={index} style={styles.listItem} className="list-group-item"><img src={product.image} style={styles.image} alt="..."/> {product.name} {product.price} <button onClick={() => this.removeProduct(product.id)} className="btn btn-primary pull-right">Remove</button></li>
        )
    }

    

    render(){
        return(
            <div>Product for user: {this.userName}
                <ProductCartListComponent products={this.state.products}/>
            </div>
        )
    }
}

export default ProductCartContainer;