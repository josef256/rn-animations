import React, {useRef} from 'react';
import {
	View,
	StyleSheet,
	Text,
	TextInput,
	TouchableWithoutFeedback,
	GestureResponderEvent,
	TextInputProps,
} from 'react-native';
import {SettingsProps} from '../../navigator/index.d';
function Settings({route, navigation}: SettingsProps): JSX.Element {
	//fix type
	const timerRef = useRef<any>({});
	function timerPress(e: GestureResponderEvent): void {
		if (timerRef.current) timerRef.current.focus();
	}
	return (
		<View style={style.container}>
			<View style={style.itemWrapper}>
				<Text>display notification every : </Text>
				<TouchableWithoutFeedback onPress={timerPress}>
					<View style={style.inputWrapper}>
						<TextInput
							ref={timerRef}
							style={style.inputStyle}
							inputMode={'decimal'}
							maxLength={2}
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
		backgroundColor: 'red',
		padding: 12,
	},
	itemWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	inputWrapper: {
		padding: 2,
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		borderWidth: 2,
		borderColor: 'black',
		width: 50,
		height: 30,
		boxSizing: 'content-box',
	},
	inputStyle: {
		backgroundColor: 'orange',
	},
});
export default Settings;
