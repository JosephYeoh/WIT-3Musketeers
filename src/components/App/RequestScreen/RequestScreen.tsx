import * as React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './RequestScreen.styles';
import { NavScreenProps, StaticNavigationOptions } from 'src/lib/navigation';
import LiveRequestPage from './LiveRequestPage';
import ActivityListPage from './ActivityListPage';
import CustomButton from '../CustomButton';

interface NavParams {}
type Props = NavScreenProps<NavParams>;

export interface State {
	isHelpee: boolean;
}

class RequestScreen extends React.Component<Props, State> {
	static navigationOptions: StaticNavigationOptions<{}> = props => ({
		headerTitle: 'Requests',
	});
	state = {
		isHelpee: true,
	};

	render() {
		const { state, props } = this;
		return (
			<View style={{ flex: 1 }}>
				<CustomButton
					size={'small'}
					buttonName="Swap Context"
					onPress={() => this.setState({ isHelpee: !state.isHelpee })}
				/>
				{state.isHelpee ? <LiveRequestPage /> : <ActivityListPage />}
			</View>
		);
	}
}

export default RequestScreen;
