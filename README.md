<p># GCS-Move-File-API<br /># GCS-Move-File-API</p>
<p><br />Currently there are no API's for moving the object from Google Cloud Storage Bucket. Currently Google Provides API's to copy and delete the any object from the bucket. However, This source code helps you to migrate the files from one storage bucket to another storage bucket. Either you can move one file or batch files. This API was written in NodeJS with Express Framework. So please make sure that your system installed with NodeJS (https://nodejs.org/en/)</p>
<p><br /><strong>Please follow the below steps for implementation:</strong></p>
<p><strong>Step 1:</strong></p>
<p>git clone https://github.com/SridharanMurugadass/GCS-Move-File-API.git</p>
<p><strong>Step 2:</strong></p>
<p>cd GCS-Move-File-API</p>
<p><strong>Step 3:</strong></p>
<p>npm install</p>
<p><strong>Step 4:</strong></p>
<p><strong>Use the below sample for the request and response</strong></p>
<p><strong>For Single File Migration :</strong></p>
<p>Local Test URL : http://localhost:4444/sendData</p>
<p>Method : POST</p>
<p>Request Type : Application/Json</p>
<p>Request: {"sourceBucket":"gs://gcs-test-data1/testing.csv", "destinationBucket":"gs://gcs-trigger-test-fiona/test"}</p>
<p>Response : { "message": "Task successfully Done" }</p>
<p><br /><strong>For Bulk File Migration :</strong></p>
<p>Local Test URL : http://localhost:4444/sendData</p>
<p>Method : POST</p>
<p>Request Type : Application/Json</p>
<p>Request: {"sourceBucket":"gs://gcs-test-data1/*", "destinationBucket":"gs://gcs-trigger-test-fiona/test"}</p>
<p>Response : { "message": "Task successfully Done" }</p>
<p>&nbsp;</p>
<p>Author<br />Sridharan Murugadass</p>
<p>License<br />Open Source&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>
<!-- #######  YAY, I AM THE SOURCE EDITOR! #########-->
