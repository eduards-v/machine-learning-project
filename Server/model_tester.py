
# Use test set to evaluate model after training 
def test_model(model, x_test, y_test):

    score = model.evaluate(x_test, y_test, verbose=0)
    return score

# Predict a number from an image numpy array.
def predict_digit(model, image):
    
    predictions = model.predict_classes(image, batch_size = 1)

    return predictions