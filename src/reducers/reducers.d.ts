import {IimagePath, IpotionStatus} from '../helpers/constants';
type TimerState ={
	potionStatus:IpotionStatus,
	imagePath:IimagePath,
}
type IAction ={
	type: string,
	payload: unkown
}
type ITimerReducer  <T, L>= (a:T, b:L) => {};
export {TimerState, IAction, ITimerReducer}