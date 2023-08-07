import React, {useRef} from 'react';
import {View, Animated, Text, PanResponder} from 'react-native';

const Input: React.FC<{}> = () => {
	const translateW = useRef(new Animated.Value(0)).current;
	const panResponder = useRef(
		PanResponder.create({
			onStartShouldSetPanResponder: (evt, gestureState) => true,
			onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
			onMoveShouldSetPanResponder: (evt, gestureState) => true,
			onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
			onPanResponderGrant: (evt, gestureState) => {
				Animated.spring(translateW, {
					toValue: 100,
					stiffness: 10,
					useNativeDriver: false,
				}).start();
			},
			onPanResponderRelease: (evt, gestureState) => {
				console.log('translateW valuer', translateW);
				if (translateW._value < 90) {
					translateW.stopAnimation();
					Animated.spring(translateW, {
						toValue: 0,
						speed: 12,
						useNativeDriver: false,
					}).start();
				}
			},
		}),
	).current;
	return (
		<View
			style={{
				flex: 1,
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
			}}>
			<View
				style={{flex: 1, backgroundColor: 'green', alignItems: 'flex-end'}}
				{...panResponder.panHandlers}>
				<Animated.View
					onLayout={e => {
						/*	Animated.spring(translateW, {
							toValue: 1000,
							speed: 10,
							useNativeDriver: false,
						}).start();*/
					}}
					style={{
						width: translateW.interpolate({
							inputRange: [0, 100],
							outputRange: ['0%', '100%'],
						}),
						height: 100,
						backgroundColor: 'red',
					}}></Animated.View>
			</View>
		</View>
	);
};

export default Input;
