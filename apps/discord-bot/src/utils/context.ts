import { createBotContext } from '@answeroverflow/api/index';
import type { GuildMember } from 'discord.js';

export async function createMemberCtx(member: GuildMember) {
	const guild = member.guild;
	const ctx = await createBotContext({
		session: null,
		discordAccount: {
			avatar: member.displayAvatarURL(),
			discriminator: member.user.discriminator,
			username: member.user.displayName,
			id: member.id,
		},
		// The only server that we care about is the one we are currently interacting with, so only having 1 server makes sense here
		userServers: [
			{
				name: guild.name,
				id: guild.id,
				features: guild.features,
				// Permissions are the member permissions that tRPC validates match the required flags
				permissions: member.permissions.bitfield as unknown as number, // TODO: Handle bigint better
				icon: guild.iconURL(),
				owner: guild.ownerId === member.id,
			},
		],
	});
	return ctx;
}
