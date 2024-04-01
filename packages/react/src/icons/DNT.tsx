import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconDNT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="#98F7D2"
        d="M18.773 10.628a4.6 4.6 0 0 0-.507-1.361c-.492-.841-1.566-2.065-2.909-3.028 0 0-1.014-.673-1.491-.902-1.745-.826-3.699-.994-5.37.52-2.803 2.554-4.205 6.116-2.803 9.664.03.077.805 2.248 5.459 3.7 2.043.062 3.236-.06 4.549-.84 1.715-1.01 2.714-2.844 3.072-4.71.105-.566.12-2.478 0-3.043"
      />
      <path
        fill="#AFF3F9"
        d="M13.247 5.624v3.361l-3.59.23-1.417 1.687-.558 2.575L9.2 15.881l1.917.844h2.604l2.131-.415V6.62s-1.506-1.208-2.49-1.498"
      />
      <path
        fill="#2F3D86"
        d="M17.848 14.053c-.537-.03-.238-.902-.477-1.896-.284-1.101.134-1.866.686-1.835.26.042.506.147.716.306a4.6 4.6 0 0 0-.507-1.361c-.492-.841-1.495-2.065-2.838-3.028v9.112c0 .401-.405.823-.78.91a.91.91 0 0 1-1.02-.513 3.47 3.47 0 0 1-1.77.538c-1.928.053-3.719-1.363-3.716-3.46.003-2.095 1.685-3.677 3.612-3.682.626-.001.99.096 1.531.418v-3.54a.9.9 0 0 1 .097-.398.9.9 0 0 1 .245-.32c-1.745-.826-3.46-.961-5.13.552-2.804 2.555-4.206 6.117-2.804 9.665.03.077.06.153.09.214a.8.8 0 0 1 .163-.23c.73-.764 1.536.796 3.251 1.698 1.089.566 1.716 1.316 1.955 2.019 1.595.2 3.236-.061 4.549-.841 1.715-1.01 2.714-2.844 3.072-4.71-.255.23-.582.364-.925.382m-5.845-7.248c.403-.015.776.474.79.704.016.229-.342.137-.73.275-.433.153-.746.015-.76-.215-.016-.229.281-.749.7-.764"
      />
      <path
        fill="#2F3D86"
        d="M11.133 13.99c.868.468 1.916.284 2.11-.766.105-.61.045-1.56-.524-1.857-1.885-1.022-3.471 1.602-1.586 2.623"
      />
    </BaseIcon>
  ),
)

IconDNT.displayName = 'DNT'
