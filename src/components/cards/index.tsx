import React, {useRef} from 'react';
import {View, Text, PanResponder, Animated, Dimensions} from 'react-native';
const Cards: React.FC<{}> = (): JSX.Element => {
	const translate = useRef(new Animated.ValueXY()).current;
	const textRef = useRef(null);
	const cords = useRef<{viewX: number; viewY: number}>({
		viewX: 0,
		viewY: 0,
		pageY1: 0,
		pageY2: 0,
		width: 0,
	}).current;
	const {width, height} = Dimensions.get('window');
	const panResponder = useRef(
		PanResponder.create({
			onStartShouldSetPanResponder: (evt, gestureState) => true,
			onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
			onMoveShouldSetPanResponder: (evt, gestureState) => true,
			onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
			onPanResponderMove: (evt, gestureState) => {
				/*Animated.event([null, {dx: translate.x, dy: translate.y}], {
					useNativeDriver: false,
				})(evt, gestureState);*/
			},
			onPanResponderRelease: (evt, gestureState) => {
				//withiout extract base value = 0 so it jump to initial pos
				//with extract base value = current offset (acumulated distance)
				console.log('trznslate', cords.viewX);
				Animated.spring(translate, {
					toValue: {
						x: cords.viewX,
						y: cords.viewY,
					},
					speed: 200,
					useNativeDriver: true,
				}).start();
			},
		}),
	).current;
	return (
		<View style={{flex: 1, padding: 20}}>
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: 'yellow',
				}}>
				<View
					style={{backgroundColor: 'blue'}}
					ref={textRef}
					onLayout={event => {
						textRef.current.measure((x, y, width, height, pageX, pageY) => {
							console.log('vvv', pageY, y);
							cords.viewX = pageX;
								cords.viewY = pageY;
						});
						console.log('yy', event.nativeEvent.layout.y);
					}}>
					<Text>im a text</Text>
				</View>
			</View>
			<Animated.View
				{...panResponder.panHandlers}
				onLayout={event => {
					cords.pageY1 = event.nativeEvent.layout.x;
					console.log('yy', event.nativeEvent.layout.x);
				}}
				style={{
					backgroundColor: 'red',
					width: 200,
					height: 200,
					position: 'absolute',
					opacity: 0.4,
					transform: [
						{
							translateX: translate.x,
						},
						{translateY: translate.y},
					],
				}}></Animated.View>
		</View>
	);
};

export default Cards;
