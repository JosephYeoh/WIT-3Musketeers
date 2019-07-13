import * as React from 'react';
import { Button, Text, View, TextInput } from 'react-native';
import styles from './CustomTextInput.styles';

export interface Props {
	isuser: boolean;
}

export interface State {
	text: string;
}

class CustomTextInput extends React.Component<Props, State> {
	state = {
		text: this.props.isuser ? 'Helpie123' : 'Pass1234',
	};

	render() {
		const { state, props } = this;
		return (
			<View style={styles.container}>
				<TextInput
					style={{ flex: 1, padding: 12 }}
					editable
					value={this.state.text}
					onChangeText={text => this.setState({ text })}
					numberOfLines={1}
					maxLength={40}
					placeholder={props.isuser ? 'Username' : 'Password'}
					secureTextEntry={!props.isuser}
				/>
			</View>
		);
	}
}

export default CustomTextInput;
