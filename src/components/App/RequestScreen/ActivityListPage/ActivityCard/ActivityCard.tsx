import * as React from 'react';
import { Button, Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './ActivityCard.styles';
import CustomButton from 'src/components/App/CustomButton';
import { Ionicons } from '@expo/vector-icons';
import { ActivityCardDetails } from '../../RequestScreen';

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

	function;
	render() {
		const { state, props } = this;
		const { cardData } = props;
		const { description, title, name, location } = cardData;

		let button = 'Accept';
		// if (state.isAccept) {
		// 	button = 'Accepted';
		// }

		// const color = state.isAccept ? 'lightgreen' : 'lightblue';
		const color = 'lightblue';
		return (
			<View style={styles.card}>
				<View style={styles.pic}>
					<Image
						style={{ height: 70, width: 70 }}
						source={{
							uri:
								'https://steemitimages.com/p/3HaJVw3AYyXBPPdfDwZuiZRFoYNWo5YFpjHs9b2Qx36AHvcSRbrj8zZWXz3iU5H1ob75cM844F6bQkhQDYpRmSYpbU5RE5xQLeCf5yg?format=match&mode=fit&width=640',
						}}
					/>
				</View>
				<View style={styles.title}>
					{wrapperDetail('logo-snapchat', title, true)}
					{wrapperDetail('md-person', name)}
					{wrapperDetail('md-pin', location)}
					{wrapperDetail('md-pricetags', description)}
				</View>
				<View style={{ justifyContent: 'center', alignSelf: 'center' }}>
					<TouchableOpacity
						style={{
							backgroundColor: color,
							paddingHorizontal: 12,
							paddingVertical: 6,
							marginHorizontal: 6,
							borderRadius: 2000,
						}}
						onPress={props.acceptRequest}
					>
						<Text style={styles.title}>{button}</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

export default ActivityCard;

const wrapperDetail = (iconName: string, detail: string, bold?: boolean) => {
	const fontWeight = bold ? '900' : '200';
	const fontSize = bold ? 18 : 14;
	return (
		<View style={{ flexDirection: 'row' }}>
			<View style={{ marginHorizontal: 4 }}>
				<Ionicons name={iconName} size={18} color={'lightblue'} />
			</View>
			<Text style={{ fontWeight, fontSize }}>{detail}</Text>
		</View>
	);
};
