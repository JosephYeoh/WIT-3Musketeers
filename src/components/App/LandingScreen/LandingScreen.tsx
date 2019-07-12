import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavScreenProps, StaticNavigationOptions } from 'src/lib/navigation';
import { success } from 'src/constants/Colors';

interface NavParams {}
type Props = NavScreenProps<NavParams>;

interface State {
	counter: number;
	isMale: boolean;
}

class LandingScreen extends Component<Props, State> {
	static navigationOptions: StaticNavigationOptions<{}> = props => ({
		headerTitle: 'Inbox',
	});
	state = {
		counter: 0,
		isMale: true,
	};

	render() {
		const { state, props } = this;
		const { navigation } = this.props;
		let toDisplay = 'unspecified';
		if (state.counter === 0) {
			toDisplay = 'zero';
		} else if (state.counter === 1) {
			toDisplay = 'one';
		} else {
			toDisplay = 'Others';
		}
		return (
			<View style={{ flex: 1, backgroundColor: 'grey' }}>
				<View style={{ flex: 1, margin: 10, borderRadius: 12, backgroundColor: 'white' }}>
					<View
						style={{
							flex: 1,
							backgroundColor: 'red',
							alignSelf: 'center',
							justifyContent: 'center',
						}}
					>
						<Text style={{ fontSize: 32, color: success, fontWeight: '900' }}>The</Text>
					</View>
					<View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }}>
						<TouchableOpacity
							onPress={() => this.setState({ counter: this.state.counter + 1 })}
							style={{
								backgroundColor: 'lightblue',
								borderRadius: 16,
								paddingHorizontal: 16,
								paddingVertical: 8,
							}}
						>
							<Text style={{ fontSize: 24, fontWeight: '500', color: 'white' }}>
								Click me
							</Text>
						</TouchableOpacity>
					</View>
					<View
						style={{
							flex: 1,
							backgroundColor: 'blue',
							alignSelf: 'center',
							justifyContent: 'center',
						}}
					>
						<Text>Musketeers</Text>
					</View>
				</View>
			</View>
		);
	}
}

export default LandingScreen;
