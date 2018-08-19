import React, { Component } from 'react'
// este es el componentepara mostrar los personajes, estamos mandandole las propiedades desde App
// el objetivo de este componente es solo mostrar le estado que recibe desde su padre, App.js
// es necesario que este sea un componente statefull?
export default class CharacterComponent extends Component {
 
  render() {
    const { getStatus } = this.props;  
    const { name, life, experience } = getStatus();
    return (
      <div className={life > 0 ? 'charActive' : 'charDead'}>
        Character Data <br />
        <div>{name}</div>
        {life > 0 ? <div>Life {life}</div> : <div>DEAD</div>}
        <div>Experience {experience}</div>        
      </div>
    )
  }
}
