import React, {useRef} from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	Animated,
	Dimensions,
	PanResponder,
	PanResponderInstance,
} from 'react-native';
import {TabsLocalState} from './index.d';

/*todo:
-make the component generic 
-accept 4 props : tab 1/tab2 title, tab1/tab2 content 
-props can be JSX element
-make css in seperate file using styled-component
-beautify: add appropriate margin/padding, handle screen sizes
-check landscape mode

optional :add props to change color/speed of the animation
optional :add swipe left/right animation on scrollView
*/
const Tabs: React.FC<{}> = (): JSX.Element => {
	const {width} = Dimensions.get('window');
	const tabsCords = useRef<TabsLocalState>({
		xTab1: 0,
		xTab2: 0,
		translateX: new Animated.Value(0),
		translateXTab1: new Animated.Value(0),
		translateXTab2: new Animated.Value(width),
		translateY: new Animated.Value(-1000),
		activeTab: 0,
	}).current;
	const widthInterpolation: Animated.Value = new Animated.Value(width);

	const panResponder = useRef<PanResponderInstance>(
		PanResponder.create({
			onStartShouldSetPanResponder: (e, gestureState) => true,
			onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
			onMoveShouldSetPanResponder: (evt, gestureState) => true,
			onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
			onPanResponderGrant: (evt, gestureState) => {
				// The gesture has started. Show visual feedback so the user knows
				// what is happening!
				// gestureState.d{x,y} will be set to zero now
			},
			onPanResponderMove: (evt, gestureState) => {
				// The most recent move distance is gestureState.move{X,Y}
				// The accumulated gesture distance since becoming responder is
				// gestureState.d{x,y}
				if (gestureState.dx < 0 && tabsCords.activeTab == 0) {
					tabsCords.translateX.setValue(tabsCords.xTab1 - gestureState.dx);
					tabsCords.translateXTab1.setValue(gestureState.dx);
					tabsCords.translateXTab2.setValue(width + gestureState.dx);
				} else if (gestureState.dx > 0 && tabsCords.activeTab == 1) {
					tabsCords.translateX.setValue(tabsCords.xTab2 - gestureState.dx);
					tabsCords.translateXTab1.setValue(-width + gestureState.dx);
					tabsCords.translateXTab2.setValue(gestureState.dx);
				}
			},
			onPanResponderRelease: (evt, gestureState) => {
				// The user has released all touches while this view is the
				// responder. This typically means a gesture has succeeded
				if (-gestureState.dx > width / 3) {
					handleSlide(1, tabsCords.xTab2);
				} else if (-gestureState.dx < -width / 3) {
					handleSlide(0, tabsCords.xTab1);
				} else if (tabsCords.activeTab == 0) {
					handleSlide(0, tabsCords.xTab1);
				} else if (tabsCords.activeTab == 1) {
					handleSlide(1, tabsCords.xTab2);
				}
			},
		}),
	).current;

	const handleSlide = (position: number, xValue: number): void => {
		Animated.spring(tabsCords.translateX, {
			toValue: xValue,
			speed: 100,
			useNativeDriver: true,
		}).start();
		Animated.parallel([
			Animated.spring(tabsCords.translateXTab1, {
				toValue: position == 0 ? 0 : -width,
				speed: 100,
				useNativeDriver: true,
			}),
			Animated.spring(tabsCords.translateXTab2, {
				toValue: position == 0 ? width : 0,
				speed: 100,
				useNativeDriver: true,
			}),
		]).start();
		tabsCords.activeTab = position == 0 ? 0 : 1;
	};
	return (
		<View style={{flex: 1}}>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					height: 36,
					position: 'relative',
				}}>
				<Animated.View
					style={{
						borderBottomWidth: 2,
						borderColor: 'red',
						width: '25%',
						position: 'absolute',
						flex: 1,
						height: '100%',
						left: '12,5%',
						transform: [
							{
								translateX: tabsCords.translateX,
							},
						],
					}}
				/>
				<TouchableOpacity
					style={{
						padding: 10,
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
					}}
					onLayout={event => {
						tabsCords.xTab1 = event.nativeEvent.layout.x;
					}}
					onPress={() => handleSlide(0, tabsCords.xTab1)}>
					<Text>tab1</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						padding: 10,
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
					}}
					onLayout={event => {
						tabsCords.xTab2 = event.nativeEvent.layout.x;
					}}
					onPress={() => handleSlide(1, tabsCords.xTab2)}>
					<Text>tab2</Text>
				</TouchableOpacity>
			</View>
			<View style={{flex: 1}} {...panResponder.panHandlers}>
				<Animated.View
					style={{
						transform: [
							{
								translateX: tabsCords.translateXTab1,
							},
						],
						backgroundColor: '#C1E1C1',
						height: '100%',
					}}
					onLayout={event => {
						tabsCords.translateY.setValue(-event.nativeEvent.layout.height);
					}}></Animated.View>
				<Animated.View
					style={{
						transform: [
							{
								translateX: tabsCords.translateXTab2,
							},
							{
								translateY: tabsCords.translateY,
							},
						],
						backgroundColor: '#FDFD97',
						height: '100%',
					}}></Animated.View>
			</View>
		</View>
	);
};

export default Tabs;
