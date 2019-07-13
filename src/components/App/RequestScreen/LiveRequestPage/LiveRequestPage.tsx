import * as React from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import styles from './LiveRequestPage.styles';
import { TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { ActivityCardDetails } from '../RequestScreen';

export interface Props {
	addToData: (card: ActivityCardDetails) => void;
}

export interface State {
	title: string;
	description: string;
	location: string;
}

class LiveRequestPage extends React.Component<Props, State> {
	state = {
		title: '',
		description: '',
		location: '',
	};

	render() {
		const { state, props } = this;
		const { description, location, title } = state;
		return (
			<View style={styles.container}>
				<Text style={styles.header}>Request Form</Text>
				<View style={styles.icon}>
					<Ionicons name="logo-snapchat" size={35} color={'black'} />

					<View style={styles.textbox}>
						<TextInput
							style={{ flex: 1, padding: 12 }}
							editable
							value={state.title}
							onChangeText={value => this.setState({ title: value })}
							numberOfLines={1}
							maxLength={40}
							placeholder={'Title'}
						/>
					</View>
				</View>
				<View style={styles.icon}>
					<Ionicons name="md-pricetags" size={35} color={'black'} />

					<View style={styles.textbox}>
						<TextInput
							style={{ flex: 1, padding: 12 }}
							editable
							value={this.state.description}
							onChangeText={value => this.setState({ description: value })}
							numberOfLines={1}
							maxLength={40}
							placeholder={'Description'}
						/>
					</View>
				</View>
				<View style={styles.icon}>
					<Ionicons name="md-pin" size={35} color={'black'} />

					<View style={styles.textbox}>
						<TextInput
							style={{ flex: 1, padding: 12 }}
							editable
							value={this.state.location}
							onChangeText={value => this.setState({ location: value })}
							numberOfLines={1}
							maxLength={40}
							placeholder={'Location'}
						/>
					</View>
				</View>
				<View style={{ justifyContent: 'center', alignSelf: 'center' }}>
					<TouchableOpacity
						style={styles.button}
						onPress={() =>
							props.addToData({ description, title, location, name: 'ALice' })
						}
					>
						<Text style={styles.submit}>Submit</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

export default LiveRequestPage;
