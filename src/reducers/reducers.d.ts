import {imagePath} from '../helpers/constants';
type TimerState ={
	notifyAt:string,
	imagePath:imagePath,
}
type IAction ={
	type: string,
	payload: unkown
}
type ITimerReducer  <T, L>= (a:T, b:L) => {};
export {TimerState, IAction, ITimerReducer}