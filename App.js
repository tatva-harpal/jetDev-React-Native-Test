import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import FlashMessage from 'react-native-flash-message';

import RootNavigator from './app/navigation';
import {navigationRef, isReadyRef} from './app/navigation/rootAction';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import rootReducer from './app/redux/reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer
          ref={navigationRef}
          onReady={() => {
            isReadyRef.current = true;
          }}>
          <RootNavigator />
        </NavigationContainer>
      </Provider>
      <FlashMessage position="bottom" autoHide />
    </SafeAreaProvider>
  );
};

export default App;
