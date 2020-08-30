import { connect } from 'react-redux';

import Content from './content';

const mapStateToProps = ({ ui: { content } }) => ({
  selected: content
});

export default connect(mapStateToProps, null)(Content);
