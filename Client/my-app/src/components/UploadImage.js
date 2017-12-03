import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

import FileBase64 from 'react-file-base64';

import './UploadImage.css';
import { Button, Grid, Row, Col, Form} from 'react-bootstrap';
import CanvasComponent from './CanvasComponent';

class UploadImage extends Component{

    constructor(){
        super();

        // component state can be stored here
        this.state = {
            filename: '',
            base64_image: '',
            result: ''
        }
        
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCanvasResult = this.handleCanvasResult.bind(this)
    }


    /* I am using react-file-base64 component to    
       prepare file for dispatch to a service in
       string format. 
       Plugin can be found here: https://www.npmjs.com/package/react-file-base64

       FileBase64 component onDone property (which we use in JSX at render time) 
       return a list of objects called fileInfo, each is composed of data 
       about an image and image itself.

       fileInfo object arguments:
            * name   * base64
            * type   * file
            * size

        Adopted from: https://stackoverflow.com/questions/40950546/react-js-right-way-to-iterate-over-object-instead-of-object-entries
        From docs: 
            keys() - Returns the names of the enumerable properties and methods of an object.
            map() - Calls a defined callback function on each element of an array,
                    and returns an array that contains the results.

    */
    handleFile = (file) => {
        Object.keys(file).map((key, index) =>
        {
            if(key === 'name'){
                this.setState({ filename: file[key] });
            }
            if(key === 'base64'){

                let strippedBase64_image = file[key]
                strippedBase64_image = strippedBase64_image.replace('data:image/png;base64,', String.prototype)
                this.setState({ base64_image: strippedBase64_image });
            }
        })
    }

    /* Method to Submit button event. 
      Our goal is to send image from form to a service.
      We are using ES6 function fetch() to make AJAX call.
      You can build request step by step using it. 
    */

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
                        image: this.state.base64_image
                    })
                }).then( (response) => {
                    return response.json();
                }).then( (json) =>{
                    console.log(json)
                    this.setState({result: json.message});
                });
                event.preventDefault();
            }

    /* Method to return content of this component
       We have to return JSX syntactical code. 
       Some components rendered in this method are from react-bootstrap library i.e., 
            * Grid
            * Row 
            * Col
       We've imported this components on top of the file.
       It is possible to decorate components with parameters, just like in normal xml
       although sometimes we have to follow specific JSX parameter naming convensions
       i.e., className instead of class and so on...
       If you like, you can use normal html DOM syntaxis to define components.
    */

    handleCanvasResult(param){
        this.setState({
            result: param
        });
    }
    render(){


        return(

            <Grid className = 'body-style justify-content-center'>
                <Col className = 'mr-5 ml-5'>
                    <Row className = 'mt-5 mb-5 justify-content-center'>
                        <Col className = 'mr-5 ml-5'>
                            <Form inline onSubmit = {this.handleSubmit} >             
                                <FileBase64 onDone = {this.handleFile.bind(this)}/>
                                <Button bsStyle = 'danger' type = "submit" >Send image</Button>
                            </Form>

                        {/* <textarea value = {this.state.base64_image} /> */}
                        </Col>
                    </Row>
                    <Row className = 'mt-5 mb-5 justify-content-center'>
                        <CanvasComponent action = {this.handleCanvasResult}/>
                    </Row>
                </Col>
                <Col className = 'mr-5 ml-5 mt-5'>
                    <h1>Results: </h1>
                    <h1>{this.state.result}</h1>
                </Col>
            </Grid>
        );
    }
}

// You have to export component in order to use it in other component
export default UploadImage;