import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import LarsaEditor from '.';

const meta = {
	title: 'WIP/Inputs/Editor',
	tags: ['autodocs'],
	render: (args) => {
		function onChange(e) {
			console.log(e.detail);
		}

		return html`<larsa-editor
            @save=${onChange}
            .data=${{
							time: 1694582692497,
							blocks: [
								{
									id: 'yxiOAs2tws',
									type: 'header',
									data: {
										text: 'Test',
										level: 3,
									},
								},
								{
									id: '2gbyCP9X1l',
									type: 'header',
									data: {
										text: 'Heading 1',
										level: 1,
									},
								},
								{
									id: 'trRkobgTW-',
									type: 'header',
									data: {
										text: 'Heading 2',
										level: 2,
									},
								},
								{
									id: 'd2K2z3BUcZ',
									type: 'header',
									data: {
										text: 'Heading 3',
										level: 3,
									},
								},
								{
									id: 'UlEfU4EofS',
									type: 'header',
									data: {
										text: 'Heading 4',
										level: 4,
									},
								},
								{
									id: '-hf4lpfi4u',
									type: 'header',
									data: {
										text: 'Heading 5',
										level: 5,
									},
								},
								{
									id: '4IfXYJvWhN',
									type: 'header',
									data: {
										text: 'Heading 6',
										level: 6,
									},
								},
								{
									id: 'f1iytKWx1O',
									type: 'list',
									data: {
										style: 'ordered',
										items: ['He', 'wants', 'more', 'pie'],
									},
								},
								{
									id: 'P0Ak12TbKc',
									type: 'nestedList',
									data: {
										style: 'unordered',
										items: [
											{
												content: 'He',
												items: [],
											},
											{
												content: 'wants ',
												items: [],
											},
											{
												content: 'more ',
												items: [],
											},
											{
												content: 'unordered',
												items: [],
											},
										],
									},
								},
							],
							version: '2.28.0',
						}}
        ></larsa-editor>`;
	},
} satisfies Meta<LarsaEditor>;

export default meta;
type Story = StoryObj<LarsaEditor>;

export const Default: Story = {
	args: {},
};
