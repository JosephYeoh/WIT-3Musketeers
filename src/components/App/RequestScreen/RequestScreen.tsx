import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { NavScreenProps, StaticNavigationOptions } from 'src/lib/navigation';
import ChatScreen from '../ChatScreen';
import CustomButton from '../CustomButton';
import ActivityListPage from './ActivityListPage';
import LiveRequestPage from './LiveRequestPage';
import { primary } from 'src/constants/Colors';

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
	completed: boolean;
}
class RequestScreen extends React.Component<Props, State> {
	static navigationOptions: StaticNavigationOptions<{}> = props => ({
		headerTitle: 'Requests',
	});
	state: State = {
		status: 'none',
		isHelpee: true,
		cardsData: [
			{
				description: '',
				location: 'CBD',
				name: 'Jean',
				title: 'Help assembling table',
				completed: true,
			},
			{
				description: 'It is too heavy for me.',
				location: 'Wollicreek',
				name: 'Adam',
				title: 'Help carry grocery',
				completed: true,
			},
		],
	};

	render() {
		const { state, props } = this;
		const addToData = (card: ActivityCardDetails) => {
			const newData = [card, ...state.cardsData];
			this.setState({ cardsData: newData, status: 'waiting' });
		};
		const acceptRequest = () => {
			state.cardsData[0].completed = true;
			this.setState({ status: 'accepted', cardsData: state.cardsData });
		};
		const completeRequest = () => this.setState({ status: 'none' });
		return (
			<View style={{ flex: 1 }}>
				<CustomButton
					isHelpee={state.isHelpee}
					size={'small'}
					buttonName="Swap Context"
					onPress={() => this.setState({ isHelpee: !state.isHelpee })}
				/>
				{state.isHelpee ? (
					<>
						{state.status === 'accepted' ? (
							<ChatScreen
								isHelpee={state.isHelpee}
								completeRequest={completeRequest}
							/>
						) : (
							<>
								{state.status === 'waiting' ? (
									<View
										style={{
											flex: 1,
											justifyContent: 'center',
											alignItems: 'center',
											flexDirection: 'column',
										}}
									>
										<View>
											<View style={{ flexDirection: 'row' }}>
												<Text
													style={{
														margin: 10,
														fontSize: 16,
														fontWeight: '700',
														justifyContent: 'center',
														alignContent: 'center',
													}}
												>
													Please wait for a kind helpie.
												</Text>
												<Ionicons
													name="ios-happy"
													size={30}
													color={primary}
												/>
											</View>
										</View>
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
							<ChatScreen
								isHelpee={state.isHelpee}
								completeRequest={completeRequest}
							/>
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
