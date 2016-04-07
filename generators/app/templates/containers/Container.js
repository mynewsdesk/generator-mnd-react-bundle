import { connect } from 'react-redux';
import <%= bundleName %> from '../components/<%= bundleName %>';

function mapStateToProps(state, nextProps) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

connect(mapStateToProps, mapDispatchToProps)(<%= bundleName %>);
