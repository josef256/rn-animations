type TimerState ={
	notifyAt:string,
}
type IAction ={
	type: string,
	payload: unkown
}
type ITimerReducer  <T, L>= (a:T, b:L) => {};
export {TimerState, IAction, ITimerReducer}