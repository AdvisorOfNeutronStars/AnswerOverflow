'use client';
import { ExternalLinkIcon } from '@answeroverflow/ui/icons/index';
import { DatePickerWithPresets } from '@answeroverflow/ui/ui/date-picker';
import { LinkButton } from '@answeroverflow/ui/ui/link-button';
import { useDashboardContext } from './components/dashboard-context';
import {
	PageViewsLineChart,
	PopularPagesTable,
	QuestionsAndAnswersLineChart,
	RequestAnInsight,
	ServerInvitesUsedLineChart,
	TopQuestionSolversTable,
} from './components/home';

export default function Client() {
	const { options } = useDashboardContext();
	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-col justify-between gap-4 sm:flex-row">
				<DatePickerWithPresets
					from={options.from}
					to={options.to}
					onValueChange={(range) => options.setRange(range)}
				/>
				<LinkButton
					href={`https://www.answeroverflow.com/c/${options.serverId}`}
					target="_blank"
					variant={'outline'}
					className="flex flex-row items-center gap-2 rounded-md border px-4 py-2"
				>
					View Community
					<ExternalLinkIcon />
				</LinkButton>
			</div>
			<div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
				<PageViewsLineChart />
				<PopularPagesTable />
				<QuestionsAndAnswersLineChart />
				<TopQuestionSolversTable />
				<ServerInvitesUsedLineChart />
				<RequestAnInsight />
			</div>
		</div>
	);
}
