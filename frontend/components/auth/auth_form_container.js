import { connect } from 'react-redux';

import AuthForm from './auth_form';

const mapStateToProps = ({ ui: { modals } }) => ({
    ...modals.auth
});

const mapDispatchToProps = (dispatch) => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);