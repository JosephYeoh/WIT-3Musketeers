import React from 'react';
import { StatusBar, ColorPropType } from 'react-native';
import {
	createAppContainer,
	createBottomTabNavigator,
	createStackNavigator,
} from 'react-navigation';
import { mildGrey, white, success, primary } from 'src/constants/Colors';
import { makeTab, stackNavOptions } from 'src/lib/navigation';
import appRoutes from './App.routes';

const AppContainer = createAppContainer(
	createStackNavigator(
		{
			tabs: {
				screen: createBottomTabNavigator(
					{
						// LoginTab: makeTab('login', [appRoutes.login]),
						RequestTab: makeTab('clipboard', [appRoutes.request]),
						// ChatTab: makeTab('menu', [appRoutes.chat]),
						ProfileTab: makeTab('person', [appRoutes.profile]),
					},
					{
						tabBarOptions: {
							showLabel: false,
							activeTintColor: primary,
							inactiveTintColor: mildGrey,
						},
					},
				),
				navigationOptions: {
					header: null,
				},
			},
		},
		stackNavOptions,
	),
);

const App: React.FC = props => (
	<>
		<StatusBar barStyle="light-content" />
		<AppContainer />
	</>
);

export default App;
