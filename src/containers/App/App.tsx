import * as React from 'react';
import { Provider } from 'react-redux';
import { App } from '../../components';
import rootSaga from '../../sagas';
import configureStore from '../../store/configureStore';

const store = configureStore();

store.runSaga(rootSaga)

const AppContainer = (props: any) => {
  return (
    <Provider store={store}>
      <App {...props}/>
    </Provider>
  )
}

export default AppContainer;
