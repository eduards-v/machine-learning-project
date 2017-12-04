# Machine Learning Project with Tensorflow
Project to demonstrate machine learning using Tensorflow python library.

## About Project 

For this project I've decided to build image uploading service using Flask-RESTful API written in Python. Any client application that can make AJAX/REST requests may upload an image to a service using HTTP protocol and JSON DTO (Data Transfer Object). In response, service promises to "study" images and fulfilling it by returning results of it's learning outcome. 

What service learn from images we send to it?

We will send [MNIST handwritten digit images](http://yann.lecun.com/exdb/mnist/) to it and see if it can return numeric representation of it back to the client application. 
I've converted binary data sets into png format images in this [subproject](https://github.com/eduards-v/MNIST-data-sets-problems). 
It is a good idea to add canvas on the client side to allow user to draw and send image snippets to the service for digits recognition. 

How service learn from images? 

Tensorflow library is a tool to drive service learning components. Tensorflow developers implemented for us complex mathematical functions required for programs to be able to learn from data we feeding it with.
To build app faster, I will use Keras library built on top of Tensorflow. It provides convenient way
to create neural network model for training and testing image sets. 


## Flask Quick Start

What is Flask used for in this project?

Flask provides infrastructure for REST Aware services. 
One of the key components of Flask-RESTful API are the Resources
defined as a classes that contain HTTP methods get, post, put, delete, etc.


https://flask-restful.readthedocs.io/en/latest/quickstart.html

Extensions: 
* flask cors - `pip3 install flask-cors` - to support cross origin requests

### How to run Flask app on Windows

`set FLASK_APP=main.py`
`flask run`

## Tensorflow 

What is Tensorflow used for in this project?

https://www.tensorflow.org/

Tensorflow is a scientific library for studying data and teaching programs 
to learn data patterns. When program is trained well enough, it can be used
to predict data patterns that are not yet part of the training set. 

It can be used to build neural network, simillar to our brain neurons wired 
together. 

### Project requirements for Tensorflow

In my project, I am using Keras library that is built to use Tensorflow in
more convenient way. It is still requires Tensorflow as a backend to run. 

* Installing Tensorflow - `pip3 install tensorflow`
* Installing Keras - `pip3 install keras`

Other libraries used:

* Numpy - `pip3 install numpy`
* base64 - `pip3 install base64` - to encode and decode images to and from base64 string
* PIL - `pip3 install image` - to support image operations like open, save, resize, etc.
* imageio - `pip3 install imageio` - easy way to get 2d numpy array from an image

## ReactJS Client

### Quick Start with React

Start off by installing *create-react-app* module 

`npm install -g create-react-app`

Run this module to install default application build

`create-react-app my-app`

After installation finishes, follow instructions on the console.

For more details, check official [tutorial](https://reactjs.org/tutorial/tutorial.html)

### Bootstrap

[Bootstraping React App](https://react-bootstrap.github.io/getting-started.html)

[Spacing Utility classes](https://v4-alpha.getbootstrap.com/utilities/spacing/)

### Extra required components 

* react-file-base64 - `npm install react-file-base64 -- save` - base64 component
* react-drawable-canvas - `npm install react-drawable-canvas --save` - ready to use canvas component