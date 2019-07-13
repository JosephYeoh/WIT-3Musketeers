import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { primary } from 'src/constants/Colors';

export default StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: 'pink',
		margin: 30,
		marginTop: 50,
		borderRadius: 12,
	},
	logoWrapper: {
		flex: 2,
		alignSelf: 'center',
		justifyContent: 'center',
	},
	detailsWrapper: {
		flex: 3,
		// backgroundColor: 'blue',
	},
	LgText: {
		fontSize: 25,
		color: 'white',
		fontWeight: '500',
		// paddingHorizontal: 120,
		paddingLeft: 120,
		paddingRight: 80,
		paddingVertical: 20,
	},
	LgPos: {
		flex: 1,
		backgroundColor: primary,
		margin: 10,
		borderRadius: 12,
		alignSelf: 'center',
		justifyContent: 'center',
	},
	empty: {
		flex: 0.5,
		alignSelf: 'center',
		justifyContent: 'flex-end',
		// backgroundColor: 'pink',
	},
	TextIcon: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	LogInIcon: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		// justifyContent: 'flex-end',
	},
	LogoStyle: {
		fontSize: 200,
	},
});
