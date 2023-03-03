import React, {useRef, useReducer, useEffect} from 'react';
import {
	View,
	StyleSheet,
	Text,
	TextInput,
	TouchableWithoutFeedback,
	GestureResponderEvent,
	TextInputProps,
	NativeSyntheticEvent,
	TextInputChangeEventData,
} from 'react-native';
import {SettingsProps} from '../../navigator/index.d';
import {AppReducer, appInitialState} from '../../reducers';
import {setScheduleTime} from '../../services/timerService';
function Settings({route, navigation}: SettingsProps): JSX.Element {
	const timerRef = useRef<TextInput>(null);
	const [appState, dispatch] = useReducer(AppReducer, appInitialState);

	useEffect(() => {
	}, [appState.scheduleTime]);
	function timerPress(e: GestureResponderEvent): void {
		if (timerRef.current) timerRef.current.focus();
	}
	function onTimerInputChange(text: string): void {
		setScheduleTime(dispatch, text);
	}
	return (
		<View style={style.container}>
			<View style={style.itemWrapper}>
				<Text>Display notification every : </Text>
				<TouchableWithoutFeedback onPress={timerPress}>
					<View style={style.inputWrapper}>
						<TextInput
							ref={timerRef}
							style={style.inputStyle}
							inputMode={'decimal'}
							maxLength={2}
							onChangeText={onTimerInputChange}
							value={appState.scheduleTime.toString()}
						/>
						<Text>min</Text>
					</View>
				</TouchableWithoutFeedback>
			</View>
		</View>
	);
}

const style = StyleSheet.create({
	container: {
		padding: 12,
		height: '100%',
		backgroundColor: '#f7fafc',
	},
	itemWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	inputWrapper: {
		padding: 8,
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		width: 70,
		boxSizing: 'content-box',
	},
	inputStyle: {},
});
export default Settings;
