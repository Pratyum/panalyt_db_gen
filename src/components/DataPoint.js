import React, {Component} from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import PropOp from './PropOp';

export default class DataPoint extends Component {
  
    constructor(props){
      super(props);
      this.state = {
        token: props.token,
        chart: props.chart,
        domain: props.domain,
        dp: '',
        clicked: false,
        options:props.options ? props.options : [
            {property:'Location', employeeDataProperty:'Location'},
            {property:'Hire_Date', employeeDataProperty:'HireDate'},
            {property:'Salary', employeeDataProperty:'Salary'},
            {property:'Location', employeeDataProperty:'Location'}
        ]
      }
      this.addPropOp=this.addPropOp.bind(this);
      this.handleChange.bind(this);
    };
    
  
    handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
      this.addPropOp();
    };
  
    addPropOp(){
      this.setState({
        clicked: true
      })
    }
  
    render() {
        const { labelStyle } = styles;
        return (  
        //For dragdown list
        <form noValidate autoComplete="off">
          <FormControl style={labelStyle}>
            <InputLabel shrink htmlFor="dp-label-placeholder" style={{paddingLeft: 30}}>
              Select DataPoint
            </InputLabel>
            <Select
              value={this.state.dp}
              onChange={this.handleChange}
              input={<Input name="dp" id="dp-label-placeholder" />}
              displayEmpty
              name="dp"
            >
            {this.state.options.map(option => <MenuItem value={option.property}>{option.employeeDataProperty}</MenuItem>)}
              {/* <MenuItem value="month">Month</MenuItem>
              <MenuItem value="location">Location</MenuItem>
              <MenuItem value="hire-date">Hire Date</MenuItem> */}
            </Select>
          </FormControl>
          {this.state.clicked ?
            <PropOp 
            options_pr={this.state.options} 
            chart={this.state.chart} 
            token={this.state.token}
            domain={this.state.domain}
            dp={this.state.dp}/> 
          : <div></div>
          }
        </form>
      );
    }
  }

  const styles ={
    labelStyle: {
        display: 'flex',
        alignContent: 'center',
        height: 60
    }
}
