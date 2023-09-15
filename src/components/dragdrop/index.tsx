import React, {useRef, useEffect} from 'react';
import {View, Animated, PanResponder} from 'react-native';
const DragDrop = () => {
	const translateValue = useRef(new Animated.ValueXY()).current;
	const containerRef = useRef(null);
	const panResponder = useRef(
		PanResponder.create({
			onStartShouldSetPanResponder: (evt, gestureState) => true,
			onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
			onMoveShouldSetPanResponder: (evt, gestureState) => true,
			onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
			onPanResponderGrant: (evt, gestureState) => {
				console.log(translateValue.__getValue());
			},
			onPanResponderMove: (evt, gestureState) => {
				Animated.event([null, {dx: translateValue.x, dy: translateValue.y}], {
					useNativeDriver: false,
				})(evt, gestureState);
			},
			onPanResponderRelease: (evt, gestureState) => {
				const mx = gestureState.moveX;
				const my = gestureState.moveY;

				containerRef.current.measure((x, y, width, height, px, py) => {
					console.log(
						'im in',
						px,
						mx,
						width,
					px > mx ,
					);
console.log(
						'im in',
						py,
						my,
						height,
					py > my ,
					);
					if (mx > px + width || my > py + height || py > my || px > mx) {
						Animated.spring(translateValue, {
							toValue: {x: 0, y: 0},
							useNativeDriver: true,
						}).start();
					} else {
						translateValue.extractOffset();
					}
				});
			},
		}),
	).current;
	const measureZone = dx => {
		let cpx = 0,
			cwidth = 0;
		containerRef.current.measure((x, y, width, height, px, py) => {
			console.log('pretty', dx);
			cpx = px;
			cwidth = width;
		});
		console.log('im current', dx);
	};
	return (
		<View style={{flex: 1}}>
			<View
				ref={containerRef}
				onLayout={e => {
					containerRef.current.measure((a, b, width, height, px, py) => {
						console.log('mesure', a, b, width, height, px, py);
					});
				}}
				style={{
					width: 200,
					height: 200,
					top: 50,
					backgroundColor: 'green',
				}}></View>
			<Animated.View
				{...panResponder.panHandlers}
				onLayout={e => {
					//translateValue.setOffset({x: -60});
					/*Animated.sequence([
						Animated.timing(translateValue.x, {
							toValue: 100,
							useNativeDriver: false,
						}),
						Animated.timing(translateValue.x, {
							toValue: -100,
							useNativeDriver: false,
						}),
					]).start();*/
				}}
				style={{
					width: 50,
					height: 50,
					backgroundColor: 'blue',
					position: 'absolute',
					margin: 'auto',
					top: '50%',
					left: '50%',
					transform: [
						{
							translateX: translateValue.x,
						},
						{
							translateY: translateValue.y,
						},
					],
				}}></Animated.View>
		</View>
	);
};
export default DragDrop;
