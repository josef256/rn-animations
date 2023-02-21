import react, {useReducer, useEffect} from 'react';
import {
	Text,
	View,
	TouchableHighlight,
	GestureResponderEvent,
	StyleSheet
} from 'react-native';
import {TimerProps} from '../../navigator/index.d';
import notifee from '@notifee/react-native'; 
import {TimerReducer, initialTimerState} from "../../reducers/timerReducer"
import {TimerState, IAction, ITimerReducer} from "../../reducers/reducers.d"
function Timer({route, navigation}: TimerProps): JSX.Element {
/*	async function onDisplayNotification() {
    // Request permissions (required for iOS)
    await notifee.requestPermission()

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Notification Title',
      body: 'Main body content of the notification',
      android: {
        channelId,
        smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });
  }*/
const [timer, dispatch] = useReducer (TimerReducer, initialTimerState)
useEffect(()=>{ 
	console.log("timer", timer)
}, [timer])
	return (
		<View style={TimerStyle.container}>
			<TouchableHighlight
				onPress={(event: GestureResponderEvent): void => {
					dispatch({
						type:"SET_NOTIFY_TIME",
						payload : "new value"
					})
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
