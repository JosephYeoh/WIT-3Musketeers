import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { KeyboardAvoidingView, ScrollView, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { whiteOffset, primary } from 'src/constants/Colors';
import ChatEntry from './ChatEntry';
export interface Props {
	isHelpee: boolean;
	completeRequest: () => void;
}

export interface ConvoData {
	name: string;
	text: string;
	isHelpee: boolean;
}

interface State {
	convoData: ConvoData[];
	input: string;
}

class ChatPage extends React.Component<Props, State> {
	state: State = {
		convoData: [
			{ name: 'Alice', text: 'Hello', isHelpee: true },
			{ name: 'Bob', text: 'Hi', isHelpee: false },
		],
		input: '',
	};
	scrollRef = React.createRef<ScrollView>();

	render() {
		const { state, props } = this;

		const handlePress = () => {
			const data: ConvoData = {
				isHelpee: props.isHelpee,
				name: props.isHelpee ? 'Alice' : 'Bob',
				text: state.input,
			};
			const newConvoData = [...state.convoData, data];
			this.setState({ convoData: newConvoData, input: '' });
		};

		return (
			<KeyboardAvoidingView style={{ flex: 1 }}>
				<ScrollView
					showsVerticalScrollIndicator={false}
					ref={this.scrollRef}
					keyboardDismissMode={'on-drag'}
					style={{ flex: 1, margin: 8 }}
				>
					{state.convoData.map((entry, key) => (
						<ChatEntry
							data={entry}
							key={key}
							isRight={props.isHelpee === entry.isHelpee}
						/>
					))}
				</ScrollView>
				<View
					style={{
						backgroundColor: whiteOffset,
						flexDirection: 'row',
						justifyContent: 'space-between',
					}}
				>
					{props.isHelpee && (
						<TouchableOpacity
							style={{ alignItems: 'center', justifyContent: 'center', margin: 4 }}
							onPress={props.completeRequest}
						>
							<View style={{ marginTop: 6, marginRight: 6 }}>
								<Ionicons name="md-checkbox" size={44} color={primary} />
							</View>
						</TouchableOpacity>
					)}
					<TextInput
						style={{
							flex: 1,
							paddingVertical: 6,
							paddingHorizontal: 8,
							alignItems: 'center',
							justifyContent: 'center',
						}}
						placeholder="Type message here"
						value={state.input}
						onContentSizeChange={() => this.scrollRef.current!.scrollToEnd()}
						onChangeText={value => this.setState({ input: value })}
					/>
					<TouchableOpacity
						style={{ alignItems: 'center', justifyContent: 'center', margin: 4 }}
						onPress={handlePress}
					>
						<View style={{ marginTop: 6, marginRight: 6 }}>
							<Ionicons name="ios-send" size={44} color={primary} />
						</View>
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
		);
	}
}

export default ChatPage;
