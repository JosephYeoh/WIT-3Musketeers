import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { whiteOffset } from 'src/constants/Colors';

export default StyleSheet.create({
	container: {
		backgroundColor: whiteOffset,
	},
	header: {
		fontSize: 24,
		fontWeight: 'bold',
		alignSelf: 'center',
		backgroundColor: whiteOffset,
	},
});
