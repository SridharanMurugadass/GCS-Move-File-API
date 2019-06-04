# GCS-Move-File-API
# GCS-Move-File-API


This source code helps you to migrate the files from one storage bucket to another storage bucket. 
Either you can move one file or batch files. The API code was written in NodeJS. So please make sure that your system installed with NodeJS (https://nodejs.org/en/)


Please follow the below steps for implementation:

Step 1:

git clone https://github.com/SridharanMurugadass/GCS-Move-File-API.git

Step 2:

cd GCS-Move-File-API

Step 3:

npm install

Step 4:

Use the below sample for the request and response 

For Single File Migration :

Local Test URL :  http://localhost:4444/sendData

Method : POST

Request Type : Application/Json

Request: {"sourceBucket":"gs://gcs-test-data1/testing.csv", "destinationBucket":"gs://gcs-trigger-test-fiona/test"}

Response : { "message": "Task successfully Done" }


For Bulk File Migration :

Local Test URL :  http://localhost:4444/sendData

Method : POST

Request Type : Application/Json

Request: {"sourceBucket":"gs://gcs-test-data1/*", "destinationBucket":"gs://gcs-trigger-test-fiona/test"}

Response : { "message": "Task successfully Done" }



Author
Sridharan Murugadass

License
MIT