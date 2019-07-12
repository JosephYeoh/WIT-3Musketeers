import LandingScreen from './LandingScreen/LandingScreen';
import { makeRoute } from 'src/lib/navigation';

const appRoutes = {
	landing: makeRoute('landing', LandingScreen),
};

export default appRoutes;
