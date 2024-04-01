import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconDRGN = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="#29344A"
        d="M5.323 14.413c-.013-.129.155-.317.24-.399l-.051-.677a1.3 1.3 0 0 1-.514-.416l.064-1.38.197-.763c-.069.108-.244.318-.394.318s-.159-.215-.146-.318v-.63c0-3.57 2.679-4.842 4.02-5.035.154-.236.544-.266.72-.249.214-.077.742-.296 1.089 0 .283.236-.052.592-.253.742.085.115.471.351 1.294.351 1.029 0 1.92-.844 2.743-.844.664 0 1.11.128 1.247.188l.06.429c1.852.544 2.014 2.52 1.869 3.437.66.999.643 1.234.643 1.492a1.4 1.4 0 0 1-.206.59c.145.25.227.82.253 1.072.415.202 1.088.678 1.088 1.428 0 .6-.253 1.015-.381 1.148l.158.343c0 .836-.278 1.526-.42 1.766l-.445.145c-.69 1.535-2.238 2.135-3.395 2.135-.921 0-1.744-.21-2.035-.313l-.87.056c-.095.085-.322.257-.472.257-.188 0-.9-.103-1.183-.215-.218-.09-.308-.257-.325-.334a2.7 2.7 0 0 1-.879-.343c-.66.27-1.071-.051-1.127-.051a3.3 3.3 0 0 1-1.35-1.402c-.129-.27-.086-.6-.043-.737l-.167-.253c-.266.013-.399-.043-.429-.077a3.26 3.26 0 0 1-.6-1.461"
      />
      <path
        fill="#4B5C7A"
        d="M14.015 9.63c.107.034.33.124.411.214l.707.116.485-.137v-.335c.017-.051.06-.188-.532-.128-.37.03-.731.122-1.071.27m-6.78 4.808c-.082.425.381.643.621.703l-.296.3c-.291.043-.874-.081-.874-.87 0-.762.549-1.594.81-1.992.073-.116.129-.193.129-.22.021-.098.064-1.268.081-1.842l-.257-.364.381-.249c-.24.172-.042.48.086.617l.493-.261c.146-.069.441-.214.476-.219.034-.008.248-.248.351-.368l.124.48a1.985 1.985 0 0 0-1.44 1.757l-.214 1.92c-.124.026-.386.184-.471.608m.621-4.551-.026.017zm-1.063 2.22c0-.163.095-.214.142-.236l.021-.008c-.291-.103-.326.197-.304.36-.034 0-.103-.043-.103-.193s.201-.3.3-.356c-.36-.051-.437.215-.429.356 0 .454.322.36.485.257-.039 0-.116-.034-.112-.18m3.579-2.16c.013-.03.266-.163 1.144.073.874.231 1.534.171 2.023-.172-.03.078-.03.283.223.489v.609c-.274.06-.832.171-.87.145l-.034-.03c-.125-.124-.545-.531-1.14-.484-.283-.236-.956-.69-1.346-.63m3.707.137c-.06-.103-.261-.116-.36-.107a.365.365 0 0 1 .437 0 .7.7 0 0 0-.291-.15c.034-.051.154-.124.343.03.184.15.043.369-.052.459a.6.6 0 0 0-.077-.232m-2.336 2.606c-.248.15-.737.746-.951 1.029.317-.515.977-1.56 1.084-1.702a2.33 2.33 0 0 1 1.093-.746l1.967-.523.634.669h-1.067c-.103 0-.188.03-.291.06-.137.047-.291.103-.527.086-.412-.026-1.042.231-1.196.518-.129.24-.343.369-.591.515zm4.295-1.196a.5.5 0 0 0 .111.017l-.017.005c.24.055.72.017.72-.588a.985.985 0 0 0-1.217-.977c.184 0 .544.086.741.395a.75.75 0 0 0-.741-.215.71.71 0 0 1 .673.515c.154.51-.146.814-.27.848m-8.486 5.289c-.094-.086-.313-.163-.412-.193 0 .116.168.407.33.694l.056.099c.18.317.81.523.857.42.056-.103-.158-.27-.36-.42a2.6 2.6 0 0 1-.471-.6m2.006 1.02c.072.116.214.278.368.278.18 0 .227-.158.227-.235-.158.051-.475.111-.6-.043z"
      />
      <path
        fill="#505E81"
        d="M13.86 12.827c-.111-.146-.042-.257 0-.291.06.188.395.291.75.343.356.05.223-.052.36.085.112.103-.042.309-.137.394a.44.44 0 0 0 .309-.308l.643.308c-.103-.055-.163-.227-.176-.308.129.227.694.308.849.308.12 0 .128.086.115.129.065-.004.189.03.159.197-.03.172-.351.266-.506.292.54.042.643-.155.626-.258.274.255.487.569.621.918-.043.055-.158.223-.3.437-.141.214-.21.943-.222 1.277-.09.231-.703.707-1 .917l.07-.6.205-1.774-1.723-1.115c-.171-.257-.531-.81-.643-.951"
      />
      <path
        fill="#CEDDF7"
        d="M5.426 8.16c-.343.737-.42 1.886-.42 2.37.394-.3 1.299-.909 1.762-.909.467 0 .612.245.625.369.172-.184.617-.553 1.042-.553.424 0 .57.124.591.184l.129-.227v-.257l-.129.141-.146-1.457v1.457c-.634-.274-1.165.155-1.35.403a5.22 5.22 0 0 1 1.166-3.12l-.038-.137c-.695.484-1.209 2.332-1.376 3.197-.043-.12-.24-.334-.686-.227-.441.107-1.071.514-1.328.703-.03-.913.295-1.714.458-2.001.686-1.316 2.242-2.186 2.932-2.452l.15.3c.012-.026.077-.086.218-.124.146-.034.27.068.313.128l.373-.248a.93.93 0 0 1-.527-.54h-.047c-.009.133.098.343.154.437a.86.86 0 0 1-.266-.343l-.146.112a2 2 0 0 0-.115.231l-.069-.137a5.46 5.46 0 0 0-3.27 2.7"
      />
      <path
        fill="url(#DRGN__a)"
        d="M6.648 9.926c.042-.06.158-.18.257-.155h.008c.129.035.257.069.326.455.013.072.129.214.484.214.446 0 .802-.433.832-.84l.514.171v.257c-.369.159-1.106.806-1.106 2.135.009.527.377 1.543 1.8 1.388l.12.086.082.45-.197.094-.395-.192c-.064.115-.111.428.223.754-.056.021-.24.021-.527-.167-.09.085-.184.36.163.745v.138l-.227-.18c-.107.102-.245.385.064.737-.043.175.03.544.613.608.081.073.313.219.63.24l.116.592c0 .085.064.253.334.227s.364-.073.377-.095l.322.236c-.052.103-.078.347.197.514.274.168.437.3.484.343h-.973l.489.09c.017.099-.056.275-.489.219l-.163-.021c-.441-.052-.668-.078-.745-.408l.35.035c-.445-.116-1.37-.386-1.5-.558l.12-.141-.813.287c-.262-.081-.858-.356-1.162-.806l-.184-.257c-.24-.342-.322-.454-.206-.75q.053-.126.099-.214c.098-.193.15-.3-.026-.549l-.073.472-.471-.827.06.355-.335.043a2.23 2.23 0 0 1-.484-1.174l.227-.296.257.6a10 10 0 0 1-.312-2.575l-.129.943-.343-.228a4.2 4.2 0 0 1-.064-1.2c.05-.427.219-.83.488-1.165l.438-.116c-.112.296-.335.956-.335 1.247.172-.476.579-1.5.785-1.757zM6.562 11c.056.018.128-.068.163-.192.038-.125.017-.236-.043-.25-.056-.016-.129.07-.167.194-.035.12-.017.231.043.248zm.557 1.055c-.013.283-.214.505-.441.497-.228-.013-.403-.253-.39-.54.012-.283.214-.51.441-.497.231.012.407.252.39.54m.814 2.28c.197.505.056 1.028-.313 1.17-.368.137-.831-.163-1.028-.673-.197-.506-.06-1.029.308-1.166.373-.137.832.163 1.029.669zm2.426 3.715c.056-.158-.111-.36-.373-.445-.257-.086-.514-.03-.57.128-.056.163.107.364.369.454.257.086.514.026.574-.137m-2.366-1.06c.365.41.545.84.407.955-.141.12-.548-.12-.912-.531-.36-.412-.545-.84-.403-.96.141-.116.548.124.908.535m-1.735-3.232c.025.124 0 .236-.06.249-.056.012-.129-.078-.155-.202-.03-.128 0-.236.056-.248.06-.013.129.077.159.201"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        fill="url(#DRGN__b)"
        d="M9.789 11.139c-.154 0-.39.102-.493.154l.154-.154-.154-.836c-.3.171-1.226.656-1.148 1.967.064 1.046 1.084 1.23 1.585 1.191a.63.63 0 0 0 .699-.107c-.189-.098-.24-.377-.244-.501l-.373-.056c.223.021.505-.06.617-.107a1 1 0 0 0-.047-.279 1.3 1.3 0 0 1-.06-.338c-.172.077-.429.056-.536.038q.266-.039.506-.158c-.034-.03-.107-.137-.107-.326 0-.184.09-.257.137-.274-.116-.073-.386-.214-.536-.214"
      />
      <path
        fill="#E5EFF9"
        d="M10.779 11.443c-.103.043-.364.043-.48.034a1.1 1.1 0 0 0 .03.369.64.64 0 0 0 .45-.399zm.214.66c-.115.043-.42.038-.557.03-.004.077-.008.253.034.368a.71.71 0 0 0 .523-.398m-.685.835c.115-.025.368-.094.45-.162a.62.62 0 0 1-.317.51 1.1 1.1 0 0 1-.133-.348"
      />
      <path
        fill="#EBEEF3"
        d="M13.698 12.369c-2.388.05-2.992 2.035-3 3.02a1.156 1.156 0 0 1 1.217-.68v-.326a2 2 0 0 1 0-.592c.043-.133.39-.218.561-.244.287-.677.793-.814 1.012-.797v-.086z"
      />
      <path
        fill="url(#DRGN__c)"
        d="M14.55 11.743a4.15 4.15 0 0 1 3.386 2.845.6.6 0 0 1 .257.056c.022-.283-.128-1.08-.835-1.997-.712-.921-2.169-.986-2.808-.9zm-1.757.493c.523-.103 1.835-.168 2.889.407a5.55 5.55 0 0 1 2.006 1.971h.158c-.227-.643-1.011-2.018-2.357-2.426-1.689-.501-2.614-.291-2.7.043z"
      />
      <path
        fill="#BCC7D0"
        d="M17.075 16.8c-.549.656-1.646 1.294-2.126 1.53 1.474-.249 2.134-1.05 2.28-1.419l-.154-.115z"
      />
      <path
        fill="url(#DRGN__d)"
        d="M14.388 18.613c-1.2 0-2.143-.39-2.465-.587.172.3.905.908 2.465.908 2.267 0 3.244-1.273 3.45-1.907-.043.064-.313.026-.446 0-.184.493-1.496 1.586-3 1.586z"
      />
      <path
        fill="url(#DRGN__e)"
        d="M9.622 14.897c.008.172-.154.364-.236.437.022.287.322.382.472.39a.7.7 0 0 1-.318 0c-.021.15-.214.343-.308.42a.4.4 0 0 0 .214-.103c-.043.112-.163.168-.214.18.103.232.377.275.501.266.172.244.669.244.896.214-.489-.925-.206-2.01 0-2.434-.283-.154-.514-.116-.591-.081.051.21-.159.48-.27.587.051.128.278.274.385.33-.325-.043-.415-.155-.42-.206z"
      />
      <path
        fill="#F9FFFF"
        d="M9.442 14.096c-.022.124 0 .402.236.522.068 0 .21-.072.201-.321-.171-.021-.433-.189-.437-.201m-.129 1.114c-.235-.124-.257-.403-.235-.527 0 .013.265.184.437.206.008.248-.129.317-.202.32m-.133.78c-.214-.163-.18-.441-.137-.557 0 .013.223.223.39.274-.038.249-.184.291-.257.283z"
      />
      <path
        fill="url(#DRGN__f)"
        d="M17.006 9.814a10 10 0 0 0-.827-.998l.129.72-.832-.206.292.398-.223.086c-.214.069-.643.317-.613.772.026.454.471.771.694.874a1.1 1.1 0 0 1-.334-.789c0-.492.321-.857.72-.857.403 0 .994.343.994 1.029 0 .548-.287.806-.433.861.459.218.872.52 1.218.892-.01-.956-.348-1.937-.515-2.306.215.244.373.686.425.879l.154-.326c-.21-1.102-.827-1.723-1.114-1.899h-.292c.214.223.459.673.557.87"
      />
      <path
        fill="url(#DRGN__g)"
        d="m10.235 11.126-.129-.746.086-.249c1.11 0 1.856.828 2.087 1.243a1.4 1.4 0 0 0-.446-.703c.369.039.682.356.793.515-.025-.172-.184-.343-.261-.399.154.013.527.03.784 0s.536-.321.643-.463c.073.034.248.103.386.103.171 0 .334-.098.334-.3 0-.154-.056-.253-.086-.279l.557-.077c.3-.043.523.017.6.052l.047-.052-.158-.424c.18 0 .317.056.36.081l.274.343c-.471-.017-.647.163-.823.472-.137.244-.055.664 0 .84-.792 0-1.148.12-1.577.257-.428.133-.364.124-.84.171-.471.056-.595.412-.733.592a2.6 2.6 0 0 1-.677.638c-.27.172-.613.883-.754 1.213l-.086-.651c.437-.416.262-.6.232-.63-.026-.026-.142.008-.193.03v-.086c.471-.236.454-.557.386-.694-.142.098-.425.098-.55.085l-.025-.085c.442-.159.497-.459.472-.587h-.489l-.214-.215z"
      />
      <path
        fill="#BCC8D4"
        d="M16.093 8.203c0-.245-.043-.793-.214-1.02 0 .064.141.707.214 1.02"
      />
      <path
        fill="#C0C5CB"
        d="m16.222 6.981-.249.15c.086.163.257.643.215 1.286.043.064.223.189.54.159 0-.815-.339-1.402-.506-1.595"
      />
      <path
        fill="#D3D9F3"
        d="m15.883 7.071-.12-.561.249-.244c.03-.026.077.072.094.128l.039.292.107-.292c.836.536.909 1.804.84 2.37l-.257-.133a2.46 2.46 0 0 0-.583-1.761zm-.06-.9c-.055.047-.085.206-.085.227l.193-.231s-.056-.051-.108 0z"
      />
      <path
        fill="#D9D8DD"
        d="M15.15 15.086 14.234 15c0 .171.223.574.652.574.428 0 .454-.098.467-.201s-.064-.124-.137-.146c-.06-.021-.069-.098-.065-.133z"
      />
      <path
        fill="#E2E3E5"
        d="M12.236 14.589c-.146-.013-.086.06-.086.077 0 .047.155.184.3.201.142.017.24-.167.193-.201-.043-.035-.257-.065-.407-.078"
      />
      <path
        fill="#CED8F1"
        d="M11.816 14.927c.729 0 1.342.3 1.556.45a.94.94 0 0 0-.279-.309l.069-.06v-.244c.12.022.253-.12.253-.163s-.03-.27-.043-.377c0 .274-.111.394-.163.42l-1.093-.308.056-.459c.146-.051.441-.15.48-.15.184-.677.66-.806.874-.784a.3.3 0 0 0 .189.257c-.129-.274 0-.424.085-.463.082.244.733.334 1.05.351 0 .142-.141.266-.21.309.129.064.365-.069.468-.146l.205.112c-.004.171.077.266.12.291-.043-.283.065-.42.129-.454.137.377.72.351.814.347h.009c.085.257-.172.399-.313.437h.283c.458.043.587.557.591.815a.3.3 0 0 0-.248.128c-.043.343-.137 1.054-.176 1.17a.5.5 0 0 0-.017.274l.111.095c-.668 1.401-2.306 1.748-3.043 1.748-2.391 0-2.764-1.928-2.764-2.143s.099-1.144 1.007-1.144m1.997-.034c-.253-.206.21-.485.33-.557l.022-.013a2.3 2.3 0 0 0-.279.368c-.043.099.086.116.159.112h1.8c.043 0 .18.188.244.278-.231.206-.814.622-1.307.622-.497 0-.677-.502-.703-.75-.099 0-.214-.043-.266-.06m-2.173.668c.039-.072.142-.223.258-.223.115 0 .21.198.24.296-.043-.051-.146-.154-.24-.154-.09 0-.21.056-.258.086zm-.188.935c.051-.086.231-.249.557-.249.403 0 .986.364 1.286.724-.339-.201-1.063-.608-1.286-.608s-.463.085-.557.133m1.723-.746c-.107-.039-.257.073-.317.133a.6.6 0 0 1 .274 0c.086.026.15.158.171.218.005-.102-.017-.317-.128-.351"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        fill="#96A4C1"
        d="M13.368 13.02c-.193.171-.596.549-.652.716-.051.162-.3.184-.415.175l-.116.352.96.248.223-.334q-.338-.062-.678-.116c-.137-.017-.141-.051 0-.115.142-.06.176-.086.223-.215.043-.128.33-.587.455-.711m2.704.964c.017 0 .03-.008.047-.013-.188.03-.351.069-.454.099h-.009a2 2 0 0 0-.266.111c-.252.12-.621.292-.994.352-.437.073-.386.214-.308.274a6.7 6.7 0 0 1 1.928.326h-.111c-.077.171-.386.527-.986.557s-.801-.471-.831-.724c-.086.197.034.458.107.561l-.416.189a.71.71 0 0 0-.853-.065c.15-.021.472 0 .566.279.103.279-.48.386-.784.411.587.275.75.746.66.806-.069.043-.258-.128-.339-.214-.017.351-.364.171-.587.055l-.12-.06c-.171-.068-.857-.257-.9.159-.026.21.283.514.617.771.386.215.887.356 1.534.356.737 0 2.375-.347 3.043-1.748l-.111-.095a.5.5 0 0 1 .017-.274c.043-.116.133-.827.176-1.166a.32.32 0 0 1 .248-.137c-.004-.253-.128-.771-.591-.81z"
      />
      <path
        fill="#B6BFC6"
        d="M17.542 14.94c.103-.034.334-.099.45-.099.12 0 .514.232.694.348l-.098.977-.266.437c-.146-.043-.664-.223-.677-.317a55 55 0 0 1-.103-1.346m.604 1.307c.069.009.146-.124.172-.296s-.005-.321-.073-.334c-.065-.009-.142.124-.172.3-.025.172.009.321.073.33"
      />
      <path
        fill="#FFFFFD"
        d="m17.936 15.279.703-.026.043-.077h-.741l-.395-.258c-.18.258-.3 1.252-.343 1.715.086.03.27.111.343.167.073.051.622-.021.887-.069l.168-.6c-.052.06-.185.215-.296.3-.107.095-.356-.034-.472-.111z"
      />
      <path
        fill="#B5BEC5"
        d="M18.15 12.66c-.008.03 0 .343 0 .501.116-.038.395-.094.549-.017-.081-.12-.309-.386-.549-.484m.75 1.444a.77.77 0 0 0-.587-.514l-.12-.356c.086-.043.283-.043.369-.038.386.077.386.638.343.908zm-.368.673c-.013-.343-.163-.857-.236-1.071.215 0 .536.257.536.527 0 .218-.197.454-.3.544"
      />
      <path
        fill="#FBFFFF"
        d="M8.61 5.781C5.863 6.998 5.345 9.026 5.43 9.887c.03-.043 1.158-.956 1.805-.476a6.66 6.66 0 0 1 1.478-3.154c-.064-.107-.008-.253.03-.313a.7.7 0 0 0-.133-.163m.12 3.356c-.437-.129-.9.15-1.071.309.081-1.243.75-2.366 1.071-2.773l.18.874c-.132.309-.175 1.191-.18 1.59"
      />
      <path
        fill="#F7F3F2"
        d="M9.798 5.614c-.129.069-.386-.227-.498-.386.828-.428 1.038-.18.9-.102-.128.077-.244.398-.402.484z"
      />
      <path
        fill="url(#DRGN__h)"
        d="m9.708 11.044-.785-4.778c0-.043.022-.138.107-.138.086 0 .129.052.142.078l.836 4.868z"
      />
      <path
        fill="#BDCBD8"
        d="m10.179 14.027-.064-.386.287-.064.064.484zm.531 3.412-.128-.562.077-.021.261.505c-.06.086-.167.086-.21.078"
      />
      <path
        fill="#FFFFFD"
        d="M10.029 9.9c.172-1.084-.111-1.654-.274-1.804.557-.343 2.031-.223 2.7-.129l-.352-1.757c.48 0 1.805-.849 2.37-.849.455 0 .776.155.883.232l.664 3.621c-.021-.026-.257-.068-1.071-.068-1.118 0-1.637.75-2.494.75s-1.05-.06-1.603-.275a.65.65 0 0 0-.823.275z"
      />
      <path
        fill="#96352F"
        d="m12.703 6.257.155-.086c.505-.274 1.02-.548 1.65-.548.428 0 .737.133.895.235l-.047-.265c-.107-.077-.428-.232-.883-.232-.291 0-.793.232-1.273.45-.445.202-.87.395-1.097.395l.056.287.051-.017q.256-.092.493-.223zm-.432.78-.07-.326h.018c.137 0 .322-.025.506-.128q.126-.062.253-.137c.471-.262 1.033-.579 1.71-.579.278 0 .527.021.728.051l.064.348a4 4 0 0 0-.792-.069c-.579 0-1.055.261-1.526.523l-.274.154a1.5 1.5 0 0 1-.617.163m.102.519-.064-.322a1 1 0 0 0 .416-.124q.126-.063.253-.137c.471-.262 1.033-.575 1.71-.575q.416-.004.827.069l.064.351a4 4 0 0 0-.896-.094c-.574 0-1.05.262-1.521.527l-.274.15c-.185.095-.36.137-.515.155m.078.394-.065-.334a1.05 1.05 0 0 0 .57-.09l.232-.116a3.4 3.4 0 0 1 1.598-.463q.421.006.836.09l.064.369a4.2 4.2 0 0 0-.908-.129c-.532-.013-.978.201-1.423.42l-.257.124a1.4 1.4 0 0 1-.643.129zm-2.413.78a2 2 0 0 0-.095-.33c.24-.146.609-.3.999-.3.321 0 .583.068.814.137h.013c.24.073.459.133.737.133.116 0 .287-.043.497-.116q.303-.117.652-.274l.021-.009c.236-.103.476-.214.703-.291.202-.081.417-.13.634-.142.245 0 .498.043.72.103l.065.356a3 3 0 0 0-.785-.129c-.128 0-.304.043-.518.12a9 9 0 0 0-.682.283l-.025.009c-.228.098-.455.201-.669.278-.214.082-.428.142-.613.142-.33 0-.591-.077-.827-.146h-.004a2.5 2.5 0 0 0-.733-.128c-.36 0-.712.171-.904.3zm.043.518a3 3 0 0 0-.018-.36 1.65 1.65 0 0 1 .712-.171c.295 0 .6.094.883.176l.034.013c.304.09.591.171.874.171.12 0 .274-.043.472-.129.154-.064.317-.145.497-.231l.141-.073c.454-.223.986-.471 1.5-.471q.374.002.665.068l.068.356a2.7 2.7 0 0 0-.729-.099c-.428 0-.891.21-1.354.438l-.133.068c-.18.086-.36.18-.522.249-.206.085-.416.154-.605.154-.343 0-.673-.099-.973-.189h-.008c-.305-.094-.566-.171-.815-.171-.27 0-.522.103-.685.201zm5.884-.33a5.3 5.3 0 0 0-.943-.072c-.63 0-1.089.231-1.487.445l-.056.03c-.381.206-.694.373-1.088.373a2.04 2.04 0 0 1-.918-.184 1.8 1.8 0 0 0-.75-.167c-.27 0-.484.077-.651.18q-.012.173-.043.373a.65.65 0 0 1 .823-.275 3.34 3.34 0 0 0 1.603.275c.403 0 .728-.163 1.071-.339.43-.254.919-.396 1.419-.411.823 0 1.054.042 1.075.068l-.055-.3z"
      />
      <path
        fill="#FFFFFD"
        d="m10.393 6.158.06.082.103.026-.068.072.004.095-.099-.03-.098.03v-.095l-.065-.072.103-.026zm-.45.043.056.086.103.021-.064.078v.094l-.095-.034-.103.034.005-.094-.065-.078.103-.025.06-.077zm.322.335-.06-.078-.056.078-.103.025.065.073v.099l.094-.035.103.035-.005-.099.065-.073zm-.219.265.056.082.103.021-.065.077.005.095-.099-.035-.103.035.009-.095-.069-.077.103-.021zm.365.356-.06-.081-.06.081-.1.026.065.073-.004.094.098-.03.099.03v-.094l.064-.073zm.38 0 .06.077.104.026-.069.077.005.094-.1-.034-.098.034v-.094l-.064-.077.103-.026zm.515.077-.055-.077-.06.077-.103.026.064.077v.094l.099-.034.098.034-.004-.094.064-.077zm.352-.086.06.078.102.025-.068.073.008.099-.102-.035-.099.035.004-.099-.064-.073.103-.025.056-.082zm.291.386-.06-.077-.06.077-.103.026.069.077-.005.094.099-.034.099.034v-.094l.064-.077zm-1.466-.801.06.077.103.026-.068.077.004.094-.099-.034-.098.034v-.094l-.065-.077.103-.026zm.502.158-.06-.081-.06.081-.103.026.069.073-.005.094.099-.03.098.03V6.99l.065-.073zm.394-.081.06.081.103.026-.064.073v.094l-.099-.03-.098.03.004-.094-.065-.073.103-.026zm.472.073-.06-.082-.06.082-.103.021.068.077-.004.095.098-.035.099.035V6.98l.064-.077zm-1.243-.429.06.086.103.021-.065.073v.099l-.094-.035-.103.035.004-.099-.064-.073.103-.025.06-.078zm.501.163-.06-.081-.056.081-.103.026.065.073v.094l.094-.034.103.034-.004-.094.064-.073zm.399-.081.06.081.103.026-.07.073.005.094-.098-.034-.099.034v-.094l-.064-.073.103-.026zm-.643-.253-.06-.077-.056.077-.103.025.064.078v.094l.095-.034.103.034-.005-.094.065-.078zm.386 0 .055.081.103.026-.069.073.005.094-.099-.03-.098.03.004-.094-.064-.073.098-.026.06-.081zm.514.081-.06-.081-.06.081-.103.026.069.073-.005.094.099-.03.098.03-.004-.094.064-.073zm-1.663 1.072.06.085.103.022-.069.077.009.094-.103-.034-.099.034.005-.094-.065-.077.103-.026.056-.077zm.501.162-.06-.081-.06.081-.103.026.069.073-.004.094.098-.03.099.03v-.094l.064-.073zm.399-.081.056.081.103.026-.065.073.005.094-.1-.03-.102.03.009-.094-.069-.073.103-.026zm.471.073-.064-.082-.056.082-.102.021.064.077-.005.095.099-.035.103.035-.004-.095.064-.077-.103-.021z"
      />
      <defs>
        <linearGradient
          id="DRGN__a"
          x1="9.303"
          x2="13.157"
          y1="5.989"
          y2="19.565"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D5E1F9" />
          <stop offset="1" stopColor="#8493B4" />
        </linearGradient>
        <linearGradient
          id="DRGN__b"
          x1="12.001"
          x2="12.001"
          y1="4.714"
          y2="19.278"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CFD7EC" />
          <stop offset="1" stopColor="#CCD6EF" />
        </linearGradient>
        <linearGradient
          id="DRGN__c"
          x1="12.269"
          x2="21.151"
          y1="7.35"
          y2="13.181"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".25" stopColor="#FFFCFF" />
          <stop offset=".66" stopColor="#BFC2C7" />
        </linearGradient>
        <linearGradient
          id="DRGN__d"
          x1="17.459"
          x2="8.777"
          y1="7.17"
          y2="8.156"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B8C5CB" />
          <stop offset="1" stopColor="#FAFEFF" />
        </linearGradient>
        <linearGradient
          id="DRGN__e"
          x1="12.001"
          x2="9.453"
          y1="4.719"
          y2="18.198"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C9D5ED" />
          <stop offset=".24" stopColor="#A2AFCF" />
          <stop offset=".4" stopColor="#CFDBF3" />
          <stop offset=".53" stopColor="#A1AECE" />
          <stop offset=".63" stopColor="#9FACCC" />
          <stop offset=".71" stopColor="#CEDAF0" />
          <stop offset=".78" stopColor="#D0DEF8" />
          <stop offset=".86" stopColor="#A9B7D4" />
          <stop offset="1" stopColor="#B8BFDC" />
        </linearGradient>
        <linearGradient
          id="DRGN__f"
          x1="12.004"
          x2="14.478"
          y1="4.714"
          y2="17.522"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D1D9EE" />
          <stop offset="1" stopColor="#8893B3" />
        </linearGradient>
        <linearGradient
          id="DRGN__g"
          x1="16.934"
          x2="8.009"
          y1="7.059"
          y2="12.066"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#929FC1" />
          <stop offset=".6" stopColor="#94A1C4" />
          <stop offset=".91" stopColor="#D0DCF2" />
          <stop offset="1" stopColor="#98A5C7" />
        </linearGradient>
        <linearGradient
          id="DRGN__h"
          x1="12.029"
          x2="12.365"
          y1="4.714"
          y2="19.211"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#AEC0CC" />
          <stop offset=".76" stopColor="#FAF8F9" />
          <stop offset="1" stopColor="#BBC5CE" />
        </linearGradient>
      </defs>
    </BaseIcon>
  ),
)

IconDRGN.displayName = 'DRGN'
