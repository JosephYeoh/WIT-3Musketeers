import * as React from 'react';
import { Button, Text, View, Image, ImageBackground, ScrollView } from 'react-native';
import styles from './HelperProfilePage.styles';
import { white, mildGrey } from 'src/constants/Colors';

export interface Props {}

export interface State {}

class HelperProfilePage extends React.Component<Props, State> {
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
							backgroundColor: 'lightgreen',
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
								uri: 'https://i.pravatar.cc/300?img=5',
							}}
						/>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<Text style={styles.text}>Sarah Gothams</Text>
						<View
							style={{
								paddingHorizontal: 10,
								marginLeft: 6,
								borderRadius: 200,
								alignItems: 'center',
								justifyContent: 'center',
								borderColor: 'lightgreen',
								borderWidth: 1,
							}}
						>
							<Text
								style={{
									textAlign: 'center',
									color: 'lightgreen',
									fontWeight: '500',
								}}
							>
								Helper
							</Text>
						</View>
					</View>
				</View>
				{renderDetails('Contact', '0424123512')}
				{renderDetails('Points', '2032 helpoints')}
				{renderDetails('Completion rate', '85%')}
				{renderDetails('Location', 'around Sydney')}
			</ScrollView>
		);
	}
}

export default HelperProfilePage;

const renderDetails = (title: string, value: string) => (
	<View
		style={{
			padding: 16,
		}}
	>
		<Text style={{ fontWeight: '700', fontSize: 18 }}>{title}:</Text>
		<Text
			style={{
				color: 'lightgreen',
				padding: 4,
				paddingLeft: 34,
				fontSize: 16,
			}}
		>
			{value}
		</Text>
	</View>
);
