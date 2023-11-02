# Credit Card Fraud Detection 

Team : Jagriti and me

Steps to run the code :
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

