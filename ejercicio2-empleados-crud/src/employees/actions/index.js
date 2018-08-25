
import { GET_EMPLOYEES, ADD_EMPLOYEE } from '../reducer';


export const getEmployees = (employees) => {
    console.log(employees, 'aca llamo a la acction');
    return { 
        type: GET_EMPLOYEES, 
        employees
    }
} 

export const addEmployee = (name, lastname, dni ) => {
    return { 
        type: ADD_EMPLOYEE, 
        name, 
        lastname, 
        dni,
    }
}