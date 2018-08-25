
import { GET_EMPLOYEES, ADD_EMPLOYEE, GET_DATA, TOGGLE_EDIT } from '../reducer';
import { store } from '../../index';

export const getEmployees = (employees) => {
    return { 
        type: GET_EMPLOYEES, 
        employees
    }
} 

export const addEmployee = (name, lastname, dni ) => {
    return { 
        type: ADD_EMPLOYEE, 
        payload: { name, lastname, dni, }
    }
}

export const toggleEdit = (idx ) => {
    return { 
        type: TOGGLE_EDIT, 
        idx,
    }
}

export const addDataToRedux = data => {
    return { 
        type: GET_DATA, 
        payload: data
    }
}
export const getJSONData = maaa => {
    console.log('entro aca');
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => store.dispatch(addDataToRedux(json)));
}