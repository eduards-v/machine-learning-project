

def train_model(model, x_train, y_train):

    # Fit model on training data
    model.fit(x_train, y_train, 
            batch_size=500, epochs=10, verbose=1)
    return model
    