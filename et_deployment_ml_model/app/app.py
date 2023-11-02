import joblib
from flask import Flask, jsonify, request

app = Flask(__name__)

# Load the trained models
models = {
    "Decision Tree": joblib.load("trained_models/DecisionTree_model.joblib"),
    "Random Forest": joblib.load("trained_models/RandomForest_model.joblib"),
    "Logistic Regression": joblib.load("trained_models/LogisticRegression_model.joblib"),
    # "SVC": joblib.load("trained_models/SVC_model.joblib")
}

@app.route('/predict', methods=['POST'])
def predict():
    model_name = request.json['model']
    data = request.json['data']
    model = models.get(model_name)

    if model is None:
        return jsonify({"error": "Invalid model name"}), 400

    prediction = model.predict([data])
    return jsonify({"prediction": prediction.tolist()})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)
