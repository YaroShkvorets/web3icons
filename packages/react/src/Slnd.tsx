
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconSlnd = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M6.03 13.654a4.145 4.145 0 0 1-.154-5.91L7.243 6.33a1.07 1.07 0 0 1 1.5-.043c.429.403.441 1.067.039 1.487L7.419 9.188a2.06 2.06 0 0 0 .077 2.945 2.12 2.12 0 0 0 2.974-.077l1.372-1.432a4.35 4.35 0 0 1 6.102-.154 4.23 4.23 0 0 1 .155 6.03l-1.127 1.174a1.072 1.072 0 0 1-1.741-.295 1.04 1.04 0 0 1 .198-1.154l1.131-1.174a2.14 2.14 0 0 0-.081-3.056 2.207 2.207 0 0 0-3.095.078l-1.375 1.431a4.264 4.264 0 0 1-5.979.15m3.116 3.416a1.05 1.05 0 0 1 .818-1.243 7.73 7.73 0 0 0 4.162-2.88 1.07 1.07 0 0 1 1.767.053 1.04 1.04 0 0 1-.036 1.168c-1.74 2.409-4.294 3.468-5.451 3.712a1.063 1.063 0 0 1-1.26-.814zm4.131-8.327a1.052 1.052 0 1 0-.441-2.057c-1.132.24-3.159.908-4.912 3.334a1.04 1.04 0 0 0 .249 1.466 1.07 1.07 0 0 0 1.483-.245c1.354-1.881 2.846-2.335 3.621-2.498"/>

        </>
      ) : (
        <>
          
    <path fill="url(#SLND__a)" d="M6.03 13.654a4.145 4.145 0 0 1-.155-5.91L7.243 6.33a1.07 1.07 0 0 1 1.5-.043c.428.403.44 1.067.038 1.487L7.418 9.188a2.06 2.06 0 0 0 .077 2.945 2.12 2.12 0 0 0 2.975-.077l1.371-1.432a4.35 4.35 0 0 1 6.103-.154 4.23 4.23 0 0 1 .154 6.03l-1.127 1.174a1.072 1.072 0 0 1-1.74-.295 1.04 1.04 0 0 1 .197-1.154l1.132-1.174a2.145 2.145 0 0 0-.082-3.056 2.207 2.207 0 0 0-3.094.078l-1.376 1.431a4.264 4.264 0 0 1-5.978.15m3.115 3.416a1.05 1.05 0 0 1 .819-1.243 7.73 7.73 0 0 0 4.161-2.88 1.07 1.07 0 0 1 1.768.053 1.04 1.04 0 0 1-.036 1.168c-1.74 2.409-4.294 3.468-5.452 3.712a1.063 1.063 0 0 1-1.26-.814zm4.132-8.327a1.052 1.052 0 1 0-.442-2.057c-1.131.24-3.158.908-4.911 3.334a1.04 1.04 0 0 0 .249 1.466 1.07 1.07 0 0 0 1.482-.245c1.355-1.881 2.846-2.335 3.622-2.498"/>
    <defs>
        <linearGradient id="SLND__a" x1="3.814" x2="18.012" y1="11.73" y2="11.73" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF9050"/>
            <stop offset="1" stopColor="#FB5E39"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconSlnd.displayName = 'Slnd';

export default IconSlnd;