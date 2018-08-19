/** Este es un Modelo de datos: lo utlizaremos para mantener el estructura del personaje y afectar a sus cambios. */
export default class character {
    /** como vimos en la clase anterior, esta clase tiene metodos y propiedades privadas, en este caso apra configurar al personaje */
    constructor(name, life, attack, defense) {
        this.__name = '';
        this.__life = 2000;
        this.__attack = 100;
        this.__defense = 100;
        this.__experience = 0;

        const configure = (name, life, attack, defense) => {
            this.__name = name;
            this.__life = life;
            this.__attack = attack;
            this.__defense = defense;
            // cuando llamo al objeto devuelvo el contexto para asi poder utilziar sus propiedades privadas
            return this;
        }        
        //uso el metodo configure aunque podria bien poner el contenido de ese metodo aca y trabajaria igual
        return configure(name, life, attack, defense);
    }
// estos son metodos getters, permiten al usuario obtener informacion desde afuera de la clase.
    getName = () => this.__name;
    getAttack = () => this.__attack;
    getDefense = () => this.__defense;
    getLife = () => this.__life;
    getExperience = () => this.__experience;
    addExperience = experience => this.__experience+=experience;
// este metodo nos permitira obtener informacion del ataque de otro personaje y afectar la vida de nuestro personaje
    damage = (enemy) => {
        console.log(this.getName(), ' Attacked by ', enemy.getName());
        this.__life-= enemy.getAttack();
    }
// aca pueden ver como funcionan los objetos, sibien usamos la misma clase para isntanciar dos personajes, 
//los metodos que tenemos son los mismos, por eso llamo al metodo damage del enemigo.
    attackEnemy = (enemy) => {
        enemy.damage(this);        
        this.addExperience(enemy.getDefense());
    }
// este metodo es un getter mas general, lo vamos a usar para poder leer el objeto desde el componente
    getStatus = () => {
        return {
            name: this.getName(),
            life: this.getLife(),
            experience: this.getExperience(),
        }
    }; 
}