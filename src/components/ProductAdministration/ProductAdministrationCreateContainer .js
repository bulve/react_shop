import React, { Component } from 'react';
import Form from './Form'
import samsung from './samsung.jpg'
import axios from 'axios';




class AdminCreateContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentProduct:{
                description:'',
                name:'',
                price:'',
                quantity:'',
                image:samsung
              }
            // description:'',
            // name:'',
            // price:'',
            // quantity:'',
            // image:samsung,
        }
    }
    onSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8080/api/product/', {
            description: this.state.currentProduct.description,
            name:this.state.currentProduct.name,
            price:this.state.currentProduct.price,
            quantity:this.state.currentProduct.quantity,
            image:this.state.currentProduct.image
        })
        .then((response)=>{
            this.props.router.push('/admin');
            console.log("I hope it is success... " + response.status + ' and response... ' + response)
        })
        .catch((erorr) =>{
            console.log('We got erorr... ' + erorr)
        })
    }

    setFields = (e) => {
        //this.setState({[e.target.name]: e.target.value})
        var product = this.state.currentProduct
        product[e.target.name] = e.target.value
        console.log(e.target.value)
        this.setState({currentProduct:product})
      }

    
    render(){
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <br/>
                    <h2>Let's create new product....</h2>
                    <br/>
                    <Form 
                    product={this.state.currentProduct}
                    fieldHandler={this.setFields}
                    onSubmit={this.onSubmit}/>
                </div>
            </div>)
    }

}

  export default AdminCreateContainer