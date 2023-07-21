import react, {useContext, useEffect, Dispatch} from 'react';
import {
	Text,
	View,
	TouchableWithoutFeedback,
	GestureResponderEvent,
	StyleSheet,
	Image,
} from 'react-native';
import {ITimerProps} from '../../navigator/index.d';
import {IAction, IAppState} from '../../reducers/reducers.d';
import {createTriggerNotify} from '../../services/notifyService';
import {
	notifyBackgroundListener,
	notifyForegroundListener,
} from '../../services/notifyService';
import AppContext from '../../helpers/appContext';
import AnimationStyle from '../shared/AnimationStyle';
import DropDownSelect from '../shared/DropDownSelect';
function Timer({route, navigation}: ITimerProps): JSX.Element {
	const {appState, dispatch} = useContext(AppContext);

	const onPotionPress = (): void => {
		if (!appState.potionStatus) createTriggerNotify(appState.scheduleTime);
	};

	useEffect(() => {
		notifyBackgroundListener(dispatch);
		notifyForegroundListener(dispatch);
	}, []);
	return (
		<View style={TimerStyle.container}>
			<DropDownSelect display={true} data={['hello', 'world', "waloo"]} />
			<View style={TimerStyle.image_container}>
				<TouchableWithoutFeedback onPress={onPotionPress}>
					<Image
						style={TimerStyle.image}
						resizeMode={'cover'}
						source={appState.imagePath}
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
		backgroundColor: '#f7fafc',
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
