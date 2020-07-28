# Project: Evaluate a News Article with Natural Language Processing

## Project Description
**Original Project**: Build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites 

**Current Project**: a web tool that allows users to input a U.S. President's name since 1980 and returns the most popular article title and source - see **Addtional Notes** at the end of this document for more informaiton


## Prerequisites Summary
* Webserver - Node
* Web application framework for routing - Express
* Build tool - Webpack with dev and prod environments
* Webpack Loaders - babel, style, CSS, sass, MiniCssExtract
* Webpack Plugins - HtmlWebPack, CleanWebpack,OptimizeCssWebPack, TerserWebpack
* Service Worker
* Unit Test - Jest

## Install Prerequisites
1. Install NPM or upgrade NPM if you already have it installed 
        
        npm install  
        npm install -g npm@latest

2. Install Node package

        npm install express
        npm install body-parser
        npm install cors

3. Install webpack and the command line instructions (CLI) tool using npm

        npm i webpack webpack-cli

4. Install Webpack Dev Server
    
        npm i -D webpack-dev-server

5. Install loaders and plugins

        npm i -D @babel/core @babel/preset-env babel-loader
        npm i -D style-loader node-sass css-loader sass-loader
        npm i -D clean-webpack-plugin
        npm i -D html-webpack-plugin
        npm i -D mini-css-extract-plugin
        npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin

6. Install Service Worker
        
        npm install workbox-webpack-plugin --save-dev

7. Install Jest

        npm install --save-dev jest

## Run the Code
1. How to run development environment of the Application

* Open one terminal and run below code

        npm run build-dev

* Open second terminal and start Node server with below commmand

        npm run start

* The website will be running with an automatically opened broswer at http://localhost:8080/

2. How to run production environment of the Application
* Build scripts and run Node server:

        npm run build-prod
        npm run start
* Check the website running at http://localhost:3000/

3. How to run unit test

        npm run test

4. How to test Service Worker is working:
* Open project in Production environment (reference #2 in "Run the code" section)
* Open browser at http://localhost:3000/
* Close Node server (`Ctrl +  C` in terminal)
* Refresh browser page at http://localhost:3000/
* Page is still available




## Other Tools Installed During Development
* dotenv package - it allows us to use environment variables set in a new file

        npm install dotenv 

After installing dotenv, a `.env` file was created in the root of the project but added to .gitignore, in which I saved my develper ID/Key from Aylien as:

        API_ID=********
        API_KEY=********************************

* Aylien library

Install 4.0.0 version - this is an older version as the newest one has bug

        npm install aylien-news-api@4.0.0 




## List of Third-party Resources
* [Webpack courses](www.udacity.com) from Udacity

## Addtional Notes
* Install 4.0.0 version - this is an older version as the newest one has bug
* `aylien_textapi` was disabled, I used `aylien-news-api` instead



