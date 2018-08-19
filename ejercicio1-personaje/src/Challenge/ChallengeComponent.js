import React from 'react';
/* aca lo hacemos sencillo, solo queremos dos select y un boton que ejecuten 
los metodos del prop para cambiar atacante, defensor y correr la accion
usamos un componente stateless!!
*/
export default props => {
        const { characters, onAttackChange, onDefenseChange, attackNow } = props;
        return (
            <div> 
                <div>Ataque:</div> 
                <select onChange={onAttackChange}>{characters.map( (char, index) => {
                    const { getName, getAttack } = char;                    
                    return <option id={index} value={index} >{getName()}({getAttack()})</option>
                })}</select>
                <div>defiende:</div> 
                <select onChange={onDefenseChange}>{characters.map( (char, index) => {
                    const { getName, getDefense } = char;                    
                    return <option id={index} value={index} >{getName()}({getDefense()})</option>
                })}</select>
                <button onClick={attackNow}>Atacar</button>
            </div>
        );
    }
