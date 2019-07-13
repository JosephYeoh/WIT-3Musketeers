import * as React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './ChatEntry.styles';
import ChatPage, { ConvoData } from '../ChatPage';
import { whiteOffset } from 'src/constants/Colors';

export interface Props {
	isRight: boolean;
	data: ConvoData;
}

export interface State {}

class ChatEntry extends React.Component<Props, State> {
	state = {};

	render() {
		const { state, props } = this;
		if (props.data.isHelpee) {
			return (
				<View style={props.isRight ? styles.isRightBox : styles.isLeftBox}>
					<Text style={props.isRight ? styles.isRightText : styles.isLeftText}>
						{props.data.text}
					</Text>
				</View>
			);
		} else {
			return (
				<View style={props.isRight ? styles.isRightHelperBox : styles.isLeftBox}>
					<Text style={props.isRight ? styles.isRightHelperText : styles.isLeftText}>
						{props.data.text}
					</Text>
				</View>
			);
		}
	}
}

export default ChatEntry;
