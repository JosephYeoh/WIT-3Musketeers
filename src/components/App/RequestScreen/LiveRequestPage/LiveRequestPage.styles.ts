import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { whiteOffset } from 'src/constants/Colors';

export default StyleSheet.create({
	container: {
		flex: 1,
		padding: 12,
		backgroundColor: whiteOffset,
	},
	header: {
		fontSize: 24,
		fontWeight: 'bold',
		alignSelf: 'center',
	},
	textbox: {
		flex: 1,
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderColor: 'grey',
		margin: 10,
		padding: 5,
		justifyContent: 'center',
		alignSelf: 'center',
	},
	icon: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		margin: 10,
		padding: 10,
	},
	holder: {
		alignSelf: 'center',
		justifyContent: 'center',
	},
	button: {
		backgroundColor: 'lightblue',
		marginBottom: 35,
		borderRadius: 12,
		padding: 35,
		paddingVertical: 20,
		paddingHorizontal: 100,
		alignSelf: 'center',
		justifyContent: 'center',
	},
	submit: {
		fontSize: 18,
		fontWeight: '500',
	},
});
