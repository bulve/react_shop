import React, { Component } from 'react';

import AdminViewProductComponent from './AdminViewProductComponent'

import samsung from './samsung.jpg'

import axios from 'axios';




var style = {
    image:{
        float: 'left',
        width: '120px',
        marginLeft: '10px',
    },
    title:{
        float: 'left',
        paddingLeft: '20px',
        fontSize: '18px',
    },
    desc:{
        position:'absolute',
        top: '30px',
        left: '150px',
        fontSize:'16px'
    },
    row:{
        position:'relative'
    },
    createButton:{
        margin:'20px'
    }
}



class AdminViewProductsContainer extends Component{
    constructor(){
        super()
        this.state = {
            productList:''
        }

    }

    componentWillMount = () =>{
        axios.get('http://localhost:8080/api/product/')
        .then( (response) => {
            this.setState({
                productList:response.data.map(this.composeProductList)
            })
        })
        .catch((erorr) => {
            console.log("Got erorr... " + erorr)
        })
    }

  


    composeProductList = (product, index) => {
        return( <AdminViewProductComponent
            key={index}
            imageStyle={style.image}
            titleStyle={style.title}
            descStyle={style.desc}
            rowStyle={style.row}
            id={product.id}
            image={samsung}
            name={product.name}
            description={product.description}
            price={product.price}
            editProductHandler={this.editProductHandler}
        />)
        }

    render(){
        return(
            <div>
                <a href="#create"><button style={style.createButton} className="btn">Create product</button></a>
                {this.state.productList}
            </div>
        )
    }
}


export default AdminViewProductsContainer