import * as React from 'react';
import { Button, Text, View, Image, ImageBackground, ScrollView } from 'react-native';
import styles from './HelpeeProfilePage.styles';
import { white, mildGrey, primary } from 'src/constants/Colors';

export interface Props {}

export interface State {}

class HelpeeProfilePage extends React.Component<Props, State> {
	state = {};

	render() {
		const { state, props } = this;
		return (
			<ScrollView style={{ flex: 1 }}>
				<View style={styles.container}>
					<View
						style={{
							margin: 4,
							padding: 4,
							backgroundColor: primary,
							borderRadius: 2000,
						}}
					>
						<Image
							style={{
								width: 140,
								height: 140,
								borderRadius: 70,
							}}
							source={{
								uri: 'https://i.pravatar.cc/300?img=11',
							}}
						/>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<Text style={styles.text}>Travis Langg</Text>
						<View
							style={{
								paddingHorizontal: 10,
								marginLeft: 6,
								borderRadius: 200,
								alignItems: 'center',
								justifyContent: 'center',
								borderColor: primary,
								borderWidth: 1,
							}}
						>
							<Text
								style={{
									textAlign: 'center',
									color: primary,
									fontWeight: '500',
								}}
							>
								Helpie
							</Text>
						</View>
					</View>
				</View>
				{renderDetails('Contact', '0424123512')}
				{renderDetails('Emergency', '0432123422')}
				{renderDetails('Medical Conditions', 'Depression and social anxiety')}
				{renderDetails('Age', '23')}
			</ScrollView>
		);
	}
}

export default HelpeeProfilePage;

const renderDetails = (title: string, value: string) => (
	<View
		style={{
			padding: 16,
		}}
	>
		<Text style={{ fontWeight: '700', fontSize: 18 }}>{title}:</Text>
		<Text
			style={{
				color: primary,
				padding: 4,
				paddingLeft: 34,
				fontSize: 16,
			}}
		>
			{value}
		</Text>
	</View>
);
