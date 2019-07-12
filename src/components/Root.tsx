import React from 'react';
import { StatusBar } from 'react-native';
import App from './App';

// TODO: SafeAreaView for iPhone X notch etc.?

interface Props {}
interface State {}

class Root extends React.Component<Props, State> {
	state = {};

	render() {
		return (
			<>
				<StatusBar barStyle="dark-content" />
				<App />
			</>
		);
	}
}

export default Root;
