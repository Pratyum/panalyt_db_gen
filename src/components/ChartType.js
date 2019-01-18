import React, {Component} from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import DataPoint from './DataPoint';
import axios from 'axios';

export default class ChartType extends Component {
  constructor(props){
    super(props);
    this.state = {
      chart: '',
      clicked: false,
      token:props.token,
      domain: props.domainName,
      options:[]
    }
    this.addDP=this.addDP.bind(this);
    this.handleChange.bind(this);
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value },()=>{
      this.props.setChartType(this.state.chart);
    });
    this.addDP();
  };

  addDP(){
    this.setState({
      clicked: true
    })
  }

  findQueryLimitations = (domain) =>{
    return axios.get('https://panalyt-internal-dev.appspot.com/_ah/api/employeedata/listQueryLimitations',{
        headers:{'Authorization':`Bearer ${this.state.token}`},
        params:{'domain':domain}
    }).then((result) => {
        console.log(result);
        return result.data.limitations;
    });
  }

  componentWillUpdate(nextProps , nextState){
    if(this.state.token !== nextProps.token){
      this.setState({token:nextProps.token});
    }
  }

  componentDidMount(){
    this.findQueryLimitations(this.state.domain).then((options)=>{
        this.setState({options},()=>{
          this.props.setOptions(this.state.options);
        });
    })
  }

  render() {
    const { labelStyle } = styles;
    return (  
      <div style={{alignContent: 'center'}}>
        <FormControl style={labelStyle}>
          <InputLabel shrink htmlFor="chart-label-placeholder" style={{paddingLeft: 30}}>
            Select Chart Type
          </InputLabel>
          <Select
            value={this.state.chart}
            onChange={this.handleChange}
            input={<Input name="chart" id="chart-label-placeholder" />}
            name="chart"
          >
            <MenuItem value="bar">Bar Chart</MenuItem>
            <MenuItem value="line">Line Chart</MenuItem>
            <MenuItem value="pie">Pie Chart</MenuItem>
          </Select>
        </FormControl>
        
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
