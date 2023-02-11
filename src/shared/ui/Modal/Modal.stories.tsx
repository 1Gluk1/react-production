import React from 'react';
import {type ComponentMeta, type ComponentStory} from '@storybook/react';
import {Modal} from './Modal';

export default {
	title: 'shared/Modal',
	component: Modal,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {
	},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
	isOpen: true,
	element: '',
	children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque cupiditate dignissimos facere magni neque nobis quis quod tenetur vel.',
};
