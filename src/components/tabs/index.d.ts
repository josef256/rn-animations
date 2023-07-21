import {Animated} from 'react-native';
type TabsProps = {};
type TabsLocalState = {
	xTab1: number;
	xTab2: number;
	translateX: Animated.AnimatedValue;
	translateXTab1: Animated.AnimatedValue;
	translateXTab2: Animated.AnimatedValue;
	translateY: Animated.AnimatedValue;
	activeTab: number;
};

export {TabsProps, TabsLocalState};
