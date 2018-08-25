export const initialStore = {
    employees:[],
    editEmployee:null,
};
export const GET_EMPLOYEES = '[EMPLOYEES][GET] get employees';
export const ADD_EMPLOYEE =  '[EMPLOYEES][ADD] Add employee';
export const GET_DATA = 'GET DAYA SARARAS';
export const TOGGLE_EDIT = '[EMPLOYEES][EDIT] Toggle edit';

export default (store = initialStore, action) => {
    switch (action.type) {
        case GET_EMPLOYEES:
//            store.employees = action.employees;
            return { ...store, employees: action.employees }; // agregar los employees
        case ADD_EMPLOYEE:
            const { name, lastname, dni } = action.payload;
            return { ...store, employees:
                        [ ...store.employees, 
                          { name, lastname, dni }
                        ] }; // agregar los employees
        case GET_DATA:
            return { ...store, jsonData: action.payload }                
        case TOGGLE_EDIT: 
            return { ...store, editEmployee: action.idx }
        default:
            return store;
    }
  }