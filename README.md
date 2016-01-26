#Just the Server

This is a stripped down grunt-express node server with livereload. The files you want to serve should be put in the `./site` directory and when those files are modifed and saved, they will then be copied into the `./served' directory and displayed in all their glory. 

##Setup Instructions

###Environment Setup

Please see the master branch to make sure you have your environment setup as needed.

###Project Setup

####Install npm Project Packages
```bash
npm install
```

###Run the default Grunt task (which starts the server)
```bash
grunt
```

There is a bower.json and .bowerrc file included here but there are no dependencies and nothing is installed. 

For more information on installing packages with bower, please visit [the Bower website.](http://bower.io/).