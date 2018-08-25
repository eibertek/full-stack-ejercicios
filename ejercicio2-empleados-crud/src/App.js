import React, { Component } from 'react';
import employeesData from './employees/employees.model';
import Employee from './employees/employees.component';
import logo from './logo.svg';
import './App.css';
import AddEmployee from './employees/container/Addemployee';
import { GET_EMPLOYEES } from './employees/reducer';

const employees = [
  new employeesData('Mariano', 'Eiberman', '31234652'),
  new employeesData('Mariano', 'Eiberman', '31234652'),
  new employeesData('Mariano', 'Eiberman', '31234652'),
];

class App extends Component {
  render() {
    this.props.store.dispatch({ type: GET_EMPLOYEES, 
      employees:employees.map(empl => empl.getData())});
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          {employees.map( (employee, i) => <Employee key={i} {...employee.getData()} />)}
          <AddEmployee />
      </div>
    );
  }
}

export default App;
