import React, {useRef, useEffect} from 'react';
import {Animated, View, StyleSheet, PanResponder} from 'react-native';
import type {PropsWithChildren} from 'react';
import type {ViewStyle} from 'react-native';
type animationProps = PropsWithChildren<{style: ViewStyle}>;
const AnimationStyle: React.FC<PropsWithChildren> = (): JSX.Element => {
	const fadeValue = useRef(new Animated.Value(0)).current;
	const pan = useRef(new Animated.ValueXY()).current;
	const panResponder = useRef(
		PanResponder.create({
			onMoveShouldSetPanResponder: () => true,
			onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
				useNativeDriver: false,
			}),
			onPanResponderRelease: () => {
				pan.extractOffset();
			},
		}),
	).current;
	useEffect(() => {
		Animated.timing(fadeValue, {
			toValue: 1,
			duration: 10000,
			useNativeDriver: true,
		}).start();
		console.log('fadevalue', fadeValue);
	}, [fadeValue]);
	return (
		<Animated.View
			{...panResponder.panHandlers}
			style={{
				opacity: fadeValue,
				transform: [{translateX: pan.x}, {translateY: pan.y}],
			}}>
			<View style={style.item}></View>
		</Animated.View>
	);
};

const style = StyleSheet.create({
	item: {
		width: 100,
		height: 100,
		backgroundColor: 'red',
	},
});
export default AnimationStyle;
