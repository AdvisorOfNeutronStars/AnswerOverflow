import type { APISearchResult } from '@answeroverflow/api/index';
import { ServerInvite } from '../server-invite';
import { LinkMessage } from './link-message';
type SearchResultProps = APISearchResult[number];
const ThreadIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="h-6 w-6 text-primary/75"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
			/>
		</svg>
	);
};

const ViewsIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="h-6 w-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
			/>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
			/>
		</svg>
	);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Views = () => (
	<>
		<div className="ml-2 h-2 w-2 rounded-[50%]" aria-hidden />

		{/* Views */}
		<span className="px-1">{0}</span>
		<ViewsIcon />
	</>
);
// TODO: Use data from the API
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SearchResultMetaData = (props: Pick<SearchResultProps, 'thread'>) => {
	return (
		<div className="mt-8 flex flex-row items-center justify-center">
			{/* Thread count */}
			<span className="flex items-center justify-center px-1 text-primary/75">
				{props.thread?.messageCount ?? 20}
			</span>
			<ThreadIcon />
		</div>
	);
};

const SearchResultSidebar = (
	props: Pick<SearchResultProps, 'server' | 'channel' | 'thread'>,
) => {
	return (
		<>
			<ServerInvite
				server={props.server}
				channel={props.channel}
				location="Search Results"
			/>
			<SearchResultMetaData thread={props.thread} />
		</>
	);
};

export const SearchResult = ({ result }: { result: SearchResultProps }) => {
	return (
		<div className="flex h-full w-full flex-col-reverse rounded-standard lg:flex-row">
			<LinkMessage
				message={result.message}
				thread={result.thread}
				showNoSolutionCTA
			/>
			<div className="w-full shrink-0 flex-col items-center justify-center rounded-t-standard border-x-2 border-t-2 border-black/[.13] px-5 pb-2 pt-6 dark:border-white/[.13] lg:flex lg:w-64 lg:rounded-br-standard lg:rounded-tl-none lg:border-y-2 lg:border-l-0 lg:border-r-2">
				<SearchResultSidebar {...result} />
			</div>
		</div>
	);
};
