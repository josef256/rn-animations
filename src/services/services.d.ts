type Inotification = {
	title: string;
	body: string;
	android?: {
		channelId: string;
		smallIcon: string;
		pressAction: {
			id: string;
		};
	};
};

export {Inotification}