import {IimagePath, IpotionStatus} from '../helpers/constants';
type IappState = {
	potionStatus: IpotionStatus;
	imagePath: IimagePath;
	scheduleTime: number;
};
type IAction = {
	type: string;
	payload: unkown;
};
type ITimerReducer<T, L> = (a: T, b: L) => {};
export {IappState, IAction, ITimerReducer};
