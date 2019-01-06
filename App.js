import React from 'react';
import ViewWrapper from './xplatform-frontend/src/components/ViewWrapper';
import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware } from 'redux';
import reducers from './xplatform-frontend/src/data';
import thunk from 'redux-thunk';

class App extends React.Component {
  
  render() {
    const store = createStore(reducers, {}, applyMiddleware(thunk));
  
    return (
      <Provider store={store}>
        <ViewWrapper />
      </Provider>
    );
  }
}


export default App;



