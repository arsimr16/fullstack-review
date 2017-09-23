const express = require('express');
const bodyParser = require('body-parser');
const getRepo = require('../helpers/github.js');
const addToDb = require('../database/index.js');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  // get info from post request
  let username = req.body.username;
  // call githubJS (Get Request) helper function with data from post request
  // helper function returns an object with all data from user repo
  getRepo.getReposByUsername(username, (data) => {
    let repoObj = JSON.parse(data);
    
    repoObj.forEach((repo) => { 
      // pull our relevant data from object
      let storage = {repo_id: repo.id, repo_name: repo.name, url: repo.url, forks: repo.forks};
      // store data in database
      addToDb.save(storage);

    });

  });

  // set status code to 201 for successful request and send back empty body

  res.end();
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send  back the top 25 repos

  // get information from get request - query
  // take data and look for matches in database (.find(query object))
  // returns some collection of matching data
  // Figure out what the data looks like
  // Goal: Turn into an array of repos urls
  // respond with status code of 200 and write body with the matching query

});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
