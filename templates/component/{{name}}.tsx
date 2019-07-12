import * as React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './{{name}}.styles';


export interface Props {}

{{#if functional}}
const {{name}}: React.SFC<Props> = props => (
	<View style={styles.container}>
	</View>
);
{{else}}
export interface State {}

class {{name}} extends React.Component<Props, State> {
	state = {};

	render() {
		const { state, props } = this;
		return (
			<View style={styles.container}>
			</View>
		);
	}
}
{{/if}}

export default {{name}};
