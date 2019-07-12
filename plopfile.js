const path = require('path');
const sh = require('shelljs');
const chalk = require('chalk');
const PathPrompt = require('inquirer-path').PathPrompt;

console.log(); // Print blank line

const makeComponentGenerator = (functional, description) => ({
	description,
	prompts: [
		{
			type: 'input',
			name: 'name',
			message: 'Component name:',
			validate: (input, answers) => {
				if (!input)
					return 'Name cannot be empty';
				if (/\s/.test(input))
					return 'Name cannot contain spaces';
				if (/[^A-Za-z0-9]/.test(input))
					return `Name may only contain ${chalk.yellow('alphanumeric characters')}`;
				if (!/^[A-Z][A-Za-z0-9]+$/.test(input))
					return `Name must be in ${chalk.yellow('PascalCase')} (UpperCamelCase)`;
				return true;
			},
		},
		{
			type: 'path',
			name: 'parentDir',
			// message: 'Destination path:',
			message: 'Parent directory:',
			directoryOnly: true,
			cwd: './src/components',
			promptPrefix: 'src/components/',
			validate: (input, answers) => {
				const parentDirShort = path.join(input.replace(/^.*?src/, 'src'), '/');
				if (sh.test('-e', path.join(input, answers.name)))
					return `'${chalk.yellow(answers.name)}' already exists in ${chalk.yellow(parentDirShort)}`;
				if (answers.name.toLowerCase() === path.basename(input).toLowerCase())
					return `Do not include the component's name ('${chalk.yellow(answers.name)}') in the parent directory path -- that directory will be created for you`;
					// The parent directory's name ('') should not be the same as the component's name`;
					// `The parent directory should not have the same name as the component`
				return true;
			},
		},
	],
	actions: data => {
		data.functional = functional;
		return [
			{
				type: 'addMany',
				destination: path.join('{{parentDir}}', '{{name}}'),
				base: 'templates/component',
				templateFiles: 'templates/component/*',
			},
			// {
			// 	type: 'add',
			// 	path: path.join('{{parentDir}}', '{{name}}', 'index.js'),
			// 	templateFile: 'templates/component/index.hbs'
			// },
			// {
			// 	type: 'add',
			// 	path: path.join('{{parentDir}}', '{{name}}', '{{name}}.js'),
			// 	templateFile: 'templates/component/component.hbs'
			// },
		];
	},
});

module.exports = function (plop) {
	plop.setPrompt('path', PathPrompt);
	plop.setHelper('pascalToHeading', text => text.replace(/([a-z])([A-Z])/g, '$1 $2').toUpperCase());
	plop.setWelcomeMessage('What do you want to create?');

	plop.setGenerator('Class component', makeComponentGenerator(false, 'React class component'));
	plop.setGenerator('Functional component', makeComponentGenerator(true, 'React (stateless) functional component'));
}
