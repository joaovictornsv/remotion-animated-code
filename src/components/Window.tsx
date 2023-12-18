import {ComponentProps} from 'react';
import {AbsoluteFill} from 'remotion';

const WindowHeader = () => (
	<div className="flex items-center gap-2 p-4 w-full bg-zinc-900">
		<div className="bg-red-400 h-4 w-4 rounded-full" />
		<div className="bg-yellow-400 h-4 w-4 rounded-full" />
		<div className="bg-green-400 h-4 w-4 rounded-full" />
	</div>
);

export const Window = ({children}: ComponentProps<any>) => (
	<AbsoluteFill className="justify-center items-center">
		<div className="flex flex-col rounded-xl bg-zinc-800 overflow-hidden">
			<WindowHeader />
			{children}
		</div>
	</AbsoluteFill>
);
