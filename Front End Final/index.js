import React from 'react'
import ReactDOM from 'react-dom'
import 'isomorphic-fetch' 
//import {render} from 'react-dom';
//import {BrowserRouter as Router, Route} from 'react-router-dom';
//import {Provider} from "react-redux";
//import { render } from 'react-dom';
//import { Home, Mine, Search } from './screens';


class Mygithub extends React.Component {
    state = {
      repos: [],
      search: "jQuery"
    };
    
    componentDidMount() {
      fetch("https://api.github.com/search/repositories?q=react/redux"
      )
      .then(response => response.json())
      .then(responsejQuery => {
        this.setState({ repos: responsejQuery.items });
      });
    }
   render() {
      return (
        <div>
          Repo List
          <hr/>
          <ul>
            {this.state.repos.map(repo => <li key={repo.id}>{repo.name}</li>)}
          </ul>
        </div>
      );
    }
    }
    ReactDOM.render(<Mygithub/>,document.getElementById('root'));
    
