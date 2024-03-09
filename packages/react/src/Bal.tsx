
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBal = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M14.946 13.009c2.556.378 4.34 1.232 4.34 2.227 0 1.344-3.262 2.434-7.286 2.434s-7.286-1.09-7.286-2.434c0-.995 1.784-1.85 4.34-2.228.879.179 1.881.28 2.946.28 1.038 0 2.017-.096 2.88-.266zm-1.102-4.003c2.315.258 3.985.987 3.985 1.848 0 1.076-2.61 1.947-5.829 1.947s-5.828-.872-5.828-1.947c0-.86 1.669-1.59 3.984-1.848.567.093 1.19.144 1.844.144.63 0 1.233-.048 1.784-.135zM12 8.76c2.414 0 4.372-.654 4.372-1.46 0-.807-1.958-1.461-4.372-1.461s-4.371.654-4.371 1.46c0 .807 1.957 1.461 4.371 1.461"/>
        </>
      ) : (
        <>
          <g clipPath="url(#BAL__a)"><path fill="#21222C" d="M0 0h24v24H0z"/><path fill="#fff" d="M14.946 13.009c2.556.378 4.34 1.232 4.34 2.227 0 1.344-3.262 2.434-7.286 2.434s-7.286-1.09-7.286-2.434c0-.995 1.784-1.85 4.34-2.228.879.179 1.881.28 2.946.28 1.038 0 2.017-.096 2.88-.266zm-1.102-4.003c2.315.258 3.985.987 3.985 1.848 0 1.076-2.61 1.947-5.829 1.947s-5.828-.872-5.828-1.947c0-.86 1.669-1.59 3.984-1.848.567.093 1.19.144 1.844.144.63 0 1.233-.048 1.784-.135zM12 8.76c2.414 0 4.372-.654 4.372-1.46 0-.807-1.958-1.461-4.372-1.461s-4.371.654-4.371 1.46c0 .807 1.957 1.461 4.371 1.461"/></g><defs><clipPath id="BAL__a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
        </>
      )}
    </BaseIcon>
));

IconBal.displayName = 'Bal';

export default IconBal;
