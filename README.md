# Memories App
A React application

## Setup
* create a repo `memoriesReactApp`
* create directories:
    * client
    * server
* Install `npm` i.e. Node Package Manager
    * `sudo apt-get install npm`
* Install `Node`
    1. Install NVM `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh`. You may want to install the latest version of NVM.
    2. Restart the terminal.
    3. enter `nvm` to check if it has installed or not. Nove Version Manager is used to manage and install multiple versions of Node.
    4. Go to official NodeJs website and note down the latest stable version number.
    5. In terminal type `nvm install <version-number>`. For example `nvm install 16.14.2`
    6. Now type `nvm use <version-number>`

## Development
* Initialise a React app
    * In terminal, go to `client` directory and then type
        `npx create-react-app ./`
* Initialise an empty JSON package
    * `npm init -y`

### Useful notes
* body parser - send post request
* cors to enable cross origin request
* express - framework for creating routing of application
* mongoose - create models 
* nodemon - to not require to re-run the server everytime there is a change
* instead of writing `const express = require('express')`, we can import packages by writing `import express from 'express'`.
But to do this, we need to make the following changes:
    add this line `"type" : "module",` in `package.json` file after the line `"main" : "index.js`.

* In `package.json`, replace the line `"test": "echo \"Error: no test specified\" && exit 1"` with `"start": "nodemon index.js"`.

Dependencies for client side
* axios - API request
* moment - for time
* react-file-base64 - used for converting images
* redux - 
* redux-thunk - for doing asynchronous actions using redux