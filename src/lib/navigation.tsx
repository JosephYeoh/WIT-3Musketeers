import React from 'react';
import { View } from 'react-native';
import {
	createStackNavigator,
	NavigationRoute,
	NavigationRouteConfigMap,
	NavigationScreenConfig,
	NavigationScreenProp,
	NavigationScreenProps,
	NavigationStackScreenOptions,
	NavigationTabScreenOptions,
	StackNavigatorConfig,
} from 'react-navigation';
import { APP_BAR_HEIGHT } from 'src/constants/dimensions';
import { EmptyObject } from 'src/types/utilTypes';
import { Ionicons } from '@expo/vector-icons';

export const appHeaderStyle = {
	height: APP_BAR_HEIGHT,
};

export const stackNavOptions: StackNavigatorConfig = {
	defaultNavigationOptions: {
		headerBackTitle: null,
		headerStyle: appHeaderStyle,
	},
};

export function makeRoute<Params extends {}>(
	routeName: string,
	Component: NavScreenComponent<Params>,
) {
	return Object.assign(((params: Params) => ({ routeName, params })) as RouteFunction<Params>, {
		routeName,
		Component,
	});
}

export function makeRouteMap(routes: RouteDefinition[]) {
	const routeMap: NavigationRouteConfigMap = {};
	routes.forEach(route => {
		routeMap[route.routeName] = route.Component;
	});
	return routeMap;
}

export function makeTab(
	iconName: string,
	routes: RouteDefinition[],
	TabOverlay?: React.FunctionComponent,
) {
	const navigationOptions: NavigationTabScreenOptions = {
		tabBarIcon: ({ tintColor }) => (
			<View>
				<Ionicons name={`md-${iconName}`} size={24} color={tintColor || undefined} />
				{TabOverlay && <TabOverlay />}
			</View>
		),
	};
	return {
		screen: createStackNavigator(makeRouteMap(routes), stackNavOptions),
		navigationOptions,
	};
}

interface RouteDefinition {
	routeName: string;
	Component: NavScreenComponent<any>;
}

type RouteFunction<Params extends {}> = {} extends Params
	? ((params?: EmptyObject) => { routeName: string })
	: ((params: Params) => { routeName: string; params: Params });

export interface RouteDestination<TParams> {
	routeName: string;
	params?: TParams;
}

// Same as `NavigationScreenProps`, except with non-optional `navigation.state.params`
export type NavScreenProps<Params, Options = any> = NavigationScreenProps<Params, Options> & {
	navigation: {
		state: { params: Params };
	};
};

// Same as `NavigationScreenComponent`, except with non-optional `navigation.state.params`
export type NavScreenComponent<Params, Options = {}, Props = {}> = React.ComponentType<
	NavScreenProps<Params, Options> & Props
> & { navigationOptions?: NavigationScreenConfig<Options> };

// Shorter alias for `navigation` prop, but also with non-optional `navigation.state.params`
export type Navigation<Params> = NavigationScreenProp<NavigationRoute<Params>, Params> & {
	state: { params: Params };
};

export type StaticNavigationOptions<Params> = (arg: {
	navigation: Navigation<Params>;
}) => NavigationStackScreenOptions;

type NavOptions<Params> = NavigationStackScreenOptions | StaticNavigationOptions<Params>;

export function withNavOptions<Params = {}>(options: NavOptions<Params>) {
	return (Component: NavScreenComponent<Params>) => {
		const navOptions: StaticNavigationOptions<Params> = arg =>
			typeof options === 'function' ? options(arg) : options;
		Component.navigationOptions = navOptions;
		return Component;
	};
}
