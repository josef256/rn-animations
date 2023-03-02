import {IAction, TimerState} from './reducers.d';
import {IimagePath} from '../helpers/constants';

const appInitialState: TimerState = {
	potionStatus: 0,
	imagePath: IimagePath.empty,
};
function AppReducer(
	state: TimerState = appInitialState,
	action: IAction,
): TimerState {
	switch (action.type) {
		case 'w':
			return {
				...state,
				potionStatus: action.payload,
			};
		case 'TOGGLE_IMAGE_PATH':
			return {
				...state,
				imagePath: action.payload,
			};
		default:
			return state;
	}
}
export {AppReducer, appInitialState};
