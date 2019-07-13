import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { mildGrey, whiteOffset, white, primary } from 'src/constants/Colors';

export default StyleSheet.create({
	container: {},
	title: {
		flex: 2,
		color: white,
	},
	card: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: white,
		margin: 5,
		padding: 5,
		borderRadius: 16,
	},
	completedCard: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: white,
		margin: 5,
		padding: 5,
		borderRadius: 16,
		opacity: 0.4,
	},
	pic: {
		backgroundColor: primary,
		borderRadius: 2000,
		alignSelf: 'flex-start',
		margin: 5,
	},
	button: {
		backgroundColor: primary,
		paddingHorizontal: 12,
		paddingVertical: 6,
		marginHorizontal: 6,
		borderRadius: 2000,
	},
});
