import * as React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './HelperProfilePage.styles';

export interface Props {}

export interface State {}

class HelperProfilePage extends React.Component<Props, State> {
	state = {};

	render() {
		const { state, props } = this;
		return (
			<View style={styles.container}>
				<Text>Helper Profile Page</Text>
			</View>
		);
	}
}

export default HelperProfilePage;
