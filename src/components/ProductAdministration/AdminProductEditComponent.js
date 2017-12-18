import React, { Component } from 'react';
import Form from './Form'
import samsung from './samsung.jpg'
import axios from 'axios';

class AdminProductEditComponent extends Component{
    constructor(props){
      super(props)
      this.id = props.id;
      this.state = {
        currentProduct:{
          description:'',
          name:'',
          price:'',
          quantity:'',
          image:samsung
        }
      }

    }
    componentWillMount = () => {
      axios.get('http://localhost:8080/api/product/'+this.id)
      .then( (response) => {
          this.setState({
              currentProduct:response.data  
          })
      })
      .catch((erorr) => {
          console.log("Got erorr... " + erorr)
      })
    }

   //goApp = () => this.props.router.push("/admin");
    
    onSubmit = (e) => {
      e.preventDefault()
  
      axios.put('http://localhost:8080/api/product/'+this.id, {
          description: this.state.currentProduct.description,
          name:this.state.currentProduct.name,
          price:this.state.currentProduct.price,
          quantity:this.state.currentProduct.quantity,
          image:this.state.currentProduct.image
      })
      .then((response) =>{
        this.router.push('/admin');     
        console.log("I hope it is success... " + response.status + ' and response... ' + response.data)
      })
      .catch((erorr) =>{
          console.log('We got erorr... ' + erorr)
      })
      
   }
    setFields = (e) => {
      //this.setState({[e.target.name]: e.target.value})
      // [`product.${e.target.name}`] = e.target.value
      var product = this.state.currentProduct
      product[e.target.name] = e.target.value
      this.setState({currentProduct:product})

    }



    render(){
      return (
        <Form product={this.state.currentProduct} onClick={this.goApp} onSubmit={this.onSubmit} fieldHandler={this.setFields}/>
      )
    }
  }

export default AdminProductEditComponent