import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconIMPT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="#89EFDB"
        d="M12.386 4.5 3.6 10.264a1.32 1.32 0 0 0-.385 1.83l3.18 4.873a1.32 1.32 0 0 0 1.821.382l8.786-5.765a1.32 1.32 0 0 0 .381-1.83l-3.18-4.868a1.32 1.32 0 0 0-1.821-.382z"
      />
      <path
        fill="#A57FE2"
        d="m15.969 6.806-10.2 2.503a1.316 1.316 0 0 0-.964 1.594l1.38 5.657a1.32 1.32 0 0 0 1.594.969l10.196-2.503a1.315 1.315 0 0 0 .964-1.599l-1.38-5.657a1.32 1.32 0 0 0-1.586-.964z"
      />
      <path
        fill="#886EE2"
        d="M15.532 6.922 5.777 9.317a1.316 1.316 0 0 0-.968 1.599l1.38 5.653.06.184.146.223a1.32 1.32 0 0 0 1.388.557l.12-.026c.112-.034.214-.085.317-.15l8.786-5.764a1.32 1.32 0 0 0 .381-1.826z"
      />
      <path
        fill="#9EED57"
        d="M17.987 9H7.65c-.707 0-1.221.686-1.221 1.363v5.88c0 .711.51 1.333 1.221 1.333h10.337a1.27 1.27 0 0 0 .918-.39c.246-.252.383-.59.381-.943v-5.871a1.37 1.37 0 0 0-.382-.943 1.3 1.3 0 0 0-.42-.292c-.154-.068-.325-.133-.497-.133z"
      />
      <path
        fill="#77E03B"
        d="M19.243 13.393 18.19 9H7.69c-.72 0-1.26.673-1.26 1.363v5.88c0 .849.741 1.491 1.564 1.29l10.282-2.529a1.33 1.33 0 0 0 .972-1.611z"
      />
      <path
        fill="#fff"
        d="M15.857 12.857v-.428h-.428V12H15v.429h-.287v.428H15v.716c0 .446.227.621.857.557v-.416c-.257.013-.428.039-.428-.141v-.716zm-2.048-.428a.6.6 0 0 0-.523.252v-.252h-.429v2.1c0 .115-.162.205-.278.18a.19.19 0 0 1-.15-.18v-1.393c0-.429-.253-.707-.647-.707-.236 0-.412.094-.519.248a.52.52 0 0 0-.471-.248c-.215 0-.408.085-.506.231v-.231h-.429v1.714h.429v-.913c0-.257.154-.386.347-.386s.292.12.292.326v.973h.45v-.913c0-.257.124-.386.321-.386.188 0 .304.12.304.326v1.35c0 .317.249.609.57.63.356.03.716-.257.716-.617v-.54s.069.15.428.15c.468 0 .858-.296.858-.806 0-.514-.3-.908-.763-.908m-.086 1.285c-.27 0-.437-.141-.437-.428s.167-.433.441-.433q.414.001.416.433.001.43-.416.428zM9.43 12.43H9v1.714h.429zm-.27-.853a.27.27 0 0 0-.197.171.287.287 0 0 0 .257.395.28.28 0 0 0 .274-.283c0-.172-.154-.322-.334-.283"
      />
    </BaseIcon>
  ),
)

IconIMPT.displayName = 'IMPT'
