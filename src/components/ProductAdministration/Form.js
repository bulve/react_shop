import React, {Component} from 'react';
import {Link} from 'react-router';



const Form = (props) => {
    return ( <div className="col-sm-8">
    <form onSubmit={props.onSubmit} className="form-horizontal" >
      <div className="form-group">
        <label className="control-label col-sm-2">Title:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" value={props.product.name || '' } onChange={props.fieldHandler} placeholder="Product title" name="name" />
        </div>
      </div>
      <div className="form-group">
        <label className="control-label col-sm-2">Description: </label>
        <div className="col-sm-10">
          <input type="text" className="form-control" value={props.product.description } onChange={props.fieldHandler} placeholder="Product description" name="description" />
        </div>
      </div>
      <div className="form-group">
        <label className="control-label col-sm-2">Price:</label>
        <div className="col-sm-10">          
          <input type="text" className="form-control" value={props.product.price } onChange={props.fieldHandler} placeholder="Price" name="price" />
        </div>
      </div>
      <div className="form-group">
        <label className="control-label col-sm-2" >Quantoty:</label>
        <div className="col-sm-10">          
          <input type="text" className="form-control" value={props.product.quantity } onChange={props.fieldHandler} placeholder="Quantity" name="quantity" />
        </div>
      </div>
      <div className="form-group">        
        <div className="col-sm-offset-2 col-sm-10">
         <button  onClick={props.onClick} className="btn btn-default">Submit</button>
         <Link to={'/admin'} className="btn btn-default" >Back to admin</Link>
        </div>
      </div>
    </form>
  </div>)  
}

export default Form