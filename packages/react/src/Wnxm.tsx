
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconWnxm = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M13.265 9.188a2.23 2.23 0 0 0 .273-3.391 2.234 2.234 0 0 0-3.16 0 2.234 2.234 0 0 0 .366 3.456l.004.01a1.08 1.08 0 1 1-1.44 1.601l-.013-.006-.016-.026a1 1 0 0 1-.126-.183 2.233 2.233 0 0 0-3.355-.222 2.235 2.235 0 1 0 3.448 2.808l.02-.008a1.081 1.081 0 1 1 1.23 1.704v.003a2.23 2.23 0 0 0-.603 2.545 2.235 2.235 0 1 0 3.265-2.739l.01-.002v-.006a1.108 1.108 0 0 1-.147-1.696 1.11 1.11 0 0 1 1.695.155l.012.003a2.235 2.235 0 1 0 3.474-2.767 2.235 2.235 0 0 0-3.353.219 1.11 1.11 0 1 1-1.586-1.454zm-.021-1.812a1.285 1.285 0 0 1-1.778 1.188 1.286 1.286 0 1 1 1.778-1.188m3.378 5.916a1.285 1.285 0 1 0-1.189-1.777 1.286 1.286 0 0 0 1.189 1.777m-7.957-1.285a1.286 1.286 0 1 1-2.572 0 1.286 1.286 0 0 1 2.572 0m3.292 5.902a1.286 1.286 0 1 0 0-2.573 1.286 1.286 0 0 0 0 2.573m.95-10.533a.948.948 0 0 1-1.622.671.95.95 0 1 1 1.622-.67m-.95 10.196a.95.95 0 1 0-.001-1.899.95.95 0 0 0 .001 1.9m5.614-5.565a.95.95 0 0 1-1.313.876.948.948 0 1 1 1.313-.876m-10.193.948a.95.95 0 0 0 .877-1.312.949.949 0 1 0-.877 1.312" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="#1EAB89" d="M13.265 9.188a2.23 2.23 0 0 0 .272-3.391 2.234 2.234 0 0 0-3.16 0 2.234 2.234 0 0 0 .366 3.456l.004.01a1.08 1.08 0 1 1-1.44 1.601l-.012-.006-.016-.026a1 1 0 0 1-.126-.183 2.233 2.233 0 0 0-3.355-.222 2.235 2.235 0 1 0 3.447 2.808l.02-.008a1.082 1.082 0 1 1 1.23 1.704v.003a2.23 2.23 0 0 0-.118 3.27 2.235 2.235 0 1 0 2.78-3.464l.011-.002-.001-.006a1.109 1.109 0 1 1 1.549-1.541l.011.003a2.235 2.235 0 1 0 3.475-2.767 2.235 2.235 0 0 0-3.353.219 1.11 1.11 0 1 1-1.587-1.454zm-.022-1.812a1.285 1.285 0 0 1-1.778 1.188 1.286 1.286 0 1 1 1.778-1.188m3.378 5.916a1.285 1.285 0 1 0-.492-2.473 1.285 1.285 0 0 0 .492 2.473m-7.956-1.285a1.286 1.286 0 1 1-2.573 0 1.286 1.286 0 0 1 2.573 0m3.292 5.902a1.286 1.286 0 1 0 0-2.573 1.286 1.286 0 0 0 0 2.573m.95-10.533a.948.948 0 0 1-1.622.671.95.95 0 0 1 0-1.343.95.95 0 0 1 1.621.672m-.95 10.196a.95.95 0 1 0-.001-1.899.95.95 0 0 0 0 1.9m5.613-5.565a.95.95 0 0 1-1.312.876.95.95 0 1 1 1.312-.876m-10.192.948a.95.95 0 0 0 .877-1.312.949.949 0 1 0-.877 1.312" fillRule="evenodd" clipRule="evenodd"/>

        </>
      )}
    </BaseIcon>
));

IconWnxm.displayName = 'Wnxm';

export default IconWnxm;