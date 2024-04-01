import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconVCF = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="#0094D3"
        d="M5.786 10.286h12.428A4 4 0 0 0 17.786 9H6.214a4 4 0 0 0-.428 1.286"
      />
      <path
        fill="#FBDE13"
        d="M16.714 10.286v5.571c.772-1.478 1.363-3.57 1.363-5.074a3 3 0 0 0-.043-.497z"
      />
      <path
        fill="#E1221C"
        d="M15.428 17.786q.73-1.019 1.286-2.143v-5.357h-1.286z"
      />
      <path
        fill="#FBDE13"
        d="M14.143 19.072c.445-.429.844-.703 1.285-1.286v-7.5h-1.285zM8.57 17.597c.455.592.832 1.115 1.286 1.539v-8.85H8.571z"
      />
      <path
        fill="#E1221C"
        d="M7.286 15.497q.556 1.102 1.285 2.1v-7.311H7.286z"
      />
      <path
        fill="#FBDE13"
        d="M5.936 11.212c.094 1.418.625 2.922 1.35 4.285v-5.211H5.97q-.013.116-.034.231zm5.207-.926v9.857c.287.094.625.429.857.429.274 0 .514-.3.857-.429v-9.857z"
      />
      <path
        fill="#E1221C"
        d="M12.857 10.286v9.857c.411-.201.81-.617 1.286-1.071v-8.786zm-1.714 0H9.857l-.03 8.85c.489.454.9.827 1.316 1.007z"
      />
      <path
        fill="#A43316"
        d="M12 15.857a2.143 2.143 0 1 0 0-4.286 2.143 2.143 0 0 0 0 4.286"
      />
      <path
        fill="#D48E09"
        d="M12 15.716a2.001 2.001 0 1 0 0-4.003 2.001 2.001 0 0 0 0 4.003"
      />
      <path
        fill="#A43316"
        d="M13.5 13.886v-.043c0-.827-.279-1.337-.609-1.5a.2.2 0 0 1 .056-.064.53.53 0 0 1 .317-.116 2 2 0 0 0-.111-.086.7.7 0 0 0-.262.129.3.3 0 0 0-.085.098.5.5 0 0 0-.155-.025c-.265 0-.42.274-.497.407l-.03.047c-.043.064-.18.099-.394.099-.227 0-.309-.043-.309-.189 0-.231.317-.763.759-.921a2 2 0 0 0-.18-.009h-.022c-.394.231-.651.699-.651.93 0 .021 0 .043.009.06-.078.043-.236.124-.36.124-.292 0-.515-.223-.579-.308l-.06.081c.107.129.347.322.639.322.137 0 .3-.078.39-.129.081.129.265.133.364.133.218 0 .36-.034.441-.103a.86.86 0 0 1 .335.664c0 .227 0 .386-.065.425a3.66 3.66 0 0 1-2.443-.258v.103a3.67 3.67 0 0 0 2.473.245c.039.077.103.278.103.441 0 .236-.09.544-.518.681a1.34 1.34 0 0 0-.558-.167.7.7 0 0 0-.372.12c-.09-.077-.365-.295-.566-.295-.073 0-.172.025-.227.038l.055.086a.6.6 0 0 1 .172-.03c.163 0 .411.193.506.274l-.005.026c0 .068.077.253.189.394l.171.06.005-.008a.9.9 0 0 1-.27-.442c.021-.034.175-.128.342-.128s.408.098.502.15c.004.111.206.342.416.471l.132-.034h-.008c.968-.48.964-1.402.96-1.757zm-1.063 1.693a1 1 0 0 1-.343-.369c.472-.158.574-.501.574-.767a1.3 1.3 0 0 0-.124-.506c.052-.085.056-.24.056-.45 0-.407-.27-.66-.373-.741l.009-.013c.068-.116.205-.36.415-.36.365 0 .755.514.755 1.47v.043c0 .343.008 1.247-.969 1.693"
      />
      <path
        fill="#000"
        d="M14.074 3.823c-.201 0-.416.57-.973.57-.321 0-.505-.24-.527-.257 0-.112.154-.343.154-.557 0-.056-.021-.15-.201-.15a.36.36 0 0 0-.291.171c-.013.022-.082-.034-.236-.034s-.223.056-.236.03c-.017-.026-.116-.167-.291-.167-.176 0-.197.094-.197.15 0 .214.15.445.15.557-.022.017-.206.257-.528.257-.557 0-.771-.57-.972-.57-.618 0-4.355 2.589-4.355 6.686 0 4.975 4.603 10.063 6.429 10.063s6.428-5.096 6.428-10.063c0-4.097-3.737-6.686-4.354-6.686m.15.296c.107 0 1.376 1.427 1.29 2.563-.163-1.458-1.316-2.473-1.316-2.542 0-.017.013-.021.026-.021m-4.388 0c.008 0 .021.004.021.021 0 .069-1.153 1.084-1.316 2.542-.085-1.136 1.183-2.563 1.295-2.563M12 20.259c-1.826 0-6.077-5.229-6.077-9.476 0-1.586 1.585-3.66 2.485-3.66.086 0 .198.026.198.026s.355-.3.857-.3c.943 0 1.435.908 1.435 1.238 0 .172-.06.137-.06.232 0 .055.078.133.129.133.069 0 .291-.215.339-.313.312 0 .608.351.694.625.086-.274.381-.625.698-.625.043.098.266.313.335.313.051 0 .128-.078.128-.129 0-.099-.06-.069-.06-.236 0-.33.493-1.238 1.436-1.238.501 0 .857.3.857.3s.112-.026.197-.026c.9 0 2.486 2.074 2.486 3.66 0 4.247-4.251 9.476-6.077 9.476"
      />
      <path
        fill="#F4F2F2"
        d="m6.634 9.24.356.964h.227l.356-.964h-.24s-.215.699-.223.699-.214-.699-.214-.699zm1.624.96h.249l-.386-.96H7.89l-.386.964h.24l.082-.214h.355l.077.214zm-.368-.377.12-.321.111.321zm6.081.377h.249l-.386-.96h-.231l-.382.964h.24l.077-.214h.36l.078.214zm-.368-.377.12-.321.115.321zM8.627 9.24v.964h.754V10h-.514v-.76zm.956 0v.964h.75v-.201H9.8v-.219h.459v-.167H9.8v-.184h.532V9.24zm6.814 0v.964h.219v-.42h.458v-.167h-.458v-.184h.527V9.24h-.75zm-5.799 0v.964h.202v-.63l.411.63h.236V9.24h-.227v.656l-.39-.656zm1.753.343h.249c0-.201-.232-.343-.454-.343-.318 0-.48.283-.48.51 0 .279.18.454.462.454.335 0 .472-.188.472-.351h-.257c0 .056-.026.197-.193.197-.172 0-.257-.146-.257-.3 0-.158.085-.334.257-.334.15 0 .201.077.201.171zm3.082 0h.253c0-.201-.232-.343-.455-.343-.317 0-.48.283-.48.51 0 .279.18.454.463.454.334 0 .472-.188.472-.351h-.258c0 .056-.025.197-.192.197-.172 0-.258-.146-.258-.3 0-.158.086-.334.258-.334.145 0 .197.077.197.171zm-2.366-.343h-.231v.964h.231zm3.081.737h-.244v.227h.244zm1.23 0h-.244v.227h.244z"
      />
    </BaseIcon>
  ),
)

IconVCF.displayName = 'VCF'
