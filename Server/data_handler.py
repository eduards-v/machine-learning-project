from keras.datasets import mnist
from keras.utils import np_utils

# Get MNIST data set from Keras
def mnist_set_v1():
    # Load mnist data set from Keras library.
    # Set is already pre-shuffeled.
    # Contains 60000 training images and 10000 test images with corresponding labels
    (X_train, y_train), (X_test, y_test) = mnist.load_data()
    
    # For Neural Network, it is required to add another diamension 
    # to train and test arrays that represents depth/channel of the input image.
    # In MNIST dataset, images have a depth of 1. For colorful images with all 3 RGB channels,
    # use depth of 3. 

    X_train = X_train.reshape(X_train.shape[0], 1, 28, 28)
    X_test = X_test.reshape(X_test.shape[0], 1, 28, 28)

    # Converting input data to float type
    X_train = X_train.astype('float32')
    X_test = X_test.astype('float32')
    # Normalizing data values to the range [0,1]
    X_train /= 255
    X_test /= 255

    # Convert 1-dimensional digit class arrays to 10-dimensional class matrices
    # Represents category into which digit belong to. 
    Y_train = np_utils.to_categorical(y_train, 10)
    Y_test = np_utils.to_categorical(y_test, 10)

    return X_train, Y_train, X_test, Y_test
