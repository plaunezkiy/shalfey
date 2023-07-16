import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className: string;
}

const IconBackground = ({ children, className }: Props) => {
  return (
    <div
      style={{
        backgroundImage: `
        url(
            'data:image/svg+xml;utf8,<svg style="border:dashed;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="250" height="300"><image transform="translate(-120, -20)" x="50%" y="50%" width="150" height="150" filter="drop-shadow(2px 2px 2px rgb(0 0 0 / 0.2))" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPgAAADZCAYAAAANIf2YAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAASgSURBVHja7N1Ncts6EIVRwsX9b1fDziiTVP7sMkT07XN2ABCfGtRz9FZVXUCm+/V62QXIVLc9+P3G2AIiJrgtEDMCFzUIXNAgcFGDwIUNAhc1hAYubAgMXNgQGLiw4RM+xA0muLBB4MIGV3Rxw8gJLmwImuAlbsid4EvYMGOCA0GBixtCAxc3063Ud/DyIOCPZ6s6B15ihve5xS1qBJ4Wt6gRuLBB4KcTNQIPnN7CZrwPcYMJ3iVuYcPGwEvYkHlFFzcMuKILG8ImeIkbMid4CRsyJ7i4YcAVXdwQFniJGzIDFze4oosbugVe4obMwMUNrujihm6Bl7jBBAeaBT51evsfNHxtzypsPW2d8K/J1uEPsbw+xH/wxX6Q3w8vfnmoArCu7Anuodona3so8KTpLWz7NO4MPDXBxe3wW9/DgZcHK25rM8FPnt7iNrVH+/BwxW198yb4rs1ZHq6Db40muIdrb6yxWeDLw3XwrfH5wG2Sg48JbnqL2zoF7uHaF44J3IEQt7Wa4Mddz3HgCb2iO8wQ/g7O3A88H/D/GfiOjXI9d9gxwR1oEDg+7Kz5mMBdzx10DgncAQETHNMbgQPRgXv/BhMc13MEDgjc6wYI3PWcUYE7KGCCAwIHogP3pZT3b0xwQOCAwAGBg8ABgQMCBwQOCBwQOCBwEDggcEDggMABgQMCB4EDAgcEDggcEDggcEDg7PaO38b32/ACB4EDAodjrucIHBA4Hae3L9gEDggc794Ch7FxL4Ej7vfx/i1wTDcETjemt8AxvfnptgUIO/eGYoLTJe4atl6B47AjcPrH7cu1Lz43gSPuYL5kw5U8eP0mOCcfbtNb4JhcuKLTLewathdb1muCI24THGGLW+AI294ctQ6BO7ymdzDv4OIWd/DaTXBhizv41UXgwhZ3MIGLWtx503sJXNjiHrAPAhe2uIP/s6HA+0YhbgTuCmcdw/ZkCVwM1jLgei5wIYjbFR1RW1fXPRK4gz91fYnTewncobfGQQTusE9c55hfihW4mKetN/WLtSVwIVv7sP0UeN8DLjzT+5/84APi7v+hvASOuAcSOAgcTO9u13OBI+7ecZvgiHvyGgWOuEOnt8ARdziBI+6e03sJHHGb4CDuxOl9Xf4WHWF3i9sER9zWLXB6H3L/yk/gBE+wNTDuT6/ZOziu5MHrFzjCDryau6Ij7uCruQmOsIMnt8ARdo+4l8ARtsktcEQ9bY8EjqgDr+YCR9TBV3OBI+Zz414CR8Tijg/cFzWI+y/8JRsEvXMLHM6Me8tt1Ds4PD+1t71qmuAQGrfAIeh9W+BwVtxL4LA/6Mi4r8uXbMz15A83vu3vN0xwTPDQuE1whB0ctwmOuIPjNsERdnDcAkfYwXELHGEHxy1whB1O4Ag7cHILHGGHxy1whB0ct8AR9ffGXSY45ET96+Q2wSEk6iODFjiCHhK3wBFycNy7Aq/L75WLN1O7c3174JAZ93X556IQG7d3cAgN2wSH8LhNcAgNW+AQHLbAIThs7+Aw4O81THBEbYKDuE1wELXAQdgCB2ELHEQtcEQtcBC1wEHQAgdBCxwhs8mPAQB1ItY8ltiQgQAAAABJRU5ErkJggg==" /></svg>'
        ),
        url(
            'data:image/svg+xml;utf8,<svg style="borderr:dashed;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="250" height="300"><image transform="translate(-35, -50)" x="50%" y="50%" width="150" height="150" filter="drop-shadow(2px 2px 2px rgb(0 0 0 / 0.2))" xlink:href="data:image/png;base64,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" /></svg>'
        )
        `,
        backgroundPosition: "top, bottom",
      }}
      className={`bg-repeat ${className}`}
    >
      {children}
    </div>
  );
};

export default IconBackground;