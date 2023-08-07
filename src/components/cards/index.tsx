import React, {useRef, useLayoutEffect, useEffect} from 'react';
import {View, Text, PanResponder, Animated, Dimensions} from 'react-native';
const Cards: React.FC<{}> = (): JSX.Element => {
	const translate = useRef(new Animated.ValueXY()).current;
	const {width, height} = Dimensions.get('window');
	const cards = [
		{
			color: 'red',
			space: 10,
			translate: useRef(new Animated.ValueXY()).current,
		},
		{
			color: 'blue',
			space: 20,
			translate: useRef(new Animated.ValueXY()).current,
		},
		{
			color: 'green',
			space: 30,
			translate: useRef(new Animated.ValueXY()).current,
		},
	];

	const panResponder = useRef(
		cards.map(card =>
			PanResponder.create({
				onStartShouldSetPanResponder: (evt, gestureState) => true,
				onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
				onMoveShouldSetPanResponder: (evt, gestureState) => true,
				onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
				onPanResponderGrant: (evt, gestureState) => {
					card.translate.setOffset({x: card.space, y: 0});
				},
				onPanResponderMove: (evt, gestureState) => {
					//card.translate.setOffset({x: card.space, y: 0});
					Animated.event([null, {dx: card.translate.x}], {
						useNativeDriver: false,
					})(evt, gestureState);
				},
				onPanResponderRelease: (evt, gestureState) => {
					//withiout extract base value = 0 so it jump to initial pos
					//with extract base value = current offset (acumulated distance)
					if (gestureState.dx > 50) {
						console.log('1');
						Animated.spring(card.translate, {
							toValue: {x: width, y: card.space},
							speed: 200,
							useNativeDriver: true,
						}).start();
					} else if (gestureState.dx < -50) {
						console.log('2');
						Animated.spring(card.translate, {
							toValue: {x: -width, y: card.space},
							speed: 200,
							useNativeDriver: true,
						}).start();
					} else {
//card.translate.setOffset({x: 0, y: 0});
						console.log('3',card.translate);
						Animated.spring(card.translate, {
							toValue: {x: 0, y: card.space},
							speed: 100,
							useNativeDriver: true,
						}).start();
					}
				},
			}),
		),
	).current;

	useLayoutEffect(() => {
		cards.map(card => {
			card.translate.setValue({x: card.space, y: card.space});

		});
	}, []);
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: 'yellow',
			}}>
			{cards.map((e, index) => (
				<Animated.View
					{...panResponder[index].panHandlers}
					key={index}
					onLayout={event => {}}
					style={{
						backgroundColor: e.color,
						width: 200,
						height: 200,
						position: 'absolute',
						opacity: 0.4,
						transform: [
							{
								translateX: e.translate.x,
							},
							{translateY: e.translate.y},
						],
					}}></Animated.View>
			))}
		</View>
	);
};

export default Cards;
