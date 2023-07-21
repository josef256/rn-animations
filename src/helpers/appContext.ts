import {createContext, Dispatch} from 'react';
import {appInitialState} from '../reducers';
import {IAppState, IAction} from '../reducers/reducers.d';

const AppContext = createContext<{
	appState: IAppState;
	dispatch: Dispatch<IAction>;
}>({appState: appInitialState, dispatch: () => {}});

export default AppContext;
