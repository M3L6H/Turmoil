import { connect } from 'react-redux';

import RealmsMenu from './realms_menu';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    dimension: state.entities.dimensions[state.ui.menus.dimensionMenu.selected],
    clusters: state.entities.clusters,
    realms: state.entities.realms
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(RealmsMenu);