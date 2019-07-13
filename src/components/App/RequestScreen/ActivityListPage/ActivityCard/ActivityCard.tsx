import * as React from 'react';
import { Button, Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './ActivityCard.styles';
import CustomButton from 'src/components/App/CustomButton';
import { Ionicons } from '@expo/vector-icons';
import { ActivityCardDetails } from '../../RequestScreen';
import { primary } from 'src/constants/Colors';

export interface Props {
	cardData: ActivityCardDetails;
	acceptRequest: () => void;
}

export interface State {
	// isAccept: boolean;
}

class ActivityCard extends React.Component<Props, State> {
	state = {
		// isAccept: false,
	};

	uri = 'https://i.pravatar.cc/150?img=' + Math.floor(Math.random() * 30 + 1);
	render() {
		const { state, props } = this;
		const { cardData } = props;
		const { description, title, name, location } = cardData;

		// if (state.isAccept) {
		// 	button = 'Accepted';
		// }

		// const color = state.isAccept ? 'lightgreen' : 'lightblue';
		return (
			<View style={cardData.completed ? styles.completedCard : styles.card}>
				<View style={styles.pic}>
					<Image
						style={{ height: 80, width: 80, borderRadius: 40 }}
						source={{
							uri: this.uri,
						}}
					/>
				</View>
				<View style={styles.title}>
					{wrapperDetail('md-checkbox', title, true)}
					{wrapperDetail('md-list', description)}
					{wrapperDetail('md-person', name)}
					{wrapperDetail('md-pin', location)}
				</View>
				<View style={{ justifyContent: 'center', alignSelf: 'center' }}>
					<TouchableOpacity
						style={{
							backgroundColor: primary,
							paddingHorizontal: 12,
							paddingVertical: 6,
							marginHorizontal: 6,
							borderRadius: 2000,
						}}
						onPress={props.acceptRequest}
					>
						<Text style={styles.title}>Accept</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

export default ActivityCard;

const wrapperDetail = (iconName: string, detail: string, bold?: boolean) => {
	const fontWeight = bold ? '600' : '200';
	const fontSize = bold ? 14 : 12;
	return (
		<View style={{ flexDirection: 'row' }}>
			<View style={{ marginHorizontal: 4 }}>
				<Ionicons name={iconName} size={18} color={primary} />
			</View>
			<Text style={{ fontWeight, fontSize }}>{detail}</Text>
		</View>
	);
};
