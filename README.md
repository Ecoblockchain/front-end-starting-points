#Front End Templates

This is a starting point for front end development that I put together recently for my own use and stored here to keep track of. It uses npm, bower, grunt, and LESS as well as the following Javascript libraries: jQuery, Underscore, Backbone (with computedfields) and RequireJS. Bootstrap 3 is also there. If you want to make it **way more better for you** then go ahead.

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
