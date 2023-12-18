import React, {ComponentProps} from 'react';
import {Animated, AnimatedProps } from "remotion-animated";

interface CodePieceProps extends ComponentProps<any> {
  children?: any;
  text?: string;
  codeAnimatedProps?: AnimatedProps
  highlightAnimatedProps?: AnimatedProps
  highlightColor?: string
  underlineAnimatedProps?: AnimatedProps
  underlineColor?: string
}

export const CodePiece = (props: CodePieceProps) => {
  return (
    <Animated
      animations={[]}
      className="max-w-min relative inline-block overflow-hidden"
      {...props.codeAnimatedProps}
    >
        {props.highlightAnimatedProps && (
          <Animated
            absolute
            animations={[]}
            className={`w-full h-full top-0 ${props.highlightColor || ''}`}
            {...props.highlightAnimatedProps}
          />
        )}

        {props.underlineAnimatedProps && (
          <Animated
            absolute
            animations={[]}
            className={`w-full bg-none bottom-0 border-b-2 border-dashed ${props.underlineColor || ''}`}
            {...props.underlineAnimatedProps}
          />
        )}

        <pre className="relative">{props.children || props.text}</pre>
    </Animated>

)
}

