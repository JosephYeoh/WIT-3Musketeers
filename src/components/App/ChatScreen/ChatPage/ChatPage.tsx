import * as React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './ChatPage.styles';

interface Props {
	isHelpee: boolean;
}

interface ConvoData {
	name: string;
	text: string;
	isMe: boolean;
}

interface State {
	convoData: ConvoData[];
}

class ChatPage extends React.Component<Props, State> {
	state: State = {
		convoData: [
			{ name: 'Joseph', text: 'Hello', isMe: true },
			{ name: 'Sabrina', text: 'Hi', isMe: false },
		],
	};

	render() {
		const { state, props } = this;
		return (
			<View style={styles.container}>
				{state.convoData.map((entry, key) => (
					<Text key={key}>
						{entry.name} says {entry.text}
					</Text>
				))}
			</View>
		);
	}
}

export default ChatPage;
