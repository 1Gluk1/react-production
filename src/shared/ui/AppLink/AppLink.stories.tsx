import React from 'react';
import {type ComponentMeta, type ComponentStory} from '@storybook/react';
import {AppLink, AppLinkTheme} from './AppLink';

export default {
	title: 'shared/AppLink',
	component: AppLink,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {
		to: '/',
		theme: AppLinkTheme.PRIMARY,
	},
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = args => <AppLink {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'Text',
};
