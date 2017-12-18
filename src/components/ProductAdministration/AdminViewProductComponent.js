import React, {Component} from 'react';
import {Link} from 'react-router';


 var AdminViewProductComponent = (props) =>{
    return (
        <div className="col-sm-12">
            <div className="panel panel-default">
                <div className="panel-body">
                <div style={props.rowStyle} className="row">
                    <img style={props.imageStyle} src={props.image} alt='alt'/>
                    <p style={props.titleStyle}>{props.name}</p>
                    <p style={props.titleStyle}>{props.price}$</p>
                    <Link to={'/admin/product/edit/'+props.id } className="btn btn-primary">Edit</Link>
                    <p style={props.descStyle}>{props.description}</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AdminViewProductComponent

// to='admin/product/edit/:id' params={{id: props.id}} 