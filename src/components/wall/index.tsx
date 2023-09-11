import React, {useRef} from 'react';
import {View, Animated, Dimensions} from 'react-native';

const Wall: React.FC<{}> = () => {
	const transValue = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
	const AnimateValue = useRef(new Animated.Value(1)).current;
	const {height} = Dimensions.get('window');
	return (
		<Animated.View
			onLayout={e => {
				Animated.parallel([
					Animated.timing(AnimateValue, {
						toValue: 0,
						duration: 1500,
						useNativeDriver: false,
					}),
					Animated.timing(transValue, {
						toValue: {x: 0, y: -height},
						duration: 700,
						useNativeDriver: false,
					}),
				]).start();
			}}
			style={{
				flex: 1,
				opacity: AnimateValue,
				backgroundColor: 'blue',
				transform: [{translateY: transValue.y}],
			}}></Animated.View>
	);
};
export default Wall;
