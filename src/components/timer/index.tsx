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
import {createTriggerNotify} from '../../services/notifyService';
import {
	notifyBackgroundListener,
	notifyForegroundListener,
} from '../../services/notifyService';

function Timer({route, navigation}: TimerProps): JSX.Element {
	const [timerState, dispatch] = useReducer(TimerReducer, initialTimerState);

	const onPotionPress = (): void => {
		if (!timerState.potionStatus)
			createTriggerNotify();
	};
	useEffect(() => {
		notifyBackgroundListener(dispatch);
		notifyForegroundListener(dispatch);
	}, []);
	return (
		<View style={TimerStyle.container}>
			<View style={TimerStyle.image_container}>
				<TouchableWithoutFeedback onPress={onPotionPress}>
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
