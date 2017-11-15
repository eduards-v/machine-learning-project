import React, { Component } from 'react';

import './UploadImage.css';
import { Button } from 'reactstrap';

class UploadImage extends Component{

    constructor(){
        super();

        // component state can be stored here
        this.state = {
            hello: 'Hello, World!'
        }

        this.updateHello = this.updateHello.bind(this);
    }

    updateHello(newMessage){
        this.setState({ hello: newMessage.target.value});
    }
    render(){
        return(
            <div className = 'p-2 ml-5 mr-5 justify-content-center Body-style'>
                <div className = 'row'>
                    <div className = 'col-sm'>
                        <input type = "text" value = {this.state.hello} 
                               onChange = {this.updateHello}/>
                    </div>
                    <div className = 'col-sm'>
                        <p>{this.state.hello}</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default UploadImage;