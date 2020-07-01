import { connect } from 'react-redux';

import App from './app';

const mapStateToProps = (state) => ({
    currentBeingId: state.session.currentBeingId 
});

export default connect(mapStateToProps, null)(App);