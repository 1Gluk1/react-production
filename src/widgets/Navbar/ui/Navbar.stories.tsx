import React from 'react';
import {type ComponentStory, type ComponentMeta} from '@storybook/react';
import {Navbar} from './Navbar';

export default {
	title: 'widget/Navbar',
	component: Navbar,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = args => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {};

