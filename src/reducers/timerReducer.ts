import {IAction, TimerState} from './reducers.d';
import {IimagePath} from "../helpers/constants"

const initialTimerState: TimerState = {
	potionStatus: 0,
	imagePath: IimagePath.empty
};
function TimerReducer(
	state: TimerState = initialTimerState,
	action: IAction,
): TimerState {
	switch (action.type) {
		case 'SET_POTION_STATUS':
			return {
				...state,
				potionStatus: action.payload,
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
