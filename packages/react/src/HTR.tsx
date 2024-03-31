import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconHTR = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M5.143 12c0-3.76 3.097-6.857 6.857-6.857 3.758 0 6.857 3.098 6.857 6.857 0 3.758-3.098 6.857-6.857 6.857S5.143 15.76 5.143 12M12 4.286a7.714 7.714 0 1 0 0 15.428 7.714 7.714 0 0 0 0-15.428m1.286 5.571c-1.089.039-2.015.369-2.572 1.286V6.857H9.428v6.429h-.857v1.285H12v-1.285h-.857v-.583c0-.814.81-1.714 1.646-1.736 1.135-.03 1.692.694 1.782 1.736v4.011h1.286v-4.457c0-1.543-1.286-2.4-2.571-2.4M8.57 15.43v1.285H12V15.43z"
          />
        </>
      ) : (
        <>
          <path
            fill="#fff"
            d="M5.143 12c0-3.759 3.099-6.857 6.857-6.857S18.858 8.24 18.858 12c0 3.758-3.099 6.857-6.858 6.857S5.143 15.76 5.143 12M12 4.286a7.714 7.714 0 1 0 0 15.428 7.714 7.714 0 0 0 0-15.428m1.286 5.571c-1.088.039-2.014.369-2.571 1.286V6.857H9.429v6.429h-.857v1.285H12v-1.285h-.857v-.583c0-.814.81-1.714 1.646-1.736 1.136-.03 1.693.694 1.783 1.736v4.011h1.286v-4.457c0-1.543-1.286-2.4-2.572-2.4M8.572 15.43v1.285H12V15.43z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconHTR.displayName = 'HTR'