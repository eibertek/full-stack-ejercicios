import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Character, { Model as CharacterModel } from './Character';
import Challenge from './Challenge/ChallengeComponent';
// y esta es la misma app.js que nos trae el create-react-app, vamos a retocar un poco este archivo en la clase
class App extends Component {
  // genero en el estado del componente los personajes que utilzaremos, cada uno con sus propias propiedades. 
  // es un array por lo que a futuro podremos ver cada personaje desde this.state.characters[x] siendo x el numero de personaje en el array 
  state = {
    characters: [
      new CharacterModel('MegaMan', 2500, 200, 300),
      new CharacterModel('Sabre', 2500, 200, 300),
      new CharacterModel('Alpha', 2000, 500, 300),
      new CharacterModel('NegativeMan', 1500, 200, 300),
    ],
    // esta variable mantendra el indice del personaje atacante
    attacker:0,
    // esta variable mantendra el indice del personaje defensor    
    defender:1,
  }
  // este sera el metodo para el onChange del dropdown Atacante, simplemente cambia el estado de este compnente
  setAttacker = e => {
    this.setState({ attacker: e.target.value});
  };
  // idem anterior pero con el defensor
  setDefender = e => {
    this.setState({ defender: e.target.value});
  };
  /* 
  este metodo ejecuta el ataque por si mismo.veran que la estrategia es simple, 
  se ejecuta el metodo attackEnemy del character (visto en el modelo Character.model) enviando como parametro 
  el personaje atacado. el modelo se encargara de actualizar la data.
  esto podriamos hacerlo ocn na base de datos en backend y servicios asociados a cada metodo.
  */ 
  go = () => {
      const {characters, attacker, defender} = this.state;
      characters[attacker].attackEnemy(characters[defender]);
      //una vez actualizado la variable character reemplazara a la anterior. esto se llama inmutabilidad
      // lo que significa que en vez de cambiar la variable directamente enviamos un dato completamente nuevo
      this.setState({ characters });
  };
  /* El render utilziara dos componentes:
   - el de character para renderizar cada personaje
   - el de Challenge para manipular la accion (es una buena practica poner 
    esto en otro componente de forma de no llenar el render pero podriamos haberlo hecho directamente aca 
    y no usar otro componente :) )
  */
  render() {
    const { characters } =this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Character test</h1>
        </header>
        {characters.map(char => <div className='character'>
          <Character key={char.getName} {...char} /> {/* estamos haciendo un rest operator de char para pasar directamente 
                                                        los metodos y usar en este caso usar directamente getStatus 
                                                        del modelo */}                        
        </div>)}
        <Challenge characters={characters} 
          onAttackChange={this.setAttacker} 
          onDefenseChange={this.setDefender} 
          attackNow={this.go}          
        />
      </div>
    );
  }
}

export default App;
