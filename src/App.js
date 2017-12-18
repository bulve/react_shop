import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import React, { Component } from 'react';
import Forma from './forma'
import axios from 'axios'

import ReactDOM from 'react-dom';
import './App.css';
import PropTypes from 'prop-types';

import registerServiceWorker from './registerServiceWorker';
//Admin panel component
import AdminCreateContainer from './components/ProductAdministration/ProductAdministrationCreateContainer '
//Navigation component
import NavigationComponent from './components/Navigation/NavigationComponent '
//Produc pannel component
import ProductContainer from './components/ProductList/ProductListContainer '
//admin product list
import AdminViewProductContainer from './components/ProductAdministration/AdminViewProductsContainer'
//admin product edit
import AdminProductEditContainer from './components/ProductAdministration/AdminProductEditContainer'
//public single product details
import ProductDetails from './components/ProductList/ProductDetails'
//public product cart
import ProductCartContainer from './components/ProductList/ProductCartContainer'

var InitialApp = (props) => {
  return <div>
  Initial app
  {props.children}</div>;
};

var NoMatch = (props) => {
  return <div>Route did not match</div>;
};

var PlainComponent = () => {
  return (<div><h1>Empty component</h1></div>)
}

class RouteComponent extends Component{
  constructor(props){
    super(props)
    
  }
  render(){
    return (
          <Router history={hashHistory}  >
              <Route path="/" component={InitialApp} >
                <IndexRoute component={PlainComponent} />
                <Route path="/products" component={ProductContainer } />
                <Route path="/product/:id" component={ProductDetails }  />
                <Route path="/:userName/cart" component={ProductCartContainer } />
                <Route path="/admin" component={AdminViewProductContainer } />
                <Route path="/admin/product/edit/:id" component={AdminProductEditContainer} />
                <Route path="/create" component={AdminCreateContainer}/>
                <Route path="*" component={NoMatch}/>
              </Route>
          </Router>)
  }
}

class App extends Component {
  constructor(){
    super()
    this.state = {
      userName:'',
      amount:0
    }
  }
  

  
  getProductAmount = (value) =>{
    console.log("Kvieciam amount ser ice...")
    axios.get('http://localhost:8080/api/cart/'+value+'/product/amount')
    .then((response)=>{
      console.log("Gavom ats...")
      this.setState({
        amount:response.data
      })
      console.log("Success! " + response.status)
    })
    .catch((erorr) => {
      console.log("We got erorr... " + erorr)
      console.log(erorr)
      this.setState({
        amount:0
      })
    })
    
  }

  

  getChildContext = () => {
    return {userName: this.state.userName};
  }

  setUserName = (e) =>{
     
    this.setState({
      userName:e.target.value
    })
    this.getProductAmount(e.target.value)
    
  }


  render() {
    return (
      <div className="container App">
        <NavigationComponent link={"#"+this.state.userName+"/cart"} productsInCart={this.state.amount} userName={this.state.userName} userNameHandler={this.setUserName} />
        <RouteComponent   />
      </div>
    );
  }
}
App.childContextTypes = {
  userName: PropTypes.string
};



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

export default App;

