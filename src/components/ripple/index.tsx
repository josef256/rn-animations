import React, {useRef, useLayoutEffect} from 'react';
import {View, Animated} from 'react-native';

const Ripple: React.FC<{}> = () => {
	const scaleValue = useRef(new Animated.Value(1)).current;
	const opacityValue = useRef(new Animated.Value(0)).current;
	useLayoutEffect(() => {});
	return (
		<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
			<Animated.View
				onLayout={e => {
					Animated.loop(
						Animated.sequence([
							Animated.parallel([
								Animated.timing(scaleValue, {
									toValue: 2,
									duration: 1000,
									useNativeDriver: true,
								}),
								Animated.timing(opacityValue, {
									toValue: 0.3,
									duration: 1000,
									useNativeDriver: true,
								}),
							]),
							Animated.timing(opacityValue, {
								toValue: 0,
								duration: 500,
								useNativeDriver: true,
							}),
						]),
					).start();
				}}
				style={{
					width: 50,
					height: 50,
					backgroundColor: 'red',
					borderRadius: 900,
					position: 'absolute',
					opacity: opacityValue,
					transform: [
						{
							scale: scaleValue,
						},
					],
				}}></Animated.View>
			<Animated.View
				style={{
					width: 50,
					height: 50,
					backgroundColor: 'red',
					borderRadius: 900,
					transform: [
						{
							scale: 1,
						},
					],
				}}></Animated.View>
		</View>
	);
};

export default Ripple;
