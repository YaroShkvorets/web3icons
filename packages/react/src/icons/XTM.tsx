import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconXTM = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="url(#XTM__a)"
        d="M5.571 14.306V8.914a1.29 1.29 0 0 1 .686-1.136l5.207-2.73a1.29 1.29 0 0 1 1.269.043L17.81 8.19a1.29 1.29 0 0 1 .617 1.101v5.028a1.28 1.28 0 0 1-.565 1.062l-5.045 3.425a1.285 1.285 0 0 1-1.427.008l-5.237-3.428a1.29 1.29 0 0 1-.583-1.08"
      />
      <path
        fill="#fff"
        d="M13.714 18.214c-.441.296-1.157.887-1.714.857-.527-.025-1.072-.583-1.5-.857.043-.064.214-.214.214-.643V12l-1.221.643c-.369.141-1.187.3-1.543-.215-.437-.642-.214-1.5.223-1.714.257-.128 1.101-.716 1.825-1.217.27-.189.515-.364.716-.497.219-.142.857-.429 1.286-.429.428 0 1.067.287 1.286.429l2.357 1.5c.364.214.964.857.437 1.714s-1.543.502-1.98.214L13.286 12v5.571c0 .429.321.549.428.643"
      />
      <path
        fill="url(#XTM__b)"
        d="M6 14.314v-2.786a.214.214 0 1 0-.429 0v2.786a1.29 1.29 0 0 0 .583 1.076l3.587 2.357a.216.216 0 0 0 .232-.364l-3.587-2.349a.86.86 0 0 1-.386-.72"
      />
      <path
        fill="#ED83B3"
        d="M18.244 14.126a.215.215 0 0 0 .214-.215V9.103a1.29 1.29 0 0 0-.617-1.097l-5.083-3.103a1.29 1.29 0 0 0-1.264-.043L7.83 6.784a.214.214 0 1 0 .197.377l3.664-1.92a.86.86 0 0 1 .845.026l5.082 3.103a.86.86 0 0 1 .412.728v4.813c0 .12.094.215.214.215"
      />
      <path
        fill="#FFD6E9"
        d="M13.307 5.477a.213.213 0 0 1 .296-.073l3.445 2.113a.214.214 0 0 1-.222.364L13.38 5.768a.214.214 0 0 1-.073-.29"
      />
      <path
        fill="#FC81B8"
        d="M10.234 9.098a.215.215 0 0 0 .283.03L10.706 9c.214-.142.857-.429 1.285-.429.429 0 1.063.287 1.286.429l2.353 1.5c.364.214.964.857.437 1.714l-.039.06c-.077.116-.06.287.065.356a.19.19 0 0 0 .24-.043l.098-.15c.343-.548.33-1.071.146-1.496a1.84 1.84 0 0 0-.724-.805l-2.345-1.5a3.6 3.6 0 0 0-1.517-.493 3.6 3.6 0 0 0-1.521.497l-.009.004-.188.133a.215.215 0 0 0-.043.321z"
      />
      <path
        fill="#FDD2E0"
        d="M13.14 8.67a.21.21 0 0 1 .22-.1.2.2 0 0 1 .08.031l1.706 1.076a.215.215 0 0 1-.228.364l-1.714-1.075a.215.215 0 0 1-.064-.3z"
      />
      <defs>
        <linearGradient
          id="XTM__a"
          x1="15.181"
          x2="8.655"
          y1="5.831"
          y2="17.389"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F2445B" />
          <stop offset="1" stopColor="#A023B1" />
        </linearGradient>
        <linearGradient
          id="XTM__b"
          x1="4.344"
          x2="14.916"
          y1="6.846"
          y2="20.524"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7A1981" />
          <stop offset=".63" stopColor="#BD27C1" />
          <stop offset="1" stopColor="#600A67" />
        </linearGradient>
      </defs>
    </BaseIcon>
  ),
)

IconXTM.displayName = 'XTM'
