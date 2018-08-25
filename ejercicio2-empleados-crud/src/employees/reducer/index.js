export const initialStore = {
    employees:[],
};
export const GET_EMPLOYEES = '[EMPLOYEES][GET] get employees';

export default (store = initialStore, action) => {
    console.log("ASDDD", action.employees);
    switch (action.type) {
        case GET_EMPLOYEES:
            store.employees = action.employees;
            return store; // agregar los employees
        default:
            return store;
    }
  }