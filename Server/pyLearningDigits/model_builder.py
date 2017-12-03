from keras.models import Sequential
from keras.layers import Dense, Dropout, Activation, Flatten
from keras.layers import Convolution2D, MaxPooling2D

def build_model():
    model = Sequential()

    # Coonvolution docs: https://keras.io/layers/convolutional/
    model.add(Convolution2D(32, (3,3), activation='relu', 
                            input_shape=(1,28,28), data_format='channels_first'))
    model.add(Convolution2D(64, (5,5), activation='relu'))
    model.add(MaxPooling2D(pool_size=(2,2)))
    model.add(Dropout(0.25))
    
    model.add(Flatten())
    model.add(Dense(128, activation='relu'))
    model.add(Dropout(0.5))
    model.add(Dense(10, activation='softmax'))

    model.compile(loss='categorical_crossentropy',
                optimizer='adam',
                metrics=['accuracy'])
                
    return model