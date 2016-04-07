import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import createStore from '../../../shared/createStore';
import reducers from '../reducers';
import <%= bundleName %>Container from '../containers/<%= bundleName %>Container';

const <%= bundleName %> = React.createClass({
  propTypes: {
  },

  getInitialState() {
    const store = createStore(reducers, this.props);

    if (__DEV__) {
      if (module.hot) {
        module.hot.accept('../reducers', () => {
          const nextRootReducer = require('../reducers').default;
          store.replaceReducer(nextRootReducer);
        });
      }
    }

    return {
      store: store,
    };
  },

  componentWillMount() {
  },

  render() {
    return (
      <Provider store={this.state.store}>
        <<%= bundleName %>Container/>
      </Provider>
    );
  },
});

export default <%= bundleName %>;
