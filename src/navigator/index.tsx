import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Timer from '../components/timer';
import Settings from '../components/settings';
import Tabs from '../components/tabs';
import Cards from '../components/cards';
import Input from '../components/input';
import Messages from '../components/messages';
import Wall from '../components/wall';
import List from '../components/list';
import Active from '../components/active';
import Ripple from '../components/ripple';
import DragDrop from '../components/dragdrop';
import SettingsButton from '../components/shared/SettingsButton';
import {IStackNavigatorParamList} from './index.d';
function Navigator(): JSX.Element {
  const stack = createNativeStackNavigator<IStackNavigatorParamList>();
  return (
    <stack.Navigator
      initialRouteName="Ripple"
      screenOptions={{headerShown: false}}>
      <stack.Screen name="Ripple" component={Ripple} />
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
