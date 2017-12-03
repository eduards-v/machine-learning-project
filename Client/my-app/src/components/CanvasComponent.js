import React, {Component} from 'react';
import { findDOMNode } from 'react-dom';
import { Col} from 'react-bootstrap';
import DrawableCanvas from 'react-drawable-canvas';

class CanvasComponent extends Component{

    constructor(){
        super();
        
        this.state = {
            brushColor: '#FFFFFF',
            lineWidth: 7,
            canvasStyle: {
              backgroundColor: '#000000',
            },
            clear: false,
            result: ''
        }

        this.handleOnClickClear = this.handleOnClickClear.bind(this);
        this.sendImage = this.sendImage.bind(this);
    }

    componentDidMount() {
        const canvas = findDOMNode(this.canvasRef);
        var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        console.log(image)
    }

    handleOnClickClear() {
        this.setState({
          clear: true
        });
    }

    sendImage(event){
        const canvas = findDOMNode(this.canvasRef);
        var image = canvas.toDataURL("image/png");
        console.log(image);
        image = image.replace('data:image/png;base64,', String.prototype)
        //
        let filename = 'newFile.png'

        fetch('http://127.0.0.1:5000/upload_image', {
            //mode: 'no-cors'
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                filename: filename, 
                image: image
            })
        }).then( (response) => {
            return response.json();
        }).then( (json) =>{
            console.log(json)
            this.setState({result: json.message});
            this.props.action(json.message)
        });
            event.preventDefault();
    }


    render() {
        return (
            <Col className = 'mr-5 ml-5'>
                <DrawableCanvas ref={(canvas) => { this.canvasRef = canvas; }} 
                                {...this.state} />
                <button onClick={this.handleOnClickClear}>Clear all</button>
                <button onClick={this.sendImage}>Send Image</button>
            </Col>

        );
    }
}

export default CanvasComponent;