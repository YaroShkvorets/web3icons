
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconApefi = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M10.431 19.234c.193-1.555.798-5.014 1.805-7.457-.695.789-2.079 2.726-2.079 4.192-.343-.613-1.093-2.147-1.298-3.403-.258.784-.472 2.721.78 4.187l-.519 2.091L6 17.014c.171-.261.519-.835.519-1.045 0-.262-.258-.523-.519-.262.086-.613.519-2.096 1.56-3.141v-2.88c0-.257.103-.836.519-1.046.415-.21 1.212.437 1.56.784-.172-.085-.626-.257-1.042-.257s-.518.172-.518.257c.085.438.415 1.308 1.041 1.308.621 0 1.299-.695 1.556-1.046 0-.287-.155-.849-.78-.784.085-.086.313-.262.523-.262.205 0 .78.172 1.037.261.085-.085.257-.364.257-.784 0-.523-.257-1.046-.776-1.046-.304 0-.608.266-.857.49-.184.158-.334.295-.441.295-.21 0-.609-.352-.78-.523.518-.874 1.765-2.619 2.597-2.619.591 0 1.183.849 1.727 1.629.411.587.797 1.136 1.131 1.251-.428.086-1.35.472-1.56 1.308.262-.262.939-.785 1.56-.785.78 0 2.597 1.046 2.597 1.83 0 .785.262 1.573 1.042 2.096.407.274 1.136.561 1.761.78a8.7 8.7 0 0 1-3.84 5.186v-2.563c-.257.085-.883.784-1.298 2.876l-.095.385a8.56 8.56 0 0 1-4.05.527"/><path fill="currentColor" d="M10.071 8.143c.086-.086.399-.287.605-.287.21 0 .381.201.467.287zM8.86 7.856c-.21 0-.288.201-.288.287h.643c0-.086-.15-.287-.355-.287m.57.716c-.206 0-.429-.108-.429-.193l.857-.022c0 .086-.223.215-.428.215"/>
        </>
      ) : (
        <>
          <g clipPath="url(#APEFI__a)"><path fill="url(#APEFI__b)" d="M0 0h24v24H0z"/><path fill="#121111" d="M10.431 19.234c.193-1.555.798-5.014 1.805-7.457-.695.789-2.079 2.726-2.079 4.192-.343-.613-1.093-2.147-1.298-3.403-.258.784-.472 2.721.78 4.187l-.519 2.091L6 17.014c.171-.261.519-.835.519-1.045 0-.262-.258-.523-.519-.262.086-.613.519-2.096 1.56-3.141v-2.88c0-.257.103-.836.519-1.046.415-.21 1.212.437 1.56.784-.172-.085-.626-.257-1.042-.257s-.518.172-.518.257c.085.438.415 1.308 1.041 1.308.621 0 1.299-.695 1.556-1.046 0-.287-.155-.849-.78-.784.085-.086.313-.262.523-.262.205 0 .78.172 1.037.261.085-.085.257-.364.257-.784 0-.523-.257-1.046-.776-1.046-.304 0-.608.266-.857.49-.184.158-.334.295-.441.295-.21 0-.609-.352-.78-.523.518-.874 1.765-2.619 2.597-2.619.591 0 1.183.849 1.727 1.629.411.587.797 1.136 1.131 1.251-.428.086-1.35.472-1.56 1.308.262-.262.939-.785 1.56-.785.78 0 2.597 1.046 2.597 1.83 0 .785.262 1.573 1.042 2.096.407.274 1.136.561 1.761.78a8.7 8.7 0 0 1-3.84 5.186v-2.563c-.257.085-.883.784-1.298 2.876l-.095.385a8.56 8.56 0 0 1-4.05.527"/><path fill="#121111" d="M10.071 8.143c.086-.086.399-.287.605-.287.21 0 .381.201.467.287zM8.86 7.856c-.21 0-.288.201-.288.287h.643c0-.086-.15-.287-.355-.287m.57.716c-.206 0-.429-.108-.429-.193l.857-.022c0 .086-.223.215-.428.215"/></g><defs><linearGradient id="APEFI__b" x1="4.714" x2="18" y1="3.857" y2="22.286" gradientUnits="userSpaceOnUse"><stop stopColor="#EAE3D2"/><stop offset=".24" stopColor="#CEBC95"/><stop offset=".37" stopColor="#A99367"/><stop offset=".45" stopColor="#AE976A"/><stop offset=".53" stopColor="#B8A070"/><stop offset=".8" stopColor="#E7D9BE"/><stop offset=".97" stopColor="#D7C6A1"/></linearGradient><clipPath id="APEFI__a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
        </>
      )}
    </BaseIcon>
));

IconApefi.displayName = 'Apefi';

export default IconApefi;
