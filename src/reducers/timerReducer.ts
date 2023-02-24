import {IAction, TimerState} from './reducers.d';
import {imagePath} from "../helpers/constants"

const initialTimerState: TimerState = {
	notifyAt: "default",
	imagePath: imagePath.empty
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
		case "TOGGLE_IMAGE_PATH":
			return {
				...state,
				imagePath:action.payload
			}
		default:
			return state;
	} 
}
export {TimerReducer, initialTimerState};
