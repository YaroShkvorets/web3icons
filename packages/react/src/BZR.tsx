import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconBZR = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M9.857 9.129c-.287-.15-1.482-.433-2.048-.558 0 .172-.017.553-.095.742.682.107 1.638.407 2.032.544.038-.154.111-.514.111-.728m0 5.742c-.287.15-1.482.433-2.048.557 0-.17-.017-.552-.095-.74.682-.108 1.638-.408 2.032-.545.038.154.111.514.111.728m6.858-7.44-3.022-1.86a1.33 1.33 0 0 1-.407.669c.939.583 2.867 1.774 3.06 1.903.043-.279.266-.592.369-.712m0 9.138-3.022 1.86a1.33 1.33 0 0 0-.407-.67c.939-.582 2.867-1.773 3.06-1.902.043.279.266.591.369.712M11.572 10.7c0-.171.064-.634.098-.844 3.185 1.663 4.976 3.544 5.473 4.277-.159.043-.514.193-.669.437-1.85-2.297-4.457-3.651-4.902-3.87"
          />
          <path
            fill="currentColor"
            d="M11.572 13.727c0 .172.064.634.098.844 3.185-1.662 4.976-3.544 5.473-4.277-.159-.043-.514-.193-.669-.437-1.85 2.297-4.457 3.652-4.902 3.87m.643-7.298a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143m0 13.285a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143m-6.001-3.428a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143m0-6.429a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143m11.572 0a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143m0 6.429a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143"
          />
          <path
            fill="currentColor"
            d="M9.857 11.991c0 2.636.635 4.822.948 5.58.17-.111.57-.334.767-.334-.707-1.881-.857-4.268-.857-5.237s.15-3.356.857-5.237c-.197 0-.592-.223-.767-.335-.313.76-.943 2.932-.948 5.563"
          />
        </>
      ) : (
        <>
          <path
            fill="#000"
            d="M9.857 9.129c-.287-.15-1.483-.433-2.049-.557 0 .171-.017.552-.094.741.681.107 1.637.407 2.031.544.039-.154.112-.514.112-.728m0 5.743c-.287.15-1.483.432-2.049.557 0-.172-.017-.553-.094-.742.681-.107 1.637-.407 2.031-.544.039.154.112.514.112.728m6.857-7.44-3.022-1.86a1.33 1.33 0 0 1-.407.668c.939.583 2.867 1.774 3.06 1.903.043-.279.266-.591.369-.711m0 9.137-3.022 1.86a1.33 1.33 0 0 0-.407-.669c.939-.583 2.867-1.774 3.06-1.903.043.279.266.592.369.712m-5.143-5.867c0-.172.064-.635.099-.845 3.184 1.663 4.975 3.545 5.472 4.277-.158.043-.514.193-.668.438-1.852-2.298-4.457-3.652-4.903-3.87"
          />
          <path
            fill="#000"
            d="M11.571 13.727c0 .172.065.634.099.845 3.184-1.663 4.976-3.545 5.473-4.278-.159-.043-.515-.193-.669-.437-1.851 2.297-4.457 3.652-4.903 3.87"
          />
          <path
            fill="#3AB16D"
            d="M12.214 6.429a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143m0 13.285a1.071 1.071 0 1 0 0-2.142 1.071 1.071 0 0 0 0 2.142m-6-3.428a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143m0-6.429a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143m11.571 0a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143m0 6.429a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143"
          />
          <path
            fill="#000"
            d="M9.857 11.991c0 2.636.635 4.822.948 5.58.171-.111.57-.334.767-.334-.707-1.881-.857-4.268-.857-5.237s.15-3.356.857-5.237c-.197 0-.592-.223-.767-.335-.313.759-.943 2.932-.948 5.563"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconBZR.displayName = 'BZR'