# menstack
Pitch58 repository for our group API we made in Fall 2021. CIT270 

To initiate the back-end project let’s create a new empty project folder:
$ mkdir backend

Create a package.json file inside that folder by using the following command:
$ npm init -y

To add some dependencies to the project:
$ npm install express body-parser cors mongoose

Install a global package by executing the following command:
$ npm install -g nodemon

You need a js file named final-server.js

Start the server by using nodemon and check tthe running on PORT: 4000
$ nodemon final-server.js

Download MongoDB from here (Make sure download community Edition), https://docs.mongodb.com/manual/installation/

Now we’re ready to start up MongoDB by executing the following command:
$ mongod
