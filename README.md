# Project: Evaluate a News Article with Natural Language Processing

## Project Description
Build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites - see addtional notes at the end of this document


## Prerequisites
* Webserver - Node
* Web application framework for routing - Express
* Build tool - Webpack with dev and prod environments
* Webpack Loaders - babel, style, CSS, sass, MiniCssExtract
* Webpack Plugins - HtmlWebPack, CleanWebpack,OptimizeCssWebPack, TerserWebpack
* Service Worker
* Unit Test - Jest

## How to run the code
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

<!-- >npm install workbox-webpack-plugin --save-dev -->



3. Run development environment of the Application
>npm run build-dev
>
Make sure to open a second terminal and start Node server by running the below commmands:

>npm run start

4. Run production environment of the Application
>npm run build-prod
>npm run start

5. Check the website running at http://localhost:8080/


## Other tools installed during development
* dotenv package 

It allows us to use environment variables set in a new file
>npm install dotenv 
>
After installing dotenv, a `.env` file was created in the root of the project but added to .gitignore, in which I saved my develper ID/Key from Aylien as:

    API_ID=********
    API_KEY=********************************

* Aylien library

Install 4.0.0 version - this is an older version as the newest one has bug
>
>npm install aylien-news-api@4.0.0 
>

<!-- >npm install AYLIEN/aylien_newsapi_nodejs -->

## List of third-party resources
* [Webpack course](www.udacity.com) from Udacity

## **Important Notes**
* Install 4.0.0 version - this is an older version as the newest one has bug
* `aylien_textapi` was disabled, I used `aylien-news-api` instead



