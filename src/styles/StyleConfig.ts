import { Font } from './Font'
import { Color } from './Color'

export default {
  Font,
  Color,
  Config: {
    maxWidth: 1336,
    maxWidthPx: '1336px',
    breakPoint: 768,
  },
  Helper: {
    percent: (px: number) => {
      return `${px / 750 * 100}%`;
    },
    calcVW: (px: number, spPx?: number) => {
      const sp = spPx ? spPx : px
      return `
        ${(100 / 1336) * sp}vw;
        @media screen and (min-width: 769px) {
          font-size: ${px}px;
        }
      `
    },
    calcFS: (px: number, spPx: number)=> {
      return `
        font-size: ${spPx}px;
        @media screen and (min-width: 769px) {
          font-size: ${px}px;
        }
      `
    }
  },
}
