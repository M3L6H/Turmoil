import { connect } from 'react-redux';

import RealmMenu from './realm_menu';

import { selectRealm } from '../../actions/realm_menu_actions';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    dimension: state.entities.dimensions[state.ui.menus.dimensionMenu.selected],
    clusters: state.entities.clusters,
    realms: state.entities.realms
});

const mapDispatchToProps = (dispatch) => ({
    select: selected => dispatch(selectRealm(selected))
});

export default connect(mapStateToProps, mapDispatchToProps)(RealmMenu);