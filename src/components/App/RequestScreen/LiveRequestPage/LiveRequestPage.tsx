import * as React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './LiveRequestPage.styles';

export interface Props {}

export interface State {}

class LiveRequestPage extends React.Component<Props, State> {
	state = {};

	render() {
		const { state, props } = this;
		return (
			<View style={styles.container}>
				<Text>Live Request Page</Text>
			</View>
		);
	}
}

export default LiveRequestPage;
