import notifee from '@notifee/react-native';
import {Inotification} from "./services.d"
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
export {scheduleNotify, getNotifyPermission, createChannelNotify};