
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconIgu = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M12 19.286a7.285 7.285 0 0 0 7.213-8.327l-1.65 1.337a5.572 5.572 0 0 1-11.13-.086l-.133-.004-1.513-1.239A7.286 7.286 0 0 0 12 19.286m3.977-11.572 2.541 1.029A7.286 7.286 0 0 0 7.547 6.236l2.897.33.172.038a5.58 5.58 0 0 1 4.8.995l.561.12zm-6.223 6.258C8.4 12.009 6.15 10.192 5.19 9.523c-.064-.056-.193-.214-.18-.39 0-1.307 1.868-1.864 3.064-1.864.686 0 1.157.073 1.564.133.3.042.562.085.849.085.33 0 .78-.073 1.234-.141.472-.073.947-.146 1.307-.146.566 0 .995.253 1.136.377-.814.086-1.714.36-2.066.489.33.111.613.39.716.514 2.083-.724 3.6-.133 4.093.253a8.2 8.2 0 0 0-3.257.703l.514.471c1.436-.411 2.301-.047 2.554.189-.578.043-1.371.236-1.697.33.592.309 1.783.926 1.817.926.219 2.301-1.093 2.751-2.575 2.764-1.397.013-1.625.647-1.826 1.213l-.034.107c-.172.471-.215 1.47-.215 1.911-.24-1.041-.75-3.347-.84-4.2-.098-.942.283-1.024.622-1.097l.128-.03c.36-.098.759-.48.6-.985a2.06 2.06 0 0 0-.54-.84c.622 1.212.283 1.328-.342 1.538-.108.039-.228.077-.348.129-.827.334-.617 1.744-.565 2.091.042.274.385 1.693.557 2.366-1.26.244-1.65-.673-1.83-1.085-.142-.33-.523-1.285-.694-1.718.274.073.66.266.814.351zM8.336 7.8a2.9 2.9 0 0 0-.999.099.86.86 0 0 0 .866.664c.334 0 .608-.283.703-.429l-.57-.338z"/>
        </>
      ) : (
        <>
          <path fill="url(#IGU__a)" d="M12 19.286a7.285 7.285 0 0 0 7.213-8.327l-1.65 1.337a5.572 5.572 0 0 1-11.13-.086l-.133-.004-1.513-1.239A7.286 7.286 0 0 0 12 19.286m3.977-11.572 2.542 1.029A7.286 7.286 0 0 0 7.547 6.236l2.898.33.171.038a5.58 5.58 0 0 1 4.8.995l.561.12zm-6.222 6.258C8.4 12.009 6.15 10.192 5.19 9.523c-.064-.056-.193-.214-.18-.39 0-1.307 1.869-1.864 3.065-1.864.685 0 1.157.073 1.564.133.3.042.561.085.849.085.33 0 .78-.073 1.234-.141.471-.073.947-.146 1.307-.146.566 0 .994.253 1.136.377-.815.086-1.715.36-2.066.489.33.111.613.39.716.514 2.083-.724 3.6-.133 4.092.253a8.2 8.2 0 0 0-3.257.703l.515.471c1.435-.411 2.301-.047 2.554.189-.579.043-1.372.236-1.697.33.591.309 1.783.926 1.817.926.219 2.301-1.093 2.751-2.576 2.764-1.397.013-1.624.647-1.825 1.213l-.035.107c-.171.471-.214 1.47-.214 1.911-.24-1.041-.75-3.347-.84-4.2-.099-.942.283-1.024.621-1.097l.129-.03c.36-.098.758-.48.6-.985a2.06 2.06 0 0 0-.54-.84c.621 1.212.283 1.328-.343 1.538-.107.039-.227.077-.347.129-.827.334-.617 1.744-.566 2.091.043.274.386 1.693.557 2.366-1.26.244-1.65-.673-1.83-1.085-.141-.33-.523-1.285-.694-1.718.274.073.66.266.814.351zM8.336 7.8a2.9 2.9 0 0 0-.999.099.86.86 0 0 0 .866.664c.334 0 .609-.283.703-.429l-.57-.338z"/><defs><linearGradient id="IGU__a" x1="5.692" x2="19.852" y1="8.22" y2="13.629" gradientUnits="userSpaceOnUse"><stop stopColor="#00B1D3"/><stop offset="1" stopColor="#00EED4"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconIgu.displayName = 'Igu';

export default IconIgu;