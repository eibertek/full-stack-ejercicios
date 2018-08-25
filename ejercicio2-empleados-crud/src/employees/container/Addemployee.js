import React from 'react';
import { connect } from 'react-redux';
import AddEmployee from '../addEmployee.component';

const mapStateToProps = store => {
    return {
        employees: store.employees
    };
};

export default connect(mapStateToProps, null)(AddEmployee);
