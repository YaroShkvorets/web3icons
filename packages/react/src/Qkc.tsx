
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconQkc = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M18.437 6.896a.69.69 0 0 0-.754.218l-3.326 4.029c-.604-.741-1.213-1.406-1.821-2.147a.7.7 0 0 0-.485-.249c-.364-.025-.587.249-.608.266-.6.741-1.23 1.389-1.835 2.13L6.326 7.132c-.279-.258-.648-.326-.9-.18a.66.66 0 0 0-.279.334v9.454c.017.034.129.279.416.373.317.103.574-.077.6-.094L9.6 12.857c.66.802 1.32 1.517 1.98 2.319.047.03.201.128.411.12a.73.73 0 0 0 .373-.129l1.993-2.31 3.12 3.755c.227.454.711.63 1.029.48.282-.138.342-.502.351-.545v-9.09a.62.62 0 0 0-.42-.561M6.428 15V9L9 12.03zm5.67-1.02a.17.17 0 0 1-.107.052c-.077.008-.128-.048-.141-.052-.536-.651-1.029-1.307-1.564-1.958l1.508-1.95a.7.7 0 0 1 .214-.035c.073.005.129.022.172.035l1.534 1.92zM17.571 15 15 12.022 17.57 9z"/>

        </>
      ) : (
        <>
          
    <path fill="url(#QKC__a)" d="M18.438 6.896a.69.69 0 0 0-.755.218l-3.325 4.029c-.605-.741-1.213-1.406-1.822-2.147a.7.7 0 0 0-.484-.249c-.364-.025-.587.249-.609.266-.6.741-1.23 1.389-1.834 2.13L6.326 7.132c-.279-.258-.647-.326-.9-.18a.66.66 0 0 0-.279.334v9.454c.018.034.129.279.416.373.317.103.574-.077.6-.094L9.6 12.857c.66.802 1.32 1.517 1.98 2.319.047.03.202.128.412.12a.73.73 0 0 0 .373-.129l1.992-2.31 3.12 3.755c.228.454.712.63 1.029.48.283-.138.343-.502.352-.545v-9.09a.62.62 0 0 0-.42-.561M6.428 15V9L9 12.03zm5.67-1.02a.17.17 0 0 1-.106.052c-.077.008-.129-.048-.142-.052-.535-.651-1.028-1.307-1.564-1.958l1.509-1.95a.7.7 0 0 1 .214-.035c.073.005.128.022.171.035l1.535 1.92zM17.573 15 15 12.022 17.572 9z"/>
    <defs>
        <linearGradient id="QKC__a" x1="12.002" x2="12.002" y1="6.859" y2="17.145" gradientUnits="userSpaceOnUse">
            <stop stopColor="#39A3DB"/>
            <stop offset="1" stopColor="#1B3586"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconQkc.displayName = 'Qkc';

export default IconQkc;