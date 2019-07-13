import LandingScreen from './LandingScreen/LandingScreen';
import { makeRoute } from 'src/lib/navigation';
import RequestScreen from './RequestScreen';
import ChatScreen from './ChatScreen';
import ProfileScreen from './ProfileScreen';

const appRoutes = {
	landing: makeRoute('landing', LandingScreen),
	request: makeRoute('request', RequestScreen),
	chat: makeRoute('chat', ChatScreen),
	profile: makeRoute('profile', ProfileScreen),
};

export default appRoutes;
