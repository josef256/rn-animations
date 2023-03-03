import {IAction, IappState} from './reducers.d';
import {IimagePath} from '../helpers/constants';

const appInitialState: IappState = {
	potionStatus: 0,
	imagePath: IimagePath.empty,
	scheduleTime: 20,
};
function AppReducer(
	state: IappState = appInitialState,
	action: IAction,
): IappState {
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
		default:
			return state;
	}
}
export {AppReducer, appInitialState};
