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
import RGL from './RGL';

//import BarChart from './charts/BarChart';
//import LineChart from './charts/LineChart';
//import PieChart from './charts/PieChart';

class Property extends Component {
  constructor(props){
    super(props);
    this.state = {
      pr: '',
      options_pr: props.options_pr ? props.options_pr : [
        {property:'Location', employeeDataProperty:'Location'},
        {property:'Hire_Date', employeeDataProperty:'HireDate'},
        {property:'Salary', employeeDataProperty:'Salary'},
        {property:'Location', employeeDataProperty:'Location'}
    ]
    }
    this.handleChange.bind(this);
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value },() => {
      this.props.action(this.state.pr);
    });
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
          {this.state.options_pr.map(option => <MenuItem value={option.property}>{option.employeeDataProperty}</MenuItem>)}
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
        op: '',
        pr: props.pr,
        options_pr: props.options_pr ? props.options_pr : [
          {property:'COUNT', allowedMeasureOperations:'COUNT'},
          {property:'SUM', allowedMeasureOperations:'SUM'},
          {property:'MAX', allowedMeasureOperations:'MAX'},
          {property:'MIN', allowedMeasureOperations:'MIN'}
      ],
      option_pr:{}
      }
      this.handleChange.bind(this);
    };

    componentWillUpdate(nextProps , nextState){
      if(this.props.pr != nextProps.pr){
        
        this.setState({pr:nextProps.pr},() => {
            let option_pr  = this.state.options_pr.find(option => option.property == this.state.pr);
            console.log(option_pr);
            this.setState({option_pr});
        });
      }
    }
  
    handleChange = event => {
      
      this.setState({ [event.target.name]: event.target.value },() => {
        this.props.action(this.state.op);
      });
      
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
            {this.state.option_pr.allowedMeasureOperations && this.state.option_pr.allowedMeasureOperations.map(option => <MenuItem value={option}>{option}</MenuItem>)}
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
          clicked: false,
          token: props.token,
          chart: props.chart,
          options_pr: props.options_pr,
          domain: props.domain,
          dp: props.dp,
          pr:'',
          op:''
        }
        this.addChart=this.addChart.bind(this);
        this.handleProperty=this.handleProperty.bind(this);
        this.handleOperation=this.handleOperation.bind(this);
        this.resetForm=this.resetForm.bind(this);
      };

      componentWillUpdate(nextProps , nextState){
        if(nextProps.options_pr != this.state.options_pr){
          this.setState({options_pr:nextProps.options_pr});
        }
      }

      handleProperty(val){
        console.log(val);
        this.setState({pr: val})
      };

      handleOperation(value){
        this.setState({op: value},()=>{
          this.props.setPrOp({pr:this.state.pr , op:this.state.op});
        })
      };
    
      addChart(chart){
        this.setState({
          clicked: true
        })
      /*  switch(chart){
          case 'bar':
            return <BarChart/>;
          case 'line':
            return <LineChart/>;
          case 'pie':
            return <PieChart/>;
          default:
            return <BarChart/>;
        } */
        //this.props.add();
      }

      resetForm(){
        this.setState({
          ChartType: '',
          dp: '',
          pr: '',
          op: ''
        })
      }

    render () {
        return (
            <div>
                <Property options_pr={this.state.options_pr} action={this.handleProperty}/> 
                <Operation options_pr={this.state.options_pr} pr={this.state.pr} action={this.handleOperation}/> 
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
