import * as React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './ProfileScreen.styles';
import { NavScreenProps } from 'src/lib/navigation';

interface NavParams {}
type Props = NavScreenProps<NavParams>;

export interface State {}

class ProfileScreen extends React.Component<Props, State> {
	state = {};

	render() {
		const { state, props } = this;
		return <View style={styles.container} />;
	}
}

export default ProfileScreen;
