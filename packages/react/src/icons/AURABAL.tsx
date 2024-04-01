import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconAURABAL = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M18.78 8.623v-.017c0-.575-1.504-1.076-3.703-1.32.523.351.986.793 1.372 1.303l.085.017-.06.012a22.7 22.7 0 0 1-4.431.386c-1.757 0-3.326-.15-4.444-.386l-.03-.008h-.022l.073-.017a5.8 5.8 0 0 1 1.371-1.307c-2.185.244-3.69.745-3.69 1.32 0 .724 3.262 1.294 5.465 1.457.488.034 1.26.034 1.26.034.274.013.771 0 1.26-.034 2.211-.155 5.464-.725 5.494-1.44m-.643 3.047q-.24-.05-.48-.094a6 6 0 0 0-.248-1.14C19.586 10.79 21 11.357 21 12v.021c-.051 1.072-4.063 1.938-9 1.938-4.971 0-9-.88-9-1.96v-.02c.03-.64 1.466-1.2 3.669-1.556a6 6 0 0 0-.249 1.136q-.604.112-1.2.27c-.206.055-.39.115-.553.17a10 10 0 0 0 1.702.43c1.491.278 3.458.45 5.631.45 2.06.015 4.117-.169 6.141-.55q.721-.16 1.192-.33a10 10 0 0 0-1.192-.33zM7.003 15.107c-1.059.261-1.702.609-1.702.986v.021c.056.806 3.056 1.457 6.742 1.457s6.686-.651 6.737-1.457v-.021c0-.382-.643-.729-1.71-.986a6.4 6.4 0 0 1-.596.973l.065.013-.086.017h-.017c-1.115.231-2.662.381-4.393.381-1.732 0-3.279-.15-4.397-.377h-.022l-.004-.008c-.026 0-.051-.009-.073-.013l.052-.013a5.7 5.7 0 0 1-.596-.973"
      />
    </BaseIcon>
  ),
)

IconAURABAL.displayName = 'AURABAL'
