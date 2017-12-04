import base64, imageio
from base64 import decodebytes
import numpy as np
from PIL import Image
from runner import predict_digit

# return requested image as a base64 string
def give_img_for_json(img_name):
    with open('./static/uploads/'+img_name, 'rb') as image_file:

        encoded_string = base64.b64encode(image_file.read())

        image_file.close()
        # print(encoded_string)
        # https://stackoverflow.com/questions/606191/convert-bytes-to-a-string
        return encoded_string.decode("utf-8")

# Adopted from https://stackoverflow.com/questions/2323128/convert-string-in-base64-to-image-and-save-on-filesystem-in-python
def save_img_from_json(string_img, img_name):
    with open("./static/uploads/" + img_name, "wb") as image_file:
        image_file.write(decodebytes(string_img.encode()))
        
        image_file.close()

    # prepare image for training
    # adopted from: https://auth0.com/blog/image-processing-in-python-with-pillow/
    image = Image.open("./static/uploads/" + img_name)
    new_image = image.resize((28, 28))
    new_image.save("./static/uploads/" + img_name)
    # new_image.show()

    # read image as numpy array
    img = imageio.imread("./static/uploads/" + img_name)
    # removing unnecessary dimension. 
    # ref.: https://stackoverflow.com/questions/37152031/numpy-remove-a-dimension-from-np-array 
    img = img[:, :, 0]

    # reshape array to add number of images and depth

    img = img.reshape(1, 1, 28, 28)
    print(img.shape)
    # normalize data
    img = img.astype('float32')
    img /= 255
    # predict
    predictions = predict_digit(img)
    # convert numpy data type to python native data type
    return np.asscalar(np.int64(predictions))