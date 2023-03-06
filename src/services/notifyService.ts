import {Dispatch} from 'react';
import notifee, {
	TimestampTrigger,
	TriggerType,
	EventType,
} from '@notifee/react-native';
import {Inotification} from './services.d';
import {IAction} from '../reducers/reducers.d';
import {IpotionStatus} from '../helpers/constants';
import {toggleImage, getDate} from './timerService';
async function scheduleNotify(time: number): Promise<void> {
	await getNotifyPermission();
	const channelId = await createChannelNotify('Default Channel', 'default');
	await displayNotify({
		title: 'Notification Title',
		body: 'Main body content of the notification',
	});
}

async function getNotifyPermission(): Promise<void> {
	await notifee.requestPermission();
}
async function createChannelNotify(
	channel: string,
	id: string,
): Promise<string> {
	const channelId = await notifee.createChannel({
		id: 'default',
		name: 'Default Channel',
	});
	return channelId;
}
async function displayNotify(data: Inotification): Promise<void> {
	await notifee.displayNotification({
		title: data.title,
		body: data.body,
		android: data.android,
	});
}
async function createTriggerNotify(scheduleTime:number): Promise<void> {
	await getNotifyPermission();
	const date: Date = getDate(scheduleTime);
	const trigger: TimestampTrigger = {
		type: TriggerType.TIMESTAMP,
		timestamp: date.getTime(),
	};
	await notifee.createTriggerNotification(
		{
			title: 'Did you forget something ?',
			body: 'Drink some water',
		},
		trigger,
	);
}
function notifyBackgroundListener(dispatch: Dispatch<IAction>): void {
	notifee.onBackgroundEvent(async ({type, detail}) => {
		console.log('im a background event', type, detail);
	});
}
function notifyForegroundListener(dispatch: Dispatch<IAction>): void {
	notifee.onForegroundEvent(({type, detail}) => {
		switch (type) {
			case EventType.DELIVERED:
				toggleImage(dispatch, IpotionStatus.empty);
				break;
			case EventType.TRIGGER_NOTIFICATION_CREATED:
				toggleImage(dispatch, IpotionStatus.filled);
				break;
		}
	});
}
export {
	scheduleNotify,
	getNotifyPermission,
	createChannelNotify,
	createTriggerNotify,
	notifyBackgroundListener,
	notifyForegroundListener,
};
