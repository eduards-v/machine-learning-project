from flask import Flask, request
from flask_restful import Resource, Api, reqparse
import image_handler
from flask_cors import CORS, cross_origin


app = Flask(__name__)
api = Api(app)

# adopted from https://pypi.python.org/pypi/Flask-Cors
# Initializes Cross Origin Resource sharing for the application.
cors = CORS(app, resources={r"/*": {"origins": "*"}})

# Restful Flask docs: https://flask-restful.readthedocs.io/en/latest/quickstart.html#resourceful-routing
parser = reqparse.RequestParser()
parser.add_argument('filename')
parser.add_argument('image')


# Define REST resources 

class UploadImage(Resource):
    def post(self):

        # handling arguments from json
        args = parser.parse_args()
        # Note that args is a Namespace type
        # implemented as Python dictionaries i.e., 'key': 'value' pair. 
        # Use pop method with a key as argument to obtain value.
        # Method will return KeyError if supplied key is not added to parser arguments

        # print("THIS IS TEST ON ARGUMENTS ",str(args['image']), '@@@@@@@@@@@@@@@@@@@')

        # have to encode string into bytes that represent image
        result = image_handler.save_img_from_json(args.pop('image'), args.pop('filename'))

        # Do image test here and return digit prediction

        return {'message': result}

class GetImage(Resource):
    def get(self, img_name):
        return {'image': image_handler.give_img_for_json(img_name)}

# add URLs for defined REST resource method
api.add_resource(GetImage, '/uploaded_image/<string:img_name>')
api.add_resource(UploadImage, '/upload_image')

if __name__ == '__main__':
    app.run()
