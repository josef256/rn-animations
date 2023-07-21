import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type IStackNavigatorParamList = {
	Timer: undefined;
	Settings: undefined;
	Tabs: undefined;
	Cards: undefined;
};

type ITimerProps = NativeStackScreenProps<IStackNavigatorParamList, 'Timer'>;
type ISettingsProps = NativeStackScreenProps<
	IStackNavigatorParamList,
	'Settings'
>;
type ITabsProps = NativeStackScreenProps<IStackNavigatorParamList, 'Tabs'>;
type ICardsProps = NativeStackScreenProps<IStackNavigatorParamList, 'Cards'>;
export {IStackNavigatorParamList, ITimerProps, ISettingsProps, ITabsProps, ICardsProps};
