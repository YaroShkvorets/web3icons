import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconDXP = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="#5FADFF"
        d="M4.902 10.513a2.1 2.1 0 0 0 0 2.974l.965.964h12.266l.964-.964a2.1 2.1 0 0 0 0-2.974l-1.024-1.024H5.927l-1.029 1.028z"
      />
      <path
        fill="#2B56FE"
        d="M11.85 19.71a2.1 2.1 0 0 1-1.338-.613l-4.641-4.646h12.266l-4.65 4.646a2.1 2.1 0 0 1-1.337.617h-.3z"
      />
      <path
        fill="#3B82FF"
        d="M4.474 12.87c.104.23.25.439.428.617l2.529 2.529q.121.11.236.231a2.1 2.1 0 0 0 3.06 0c.334-.36.754-.685 1.243-.685.488 0 .908.325 1.242.685a2.1 2.1 0 0 0 3.06 0 3 3 0 0 1 .498-.433l2.327-2.327c.193-.193.343-.411.441-.647a2.04 2.04 0 0 0-.771.523c-.343.356-.759.681-1.247.681-.493 0-.909-.325-1.243-.685a2.1 2.1 0 0 0-3.06 0c-.339.36-.759.685-1.243.685-.493 0-.913-.325-1.247-.685a2.1 2.1 0 0 0-3.06 0c-.339.36-.755.685-1.243.685-.493 0-.909-.325-1.243-.685-.2-.21-.44-.376-.707-.489"
      />
      <path
        fill="#B1E1FF"
        d="m18.073 9.489 1.028 1.028q.226.226.369.497a2.1 2.1 0 0 1-.707-.492c-.335-.356-.755-.686-1.243-.686-.493 0-.909.33-1.243.685a2.1 2.1 0 0 1-3.06 0c-.339-.355-.755-.685-1.243-.685-.493 0-.913.33-1.247.685a2.1 2.1 0 0 1-3.06 0c-.335-.355-.755-.685-1.243-.685-.493 0-.909.33-1.243.685-.18.19-.394.343-.634.46a2.2 2.2 0 0 1 .355-.468l1.025-1.024 4.586-4.586a2.1 2.1 0 0 1 2.974 0l2.438 2.434z"
      />
    </BaseIcon>
  ),
)

IconDXP.displayName = 'DXP'