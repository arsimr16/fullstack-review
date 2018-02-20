# fullstack-review
This is a project I completed as a student at [hackreactor](http://hackreactor.com).

## GitHub Fetcher: Fullstack Exercise
You are given a skeleton of frontend and backend code. On the frontend, you have react. On the backend, you have express and mongo.

Your task is to fetch data from an API, store that data in a database, and display the data on your app's main page.

## Takeaways
The primary purpose of this sprint is to give you the opportunity to compose together all the isolated concepts you've learned in the past 5 weeks. It'll be the first time you build a full-stack app from near-scratch. While this is an exercise, not an assessment, DO NOT reference any code in your past projects. Instead, use google as your primary source of information.

## Getting Started
* Install MongoDB.
  * Follow the [installation instructions](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#install-mongodb-community-edition-with-homebrew).
  * Follow the [these instructions](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#run-mongodb) to run MongoDB.
* Install dependencies.
```javascript
$ npm install -g webpack
$ npm install
```
* Start webpack and the server in seperate terminal tabs, using the following commands.
```javascript
$ npm run react-dev
$ npm run server-dev
```
* Open the application in your browser at localhost:1128.
* Take a look at the provided code. This repo uses webpack, which you don't need to worry too much about right now. Webpack is a replacement for the babel command you used in recast.ly. Notice, however, that rather than attaching components to the window object, you'll use import and export syntax.
* See the tips section before you start writing any code.

## Overview
You are building an app that takes data from GitHub's API and stores it in your database. Here is an overview of what you'll need to do:
* When a user types in a GitHub username and submits the form, your app should:
  * Send a POST request to your express server
  * Your server should GET that user's repos from GitHub's API
  * Your server should then save the repos to the database
* When a user visits / refreshes your page, your app should:
  * GET the top (how will you determine top?) 25 repos in your express server's database
  * Take those repos and display them on the page

## Basic Requirements:
* Draw a diagram showing how this app works. Make sure your diagram includes the client, the server, and the database.
* Explain your diagram to a fellow student, and then to a Tech Mentor or HIR.
* Design (draw a schema) a repos mongoose schema. You can look at data.json to see the structure of the data from the github api. What properties will you need? Once you've figured out your schema, complete the Repos schema in database/index.js, using the Mongoose Quick Start Guide for help.
* Explain your schema to a fellow student, and then to a Tech Mentor or HIR.
* When a user types a github username into the text field, use jQuery's ajax method to send a POST request to /repos (you'll have to fix the bug in the Search Component first).
* Complete the getReposByUsername function in helpers/github.js. In this function, you'll use the npm request module to fetch a user's Github repositories from the Github API.
  * To access the Github API without rate limits, you'll need a personal access token. Make a copy of config.example.js and rename it to config.js, then add your personal access token.
* Complete the save function in database/index.js. This function will save the relevant data from the Github API in the mongo database.
  * Ensure there are no duplicate repos. If you happen to import the same repo twice, it should only show up once in your database. See the tips section about considering unique columns.
* Complete the POST /repos endpoint on your express server - in this route, you'll use your getReposByUsername function to fetch the specified user's Github repos, then use your save function to store the repo information in database.
* Write a GET /repos endpoint that retrieves the top 25 repos stored in your database, sorted by the criteria you decided on earlier.
* Refactor the client so that when the page loads, the top 25 repos are displayed on the page.
* Make each repo's name in the table link to that repo's page on GitHub.
* After entering a github handle in the form, update the page with the latest top 25 without requiring a page refresh.
* Complete Getting Started with NodeJS on Heroku.
  * What config variables will you need to set in order for the deployed version to work? Modify your existing code to use config varaibles, then set those config variables when you get to that section.
* After completing all of the above requirements, demo your app to a Tech Mentor or HIR.
