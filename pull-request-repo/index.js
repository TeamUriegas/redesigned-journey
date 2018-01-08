
import React from 'react';
import ReactDOM from 'react-dom';
//import { createstore } from 'react-redux';
//import 'isomorphic-fetch';
//import {render} from 'react-dom';
//import {BrowserRouter as Router, Route} from 'react-router-dom';
//import {Provider} from "react-redux";
alert('App Running')

class Mygithub extends React.Component {
 state = {
   repos: [],
   search: "react"
 };

 componentDidMount() {
   fetch(
   )
   .then(response => response.react())
   .then(responsereact => {
     this.setState({ repo: responsereact.items });
   });
 }

  fetch() {
    return "https://github.com/TeamUriegas/redesigned-journey.git"
  }

 render() {
   return (
     <div>
       <h1>Repo List</h1>
       <hr/>
       <ul>
         {this.state.repos.map(repo => <li key={repo.id}>{repo.name}</li>)}
       </ul>
     </div>
   );
 }
}
ReactDOM.render(<Mygithub/>,document.getElementById('root'));
