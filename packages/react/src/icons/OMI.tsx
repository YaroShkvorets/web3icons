import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconOMI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.84 5.31a.858.858 0 1 0-1.697-.184 6.2 6.2 0 0 0-3.45 1.17.429.429 0 1 0-.613.51 6.13 6.13 0 0 0-1.911 4.988.9.9 0 0 0-.017.334l-.009.352a6.17 6.17 0 0 0 5.4 6.111 6.24 6.24 0 0 0 7.144-2.743l.099.009a.643.643 0 0 0 .463-1.089 6.1 6.1 0 0 0 .677-4.058.429.429 0 1 0-.21-.832 6.15 6.15 0 0 0-1.316-2.25.43.43 0 1 0-.613-.578 6.16 6.16 0 0 0-2.751-1.303 6 6 0 0 0-1.196-.437m3.887 1.873A6 6 0 0 0 14.512 6q.153.092.308.197a6.15 6.15 0 0 1 2.983 3.471c.76 1.37.97 2.977.587 4.496.473-1.09.61-2.295.395-3.463a.428.428 0 0 1-.193-.758 6 6 0 0 0-1.325-2.25.429.429 0 0 1-.54-.515zm-9.441-.326h-.052a6 6 0 0 0-1.945 4.286 6.14 6.14 0 0 1 1.628-2.979 6.14 6.14 0 0 1 4.329-2.614.9.9 0 0 1-.094-.287 6.03 6.03 0 0 0-3.438 1.195.43.43 0 0 1-.428.399m10.813 7.796a6.03 6.03 0 0 0-.09-4.226 6.14 6.14 0 0 1-1.389 5.229 6 6 0 0 1-.853 1.105 1 1 0 0 1 .082.249 6.2 6.2 0 0 0 1.555-1.282.643.643 0 0 1 .695-1.075m-.575 1.148a6.2 6.2 0 0 1-1.671 1.363.856.856 0 0 1-1.406.63 6.17 6.17 0 0 1-3.077.844 6.08 6.08 0 0 0 6.18-2.828zM12.75 5.558l.052-.115q.359.089.698.223l-.231-.022a7 7 0 0 0-.514-.086zm-1.157.343a.86.86 0 0 0 .986-.128q.336-.015.673.008c.527.116 1.028.3 1.495.54l.172.12a.64.64 0 0 0-.686.309 6.2 6.2 0 0 0-1.534-.279 6.2 6.2 0 0 0-2.653-.021 6 6 0 0 1 1.547-.553zm3.836 1.17a.7.7 0 0 0-.052-.257c.348.317.66.669.926 1.059a6 6 0 0 0-.9-.617.7.7 0 0 0 .026-.185m1.14 1.222a6 6 0 0 0-1.222-.909.63.63 0 0 1-.227.236 6.16 6.16 0 0 1 2.242 3.544 6 6 0 0 0-.793-2.871m-3.082-1.586c.232.043.463.103.686.171a1 1 0 0 0-.026.12 6 6 0 0 0-.66-.291m-.81-.094c.519.115 1.012.3 1.47.544a.643.643 0 0 0 .832.527 6 6 0 0 1 2.237 3.463.427.427 0 0 0-.502.424.428.428 0 0 0 .613.386 6.03 6.03 0 0 1-7.148 5.233 6 6 0 0 1-1.406-.956.428.428 0 0 0-.055-.782q-.096-.033-.195-.022a.43.43 0 0 0-.32.208 5.97 5.97 0 0 1-1.384-3.385.86.86 0 0 0-.017-.553c.017-.934.24-1.813.634-2.597A6.2 6.2 0 0 1 8.61 7.89a.428.428 0 1 0 .699-.472 6.07 6.07 0 0 1 3.368-.805m-3.493.715a6.15 6.15 0 0 1 2.679-.844 6.1 6.1 0 0 0-2.259.223 6 6 0 0 0-1.731 1.659c.214-.228.45-.433.699-.626v-.026a.428.428 0 0 1 .612-.386m-1.037 8.465a6.1 6.1 0 0 1-1.444-3.3.86.86 0 0 1-.424.317q.013.535.115 1.037a6.02 6.02 0 0 0 2.602 2.987c.214.09.437.172.664.232a6.2 6.2 0 0 1-1.046-.78h-.042a.43.43 0 0 1-.425-.493m9.33-3.956v.043a6.2 6.2 0 0 1-.484 3.056 5.94 5.94 0 0 0 .686-5.212 6 6 0 0 0-.763-1.071c.397.84.598 1.758.587 2.687a.43.43 0 0 1-.026.497m-6.141-6.154q.045.056.103.107a6.2 6.2 0 0 0-1.895.788 6.2 6.2 0 0 0-2.022 1.046 6 6 0 0 1 3.814-1.941m-4.354 4.14a6.2 6.2 0 0 0-.309 1.641.9.9 0 0 0-.231-.201 6 6 0 0 1 .54-1.44m.334-.793a6.2 6.2 0 0 0-1.003 2.173.9.9 0 0 0-.313-.06h-.008A5.9 5.9 0 0 1 7.02 8.254a6.05 6.05 0 0 1 2.1-1.38A6.2 6.2 0 0 0 7.316 9.03m-1.174 3.814-.043.009q.021.129.055.253l-.012-.258zm.36-3.986a6.1 6.1 0 0 0-.652 2.298.86.86 0 0 0-.471.257 5.95 5.95 0 0 1 1.123-2.559zm-.549 3.999a.86.86 0 0 1-.51-.206c.124.527.317 1.029.57 1.492a.43.43 0 0 1 .364.223q-.066-.238-.12-.48a6.3 6.3 0 0 1-.304-1.029m-.669-.279a6.2 6.2 0 0 0 .579 1.586.43.43 0 0 0-.261.249 6 6 0 0 1-.318-1.835M6 15a.4.4 0 0 1-.184-.043A6.08 6.08 0 0 0 9.772 18.3a6.24 6.24 0 0 1-2.94-2.794 7 7 0 0 1-.528-.635A.43.43 0 0 1 6 15m.429-.429a.4.4 0 0 1-.039.18l.227.3a6 6 0 0 1-.188-.48m9.621 1.655a5 5 0 0 1-.36.411 1 1 0 0 0-.056-.073q.215-.16.416-.338m-4.071 1.397c.763 0 1.496-.142 2.168-.399a.87.87 0 0 1 .12-.527 6.17 6.17 0 0 1-3.6.707q.238.091.489.163.405.057.823.056m4.53-2.053a6 6 0 0 1-.982.9.86.86 0 0 0-.608-.18 6.16 6.16 0 0 0 2.443-3.694 5.9 5.9 0 0 1-.857 2.974zm-2.216 2.057a.8.8 0 0 1-.12-.266 6.1 6.1 0 0 1-2.061.399c.73.089 1.47.045 2.185-.129zm-.163.184a6.03 6.03 0 0 1-3.557.643 6.12 6.12 0 0 1-3.381-2.597 6.2 6.2 0 0 0 1.74 1.101 6.1 6.1 0 0 0 2.194.746c.977.282 2.01.319 3.004.107m-3.998-.488-.095-.017.172.055zm-3.536-2.73a6.2 6.2 0 0 0 1.393 1.705 6 6 0 0 1-1.042-.874 6 6 0 0 1-.351-.831m9.12-7.646c.373.377.699.801.964 1.26.257.244.489.514.695.797a6 6 0 0 0-1.66-2.057"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#353535"
            d="M12.84 5.31a.858.858 0 1 0-1.697-.184 6.2 6.2 0 0 0-3.45 1.17.429.429 0 1 0-.613.51 6.13 6.13 0 0 0-1.911 4.988.9.9 0 0 0-.017.334l-.009.352a6.17 6.17 0 0 0 5.4 6.111 6.24 6.24 0 0 0 7.144-2.743l.099.009a.643.643 0 0 0 .463-1.089 6.1 6.1 0 0 0 .677-4.058.429.429 0 1 0-.21-.832 6.15 6.15 0 0 0-1.316-2.25.43.43 0 1 0-.613-.578 6.16 6.16 0 0 0-2.751-1.303 6 6 0 0 0-1.196-.437m3.887 1.873A6 6 0 0 0 14.512 6q.153.092.308.197a6.15 6.15 0 0 1 2.983 3.471c.76 1.37.97 2.977.587 4.496.473-1.09.61-2.295.395-3.463a.428.428 0 0 1-.193-.758 6 6 0 0 0-1.325-2.25.429.429 0 0 1-.54-.515zm-9.441-.326h-.052a6 6 0 0 0-1.945 4.286 6.14 6.14 0 0 1 1.628-2.979 6.14 6.14 0 0 1 4.329-2.614.9.9 0 0 1-.094-.287 6.03 6.03 0 0 0-3.438 1.195.43.43 0 0 1-.428.399m10.813 7.796a6.03 6.03 0 0 0-.09-4.226 6.14 6.14 0 0 1-1.389 5.229 6 6 0 0 1-.853 1.105 1 1 0 0 1 .082.249 6.2 6.2 0 0 0 1.555-1.282.643.643 0 0 1 .695-1.075m-.575 1.148a6.2 6.2 0 0 1-1.671 1.363.856.856 0 0 1-1.406.63 6.17 6.17 0 0 1-3.077.844 6.08 6.08 0 0 0 6.18-2.828zM12.75 5.558l.052-.115q.359.089.698.223l-.231-.022a7 7 0 0 0-.514-.086zm-1.157.343a.86.86 0 0 0 .986-.128q.336-.015.673.008c.527.116 1.028.3 1.495.54l.172.12a.64.64 0 0 0-.686.309 6.2 6.2 0 0 0-1.534-.279 6.2 6.2 0 0 0-2.653-.021 6 6 0 0 1 1.547-.553zm3.836 1.17a.7.7 0 0 0-.052-.257c.348.317.66.669.926 1.059a6 6 0 0 0-.9-.617.7.7 0 0 0 .026-.185m1.14 1.222a6 6 0 0 0-1.222-.909.63.63 0 0 1-.227.236 6.16 6.16 0 0 1 2.242 3.544 6 6 0 0 0-.793-2.871m-3.082-1.586c.232.043.463.103.686.171a1 1 0 0 0-.026.12 6 6 0 0 0-.66-.291m-.81-.094c.519.115 1.012.3 1.47.544a.643.643 0 0 0 .832.527 6 6 0 0 1 2.237 3.463.427.427 0 0 0-.502.424.428.428 0 0 0 .613.386 6.03 6.03 0 0 1-7.148 5.233 6 6 0 0 1-1.406-.956.428.428 0 0 0-.055-.782q-.096-.033-.195-.022a.43.43 0 0 0-.32.208 5.97 5.97 0 0 1-1.384-3.385.86.86 0 0 0-.017-.553c.017-.934.24-1.813.634-2.597A6.2 6.2 0 0 1 8.61 7.89a.428.428 0 1 0 .699-.472 6.07 6.07 0 0 1 3.368-.805m-3.493.715a6.15 6.15 0 0 1 2.679-.844 6.1 6.1 0 0 0-2.259.223 6 6 0 0 0-1.731 1.659c.214-.228.45-.433.699-.626v-.026a.428.428 0 0 1 .612-.386m-1.037 8.465a6.1 6.1 0 0 1-1.444-3.3.86.86 0 0 1-.424.317q.013.535.115 1.037a6.02 6.02 0 0 0 2.602 2.987c.214.09.437.172.664.232a6.2 6.2 0 0 1-1.046-.78h-.042a.43.43 0 0 1-.425-.493m9.33-3.956v.043a6.2 6.2 0 0 1-.484 3.056 5.94 5.94 0 0 0 .686-5.212 6 6 0 0 0-.763-1.071c.397.84.598 1.758.587 2.687a.43.43 0 0 1-.026.497m-6.141-6.154q.045.056.103.107a6.2 6.2 0 0 0-1.895.788 6.2 6.2 0 0 0-2.022 1.046 6 6 0 0 1 3.814-1.941m-4.354 4.14a6.2 6.2 0 0 0-.309 1.641.9.9 0 0 0-.231-.201 6 6 0 0 1 .54-1.44m.334-.793a6.2 6.2 0 0 0-1.003 2.173.9.9 0 0 0-.313-.06h-.008A5.9 5.9 0 0 1 7.02 8.254a6.05 6.05 0 0 1 2.1-1.38A6.2 6.2 0 0 0 7.316 9.03m-1.174 3.814-.043.009q.021.129.055.253l-.012-.258zm.36-3.986a6.1 6.1 0 0 0-.652 2.298.86.86 0 0 0-.471.257 5.95 5.95 0 0 1 1.123-2.559zm-.549 3.999a.86.86 0 0 1-.51-.206c.124.527.317 1.029.57 1.492a.43.43 0 0 1 .364.223q-.066-.238-.12-.48a6.3 6.3 0 0 1-.304-1.029m-.669-.279a6.2 6.2 0 0 0 .579 1.586.43.43 0 0 0-.261.249 6 6 0 0 1-.318-1.835M6 15a.4.4 0 0 1-.184-.043A6.08 6.08 0 0 0 9.772 18.3a6.24 6.24 0 0 1-2.94-2.794 7 7 0 0 1-.528-.635A.43.43 0 0 1 6 15m.429-.429a.4.4 0 0 1-.039.18l.227.3a6 6 0 0 1-.188-.48m9.621 1.655a5 5 0 0 1-.36.411 1 1 0 0 0-.056-.073q.215-.16.416-.338m-4.071 1.397c.763 0 1.496-.142 2.168-.399a.87.87 0 0 1 .12-.527 6.17 6.17 0 0 1-3.6.707q.238.091.489.163.405.057.823.056m4.53-2.053a6 6 0 0 1-.982.9.86.86 0 0 0-.608-.18 6.16 6.16 0 0 0 2.443-3.694 5.9 5.9 0 0 1-.857 2.974zm-2.216 2.057a.8.8 0 0 1-.12-.266 6.1 6.1 0 0 1-2.061.399c.73.089 1.47.045 2.185-.129zm-.163.184a6.03 6.03 0 0 1-3.557.643 6.12 6.12 0 0 1-3.381-2.597 6.2 6.2 0 0 0 1.74 1.101 6.1 6.1 0 0 0 2.194.746c.977.282 2.01.319 3.004.107m-3.998-.488-.095-.017.172.055zm-3.536-2.73a6.2 6.2 0 0 0 1.393 1.705 6 6 0 0 1-1.042-.874 6 6 0 0 1-.351-.831m9.12-7.646c.373.377.699.801.964 1.26.257.244.489.514.695.797a6 6 0 0 0-1.66-2.057"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconOMI.displayName = 'OMI'