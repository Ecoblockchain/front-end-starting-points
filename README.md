#Just the Server

This is a stripped down node server with livereload.

##Setup Instructions

###Environment

####Install homebrew

The package manager that Apple forgot.
```bash
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

####Install Node.js via homebrew
```bash
brew install node
```

####Install bower
For more information see [bower](http://bower.io/).
```bash
npm install -g bower
```

####Install Grunt CLI
For more information see [gruntjs](http://gruntjs.com/).
```bash
npm install -g grunt-cli
```

###Project

####Install npm Project Packages
```bash
npm install
```

####Install bower Project Packages
```bash
bower install
```

###Run the default Grunt task (which starts the server)
```bash
grunt
```

Please see Gruntfile.js for how it's done.

For more information about livereload using grunt and express see [this](http://rhumaric.com/2013/07/renewing-the-grunt-livereload-magic/).
