import react, {useContext, useEffect, Dispatch} from 'react';
import {
	Text,
	View,
	TouchableWithoutFeedback,
	GestureResponderEvent,
	StyleSheet,
	Image,
} from 'react-native';
import {TimerProps} from '../../navigator/index.d';
import {IAction, IappState} from '../../reducers/reducers.d';
import {createTriggerNotify} from '../../services/notifyService';
import {
	notifyBackgroundListener,
	notifyForegroundListener,
} from '../../services/notifyService';
import AppContext from '../../helpers/appContext';

function Timer({route, navigation}: TimerProps): JSX.Element {
	const {appState, dispatch} = useContext(AppContext);

	const onPotionPress = (): void => {
		if (!appState.potionStatus) createTriggerNotify();
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
