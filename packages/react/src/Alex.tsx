
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAlex = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M6.626 16.659a7 7 0 0 1-.6-.806L9.87 12 6.017 8.147q.277-.426.605-.806L11.285 12zM5.512 9.077c-.146.334-.27.686-.369 1.037L7.03 12l-1.886 1.881c.099.352.223.699.373 1.033L8.439 12 5.516 9.077zM12 12.72l-4.658 4.654c.252.223.523.42.805.6L12 14.13l3.857 3.853c.279-.18.549-.386.802-.6L12 12.716zm2.923 5.764L12 15.557 9.077 18.48c.335.15.686.274 1.037.373L12 16.967l1.882 1.886a7 7 0 0 0 1.041-.373zM12 11.284l4.659-4.658a7 7 0 0 0-.806-.6L12 9.87 8.147 6.017a7.5 7.5 0 0 0-.805.604zm6.485 3.639q.225-.505.372-1.033L16.972 12l1.885-1.886a7.5 7.5 0 0 0-.372-1.041L15.557 12l2.923 2.923zM14.125 12l3.854-3.853a7.4 7.4 0 0 0-.6-.806L12.716 12l4.654 4.659c.223-.258.424-.523.6-.806L14.13 12zM12 8.443l2.923-2.927a7 7 0 0 0-1.037-.373L12 7.029l-1.886-1.886a7.4 7.4 0 0 0-1.032.373l2.914 2.923z"/>
        </>
      ) : (
        <>
          <g clipPath="url(#ALEX__a)"><path fill="url(#ALEX__b)" d="M0 0h24v24H0z"/><path fill="#fff" d="M6.626 16.659a7 7 0 0 1-.6-.806L9.87 12 6.017 8.147q.277-.426.605-.806L11.285 12zM5.512 9.077c-.146.334-.27.686-.369 1.037L7.03 12l-1.886 1.881c.099.352.223.699.373 1.033L8.439 12 5.516 9.077zM12 12.72l-4.658 4.654c.252.223.523.42.805.6L12 14.13l3.857 3.853c.279-.18.549-.386.802-.6L12 12.716zm2.923 5.764L12 15.557 9.077 18.48c.335.15.686.274 1.037.373L12 16.967l1.882 1.886a7 7 0 0 0 1.041-.373zM12 11.284l4.659-4.658a7 7 0 0 0-.806-.6L12 9.87 8.147 6.017a7.5 7.5 0 0 0-.805.604zm6.485 3.639q.225-.505.372-1.033L16.972 12l1.885-1.886a7.5 7.5 0 0 0-.372-1.041L15.557 12l2.923 2.923zM14.125 12l3.854-3.853a7.4 7.4 0 0 0-.6-.806L12.716 12l4.654 4.659c.223-.258.424-.523.6-.806L14.13 12zM12 8.443l2.923-2.927a7 7 0 0 0-1.037-.373L12 7.029l-1.886-1.886a7.4 7.4 0 0 0-1.032.373l2.914 2.923z"/></g><defs><linearGradient id="ALEX__b" x1="3.857" x2="19.286" y1="3.214" y2="21.643" gradientUnits="userSpaceOnUse"><stop stopColor="#6B2CFE"/><stop offset="1" stopColor="#078CE0"/></linearGradient><clipPath id="ALEX__a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
        </>
      )}
    </BaseIcon>
));

IconAlex.displayName = 'Alex';

export default IconAlex;
