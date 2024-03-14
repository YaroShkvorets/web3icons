
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconMchc = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M19.286 12a7.285 7.285 0 1 1-14.57 0 7.285 7.285 0 0 1 14.57 0m-13.8-1.641 1.705.158c.013 1.012.236 3.03 1.016 3.043.784.017 1.012-1.873 1.029-2.846h5.627c.017.973.244 2.863 1.029 2.846.78-.013 1.002-2.031 1.015-3.043l1.706-.158c.403 1.662.116 3.12-.077 3.643-1.937 1.885-4.012.805-4.843-.21-.626-.772-1.329-.978-1.641-.986-.322.008-1.02.214-1.65.986-.828 1.02-2.902 2.095-4.84.21a6.9 6.9 0 0 1-.076-3.643M8.58 6.184a7.2 7.2 0 0 0 .111 2.902c.048.163.232.471.588.39.445-.099.377-.609.295-1.025-.085-.415-.085-1.59 0-2.75-.252.093-.801.325-.994.483m6.806 2.902c.317-1.166.206-2.422.116-2.902-.193-.158-.746-.385-.995-.484.082 1.162.082 2.336 0 2.751-.085.416-.154.926.292 1.03.355.076.54-.232.587-.395M7.354 7.14c-.218.21-.707.72-.908 1.08-.043.566 0 1.684.467 1.607.587-.094.544-.574.398-1.286-.02-.45.005-.814.026-1.084q.015-.194.017-.317m10.282 1.08c-.202-.36-.69-.87-.909-1.08 0 .082.005.184.017.317.018.27.043.635.026 1.084-.146.712-.193 1.192.399 1.286.471.077.505-1.041.467-1.607m-6.514-2.936a8.7 8.7 0 0 1 1.8 0c.184 1.5.278 4.513-.828 4.556-1.242.047-1.114-3.017-.977-4.556z" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="url(#MCHC__a)" d="M19.285 12a7.286 7.286 0 1 1-14.57 0 7.286 7.286 0 0 1 14.57 0m-13.8-1.641 1.706.158c.013 1.012.236 3.03 1.016 3.043.784.017 1.011-1.873 1.028-2.846h5.627c.018.973.245 2.863 1.029 2.846.78-.013 1.003-2.031 1.016-3.043l1.705-.158c.403 1.662.116 3.12-.077 3.643-1.937 1.885-4.011.805-4.843-.21-.625-.772-1.328-.978-1.641-.986-.321.008-1.02.214-1.65.986-.827 1.02-2.901 2.095-4.839.21a6.9 6.9 0 0 1-.077-3.643M8.58 6.184a7.2 7.2 0 0 0 .111 2.902c.047.163.231.471.587.39.446-.099.377-.609.296-1.025-.086-.415-.086-1.59 0-2.75-.253.093-.802.325-.994.483m6.805 2.902c.317-1.166.206-2.422.116-2.902-.193-.158-.746-.385-.994-.484.081 1.162.081 2.336 0 2.751-.086.416-.155.926.291 1.03.356.076.54-.232.587-.395M7.354 7.14c-.219.21-.707.72-.909 1.08-.043.566 0 1.684.467 1.607.588-.094.545-.574.399-1.286-.021-.45.004-.814.026-1.084.008-.128.017-.236.017-.317m10.281 1.08c-.201-.36-.69-.87-.908-1.08 0 .082.004.184.017.317.017.27.043.635.026 1.084-.146.712-.193 1.192.398 1.286.472.077.506-1.041.467-1.607m-6.514-2.936a8.7 8.7 0 0 1 1.8 0c.184 1.5.279 4.513-.827 4.556-1.243.047-1.114-3.017-.977-4.556z" fillRule="evenodd" clipRule="evenodd"/><defs><linearGradient id="MCHC__a" x1="6.724" x2="17.087" y1="7.376" y2="17.079" gradientUnits="userSpaceOnUse"><stop stopColor="#E122FC"/><stop offset="1" stopColor="#26C5E2"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconMchc.displayName = 'Mchc';

export default IconMchc;