export const initialStore = {
    employees:[],
};
export const GET_EMPLOYEES = '[EMPLOYEES][GET] get employees';

export default (store = initialStore, action) => {
    switch (action.type) {
        case GET_EMPLOYEES:
            return store; // agregar los employees
        default:
            return store;
    }
  }