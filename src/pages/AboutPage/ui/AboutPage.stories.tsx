import React from 'react';
import {type ComponentMeta, type ComponentStory} from '@storybook/react';
import AboutPage from './AboutPage';

export default {
	title: 'pages/AboutPage',
	component: AboutPage,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {
	},
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = args => <AboutPage {...(args as typeof AboutPage)} />;

export const Default = Template.bind({});
Default.args = {};
