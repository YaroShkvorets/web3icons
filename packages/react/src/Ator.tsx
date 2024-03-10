
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAtor = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M12 16.714a4.714 4.714 0 1 0 0-9.428 4.714 4.714 0 0 0 0 9.428m0 2.143a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714" fillRule="evenodd" clipRule="evenodd"/><path fill="currentColor" d="M15.995 14.507a.7.7 0 0 0 .29.064l.292.009c.836.043 2.07.098 2.259-2.01q.02-.282.021-.57h-2.142a4.7 4.7 0 0 1-.72 2.507m-10.51-.364c.288.257.725.428 1.372.428.429 0 .797-.043 1.119-.115A4.7 4.7 0 0 1 7.286 12H5.143c0 .75.12 1.47.343 2.143"/><path fill="currentColor" d="M15.377 13.744c1.316.746 3.206.703 3.416-.793a6.858 6.858 0 1 0-13.586 0c.21 1.496 2.1 1.543 3.416.793a6.83 6.83 0 0 1 6.754 0"/><path fill="currentColor" d="M9 12C7.63 11.657 6.43 9.857 6 9v1.928l1.715 2.358z"/><path fill="currentColor" d="M16.02 11.593c.309.158.686-.056.626-.395a4.714 4.714 0 0 0-9.3.07c-.056.325.3.535.591.385A8.7 8.7 0 0 1 12 10.714c1.492 0 2.863.292 4.02.879m2.773 1.358c-.21 1.496-2.1 1.543-3.416.793a6.83 6.83 0 0 0-6.754 0c-1.316.746-3.206.703-3.416-.793a6.857 6.857 0 1 1 13.586 0"/>
        </>
      ) : (
        <>
          <g clipPath="url(#ATOR__a)"><path fill="url(#ATOR__b)" d="M0 0h24v24H0z"/><path fill="url(#ATOR__c)" d="M12 16.714a4.714 4.714 0 1 0 0-9.428 4.714 4.714 0 0 0 0 9.428m0 2.143a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714" fillRule="evenodd" clipRule="evenodd"/><path fill="#005257" d="M15.995 14.507a.7.7 0 0 0 .29.064l.292.009c.836.043 2.07.098 2.259-2.01q.02-.282.021-.57h-2.142a4.7 4.7 0 0 1-.72 2.507m-10.51-.364c.288.257.725.428 1.372.428.429 0 .797-.043 1.119-.115A4.7 4.7 0 0 1 7.286 12H5.143c0 .75.12 1.47.343 2.143"/><path fill="url(#ATOR__d)" d="M15.377 13.744c1.316.746 3.206.703 3.416-.793a6.858 6.858 0 1 0-13.586 0c.21 1.496 2.1 1.543 3.416.793a6.83 6.83 0 0 1 6.754 0"/><path fill="#005560" d="M9 12C7.63 11.657 6.43 9.857 6 9v1.928l1.715 2.358z"/><path fill="url(#ATOR__e)" d="M16.02 11.593c.309.158.686-.056.626-.395a4.714 4.714 0 0 0-9.3.07c-.056.325.3.535.591.385A8.7 8.7 0 0 1 12 10.714c1.492 0 2.863.292 4.02.879m2.773 1.358c-.21 1.496-2.1 1.543-3.416.793a6.83 6.83 0 0 0-6.754 0c-1.316.746-3.206.703-3.416-.793a6.857 6.857 0 1 1 13.586 0"/></g><defs><linearGradient id="ATOR__b" x1="4.466" x2="29.207" y1="4.161" y2="32.58" gradientUnits="userSpaceOnUse"><stop stopColor="#1A1E21"/><stop offset="1" stopColor="#06060A"/></linearGradient><linearGradient id="ATOR__c" x1="7.5" x2="16.5" y1="6.857" y2="17.357" gradientUnits="userSpaceOnUse"><stop stopColor="#025A63"/><stop offset=".56" stopColor="#026E7A"/><stop offset="1" stopColor="#065270"/></linearGradient><linearGradient id="ATOR__d" x1="8.572" x2="19.497" y1="7.066" y2="13.175" gradientUnits="userSpaceOnUse"><stop stopColor="#025962"/><stop offset="1" stopColor="#026D77"/></linearGradient><linearGradient id="ATOR__e" x1="7.072" x2="18.215" y1="7.5" y2="13.714" gradientUnits="userSpaceOnUse"><stop stopColor="#02BFC5"/><stop offset="1" stopColor="#01678D"/></linearGradient><clipPath id="ATOR__a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
        </>
      )}
    </BaseIcon>
));

IconAtor.displayName = 'Ator';

export default IconAtor;