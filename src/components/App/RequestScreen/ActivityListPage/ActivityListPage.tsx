import * as React from 'react';
import { Button, Text, View, Image, ScrollView } from 'react-native';
import styles from './ActivityListPage.styles';
import CustomButton from '../../CustomButton';
import ActivityCard from './ActivityCard';
import { ActivityCardDetails } from '../RequestScreen';
import { whiteOffset } from 'src/constants/Colors';

export interface Props {
	cardsData: ActivityCardDetails[];
	acceptRequest: () => void;
}

export interface State {}

class ActivityListPage extends React.Component<Props, State> {
	state: State = {};

	render() {
		const { state, props } = this;

		return (
			<>
				<View style={{ backgroundColor: whiteOffset }}>
					<Text style={styles.header}>Activities List</Text>
				</View>
				<ScrollView style={styles.container}>
					{props.cardsData.map((card, key) => (
						<ActivityCard
							key={key}
							cardData={card}
							acceptRequest={props.acceptRequest}
						/>
					))}
				</ScrollView>
			</>
		);
	}
}

export default ActivityListPage;
