# menstack
Pitch58 repository for our group API we made in Fall 2021. CIT270 

This method is for windows users

Download and install Node.js

To initiate the back-end project let’s create a new empty project folder:
$ mkdir backend
$ cd backend

Create a package.json file inside that folder by using the following command:
$ npm init -y

Add all files from the repository into your backend folder (final-server.js, and final.model.js)

To add some dependencies to the project:
$ npm install express body-parser cors mongoose

Install a global package by executing the following command:
$ npm install -g nodemon

Download MongoDB from here (Make sure download community Edition), https://docs.mongodb.com/manual/installation/

Download and install the mongo shell (mongosh) using the same MongoDB link on line 23 (don't forget to add a path to the mongoshell.exe to run it from the terminal)

Now we’re ready to start up MongoDB by executing the following command:
$ mongod (or mongosh.exe which is what we preferred)

You should now see a terminal open and a connection to the MongoDB database using the Mongo Shell

Run the command: use finals (this will create our database named finals)

Now we will start our server, open a terminal and cd to your backend folder. Then run the command: nodemon final-server

You should see an active connection to the database, if not then troubleshoot or reach out to us :)

Switch to Postman and create the following requests verbatim:
https://docs.google.com/document/d/1DyyoUDnGobmcsKBum_dutnuyZvyaFDx0xtRcZDFARNI/edit?usp=sharing

(the /finals/add will sign up a user into the DB, the /finals get request will get all user information in the database, and the /finals/username will return the users UUID with the provided username and password)



