import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconMIMATIC = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M9.763 8.31c.874-.043 1.341.064 2.019.63q.219.179.265.544.002.045-.008.09a.2.2 0 0 1-.043.078.15.15 0 0 1-.064.042.13.13 0 0 1-.078 0A6 6 0 0 0 9.82 9.37c-.643.013-.75-1.029-.056-1.059m-.184 1.864h-.01v-.004a.013.013 0 0 1-.008-.013c.008-.133.115-.257.295-.343.18-.085.429-.128.677-.115h.039c.249.013.489.073.66.171.171.103.27.236.261.369l.002.006q0 .004-.002.007l-.006.001-.006-.001z"
          />
          <path
            fill="currentColor"
            d="M16.457 13.941a1.29 1.29 0 0 0 1.029.784c.077-.124-.013-.24-.065-.355-.343-.789-.75-1.74-.364-2.567q.03-.065.086-.026.284.192.6.184a.11.11 0 0 0 .077-.188 2.66 2.66 0 0 1-.716-1.153c-.081-.287-.094-.626-.107-.973-.026-.703-.056-1.44-.651-1.834-.36-.245-.557-.759-.699-1.157-.844-2.392-3.326-3.236-5.691-2.589-1.972.54-3.695 2.949-3.84 4.92-.026.394.625.596.398 1.033-.043.094-.094.184-.141.27-.223.407-.403.746-.369 1.341.103.583.472 1.093.532 1.676q.05.52-.035 1.093c-.274 1.877.652 4.071 1.835 5.486q.128.151.128-.043l.009-.63a.86.86 0 0 1 .043-.506q.026-.059.06 0c.233.44.59.803 1.028 1.041a4.54 4.54 0 0 0 3.167.21c.043-.042.043-.072.009-.094a2.04 2.04 0 0 1-.801-.887l-.138-.326q-.019-.056.039-.043l.171.056c.45.133.913.274 1.355.064a5 5 0 0 1-.986-1.701 1.44 1.44 0 0 1 .321-1.342c.228-.274.909-1.44 1.252-1.46q.204-.015.287.218c.429 1.268 1.157 2.592 2.229 3.428.458.287 1.19.446 1.435-.214.176-.476-.098-.973-.381-1.359a.073.073 0 0 0-.129.03c-.038.24-.253.849-.566.858-.9.017-.56-2.688-.475-3.236.013-.086.034-.086.068-.009zm-1.65-6.257c.201-2.571-2.417-3.428-4.513-2.931q-.603.14-1.277.625c-.073.052-.159.172-.249.369q-.028.058.03.077a.2.2 0 0 0 .138-.004l.497.008c.043 0 .064.022.073.065.004.034-.009.077-.048.128a1.55 1.55 0 0 1-.75.172c-.11-.005-.317.205-.158.274q.016.008.034.009h.806l.827.008c.047 0 .069.026.056.073a.5.5 0 0 1-.086.154q-.578.206-1.457.193c-.112 0-.189.064-.227.202q.137.152.608.132a30 30 0 0 0 1.817-.128c.086-.004.386-.03.386.111a.6.6 0 0 1-.043.172c.018.013.026.03.035.043q.097.142-.172.265c-.613.275-1.607.275-2.271.215-.227-.018-.322.205-.455.368-.085.943.022 1.727-.428 2.623-.159.309-.193.6-.172.956.022.265.215.351.46.33q.59-.045 1.285-.026.057 0 .167-.12a2.5 2.5 0 0 0-.54-.244c-.167-.052-.249-.18-.129-.343-.051-.069-.047-.185.052-.202q.932-.168 1.517.468c.339.368.557.835.664 1.392.086.459.202.896.322 1.333.055.193.137.686.458.484.784-.488 1.406-1.418 1.706-2.297q.231-.677.36-1.2c.163-.668-.712-.921-.656-1.478a6.6 6.6 0 0 1 .21-1.166c.142-.531.652-.891 1.123-1.106zm-4.2 6.626a.83.83 0 0 1-.921.355q-.15-.03-.343-.334c-.099-.154-.206-.501-.42-.535a.8.8 0 0 0-.386.034c-.317.111-.154.698-.591.758-.142.022-.21-.214-.215-.321a1.2 1.2 0 0 1 .099-.832.18.18 0 0 1 .094-.09c.553-.248 1.329-.214 1.972-.162a.52.52 0 0 1 .342.15c.28.283.403.612.37.977"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#FF6B6B"
            d="M9.763 8.31c.874-.043 1.341.064 2.018.63q.22.179.266.544c0 .03 0 .06-.009.09a.2.2 0 0 1-.043.078.15.15 0 0 1-.064.042.13.13 0 0 1-.077 0 6 6 0 0 0-2.036-.325c-.643.013-.75-1.029-.055-1.059m-.185 1.864H9.57v-.004a.013.013 0 0 1-.009-.013c.009-.133.116-.257.296-.343.18-.085.428-.128.677-.115h.038c.25.013.49.073.66.171.172.103.27.236.262.369a.01.01 0 0 1 0 .013l-.006.001-.007-.001z"
          />
          <path
            fill="#FF6B6B"
            d="M16.457 13.941a1.29 1.29 0 0 0 1.029.784c.077-.124-.013-.24-.065-.355-.343-.789-.75-1.74-.364-2.567q.03-.065.086-.026.284.192.6.184a.11.11 0 0 0 .077-.188 2.66 2.66 0 0 1-.716-1.153c-.081-.287-.094-.626-.107-.973-.026-.703-.056-1.44-.651-1.834-.36-.245-.557-.759-.699-1.157-.844-2.392-3.326-3.236-5.691-2.589-1.972.54-3.695 2.949-3.84 4.92-.026.394.625.596.398 1.033-.043.094-.094.184-.141.27-.223.407-.403.746-.369 1.341.103.583.472 1.093.532 1.676q.05.52-.035 1.093c-.274 1.877.652 4.071 1.835 5.486q.128.151.128-.043l.009-.63a.86.86 0 0 1 .043-.506q.026-.059.06 0c.233.44.59.803 1.028 1.041a4.54 4.54 0 0 0 3.167.21c.043-.042.043-.072.009-.094a2.04 2.04 0 0 1-.801-.887l-.138-.326q-.019-.056.039-.043l.171.056c.45.133.913.274 1.355.064a5 5 0 0 1-.986-1.701 1.44 1.44 0 0 1 .321-1.342c.228-.274.909-1.44 1.252-1.46q.204-.015.287.218c.429 1.268 1.157 2.592 2.229 3.428.458.287 1.19.446 1.435-.214.176-.476-.098-.973-.381-1.359a.073.073 0 0 0-.129.03c-.038.24-.253.849-.566.858-.9.017-.56-2.688-.475-3.236.013-.086.034-.086.068-.009zm-1.65-6.257c.201-2.571-2.417-3.428-4.513-2.931q-.603.14-1.277.625c-.073.052-.159.172-.249.369q-.028.058.03.077a.2.2 0 0 0 .138-.004l.497.008c.043 0 .064.022.073.065.004.034-.009.077-.048.128a1.55 1.55 0 0 1-.75.172c-.11-.005-.317.205-.158.274q.016.008.034.009h.806l.827.008c.047 0 .069.026.056.073a.5.5 0 0 1-.086.154q-.578.206-1.457.193c-.112 0-.189.064-.227.202q.137.152.608.132a30 30 0 0 0 1.817-.128c.086-.004.386-.03.386.111a.6.6 0 0 1-.043.172c.018.013.026.03.035.043q.097.142-.172.265c-.613.275-1.607.275-2.271.215-.227-.018-.322.205-.455.368-.085.943.022 1.727-.428 2.623-.159.309-.193.6-.172.956.022.265.215.351.46.33q.59-.045 1.285-.026.057 0 .167-.12a2.5 2.5 0 0 0-.54-.244c-.167-.052-.249-.18-.129-.343-.051-.069-.047-.185.052-.202q.932-.168 1.517.468c.339.368.557.835.664 1.392.086.459.202.896.322 1.333.055.193.137.686.458.484.784-.488 1.406-1.418 1.706-2.297q.231-.677.36-1.2c.163-.668-.712-.921-.656-1.478a6.6 6.6 0 0 1 .21-1.166c.142-.531.652-.891 1.123-1.106zm-4.2 6.626a.83.83 0 0 1-.921.355q-.15-.03-.343-.334c-.099-.154-.206-.501-.42-.535a.8.8 0 0 0-.386.034c-.317.111-.154.698-.591.758-.142.022-.21-.214-.215-.321a1.2 1.2 0 0 1 .099-.832.18.18 0 0 1 .094-.09c.553-.248 1.329-.214 1.972-.162a.52.52 0 0 1 .342.15c.28.283.403.612.37.977"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconMIMATIC.displayName = 'MIMATIC'