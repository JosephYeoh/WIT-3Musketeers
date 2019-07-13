import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { mildGrey, whiteOffset, white } from 'src/constants/Colors';

export default StyleSheet.create({
	container: {},
	title: {
		flex: 2,
	},
	card: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: white,
		margin: 5,
		padding: 5,
		borderRadius: 16,
	},
	pic: {
		backgroundColor: 'lightblue',
		borderRadius: 2000,
		alignSelf: 'flex-start',
		margin: 5,
	},
	button: {
		backgroundColor: 'lightblue',
		paddingHorizontal: 12,
		paddingVertical: 6,
		marginHorizontal: 6,
		borderRadius: 2000,
	},
});
