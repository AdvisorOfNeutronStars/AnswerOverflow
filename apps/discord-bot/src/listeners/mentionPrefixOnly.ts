import type { Events } from '@sapphire/framework';
import { Listener } from '@sapphire/framework';
import type { Message } from 'discord.js';

export class UserEvent extends Listener<typeof Events.MentionPrefixOnly> {
	public async run(message: Message) {
		const prefix = this.container.client.options.defaultPrefix;
		if (message.channel.isDMBased()) {
			throw new Error('Cannot find any Prefix for Message Commands.');
		}
		return message.channel.send(
			prefix
				? // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
					`My prefix in this guild is: \`${prefix}\``
				: 'Cannot find any Prefix for Message Commands.',
		);
	}
}
