import * as React from 'react';
import { Button, Text, View, TouchableOpacity, KeyboardAvoidingView, Image } from 'react-native';
import styles from './LoginScreen.styles';
import { NavScreenProps } from 'src/lib/navigation';
import { TextInput } from 'react-native-gesture-handler';
import CustomTextInput from './CustomTextInput';
import { Ionicons } from '@expo/vector-icons';
import { primary } from 'src/constants/Colors';

interface Props {
	handlePress: () => void;
}
export interface State {}

class LoginScreen extends React.Component<Props, State> {
	state = {};

	render() {
		const { state, props } = this;
		return (
			<KeyboardAvoidingView style={styles.container}>
				<View style={styles.logoWrapper}>
					<Text
						style={{
							fontSize: 40,
							fontStyle: 'italic',
							fontWeight: 'bold',
							textAlign: 'center',
							color: primary,
						}}
					>
						Helpie
					</Text>
					<Image
						style={{ width: 200, height: 150, borderRadius: 30 }}
						source={{
							uri: 'http://clipart-library.com/images/5cRKXgkni.jpg',
						}}
					/>
				</View>
				<View style={styles.detailsWrapper}>
					<View style={styles.TextIcon}>
						<Ionicons name="md-person" size={30} color={'grey'} />
						<CustomTextInput isuser />
					</View>
					<View style={styles.TextIcon}>
						<Ionicons name="md-lock" size={30} color={'grey'} />
						<CustomTextInput isuser={false} />
					</View>
					<View style={styles.LgPos}>
						<TouchableOpacity onPress={props.handlePress}>
							<View style={styles.LogInIcon}>
								<Text style={styles.LgText}>Log in</Text>
								<View
									style={{
										marginTop: 5,
										marginRight: 18,
										justifyContent: 'center',
										alignItems: 'center',
									}}
								>
									<Ionicons name="md-log-in" size={30} color={'white'} />
								</View>
							</View>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.empty}>
					<Text>Helpie 2019</Text>
				</View>
			</KeyboardAvoidingView>
		);
	}
}

export default LoginScreen;
