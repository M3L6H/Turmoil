import { connect } from 'react-redux';

import AppContextMenu from './app_context_menu';

const mapStateToProps = (state) => ({
    contexts: state.ui.contextMenu
});

export default connect(mapStateToProps, null)(AppContextMenu);