import * as React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './ProfileScreen.styles';
import { NavScreenProps, StaticNavigationOptions } from 'src/lib/navigation';
import HelpeeProfilePage from './HelpeeProfilePage';
import HelperProfilePage from './HelperProfilePage';
import CustomButton from '../CustomButton';

interface NavParams {}
type Props = NavScreenProps<NavParams>;

export interface State {
	isHelpee: boolean;
}

class ProfileScreen extends React.Component<Props, State> {
	static navigationOptions: StaticNavigationOptions<{}> = props => ({
		headerTitle: 'Profile',
	});
	state: State = {
		isHelpee: true,
	};

	render() {
		const { state, props } = this;
		return (
			<View style={styles.container}>
				<CustomButton
					buttonName={'Swap Context'}
					size={'small'}
					onPress={() => this.setState({ isHelpee: !state.isHelpee })}
				/>
				{state.isHelpee ? <HelpeeProfilePage /> : <HelperProfilePage />}
			</View>
		);
	}
}

export default ProfileScreen;
