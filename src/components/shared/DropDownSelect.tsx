import react, {useState, useRef, useEffect} from 'react';
import {
	Modal,
	FlatList,
	StyleSheet,
	Text,
	ImageBackground,
	View,
	Animated,
	useWindowDimensions,
	ScrollView,
} from 'react-native';
import {IDropDown} from './DropDown.d';
import DropDownItem from './DropDownItem';
function DropDownSelect({display, data}: IDropDown<string[]>): JSX.Element {
	const [selectedItemIndex, setSelectedItemIndex] = useState<number>(0);
	const scrollXY = useRef(new Animated.ValueXY()).current;
	const {height, width} = useWindowDimensions();
	useEffect(() => {
		console.log('im in usefffect', scrollXY);
	}, []);
	return (
		<Modal visible={display} transparent={true}>
			<View style={style.modalWrapper}>
				<View style={{width: 200, height: 200}}>
					<ScrollView
						contentContainerStyle={{
							justifyContent: 'space-between',
							alignItems: 'center',
							backgroundColor: 'red',
							height: 200,
						}}>
						{data.map((element, index) => {
							const size = scrollXY.y.interpolate({
								inputRange: [1, 2, 3],
								outputRange: [8, 16, 8],
							});
							console.log(scrollXY.y);
							return (
								<Text key={index} style={{fontSize: 12}}>
									{element}
								</Text>
							);
						})}
					</ScrollView>
				</View>
			</View>
		</Modal>
	);
}

const style = StyleSheet.create({
	modalWrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'transparent',
	},
	listWrapper: {
		color: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},
	backgroundImage: {
		width: 300,
		height: 300,
	},
	imageOpacity: {
		opacity: 0.3,
	},
});
export default DropDownSelect;
