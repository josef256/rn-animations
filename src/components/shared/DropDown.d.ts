type IDropDown<T> = {
	display: boolean;
	data: T;
};
type IDropDownItem = {
	children: JSX.Element;
};
export {IDropDown, IDropDownItem};
