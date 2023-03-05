/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useReducer} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/navigator';
import AppContext from './src/helpers/appContext';
import {AppReducer, appInitialState} from './src/reducers';
function App(): JSX.Element {
  const [appState, dispatch] = useReducer(AppReducer, appInitialState);
  return (
    <NavigationContainer>
      <AppContext.Provider value={{appState, dispatch}}>
        <Navigator />
      </AppContext.Provider>
    </NavigationContainer>
  );
}

export default App;
