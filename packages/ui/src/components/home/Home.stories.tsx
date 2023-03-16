import type { Meta, StoryObj } from '@storybook/react';
import { PageWrapper } from '../PageWrapper';
import { Home } from './Home';

const meta = {
	component: Home,
	title: 'pages/Home',
	render: () => (
		<PageWrapper>
			<Home />
		</PageWrapper>
	),
	parameters: {
		layout: 'fullscreen',
		a11y: {
			config: {
				rules: [
					{
						id: 'heading-order',
						enabled: false,
					},
					{
						id: 'duplicate-id',
						enabled: false,
					},
				],
			},
		},
	},
} as Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Homepage: Story = {};