import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconHERO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.64 4.38a.73.73 0 0 1 .72 0l6.155 3.514c.214.12.342.339.342.57v7.072c0 .231-.128.45-.342.57L12.36 19.62a.72.72 0 0 1-.72 0l-6.154-3.515a.66.66 0 0 1-.343-.57v-7.07c0-.232.129-.45.343-.57zm.022.424a.69.69 0 0 1 .677 0l5.768 3.317a.62.62 0 0 1 .322.54v6.682c0 .223-.12.428-.322.54l-3.184 1.83-.129-3.935.643-1.684.013-.034.043-.202c.09-.368.197-.793.189-1.2 0-.27-.065-1.071-.095-1.414l-.004-.09-.039-.086a2.3 2.3 0 0 0-.355-.57 1.22 1.22 0 0 0-1.076-.45 1.12 1.12 0 0 0-.909-.428c-.098 0-.188.004-.274.021a1.2 1.2 0 0 0-.78-.454 1.25 1.25 0 0 0-.711.077 1.3 1.3 0 0 0-.566-.21h-.06c-.394 0-.707.107-.93.339a1.3 1.3 0 0 0-.304.587 2.4 2.4 0 0 0-.755.227c-.424.227-.54.677-.578.921a2.7 2.7 0 0 0-.009.768l.219 1.774 1.616 2.031-.36 4.376-3.819-2.194a.63.63 0 0 1-.321-.54V8.657c0-.223.12-.429.321-.54L11.657 4.8zM9.99 18.235l.266.15.077-.874 1.187-2.387 2.803 2.43h.009l.017.489.287-.172-.141-4.144.66-1.714.004-.018.051-.214c.086-.368.184-.754.18-1.127a34 34 0 0 0-.094-1.397l-.004-.043-.018-.043a2 2 0 0 0-.312-.497c-.137-.158-.369-.36-.673-.36-.12 0-.232.017-.322.047a.82.82 0 0 0-.763-.471c-.158 0-.3.034-.415.077a.85.85 0 0 0-.686-.51.88.88 0 0 0-.698.15.93.93 0 0 0-.562-.274h-.03c-.673 0-.9.351-.986.9-.248.017-.578.068-.857.214-.296.159-.394.484-.433.72a2.5 2.5 0 0 0-.008.686l.214 1.705 1.629 2.058-.378 4.62zm1.466-3.145-1.11 2.233.321-3.703.802 1.448zm-1.539-3.677.643 1.971-1.521-1.92zm-.051-.065-.849.052-.128-1.029.008-.034.017-.009zm-.63-2.357L8.867 10.2l-.043-.377c-.042-.292-.042-.892.245-1.102l.171.266zm.073-.025-.18-.279c.27-.12.562-.18.857-.171l.368.672zm1.453-.746-.673.248.085-.552c0-.018.013-.043.03-.073zm.051-.609c-.309 0-.48.086-.566.18l.575.386.017.017.471-.171c-.073-.3-.356-.399-.497-.412m.583.472h-.004l-.056 2.027.013.034.69-1.058-.643-.999zm.656-.347c-.377-.06-.553.137-.613.287l1.123.235a.58.58 0 0 0-.515-.522zm1.041 1.414-.416-.793a.8.8 0 0 1 .527-.184c.37 0 .55.278.553.574l-.664.407zm.814-.416-.034.022-.008.017.27.42.8-.047c-.128-.24-.372-.553-.646-.553-.206 0-.326.064-.386.128zm.892 1.024a9 9 0 0 0 .184-.522l.017.042c.026.309.073.926.086 1.247l-.287-.77zm.261.892.03.081a8 8 0 0 1-.15.892l-.043.008-1.543-.45zm-1.753 1.911 1.616-.848-.051.223-.673 1.744-.892-1.114zm.87 1.204.026.03.12 3.588-1.251-3.12zM12.54 8.324l-1.05-.219.592.917zm-1.063 1.752.605-.93.3.416zm-.128.228.098.085.438.455a5 5 0 0 0-.63-.287l.094-.258zm-.077-.386.03-1.196-.309.356.279.836zm-.45-.579c-.159.19-.373.325-.613.386l.287.531zm-.416.9a.58.58 0 0 1-.227-.432zm.141.078.407-1.136.313.938v.06c-.034.065-.171.206-.445.206l-.06-.004zm-.064.064.021.043.013-.022.609.797-2.044-.878zm.801-.112-.098.262a2 2 0 0 0-.244-.086.6.6 0 0 0 .342-.171zm.806.785.022.025.004-.017c.348.24.638.555.848.922L11.37 11.3zm.043-.078.094-.488c.103.137.296.3.588.3a.86.86 0 0 0 .548-.18l-.15.536-1.08-.172zm.039-.552-.103.514-.429-.45a.5.5 0 0 0 .154.026c.18 0 .305-.047.378-.09m-.035-.06a.66.66 0 0 1-.343.085.5.5 0 0 1-.287-.103l-.012-.008-.065-.069zm.069-.06-.81-.108.968-.544a9 9 0 0 1-.158.652m.043.085a.65.65 0 0 0 .566.33c.304 0 .488-.137.565-.223l-.013-.05-1.114-.07-.004.018zm1.093-.012-1.068-.065.018-.043q.087-.324.15-.655zm-1.218-1.29.438-.669c-.043.309-.103.686-.159 1.02l-.008.03zm-.617 5.905-.805-1.448 1.53-.026-.729 1.474zm-.844-1.517 1.521-.026-2.164-1.954.639 1.967zm3.471.236-.865-1.089-.206 1.573zm-.942-1.046-.866.823.668.686zm-.21 1.594-.69-.707-.742 1.509 2.709 2.353-1.252-3.12-.03.013zm1.761-2.528-1.47.771-.201-.454zm-1.53.814-.197-.45-.609 1.226.806-.772zm-.017-1.328-.193.698a3 3 0 0 0-.776-.857l.969.154zM12.03 11a6.3 6.3 0 0 0-1.285-.557.5.5 0 0 1-.13-.026l.644.836.013.009h.012l.746-.258zm3.009-.411-.274-.737a4 4 0 0 1-.258.527c-.145.231-.325.381-.522.411-.18.03-.365-.047-.536-.24l-.159.579zm-2.863 2.76-2.156-1.946 1.2-.073.956 2.015zm-2.22-2.006 1.166-.073-2.058-.883zm3.103.639.206-.759 1.487.437zm-.776 1.427.677-1.359-1.654-.703zm-1.899-3.103-1.362-.056.685-.471v.004c.103.004.245 0 .399-.038a.63.63 0 0 0 .278.561m2.65-1.119-.404-.767q-.076.55-.171 1.097zm-.537.386.566-.326.257 1.02zm.626-.36.617-.377a25 25 0 0 1-.321 1.513l-.005-.005-.287-1.127zm.694-.386a35 35 0 0 1-.3 1.423l.558-1.02-.258-.407zm-.291 1.552 1.213-.656c.068-.184.128-.364.175-.514l-.78.051-.608 1.115zM10.899 8.24l.42-.154-.013.501-.407-.342zm.141.673.236-.266-.163-.137a1.5 1.5 0 0 1-.073.403m-.231-.643v.009a.6.6 0 0 1 .128.094l.107.107a1.4 1.4 0 0 1-.128.566l-.472.159-.368-.665.733-.265zm.068.857c-.128.245-.334.39-.548.48a1.6 1.6 0 0 1-.536.112l.639-.442h.012l.43-.145zm3.099 1.595c-.159.025-.33-.043-.497-.24l1.221-.66a3 3 0 0 1-.257.522c-.137.223-.3.352-.471.378zm-3.63-1.466-1.05-.223-.364 1.2z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#62C6BA"
            d="M11.64 4.38a.73.73 0 0 1 .72 0l6.154 3.514c.214.12.343.339.343.57v7.072c0 .231-.129.45-.343.57L12.36 19.62a.72.72 0 0 1-.72 0l-6.155-3.515a.66.66 0 0 1-.342-.57v-7.07c0-.232.128-.45.342-.57zm.021.424a.69.69 0 0 1 .677 0l5.769 3.317a.62.62 0 0 1 .321.54v6.682c0 .223-.12.428-.321.54l-3.184 1.83-.129-3.935.643-1.684.013-.034.043-.202c.09-.368.197-.793.188-1.2 0-.27-.064-1.071-.094-1.414l-.004-.09-.039-.086a2.3 2.3 0 0 0-.356-.57 1.22 1.22 0 0 0-1.075-.45 1.12 1.12 0 0 0-.909-.428c-.099 0-.189.004-.274.021a1.2 1.2 0 0 0-.78-.454 1.25 1.25 0 0 0-.712.077 1.3 1.3 0 0 0-.565-.21h-.06c-.395 0-.708.107-.93.339a1.3 1.3 0 0 0-.305.587 2.4 2.4 0 0 0-.754.227c-.424.227-.54.677-.579.921a2.7 2.7 0 0 0-.008.768l.218 1.774 1.616 2.031-.36 4.376-3.818-2.194a.63.63 0 0 1-.322-.54V8.657c0-.223.12-.429.322-.54L11.657 4.8zM9.99 18.235l.265.15.078-.874 1.187-2.387 2.803 2.43h.008l.017.489.287-.172-.141-4.144.66-1.714.004-.018.052-.214c.085-.368.184-.754.18-1.127a34 34 0 0 0-.095-1.397l-.004-.043-.017-.043a2 2 0 0 0-.313-.497c-.137-.158-.368-.36-.673-.36-.12 0-.231.017-.321.047a.82.82 0 0 0-.763-.471c-.159 0-.3.034-.416.077a.85.85 0 0 0-.685-.51.88.88 0 0 0-.699.15.93.93 0 0 0-.561-.274h-.03c-.673 0-.9.351-.986.9-.249.017-.579.068-.857.214-.296.159-.395.484-.433.72a2.5 2.5 0 0 0-.009.686l.215 1.705 1.628 2.058-.377 4.62zm1.465-3.145-1.11 2.233.322-3.703.801 1.448zm-1.538-3.677.643 1.971-1.522-1.92zm-.052-.065-.848.052-.129-1.029.009-.034.017-.009zm-.63-2.357L8.867 10.2l-.043-.377c-.043-.292-.043-.892.244-1.102l.172.266zm.073-.025-.18-.279c.27-.12.562-.18.857-.171l.369.672zm1.453-.746-.673.248.086-.552c0-.018.013-.043.03-.073zm.052-.609c-.309 0-.48.086-.566.18l.574.386.017.017.472-.171c-.073-.3-.356-.399-.497-.412m.582.472h-.004l-.056 2.027.013.034.69-1.058-.643-.999zm.656-.347c-.377-.06-.553.137-.613.287l1.123.235a.58.58 0 0 0-.514-.522zm1.042 1.414-.416-.793a.8.8 0 0 1 .527-.184c.369 0 .549.278.553.574l-.664.407zm.814-.416-.034.022-.009.017.27.42.801-.047c-.128-.24-.372-.553-.647-.553-.205 0-.325.064-.385.128zm.891 1.024c.073-.188.137-.372.185-.522l.017.042c.025.309.073.926.085 1.247l-.287-.77zm.262.892.03.081a8 8 0 0 1-.15.892l-.043.008-1.543-.45zm-1.753 1.911 1.616-.848-.052.223-.673 1.744-.891-1.114zm.87 1.204.026.03.12 3.588-1.252-3.12zM12.54 8.324l-1.05-.219.591.917zm-1.063 1.752.604-.93.3.416zm-.129.228.099.085.437.455a5 5 0 0 0-.63-.287l.094-.258zm-.077-.386.03-1.196-.308.356.278.836zm-.45-.579c-.158.19-.373.325-.613.386l.287.531zm-.416.9a.58.58 0 0 1-.227-.432zm.142.078.407-1.136.313.938v.06c-.034.065-.172.206-.446.206l-.06-.004zm-.064.064.021.043.013-.022.608.797-2.044-.878zm.801-.112-.099.262a2 2 0 0 0-.244-.086.6.6 0 0 0 .343-.171zm.806.785.021.025.004-.017c.348.24.638.555.849.922L11.37 11.3zm.043-.078.094-.488c.103.137.296.3.587.3a.86.86 0 0 0 .549-.18l-.15.536-1.08-.172zm.038-.552-.103.514-.428-.45a.5.5 0 0 0 .154.026.74.74 0 0 0 .377-.09m-.034-.06a.66.66 0 0 1-.343.085.5.5 0 0 1-.287-.103l-.013-.008-.064-.069zm.068-.06-.81-.108.969-.544a9 9 0 0 1-.159.652m.043.085a.65.65 0 0 0 .566.33c.304 0 .489-.137.566-.223l-.013-.05-1.114-.07-.005.018zm1.093-.012-1.067-.065.017-.043q.087-.324.15-.655zm-1.217-1.29.437-.669a44 44 0 0 1-.158 1.02l-.009.03zm-.617 5.905-.806-1.448 1.53-.026-.728 1.474zm-.844-1.517 1.521-.026-2.164-1.954.638 1.967zm3.471.236-.866-1.089-.205 1.573zm-.943-1.046-.866.823.669.686zm-.21 1.594-.69-.707-.741 1.509 2.708 2.353-1.251-3.12-.03.013zm1.762-2.528-1.47.771-.202-.454zm-1.53.814-.198-.45-.608 1.226.806-.772zm-.018-1.328-.192.698a3 3 0 0 0-.776-.857l.968.154zM12.03 11a6.3 6.3 0 0 0-1.286-.557.5.5 0 0 1-.129-.026l.643.836.013.009h.013l.746-.258zm3.008-.411-.274-.737a4 4 0 0 1-.257.527c-.146.231-.326.381-.523.411-.18.03-.364-.047-.536-.24l-.158.579zm-2.863 2.76-2.155-1.946 1.2-.073.955 2.015zm-2.22-2.006 1.166-.073-2.057-.883zm3.103.639.206-.759 1.487.437zm-.775 1.427.677-1.359-1.655-.703zm-1.899-3.103-1.363-.056.686-.471v.004c.103.004.244 0 .398-.038a.63.63 0 0 0 .279.561m2.649-1.119-.403-.767q-.076.55-.172 1.097zm-.536.386.566-.326.257 1.02zm.626-.36.617-.377a25 25 0 0 1-.322 1.513l-.004-.005-.287-1.127zm.694-.386c-.082.412-.206 1.042-.3 1.423l.557-1.02-.257-.407zm-.292 1.552 1.213-.656c.069-.184.129-.364.176-.514l-.78.051-.609 1.115zM10.898 8.24l.42-.154-.013.501-.407-.342zm.142.673.235-.266-.162-.137a1.5 1.5 0 0 1-.073.403m-.232-.643v.009a.6.6 0 0 1 .129.094l.107.107a1.4 1.4 0 0 1-.129.566l-.471.159-.369-.665.733-.265zm.069.857c-.129.245-.334.39-.549.48a1.6 1.6 0 0 1-.535.112l.638-.442h.013l.429-.145zm3.098 1.595c-.158.025-.33-.043-.497-.24l1.222-.66a3 3 0 0 1-.257.522c-.138.223-.3.352-.472.378zm-3.63-1.466-1.05-.223-.364 1.2z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconHERO.displayName = 'HERO'