import App from './App';
import { connect } from 'react-redux';
import { getEmployees } from './employees/actions';

const mapStateToProps = store => {
    return {
        employees: store.employees
    };
};

const mapDispatchToProps = dispatch => ({
    getEmployees: (employees) => dispatch(getEmployees(employees)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
