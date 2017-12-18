import React, {Component} from 'react';

import axios from 'axios'; 
import AdminProductEditComponent from './AdminProductEditComponent'
import samsung from './samsung.jpg'

class AdminProductEditContainer extends Component {

    constructor(props){
        super(props)
        this.id = props.params.id 
    }
    render(){
        return (
            <div>
                <br/><br/>
            <AdminProductEditComponent
               id={this.id}
            />
            </div>
        )
    }
}

export default AdminProductEditContainer