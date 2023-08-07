import React, {useEffect, useRef} from 'react';
import {View, Animated, Dimensions} from 'react-native';

const Messages: React.FC<{}> = () => {
	const {width} = Dimensions.get('window');
	const fadeAnim = useRef(new Animated.Value(0)).current;
	const translateAnim = useRef(new Animated.Value(-100)).current;
	useEffect(() => {
		Animated.timing(fadeAnim, {
			toValue: 1,
			duration: 1000,
			useNativeDriver: true,
		}).start();
		Animated.spring(translateAnim, {
			toValue: 0,
			useNativeDriver: true,
		}).start();
	}, []);
	return (
		<View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
			<Animated.View
				style={{
					width: 100,
					height: 100,
					backgroundColor: 'red',
					opacity: fadeAnim,
					transform: [
						{
							translateX: translateAnim,
						},
					],
				}}></Animated.View>
		</View>
	);
};

export default Messages;
