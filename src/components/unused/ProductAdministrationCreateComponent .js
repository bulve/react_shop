import React, { Component } from 'react';


//title, imageUrl,description, price, quantity
var AdminComponent = (props) => {
    return ( <div className="col-sm-8">
    <form className="form-horizontal" >
      <div className="form-group">
        <label className="control-label col-sm-2">Title:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" onChange={props.titleHandler} placeholder="Product title" name="title" />
        </div>
      </div>
      <div className="form-group">
        <label className="control-label col-sm-2">Description: </label>
        <div className="col-sm-10">
          <input type="text" className="form-control"  onChange={props.descriptionHandler} placeholder="Product description" name="description" />
        </div>
      </div>
      <div className="form-group">
        <label className="control-label col-sm-2">Price:</label>
        <div className="col-sm-10">          
          <input type="text" className="form-control"  onChange={props.priceHandler} placeholder="Price" name="price" />
        </div>
      </div>
      <div className="form-group">
        <label className="control-label col-sm-2" >Quantoty:</label>
        <div className="col-sm-10">          
          <input type="text" className="form-control"  onChange={props.quantityHandler} placeholder="Quantity" name="quantity" />
        </div>
      </div>
      <div className="form-group">        
        <div className="col-sm-offset-2 col-sm-10">
          <button onClick={props.submitFomrHandler} className="btn btn-default">Submit</button>
        </div>
      </div>
    </form>
  </div>)  
  }


  export default AdminComponent;