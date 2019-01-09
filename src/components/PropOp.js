import React, {Component} from 'react';
//import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {Text} from 'react';
import Input from '@material-ui/core/Input';
import ChartType from './ChartType';

class Property extends Component {
  constructor(props){
    super(props);
    this.state = {
      pr: ''
    }
    this.handleChange.bind(this);
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { labelStyle } = styles;
    return (  
      //For dragdown list
      <div>
        <FormControl style={labelStyle}>
          <InputLabel style={{paddingLeft: 30}}>
            Select Property
          </InputLabel>
          <Select
            value={this.state.pr}
            onChange={this.handleChange}
            input={<Input name="pr" id="pr-label-placeholder" />}
            displayEmpty
            name="pr"
          >
            <MenuItem value="empID">Employee ID</MenuItem>
            <MenuItem value="hire-date">Hire Date</MenuItem>
            <MenuItem value="salary">Salary</MenuItem>
            <MenuItem value="age">Age</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }
}

class Operation extends Component {
    constructor(props){
      super(props);
      this.state = {
        op: ''
      }
      this.handleChange.bind(this);
    };
  
    handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };
  
    render() {
      const { labelStyleLast } = styles;
      return (  
        <div>
          <FormControl style={labelStyleLast}>
            <InputLabel style={{paddingLeft: 30}}>
              Select Operation
            </InputLabel>
            <Select
              value={this.state.op}
              onChange={this.handleChange}
              input={<Input name="op" id="op-label-placeholder" />}
              displayEmpty
              name="op"
            >
              <MenuItem value="COUNT">Count</MenuItem>
              <MenuItem value="SUM">Sum</MenuItem>
              <MenuItem value="AVG">Average</MenuItem>
              <MenuItem value="MAX">Maximum</MenuItem>
              <MenuItem value="MIN">Minimum</MenuItem>
            </Select>
          </FormControl>
        </div>
      );
    }
  }

  export default class PropOp extends Component {
    constructor(props){
        super(props);
        this.state = {
          clicked: false
        }
        this.addChart=this.addChart.bind(this);
      };
    
      addChart(){
        this.setState({
          clicked: true
        })
      }

    render () {
        return (
            <div>
                <Property/> <Operation/> 
                <Button style={styles.buttonStyle} onClick={this.addChart}> Preview Chart </Button>
                {
                    this.state.clicked ? <Button style={styles.newStyle}> Add New Chart </Button> : <div></div>
                }
            </div>
    )}
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
