import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconCOMBO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.572 4.397a.86.86 0 0 1 .857 0l.175.103-.385.767h-.005a.43.43 0 0 0-.428 0h-.009l-.402-.754.2-.116zm-1.007.579.45.728-.853.489-.399-.759zM8.949 5.9l-.806.463.399.754.865-.492-.454-.729zm-1.62.926.454.729-.84.475-.39-.758.771-.446zm-1.586.909-.171.094a.86.86 0 0 0-.429.746V9h.952q.074-.205.197-.386zM13 5.713l.865.497.4-.759-.824-.471zm2.511 1.435-.887-.505.454-.729.832.476zm.759.433.75.429.433-.737-.729-.416-.454.729zM17.906 9a1.7 1.7 0 0 0-.189-.377l.549-.883.159.09a.86.86 0 0 1 .432.746V9zm-12.763.857v.857H6v-.857zm0 2.572v-.858H6v.857zm0 .857v.857H6v-.857zm0 2.143v-.43H6v.18a.44.44 0 0 0 .215.374l.02.013-.428.737-.231-.133a.86.86 0 0 1-.433-.746zm1.423 1.307.84.48.45-.729-.836-.471zm2.464 1.41-.878-.502.437-.737.891.514zm.75.428.832.476.445-.729-.835-.48zm1.796 1.029-.223-.129.489-.883q.156.015.313 0l.518.866-.248.146a.86.86 0 0 1-.85 0m1.856-.579.835-.476-.424-.745-.827.471zm2.46-1.405-.87.497-.403-.755.831-.471zm.758-.433.832-.476-.467-.72-.772.441zm1.779-1.016-.176.103-.437-.737a.43.43 0 0 0 .189-.356V15h.857v.428a.86.86 0 0 1-.429.742zm.428-2.027H18v-.857h.857zM18 12.428h.857v-.857H18zm.857-1.714H18v-.857h.857zM7.942 9.343l-.926-.545-.343.575.926.54.343-.575zm1.881 1.028-.926-.535-.342.574.925.54.343-.574zm.934.579.926.54-.343.579-.925-.545zm5.259-1.612.926-.54.343.575-.926.54zm-.951.498-.926.54.343.574.921-.54-.343-.574zm-2.786 1.654.921-.54.343.574-.926.545-.343-.58zm.15.51h-.857v.857h.857zm0 1.706h-.857v.865h.857zm-.857 2.58v-.858h.857v.858zm0 .857V18h.857v-.857z"
          />
        </>
      ) : (
        <>
          <path
            fill="#fff"
            d="M11.571 4.397a.86.86 0 0 1 .857 0l.176.103-.386.767h-.004a.43.43 0 0 0-.429 0h-.008l-.403-.754.201-.116zm-1.007.579.45.728-.853.489-.398-.759zM8.948 5.9l-.805.463.398.754.866-.492-.454-.729zm-1.62.926.455.729-.84.475-.39-.758.771-.446zm-1.585.909-.172.094a.86.86 0 0 0-.428.746V9h.951q.074-.205.197-.386zm7.255-2.023.866.497.399-.759-.823-.471zm2.512 1.435-.887-.505.454-.729.831.476zm.758.433.75.429.433-.737-.728-.416-.455.729zM17.905 9a1.7 1.7 0 0 0-.188-.377l.548-.883.159.09a.86.86 0 0 1 .433.746V9zm-12.762.857v.857H6v-.857zm0 2.572v-.858H6v.857zm0 .857v.857H6v-.857zm0 2.143v-.43H6v.18a.44.44 0 0 0 .214.374l.021.013-.428.737-.232-.133a.86.86 0 0 1-.432-.746zm1.422 1.307.84.48.45-.729-.835-.471zm2.465 1.41-.879-.502.437-.737.892.514zm.75.428.831.476.446-.729-.836-.48zm1.795 1.029-.222-.129.488-.883q.156.015.313 0l.519.866-.249.146a.86.86 0 0 1-.849 0m1.856-.579.836-.476-.424-.745-.828.471zm2.46-1.405-.87.497-.403-.755.832-.471zm.759-.433.831-.476-.467-.72-.771.441zm1.778-1.016-.175.103-.438-.737a.43.43 0 0 0 .189-.356V15h.857v.428a.86.86 0 0 1-.428.742zm.429-2.027H18v-.857h.857zM18 12.428h.857v-.857H18zm.857-1.714H18v-.857h.857zM7.94 9.343l-.926-.545-.342.575.925.54.343-.575zm1.882 1.028-.926-.535-.343.574.926.54.343-.574zm.934.579.926.54-.343.579-.926-.545zm5.258-1.612.926-.54.343.575-.926.54zm-.951.498-.926.54.343.574.922-.54-.343-.574zm-2.786 1.654.922-.54.343.574-.926.545-.343-.58zm.15.51h-.857v.857h.857zm0 1.706h-.857v.865h.857zm-.857 2.58v-.858h.857v.858zm0 .857V18h.857v-.857z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconCOMBO.displayName = 'COMBO'