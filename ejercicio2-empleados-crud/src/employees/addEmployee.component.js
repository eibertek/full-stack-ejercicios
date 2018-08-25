import React, { Component } from 'react'
import AddEmployeeConnected from './container/Addemployee';

export default class AddEmployee extends Component {

  state = {
      name:'',
      lastName:'',
      dni: ''
  };

  onChange = e => this.setState({[e.target.name]: e.target.value });

  static getDerivedStateFromProps(nextProps, prevState) {
    const { employees, editEmployee} = nextProps;
    if(editEmployee){
        return {...prevState, ...employees[editEmployee]};
    } 
    return prevState;
  }

  render() {
    const { name, lastName, dni } = this.state;
    return (
      <div>
          {Object.entries(this.state).map(valor => 
          <div> 
          {valor[0]} :<input onChange={this.onChange} 
          name={valor[0]} 
          value={this.state[valor[0]]} /></div>)}
        <button onClick={e => this.props.addEmployee(name, lastName, dni)}>Add Employee</button>

        <button onClick={() => this.props.getData()}>CLIK ME</button>
      </div>
    )
  }
}
