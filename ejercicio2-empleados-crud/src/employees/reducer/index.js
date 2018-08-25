export const initialStore = {
    employees:[],
};
export const GET_EMPLOYEES = '[EMPLOYEES][GET] get employees';
export const ADD_EMPLOYEE =  '[EMPLOYEES][ADD] Add employee';

export default (store = initialStore, action) => {
    console.log("ASDDD", action.employees);
    switch (action.type) {
        case GET_EMPLOYEES:
            store.employees = action.employees;
            return store; // agregar los employees
        case ADD_EMPLOYEE:
            const { name, lastname, dni } = action;
            store.employees.push({ name, lastname, dni });
            return store; // agregar los employees
        default:
            return store;
    }
  }