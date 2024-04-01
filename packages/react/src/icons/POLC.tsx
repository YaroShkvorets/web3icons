import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconPOLC = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="#C000A3"
        d="M11.786 18.429c3.432 0 6.214-2.687 6.214-6s-2.782-6-6.214-6-6.215 2.686-6.215 6 2.783 6 6.215 6"
      />
      <path
        fill="#630655"
        d="M16.714 10.286c1.657 0 3-1.247 3-2.786s-1.343-2.786-3-2.786-3 1.248-3 2.786 1.343 2.786 3 2.786"
      />
      <path
        fill="#F0F1F6"
        d="M9.857 10.286h-2.9a.29.29 0 0 0-.299.285c0 .157.134.285.299.285.2 0 .329.097.329.287v2.46c0 .084-.017.215-.13.256l-.023.008c-.189.068-.276.099-.276.276 0 .389.888.428 1.286.428.45 0 1.285-.118 1.285-.428 0-.184-.082-.214-.304-.284-.103-.032-.124-.172-.124-.257v-.745h.857a1.285 1.285 0 1 0 0-2.571M9 11.099c0-.095.08-.17.18-.17.374 0 .677.288.677.643 0 .354-.303.642-.678.642a.176.176 0 0 1-.18-.17zm7.706 1.122c.114 1.178-.94 2.226-2.356 2.34-1.416.115-2.656-.747-2.77-1.925-.115-1.178.94-2.225 2.356-2.34s2.655.747 2.77 1.925m-1.854-.035c.261.64.148 1.27-.252 1.405-.4.136-.935-.273-1.196-.913s-.148-1.27.252-1.406.935.274 1.196.914"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        fill="#F0F3FA"
        d="M14.743 6.66c0-.128.13-.231.257-.231h.857c.126 0 .277.103.277.23 0 .128-.102.2-.228.2h-.049v1.015c0 .146.033.273.177.273h.085c.08-.021.298-.077.3-.255.005-.248.295-.202.295-.018 0 .273-.116.752-.357.692-.086-.021-.106-.075-.303-.128h-1.058a.15.15 0 0 1-.149-.15c0-.083.071-.141.153-.141V6.858h-.03c-.125 0-.227-.071-.227-.198m4 1.181c-.125-.063-.24.026-.282.079-.032.04-.075.114-.372.114-.372 0-.607-.664-.592-.803.014-.138.052-.362.325-.374s.357.136.478.374c.096.191.241.185.302.157.096-.05.282-.187.252-.347-.039-.199-.112-.468-.211-.5-.08-.027-.225.02-.287.047-.111-.118-.375-.155-.493-.16-.645 0-1.149.496-1.149 1.024s.493 1.12 1.149 1.12c.525 0 .805-.226.88-.339.051-.104.123-.33 0-.392"
      />
    </BaseIcon>
  ),
)

IconPOLC.displayName = 'POLC'
