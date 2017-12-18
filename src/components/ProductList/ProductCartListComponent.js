import React, {Component} from 'react'


var ProductCartListComponent = (props) =>{
    return (
        <div>
            <ul className="list-group">
                {props.products}
            </ul> 
        </div>
    )
}

export default ProductCartListComponent