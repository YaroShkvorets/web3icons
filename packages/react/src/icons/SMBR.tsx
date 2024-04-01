import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconSMBR = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.571 8.138v-.814a.464.464 0 0 0-.458-.467h-3.39a.5.5 0 0 0-.364.154l-2.94 2.97a.46.46 0 0 0-.133.326v2.246c0 .317.257.574.565.574a.6.6 0 0 0 .442-.189L6 12.227c.128-.129.3-.227.484-.227h2.692c.557 0 .84.711.445 1.114L6.19 16.585c-.36.36-.108.986.402.986h1.055a.8.8 0 0 0 .565-.236l3.227-3.265a.46.46 0 0 0 .133-.326v-2.858c0-.318-.257-.6-.574-.6H8.17a.48.48 0 0 0-.326.158l-.802.699a.54.54 0 0 1-.385.162c-.305 0-.656-.248-.656-.552v-1.41c0-.322.36-.772.677-.772h4.436c.257 0 .458-.18.458-.433m.857 0v-.814c0-.257.206-.467.46-.467h3.39c.136 0 .27.056.363.154l2.94 2.97a.46.46 0 0 1 .133.326v2.246a.573.573 0 0 1-.566.574.6.6 0 0 1-.44-.189L18 12.227c-.129-.129-.3-.227-.484-.227h-2.692c-.557 0-.84.711-.445 1.114l3.432 3.471c.36.36.108.986-.402.986h-1.055a.8.8 0 0 1-.565-.236L12.56 14.07a.46.46 0 0 1-.133-.326v-2.858c0-.318.258-.6.575-.6h2.828c.125 0 .24.072.326.158l.802.699a.54.54 0 0 0 .385.162c.304 0 .656-.248.656-.552v-1.41c0-.322-.36-.772-.677-.772h-4.436c-.257 0-.459-.18-.459-.433"
          />
        </>
      ) : (
        <>
          <path
            fill="#A3FE00"
            d="M11.572 8.138v-.814a.464.464 0 0 0-.459-.467h-3.39a.5.5 0 0 0-.364.154l-2.94 2.97a.46.46 0 0 0-.133.326v2.246c0 .317.257.574.566.574a.6.6 0 0 0 .441-.189L6 12.227c.129-.129.3-.227.485-.227h2.691c.557 0 .84.711.446 1.114l-3.433 3.471c-.36.36-.107.986.403.986h1.054a.8.8 0 0 0 .566-.236l3.227-3.265a.46.46 0 0 0 .133-.326v-2.858c0-.318-.257-.6-.574-.6H8.169a.48.48 0 0 0-.326.158l-.801.699a.54.54 0 0 1-.386.162c-.304 0-.656-.248-.656-.552v-1.41c0-.322.36-.772.678-.772h4.435c.257 0 .459-.18.459-.433m.857 0v-.814c0-.257.206-.467.459-.467h3.39c.137 0 .27.056.364.154l2.94 2.97a.46.46 0 0 1 .133.326v2.246a.573.573 0 0 1-.566.574.6.6 0 0 1-.441-.189L18 12.227c-.128-.129-.3-.227-.484-.227h-2.691c-.557 0-.84.711-.446 1.114l3.433 3.471c.36.36.107.986-.403.986h-1.054a.8.8 0 0 1-.566-.236l-3.227-3.265a.46.46 0 0 1-.133-.326v-2.858c0-.318.257-.6.574-.6h2.829c.124 0 .24.072.326.158l.801.699a.54.54 0 0 0 .386.162c.304 0 .655-.248.655-.552v-1.41c0-.322-.36-.772-.677-.772h-4.435c-.258 0-.459-.18-.459-.433"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconSMBR.displayName = 'SMBR'