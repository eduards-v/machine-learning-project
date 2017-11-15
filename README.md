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



## Flask Quick Start

What is Flask used for in this project?

Flask provides infrastructure for REST Aware services. 
One of the key components of Flask-RESTful API are the Resources
defined as a classes that contain HTTP methods get, post, put, delete, etc.


https://flask-restful.readthedocs.io/en/latest/quickstart.html

## Tensorflow 

What is Tensorflow used for in this project?

https://www.tensorflow.org/

