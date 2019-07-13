import React from 'react';
import { StatusBar, View, Text } from 'react-native';
import App from './App';
import LoginScreen from './App/LoginScreen';

// TODO: SafeAreaView for iPhone X notch etc.?

interface Props {}
interface State {
	loggedIn: boolean;
}

class Root extends React.Component<Props, State> {
	state = {
		loggedIn: false,
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
					<LoginScreen handlePress={() => this.setState({ loggedIn: true })} />
				)}
			</>
		);
	}
}

export default Root;
