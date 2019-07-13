import * as React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './HelpeeProfilePage.styles';

export interface Props {}

export interface State {}

class HelpeeProfilePage extends React.Component<Props, State> {
	state = {};

	render() {
		const { state, props } = this;
		return (
			<View style={styles.container}>
				<Text>Helpee Profile Page</Text>
			</View>
		);
	}
}

export default HelpeeProfilePage;
