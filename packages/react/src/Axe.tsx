
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAxe = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M11.931 11.066 8.443 5.143l3.488 3.66 3.682-3.66z"/><path fill="currentColor" d="m12.013 10.941 3.6-5.798-1.307 1.303zM9.814 6.58 8.443 5.143l3.428 5.816zM11.931 12.934l-3.488 5.923 3.488-3.66 3.682 3.66z"/><path fill="currentColor" d="m12.013 13.059 3.6 5.798-1.307-1.303-2.293-4.5zM9.814 17.42l-1.371 1.436 3.428-5.816z"/><path fill="currentColor" d="m8.756 12.039-3.613-3.66L8.259 5.22l3.711 5.854 3.771-5.854 3.116 3.159-3.613 3.66 3.613 3.66-3.116 3.158-3.771-5.871-3.711 5.871L5.143 15.7z"/>
        </>
      ) : (
        <>
          <g clipPath="url(#AXE__a)"><path fill="#F0F3FA" d="M0 0h24v24H0z"/><path fill="#6D47EC" d="M11.931 11.066 8.443 5.143l3.488 3.66 3.682-3.66z"/><path fill="#193FE0" d="m12.013 10.941 3.6-5.798-1.307 1.303zM9.814 6.58 8.443 5.143l3.428 5.816z"/><path fill="#3052F1" d="m11.931 12.934-3.488 5.923 3.488-3.66 3.682 3.66z"/><path fill="#193FE0" d="m12.013 13.059 3.6 5.798-1.307-1.303-2.293-4.5zM9.814 17.42l-1.371 1.436 3.428-5.816z"/><path fill="url(#AXE__b)" d="m8.756 12.039-3.613-3.66L8.259 5.22l3.711 5.854 3.771-5.854 3.116 3.159-3.613 3.66 3.613 3.66-3.116 3.158-3.771-5.871-3.711 5.871L5.143 15.7z"/></g><defs><linearGradient id="AXE__b" x1="12" x2="12" y1="5.22" y2="18.857" gradientUnits="userSpaceOnUse"><stop stopColor="#DD76F9"/><stop offset="1" stopColor="#00C1E3"/></linearGradient><clipPath id="AXE__a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
        </>
      )}
    </BaseIcon>
));

IconAxe.displayName = 'Axe';

export default IconAxe;
