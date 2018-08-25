import React, { Component } from 'react'

export default class AddEmployee extends Component {

  state = {
      name:'',
      lastName:'',
      dni: ''
  };

  onChange = e => this.setState({[e.target.name]: e.target.value });

  render() {
    console.log(this.props);
    return (
      <div>
        {!this.props.stopit ? <AddEmployee stopit={true} />: null}        
          {Object.entries(this.state).map(valor => 
          <div> 
          {valor[0]} :<input onChange={this.onChange} name={valor[0]} /></div>)}
        <button>Add</button>
      </div>
    )
  }
}
