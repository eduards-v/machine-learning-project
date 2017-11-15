import React, { Component } from 'react';
import FileBase64 from 'react-file-base64';

import './UploadImage.css';
import { Button, Grid, Row, Col, Form} from 'react-bootstrap';

class UploadImage extends Component{

    constructor(){
        super();

        // component state can be stored here
        this.state = {
            hello: 'Hello, World!',
            filename: '',
            base64_image: ''
        }

        this.updateHello = this.updateHello.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateHello(newMessage){
        this.setState({ hello: newMessage.target.value});
    }

    handleFile = (file) => {
        Object.keys(file).map((key, index) =>
        {
            if(key === 'name'){
                this.setState({ filename: file[key] });
            }
            if(key === 'base64'){

                this.setState({ base64_image: file[key] });
            }
        })
    }

    handleSubmit = (event) => {
                fetch('http://127.0.0.1:5000/upload_image', {
                    //mode: 'no-cors'
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        filename: this.state.filename, 
                        image: this.state.base64_image.replace('data:image/jpeg;base64,', String.prototype)
                    })
                })
                event.preventDefault();
            }


    render(){
        return(

            <Grid className = 'p-4 ml-5 mr-5 body-style' >
                <Row className = 'justify-content-center'>
                    <Col>
                        <input type = "text" value = {this.state.hello} 
                               onChange = {this.updateHello}/>

                        <p>{this.state.hello}</p>
                    </Col>
                    
                </Row>

                <Row className = 'justify-content-center'>
                    <Col>
                        <Form inline onSubmit = {this.handleSubmit} >             
                            <FileBase64 onDone = {this.handleFile.bind(this)}/>
                            <Button bsStyle = 'danger' type = "submit" >Send image</Button>
                        </Form>

                       <textarea value = {this.state.filename} />
                    </Col>
                </Row>

            </Grid>
        );
    }
}

export default UploadImage;