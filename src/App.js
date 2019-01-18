import React, { Component } from 'react';
import './App.css';
import DomainName from './components/DomainName';
import ChartType from './components/ChartType';
import DataPoint from './components/DataPoint';
import PropOp from './components/PropOp';
import RGL from './components/RGL';
import firebase from "firebase";
import Button from '@material-ui/core/Button';
import BarChart from './components/charts/BarChart';

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
  constructor(props){
    super(props);
    this.state = {
      chart:'',
      domain:'',
      dp:'',
      pr:'',
      op:'',
      clicked:0 , 
      token:'',
      options:[]
    }
  }
  setDomainName = ({domain, token}) =>{
      this.setState({domain , token});
  }

  setChartType = (chart) => {
    this.setState({chart});
  }

  setOptions = (options) => {
    this.setState({options:options});
  }

  setDp = (dp) => {
    // let option = this.state.options.find(op => op.property === dp);
    this.setState({dp});
  }

  /*setPr = (pr) => {
    this.setState({pr});
  }

  setOp = (op) => {
    this.setState({op});
  }*/

  setPrOp = ({pr , op}) => {
    this.setState({pr, op});
  }

  addChart = () => {
    this.setState(({clicked}) => {
      return {clicked:clicked+1}
    });
  }
  render() {
    return (
      <div className="App">
        <h1> Dashboard Generator </h1>
        <div>
          <div className="form">
            <DomainName getChangeup={this.setDomainName} addChart={this.addChart}/>
            {
              this.state.clicked > 0? <ChartType domainName={this.state.domain} token={this.state.token} setChartType={this.setChartType} addChart={this.addChart} getDomainName={this.setDomainName} setOptions={this.setOptions}/> : <div></div>
            }
            {
              this.state.chart !== ''? <DataPoint options={this.state.options} chart={this.state.chart} setDp={this.setDp}/> : <div></div>
            }
            {
              this.state.dp !== '' ? <PropOp options_pr={this.state.options} setPrOp={this.setPrOp}/> : <div></div>
            }
            {this.state.pr !== '' && this.state.op !== '' && 
          <div>
            <Button style={styles.buttonStyle} onClick={this.addChart}> Preview Chart </Button>
            <Button style={styles.newStyle} onClick={this.resetForm}> Add New Chart </Button> 
          </div>
          }
          </div>
          <div className="dashboard"><RGL newChart={this.onAddItem}></RGL></div>
          
        </div>
      </div>
    );
  }
}

const styles ={
  labelStyle: {
      display: 'flex',
      alignContent: 'center',
      height: 60
  },
  labelStyleLast: {
      display: 'flex',
      alignContent: 'center',
      height: 90
  },
  buttonStyle: {
      padding: 15,
      alignSelf: 'end',
      borderColor: '#26A69A',
      backgroundColor: '#22958A',
      height: 40,
      display: 'flex',
  },
  newStyle: {
      padding: 15,
      alignSelf: 'end',
      marginTop: 40,
      borderColor: '#26A69A',
      backgroundColor: '#22958A',
      height: 40,
      flex: 1,
  }
}

export default App;
