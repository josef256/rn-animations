import react, {useReducer, useEffect} from 'react';
import {
	Text,
	View,
	TouchableHighlight,
	GestureResponderEvent,
	StyleSheet
} from 'react-native';
import {TimerProps} from '../../navigator/index.d';
import {TimerReducer, initialTimerState} from "../../reducers/timerReducer"
import {scheduleNotify} from "../../services/timerService"
function Timer({route, navigation}: TimerProps): JSX.Element {

const [timer, dispatch] = useReducer (TimerReducer, initialTimerState)

	return (
		<View style={TimerStyle.container}>
			<TouchableHighlight
				onPress={(event: GestureResponderEvent): void => {
					dispatch({
						type:"SET_NOTIFY_TIME",
						payload : "new value"
					})
					scheduleNotify(0)
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
