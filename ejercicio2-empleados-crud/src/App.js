import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddEmployee from './employees/container/Addemployee';
import employeesModel from './employees/employees.model';

const employeesData = [
  new employeesModel('Mariano', 'Eiberman', '31234652'),
  new employeesModel('Mariano', 'GOrosito', '31234652'),
  new employeesModel('Mariano', 'Marconda', '31234652'),
];

class App extends Component {

  componentWillMount() {
    const employees = employeesData.map(employee => employee.getData());
    this.props.getEmployees(employees);
  }

  render() {
    const { employees } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          {employees && employees.map( (employee, idx) => 
              <div>
                {employee.name} {employee.lastName} ({employee.dni})
                <button onClick={ e =>this.props.toggleEdit(idx)} >Editar</button> 
              </div>)}
          <AddEmployee />
      </div>
    );
  }
}

export default App;
