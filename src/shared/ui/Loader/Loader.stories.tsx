import React from 'react';
import {type ComponentMeta, type ComponentStory} from '@storybook/react';
import {Loader} from './Loader';

export default {
	title: 'shared/Loader',
	component: Loader,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {
	},
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = args => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {};
