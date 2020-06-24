import { connect } from 'react-redux';

import AppContainer from './app_container';

import { receiveSidebar } from '../../actions/sidebar_actions';

const mapStateToProps = (state) => ({
    ...state.ui.sidebar
});

const mapDispatchToProps = (dispatch) => ({
    closeSidebar: () => dispatch(receiveSidebar({ open: false }))
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);