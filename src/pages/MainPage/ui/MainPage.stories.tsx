import React from 'react';
import {type ComponentMeta, type ComponentStory} from '@storybook/react';
import MainPage from './MainPage';

export default {
	title: 'pages/MainPage',
	component: MainPage,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {
	},
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = args => <MainPage {...(args as typeof MainPage)} />;

export const Default = Template.bind({});
Default.args = {};
