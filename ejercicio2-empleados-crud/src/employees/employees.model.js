export default class employees {

    constructor(name, lastName, dni) {
        let __name = name;
        let __lastName = lastName;
        let __dni = dni;

        this.getName = () => __name;
        this.getLastName = () => __lastName;
        this.getDni = () => __dni;
        this.setName = value => __name = value;
        this.setLastName = value => __lastName = value;
        this.setDni = value => __dni = value;
        this.getData = () => {
            return {
            name: __name,
            lastName:__lastName,
            dni: __dni
            }
        };
        return this;
    }
}