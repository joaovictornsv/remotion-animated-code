import React, {ComponentProps} from 'react';

interface CodeLineProps extends ComponentProps<any> {
	tabIndentation?: number;
}

export const CodeLine = ({children, className, tabIndentation}: CodeLineProps) => {

	return (<div className={`flex  ${className} `} style={{paddingLeft: `${(tabIndentation || 0) * 40}px`}}>
		{children}
	</div>)
}
