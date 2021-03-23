import 'react-native-gesture-handler';
import React from 'react';
import RouterNavigation from './Apps/config/router';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import {store} from './Apps/config/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <RouterNavigation />
      </PaperProvider>
    </Provider>
  );
};

export default App;
