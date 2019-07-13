import * as React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './ActivityListPage.styles';

export interface Props {}

export interface State {}

class ActivityListPage extends React.Component<Props, State> {
	state = {};

	render() {
		const { state, props } = this;
		return (
			<View style={styles.container}>
				<Text>ActivityList Page</Text>
			</View>
		);
	}
}

export default ActivityListPage;
