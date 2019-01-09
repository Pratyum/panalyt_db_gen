import React, { View,Component } from 'react';
import './App.css';
import DomainName from './components/DomainName';
import RGL from './components/RGL';
import firebase from "firebase";
var config = {
  apiKey: "AIzaSyDr6DAoGxzCp2b2ICDMfuWgm8Wp80FGenY",
  authDomain: "panalyt-internal-dev.firebaseapp.com",
  databaseURL: "https://panalyt-internal-dev.firebaseio.com",
  projectId: "panalyt-internal-dev",
  storageBucket: "panalyt-internal-dev.appspot.com",
  messagingSenderId: "388343097026"
};
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Dashboard Generator </h1>
        <div>
          <div className="form"><DomainName/></div>
          <div className="dashboard"><RGL/></div>
        </div>
      </div>
    );
  }
}

export default App;
