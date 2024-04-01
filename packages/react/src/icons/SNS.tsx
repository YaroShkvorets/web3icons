import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconSNS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="m12.094 4.757-.115-.043-.116.052c-1.389.621-2.276 1.418-2.803 2.28-1.371.055-2.601.677-3.334 1.251l-.099.077-.013.125c-.15 1.5.103 2.665.592 3.544-.643 1.209-.712 2.576-.575 3.493l.018.12.102.073c1.222.874 2.349 1.242 3.356 1.268.514.853 1.393 1.637 2.76 2.233l.124.056.12-.056c1.342-.634 2.22-1.414 2.756-2.246 1.016-.008 2.156-.364 3.382-1.255l.107-.082.013-.128c.115-1.475-.129-2.615-.587-3.493.5-.879.762-2.032.6-3.532l-.018-.133-.111-.077c-1.239-.844-2.37-1.208-3.373-1.243a6 6 0 0 0-2.786-2.28zM6.193 8.683A5.55 5.55 0 0 1 8.75 7.654a4.3 4.3 0 0 0-.274.973 4.8 4.8 0 0 0-.017 1.346 4.5 4.5 0 0 0-1.886 1.483 5.56 5.56 0 0 1-.385-2.773zm.004 6.643a5.44 5.44 0 0 1 .386-2.709c.214.274.454.515.711.72.382.3.793.536 1.209.707-.052.446-.052.917.026 1.393.055.317.141.639.27.952-.772-.086-1.646-.403-2.602-1.063m1.47-2.443c.296.236.613.42.943.566a5.7 5.7 0 0 1 .527-1.419 5.6 5.6 0 0 1-.57-1.461 3.9 3.9 0 0 0-1.676 1.465c.213.32.473.607.772.849zm1.444 2.46a4.3 4.3 0 0 1-.034-1.097 6 6 0 0 0 1.517.223c.236.377.566.788.978 1.165a4.3 4.3 0 0 1-.97.527c-.367.14-.755.223-1.148.245a3.8 3.8 0 0 1-.343-1.063m1.908-1.312c.223.386.565.832 1.011 1.226.442-.403.776-.857.99-1.247l.086-.154h.175a5.2 5.2 0 0 0 1.595-.262 4.8 4.8 0 0 0-.566-1.414l-.086-.141.078-.146a6.2 6.2 0 0 0 .574-1.556 4.7 4.7 0 0 0-1.564-.236l-.168.005-.085-.142a6.3 6.3 0 0 0-1.072-1.268c-.395.35-.729.764-.985 1.226l-.086.145-.163.005a6.3 6.3 0 0 0-1.629.278c.129.6.365 1.132.605 1.521l.094.15-.086.15a5.1 5.1 0 0 0-.57 1.488 5.2 5.2 0 0 0 1.586.223l.176-.005.085.154zm-.206 2.675a4.8 4.8 0 0 0 1.226-.686c.36.27.771.506 1.23.677.287.107.591.189.912.236a6 6 0 0 1-2.202 1.706 5.4 5.4 0 0 1-2.186-1.672 4.6 4.6 0 0 0 1.02-.257zm2.661-.557c.34.128.697.207 1.059.235a3.8 3.8 0 0 0 .433-2.203 5.7 5.7 0 0 1-1.513.258 5.7 5.7 0 0 1-.956 1.191c.296.206.622.386.977.519m4.312-.815a5.4 5.4 0 0 1-2.593 1.046 4.7 4.7 0 0 0 .347-2.408 5 5 0 0 0 1.196-.716q.361-.29.664-.665c.3.708.463 1.603.386 2.743m.017-6.642c.111 1.148-.056 2.048-.386 2.75a4.5 4.5 0 0 0-.741-.788 4.8 4.8 0 0 0-1.14-.694 4.5 4.5 0 0 0-.33-2.306c.771.09 1.637.403 2.597 1.037m-1.509 2.417a4.2 4.2 0 0 0-.861-.549c-.12.505-.299.994-.531 1.457.21.369.407.836.53 1.359.322-.15.64-.339.927-.574.281-.227.53-.493.737-.79a3.8 3.8 0 0 0-.802-.903m-1.757-3.48a3.84 3.84 0 0 1 .429 2.121 5.4 5.4 0 0 0-1.5-.236 6.7 6.7 0 0 0-1.007-1.187 3.9 3.9 0 0 1 2.078-.698m-1.371-.317c-.42.154-.817.366-1.179.63a4.53 4.53 0 0 0-2.228-.875 5.64 5.64 0 0 1 2.228-1.714c.703.3 1.577.874 2.199 1.714a4.6 4.6 0 0 0-1.02.244m-3.755.317a3.9 3.9 0 0 1 2.105.698 5.3 5.3 0 0 0-.956 1.17 7 7 0 0 0-1.53.266q-.051-.525.03-1.046c.06-.36.171-.728.351-1.088m.446 4.363 1.475-.742.71-1.393.712 1.393 1.389.742-1.393.758-.711 1.393-.707-1.393z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </BaseIcon>
  ),
)

IconSNS.displayName = 'SNS'
