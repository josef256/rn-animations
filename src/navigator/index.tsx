import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Timer from '../components/timer';
import Settings from '../components/settings';
import SettingsButton from '../components/shared/SettingsButton';
import {StackNavigatorParamList} from './index.d';
function Navigator(): JSX.Element {
  const stack = createNativeStackNavigator<StackNavigatorParamList>();
  return (
    <stack.Navigator initialRouteName="Timer">
      <stack.Screen
        name="Timer"
        component={Timer}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#f7fafc',
          },
          headerShadowVisible: false, // applied here
          headerBackTitleVisible: false,
          headerRight: () => <SettingsButton />,
        }}
      />
      <stack.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings',
          headerStyle: {
            backgroundColor: '#f7fafc',
          },
          headerShadowVisible: false, // applied here
          headerBackTitleVisible: false,
        }}
      />
    </stack.Navigator>
  );
}

export default Navigator;
