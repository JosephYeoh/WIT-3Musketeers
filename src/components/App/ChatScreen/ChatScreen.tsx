import * as React from 'react';
import { NavScreenProps, StaticNavigationOptions } from 'src/lib/navigation';
import { View } from 'react-native';
import CustomButton from '../CustomButton';
import ChatPage from './ChatPage';

interface Props {
	isHelpee: boolean;
	completeRequest: () => void;
}
export interface State {}

class ChatScreen extends React.Component<Props, State> {
	state = {};

	render() {
		const { state, props } = this;
		return (
			<View style={{ flex: 1 }}>
				<ChatPage isHelpee={props.isHelpee} completeRequest={props.completeRequest} />
			</View>
		);
	}
}

export default ChatScreen;
