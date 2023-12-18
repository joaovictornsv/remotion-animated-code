import React, {ComponentProps} from 'react';
import {Animated, AnimatedProps} from 'remotion-animated';

const HIGHLIGHT_TYPES = {
	SUCCESS: 'bg-green-600',
	ERROR: 'bg-red-600',
	WARNING: 'bg-amber-600',
};

const UNDERLINE_TYPES = {
	SUCCESS: 'border-green-600',
	ERROR: 'border-red-600',
	WARNING: 'border-amber-600',
};

interface CodePieceProps extends ComponentProps<any> {
	children?: any;
	text?: string;
	codeAnimatedProps?: AnimatedProps;
	highlightAnimatedProps?: AnimatedProps;
	highlightType?: keyof typeof HIGHLIGHT_TYPES;
	underlineAnimatedProps?: AnimatedProps;
	underlineType?: keyof typeof UNDERLINE_TYPES;
}

export const CodePiece = (props: CodePieceProps) => {
	const highlightClassName =
		props.highlightType && HIGHLIGHT_TYPES[props.highlightType];
	const underlineClassName =
		props.underlineType && UNDERLINE_TYPES[props.underlineType];
	return (
		<Animated
			animations={[]}
			className="max-w-min relative inline-block overflow-hidden"
			{...props.codeAnimatedProps}
		>
			{props.highlightAnimatedProps && (
				<Animated
					absolute
					className={`w-full h-full top-0 ${highlightClassName || ''}`}
					{...props.highlightAnimatedProps}
				/>
			)}

			{props.underlineAnimatedProps && (
				<Animated
					absolute
					className={`w-full bg-none bottom-0 border-b-2 border-dashed ${
						underlineClassName || ''
					}`}
					{...props.underlineAnimatedProps}
				/>
			)}

			<pre className="relative">{props.children || props.text}</pre>
		</Animated>
	);
};
