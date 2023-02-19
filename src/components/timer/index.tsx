import react from 'react';
import {
	Text,
	View,
	TouchableHighlight,
	GestureResponderEvent,
	StyleSheet
} from 'react-native';
import {TimerProps} from '../../navigator/index.d';
function Timer({route, navigation}: TimerProps): JSX.Element {
	return (
		<View style={TimerStyle.container}>
			<TouchableHighlight
				onPress={(event: GestureResponderEvent): void => {
					console.log('button pressed');
				}}>
				<Text style={TimerStyle.text}>hello im in timer</Text>
			</TouchableHighlight>
		</View>
	);
}

const TimerStyle = StyleSheet.create({
	container:{
		display:"flex",
		height: "100%",
		justifyContent:"center",
		alignItems:"center",
	},
	text:{
		color: "red"
	}

})

export default Timer;
