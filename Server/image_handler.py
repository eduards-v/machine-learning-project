import base64
from base64 import decodestring


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
        image_file.write(decodestring(string_img.encode()))
        image_file.close()
