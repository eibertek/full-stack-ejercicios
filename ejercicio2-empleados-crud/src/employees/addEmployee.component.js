import React, { Component } from 'react'
import AddEmployeeConnected from './container/Addemployee';

export default class AddEmployee extends Component {

  state = {
      name:'',
      lastName:'',
      dni: ''
  };

  onChange = e => this.setState({[e.target.name]: e.target.value });

  render() {
    console.log('Estas son las props del addEmployye', this.props);
    const { name, lastname, dni } = this.state;
    return (
      <div>
        {!this.props.stopit ? <AddEmployeeConnected stopit={true} />: null}        
          {Object.entries(this.state).map(valor => 
          <div> 
          {valor[0]} :<input onChange={this.onChange} name={valor[0]} /></div>)}
        <button onClick={e => this.props.addEmployee({ name, lastname, dni})}>getEmployees</button>
      </div>
    )
  }
}
