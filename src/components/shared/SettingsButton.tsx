import React from 'react';
import {TouchableOpacity, Text, GestureResponderEvent} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {IStackNavigatorParamList} from "../../navigator/index.d"
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type stackNavigationType = NativeStackNavigationProp<IStackNavigatorParamList>
function SettingsButton(): JSX.Element {
	const navigation = useNavigation<stackNavigationType>();
	return (
		<TouchableOpacity
			onPress={(event: GestureResponderEvent): void => {
				navigation.navigate('Settings');
			}}>
			<Text>yo</Text>
		</TouchableOpacity>
	);
}
export default SettingsButton;
