import React, {Component} from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import ChartType from './ChartType';
import TextField from '@material-ui/core/TextField';
import firebase from "firebase";

export default class DomainName extends Component {
  constructor(props){
    super(props);
    this.state = {
      dom: '',
      clicked: false,
      token:''
    }
    
    this.addChart=this.addChart.bind(this);
    this.handleChange.bind(this);
    // this.getToken.bind(this);
    // this.findQueryLimiations.bind(this);
  };

  componentDidMount(){
    this.getToken('aaliya@panalyt.com','Stay*211').then(token => {
        this.setState({token})
    })
  }
  getToken = (username, password) => {
    return firebase.auth().signInWithEmailAndPassword(username, password).then((user)=>{
        return firebase.auth().currentUser.getIdToken().then((token)=>{
            console.log(token); 
            return token; 
        });
    })
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.addChart();
  };

  addChart(){
    this.setState({
      clicked: true
    })
  }

  render() {
    const { labelStyle } = styles;
    return (  
      <div style={{alignContent: 'center'}}>
        <FormControl style={labelStyle}>
          <InputLabel shrink htmlFor="dom-label-placeholder" style={{paddingLeft: 30, height: 10}}>
            Domain Name
          </InputLabel>
          <TextField onChange={this.handleChange}/>
        </FormControl>
        {
            this.state.clicked ? <ChartType domainName={this.state.dom} token={this.state.token}/> : <div></div>
        } 
      </div>
    );
  }
}

const styles ={
    labelStyle: {
        height:70,
        justifyContent: 'center',
        display: 'flex'
    }
}
