import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type StackNavigatorParamList = {
	Timer:  undefined;
	Settings: undefined;
};

type TimerProps = NativeStackScreenProps<StackNavigatorParamList, 'Timer'>;
type SettingsProps = NativeStackScreenProps<StackNavigatorParamList, 'Settings'>;
export {StackNavigatorParamList, TimerProps, SettingsProps};
