import {IAction, IAppState} from './reducers.d';
import {IimagePath} from '../helpers/constants';

const appInitialState: IAppState = {
	potionStatus: 0,
	imagePath: IimagePath.empty,
	scheduleTime: 20,
	sleepTime: {
		from: 22,
		to: 9,
	},
};
function AppReducer(
	state: IAppState = appInitialState,
	action: IAction,
): IAppState {
	switch (action.type) {
		case 'SET_POTION_STATUS':
			return {
				...state,
				potionStatus: action.payload,
			};
		case 'TOGGLE_IMAGE_PATH':
			return {
				...state,
				imagePath: action.payload,
			};
		case 'SET_SCHEDULE_TIME':
			return {
				...state,
				scheduleTime: action.payload,
			};
		case 'SET_SLEEP_TIME':
			return {
				...state,
				sleepTime: action.payload,
			};
		default:
			return state;
	}
}
export {AppReducer, appInitialState};
