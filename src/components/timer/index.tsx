import react, {useReducer, useEffect} from 'react';
import {
	Text,
	View,
	TouchableWithoutFeedback,
	GestureResponderEvent,
	StyleSheet,
	Image,
} from 'react-native';
import {TimerProps} from '../../navigator/index.d';
import {TimerReducer, initialTimerState} from '../../reducers/timerReducer';
import {scheduleNotify, toggleImage} from '../../services/timerService';

function Timer({route, navigation}: TimerProps): JSX.Element {
	const [timerState, dispatch] = useReducer(TimerReducer, initialTimerState);
	/*useEffect(() => {
		setInterval(() => {
			scheduleNotify(0);
		}, 4000);
	}, []);*/
	return (
		<View style={TimerStyle.container}>
			<View style={TimerStyle.image_container}>
				<TouchableWithoutFeedback
					onPress={(event: GestureResponderEvent): void => {
						toggleImage(dispatch, timerState.imagePath);
					}}>
					<Image
						style={TimerStyle.image}
						resizeMode={'cover'}
						source={timerState.imagePath}
					/>
				</TouchableWithoutFeedback>
			</View>
		</View>
	);
}

const TimerStyle = StyleSheet.create({
	container: {
		display: 'flex',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		padding: 8,
	},
	image_container: {
		height: 400,
		width: '100%',
	},
	image: {
		width: '100%',
		height: '100%',
	},
});

export default Timer;
