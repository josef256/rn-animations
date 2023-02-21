import {IAction, TimerState} from './reducers.d';
const initialTimerState: TimerState = {
	notifyAt: "default",
};
function TimerReducer(
	state: TimerState = initialTimerState,
	action: IAction,
): TimerState {
	switch (action.type) {
		case 'SET_NOTIFY_TIME':
			return {
				...state,
				notifyAt: action.payload,
			};
		default:
			return state;
	} 
}
export {TimerReducer, initialTimerState};
