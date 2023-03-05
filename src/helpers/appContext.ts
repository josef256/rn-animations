import {createContext, Dispatch} from 'react';
import {appInitialState} from '../reducers';
import {IappState, IAction} from '../reducers/reducers.d';

const AppContext = createContext<{
	appState: IappState;
	dispatch: Dispatch<IAction>;
}>({appState: appInitialState, dispatch: () => {}});

export default AppContext;
