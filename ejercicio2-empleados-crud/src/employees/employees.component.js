import React, { Component } from 'react'

export default class Employee extends Component {  
  render() {
    const { name, lastName, dni } = this.props;  
    return (
      <div>
        Empleado: {name} {lastName} {dni}
      </div>
    )
  }
}
