import LandingScreen from './LandingScreen/LandingScreen';
import { makeRoute } from 'src/lib/navigation';
import RequestScreen from './RequestScreen';
import ChatScreen from './ChatScreen';
import ProfileScreen from './ProfileScreen';
import LoginScreen from './LoginScreen';

const appRoutes = {
	landing: makeRoute('landing', LandingScreen),
	login: makeRoute('login', LoginScreen),
	request: makeRoute('request', RequestScreen),
	chat: makeRoute('chat', ChatScreen),
	profile: makeRoute('profile', ProfileScreen),
};

export default appRoutes;
