import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const STATUS_BAR_HEIGHT = getStatusBarHeight();

export const APP_BAR_HEIGHT = Platform.select({
	ios: 48, // 44
	android: 48, // 56
});

export const TOTAL_HEADER_HEIGHT = STATUS_BAR_HEIGHT + APP_BAR_HEIGHT;
