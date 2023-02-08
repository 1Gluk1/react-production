import React from 'react';
import {type ComponentMeta, type ComponentStory} from '@storybook/react';
import {NotFoundPage} from './NotFoundPage';

export default {
	title: 'pages/NotFoundPage',
	component: NotFoundPage,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {
	},
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = args => <NotFoundPage {...(args as typeof NotFoundPage)} />;

export const Default = Template.bind({});
Default.args = {};
