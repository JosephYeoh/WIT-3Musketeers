import * as React from 'react';
import { Button, Text, View, StatusBar, ActivityIndicator } from 'react-native';
import styles from './RequestScreen.styles';
import { NavScreenProps, StaticNavigationOptions } from 'src/lib/navigation';
import LiveRequestPage from './LiveRequestPage';
import ActivityListPage from './ActivityListPage';
import CustomButton from '../CustomButton';

interface NavParams {}
type Props = NavScreenProps<NavParams>;

export interface State {
	status: 'none' | 'waiting' | 'accepted';
	isHelpee: boolean;
	cardsData: ActivityCardDetails[];
}
export interface ActivityCardDetails {
	title: string;
	name: string;
	description: string;
	location: string;
}
class RequestScreen extends React.Component<Props, State> {
	static navigationOptions: StaticNavigationOptions<{}> = props => ({
		headerTitle: 'Requests',
	});
	state: State = {
		status: 'none',
		isHelpee: true,
		cardsData: [
			{ description: 'descp', location: 'kingsford', name: 'Sabrina', title: 'title' },
			{ description: 'descp3', location: 'kingsford', name: 'Joseph', title: 'title2' },
			{ description: 'descp4', location: 'kingsford', name: 'Isabele', title: 'title3' },
			{ description: 'desc5', location: 'kingsford', name: 'Meiyan', title: 'title4' },
		],
	};

	render() {
		const { state, props } = this;
		const addToData = (card: ActivityCardDetails) => {
			const newData = [card, ...state.cardsData];
			this.setState({ cardsData: newData, status: 'waiting' });
		};
		console.log({ state });
		const acceptRequest = () => this.setState({ status: 'accepted' });
		return (
			<View style={{ flex: 1 }}>
				<CustomButton
					size={'small'}
					buttonName="Swap Context"
					onPress={() => this.setState({ isHelpee: !state.isHelpee })}
				/>
				{state.isHelpee ? (
					<>
						{state.status === 'accepted' ? (
							<View>
								<Text>Accepted</Text>
							</View>
						) : (
							<>
								{state.status === 'waiting' ? (
									<View
										style={{
											flex: 1,
											justifyContent: 'center',
											alignItems: 'center',
										}}
									>
										<ActivityIndicator />
									</View>
								) : (
									<LiveRequestPage addToData={addToData} />
								)}
							</>
						)}
					</>
				) : (
					<>
						{state.status === 'accepted' ? (
							<View>
								<Text>Accepted</Text>
							</View>
						) : (
							<ActivityListPage
								cardsData={state.cardsData}
								acceptRequest={acceptRequest}
							/>
						)}
					</>
				)}
			</View>
		);
	}
}

export default RequestScreen;
