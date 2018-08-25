import React from 'react';
import { connect } from 'react-redux';
import AddEmployee from '../addEmployee.component';
import { addEmployee, getJSONData } from '../actions';

const mapStateToProps = store => {
    return {
        employees: store.employees
    };
};

const mapDispatchToProps = dispatch => ({
    addEmployee: (name, lastname, dni) => dispatch(addEmployee(name, lastname, dni)),
    getData: () => getJSONData(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee);
