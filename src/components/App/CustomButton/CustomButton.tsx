import * as React from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import styles from './CustomButton.styles';
import { primary, white } from 'src/constants/Colors';

export interface Props {
	buttonName: string;
	size: 'small' | 'medium' | 'large';
	onPress: () => void;
	isHelpee: boolean;
}

export interface State {}

class CustomButton extends React.Component<Props, State> {
	state = {};

	render() {
		const { state, props } = this;
		let fontSize = 0;
		switch (props.size) {
			case 'small':
				fontSize = 12;
				break;
			case 'medium':
				fontSize = 18;
				break;
			case 'large':
				fontSize = 24;
				break;
		}
		return (
			<TouchableOpacity
				onPress={props.onPress}
				style={{
					backgroundColor: props.isHelpee ? primary : 'lightgreen',
					paddingVertical: 10,
					paddingHorizontal: 16,
				}}
			>
				<Text style={{ fontWeight: '500', fontSize, color: white }}>
					{props.buttonName}
				</Text>
			</TouchableOpacity>
		);
	}
}

export default CustomButton;
