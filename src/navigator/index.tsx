import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Timer from '../components/timer';
import Settings from '../components/settings';
import Tabs from '../components/tabs';
import Cards from '../components/cards';
import Input from '../components/input';
import Messages from '../components/messages';
import SettingsButton from '../components/shared/SettingsButton';
import {IStackNavigatorParamList} from './index.d';
function Navigator(): JSX.Element {
  const stack = createNativeStackNavigator<IStackNavigatorParamList>();
  return (
    <stack.Navigator
      initialRouteName="Messages"
      screenOptions={{headerShown: false}}>
      <stack.Screen name="Messages" component={Messages} />
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
