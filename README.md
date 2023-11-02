# Credit Card Fraud Detection 



Requirements: You should have Docker pre installed before we run the following comands.
`https://docs.docker.com/desktop/install/`

To train the model, I used the code in the file 
ET_401_Credit_Card_Fraud.ipynb
It took some 7 to 8 hours to train each model's hyperparamater tuning


Steps to run the code (pretrained models by us - Refer the above code file to look into training code):

```
- git clone https://github.com/AsifShaikDS/et_4_project.git
- cd et_deployment_ml_model
- docker build -t image_name . 
- docker run -p 4000:80 image_name 
```
Now the model is running in localhost:4000 
we can have post request to `localhost:4000/predict`


for example, you wanna predict using Random_Forest model, send this in body along with request \
{ \
    "model" : "Random Forest", \
    "data" : "" \
}

