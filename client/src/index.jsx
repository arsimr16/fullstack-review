import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }

  search (term) {
    let query = {username: term};
    $.ajax({
      url: '/repos',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(query),
      success: () => {
        console.log('Successful!') // on success, send get request to server with query data to return matching repo from data base
        $.ajax({
          url: '/repos',
          type: 'GET',
          contentType: 'application/json',
          data: JSON.stringify(query),
          success: (data) => {
            this.setState({repos: data})
          },
          error: (err) => {
            console.log('Failed GET request!', err);
          }
        });
      },
      error: (err) => {
        console.log('Failed POST request!', err);
      }
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));