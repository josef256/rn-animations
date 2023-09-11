import React, {useRef} from 'react';
import {View, Animated} from 'react-native';

const Active: React.FC<{}> = () => {
	const animateColor = useRef(new Animated.Value(0)).current;

	return (
		<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
			<Animated.View
				onLayout={() => {
					Animated.timing(animateColor, {
						toValue: 1,
						delay:3000,
						useNativeDriver: false,
					}).start();
				}}
				style={{
					width: 100,
					height: 100,
					backgroundColor: animateColor.interpolate({
						inputRange: [0, 1],
						outputRange: ['green', 'blue'],
					}),
				}}></Animated.View>
		</View>
	);
};

export default Active;
