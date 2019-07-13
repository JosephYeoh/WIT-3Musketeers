import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { mildGrey, white, whiteOffset, fadedGrey, primary } from 'src/constants/Colors';

export default StyleSheet.create({
	isLeftBox: {
		flex: 1,
		backgroundColor: whiteOffset,
		paddingVertical: 12,
		paddingHorizontal: 18,
		margin: 2,
		borderRadius: 24,
		alignSelf: 'flex-start',
	},
	isRightBox: {
		flex: 1,
		paddingVertical: 12,
		paddingHorizontal: 18,
		margin: 2,
		borderRadius: 24,
		backgroundColor: primary,
		alignSelf: 'flex-end',
	},
	isRightHelperBox: {
		flex: 1,
		paddingVertical: 12,
		paddingHorizontal: 18,
		margin: 2,
		borderRadius: 24,
		backgroundColor: 'lightgreen',
		alignSelf: 'flex-end',
	},
	isRightHelperText: {
		fontSize: 16,
		fontWeight: '400',
	},
	isRightText: {
		fontSize: 16,
		fontWeight: '400',
		color: 'white',
	},
	isLeftText: {
		fontSize: 16,
		fontWeight: '400',
	},
});
