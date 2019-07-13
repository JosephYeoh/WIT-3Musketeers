import React from 'react';
import { StatusBar, View, Text } from 'react-native';
import App from './App';

// TODO: SafeAreaView for iPhone X notch etc.?

interface Props {}
interface State {
	loggedIn: boolean;
}

class Root extends React.Component<Props, State> {
	state = {
		loggedIn: true,
	};

	render() {
		return (
			<>
				{this.state.loggedIn ? (
					<>
						<StatusBar barStyle="dark-content" />
						<App />
					</>
				) : (
					<View>
						<Text>123</Text>
					</View>
				)}
			</>
		);
	}
}

export default Root;
