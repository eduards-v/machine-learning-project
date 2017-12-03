
import data_handler, model_builder, model_trainer, model_tester
import keras.models as models

x_train, y_train, x_test, y_test = data_handler.mnist_set_v1()

# print(x_train.shape)

def first_run():
    model = model_builder.build_model()
    model = model_trainer.train_model(model, x_train, y_train)

    result = model_tester.test_model(model, x_test, y_test)

    model.save("./nn_models/mnist_nn_v1.h5")
    # model = load_model()
    
    # Load the model again with: model = load_model("iris_nn.h5")

#first_run()

def predict_digit(sample):
    model = models.load_model("./nn_models/mnist_nn_v1.h5")
    result = model_tester.predict_digit(model, sample)
    return result[0]

