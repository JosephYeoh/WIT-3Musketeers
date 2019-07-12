import flat from 'array.prototype.flat';
flat.shim();

import { KeepAwake, registerRootComponent } from 'expo';
import Root from './components/Root';

if (__DEV__) {
	KeepAwake.activate();
}

export default registerRootComponent(Root);
