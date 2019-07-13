import * as React from 'react';
import { NavScreenProps, StaticNavigationOptions } from 'src/lib/navigation';
import { View } from 'react-native';
import CustomButton from '../CustomButton';
import ChatPage from './ChatPage';

interface NavParams {}
type Props = NavScreenProps<NavParams>;

export interface State {
	isHelpee: boolean;
}

class ChatScreen extends React.Component<Props, State> {
	static navigationOptions: StaticNavigationOptions<{}> = props => ({
		headerTitle: 'Chat',
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
				<ChatPage isHelpee={state.isHelpee} />
			</View>
		);
	}
}

export default ChatScreen;
