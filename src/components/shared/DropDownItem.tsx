import react from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {IDropDownItem} from './DropDown.d';

function DropDownItem({children}: IDropDownItem): JSX.Element {
	return <View>{children}</View>;
}

const style = StyleSheet.create({
	container: {},
});
export default DropDownItem;
