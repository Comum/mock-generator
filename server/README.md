# Description

REST Api for the mock generator.

# Supported routes

 - /supported-request - [GET] returns the main directories in responses folder and lists the contents of the schema folder
 - /schemas-json/:folder/:file - [GET] returns the specific folder
 - /request-structure/:request - [GET] returns the mock structure for the form to request the mock
 - /get-mock/:request - [POST] returns the calculated mock from the input object