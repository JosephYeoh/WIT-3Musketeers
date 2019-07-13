import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { mildGrey, white, whiteOffset, fadedGrey } from 'src/constants/Colors';

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
		backgroundColor: 'lightblue',
		alignSelf: 'flex-end',
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
