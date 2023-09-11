import React, {useRef} from 'react';
import {View, FlatList, Animated, PanResponder} from 'react-native';

const List: React.FC<{}> = () => {
	const data = [1, 2, 3];
	const newData = [];
	data.map(elem => {
		newData.push({
			value: elem,
			animatedValue: new Animated.Value(1),
		});
	});
	const panResponders = useRef(
		newData.map(item =>
			PanResponder.create({
				onStartShouldSetPanResponder: (e, gestureState) => true,
				onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
				onMoveShouldSetPanResponder: (evt, gestureState) => true,
				onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
				onPanResponderGrant: (evt, gestureState) => {
					Animated.spring(item.animatedValue, {
						toValue: 1.2,
						useNativeDriver: true,
					}).start();
				},
				onPanResponderMove: (evt, gestureState) => {},
				onPanResponderRelease: (evt, gestureState) => {
					console.log('im canceld');
					Animated.spring(item.animatedValue, {
						toValue: 1,
						useNativeDriver: true,
					}).start();
				},
				onPanResponderTerminate: () => {
					console.log('im i terminated ?');
						Animated.spring(item.animatedValue, {
						toValue: 1,
						useNativeDriver: true,
					}).start();
				},
			}),
		),
	).current;
	console.log('data', newData);

	return (
		<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
			<FlatList
				style={{
					backgroundColor: 'blue',
					width: '100%',
				}}
				contentContainerStyle={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
					gap: 20,
				}}
				data={newData}
				renderItem={({item, index}) => (
					<Animated.View
						{...panResponders[index].panHandlers}
						style={{
							width: 100,
							height: 100,
							backgroundColor: 'red',
							transform: [
								{
									scale: item.animatedValue,
								},
							],
						}}></Animated.View>
				)}
			/>
		</View>
	);
};
export default List;
