
import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-primary': 'linear-gradient(89.17deg, #B32482 0%, #75317A 100%)',
        'gradient-secondary': 'linear-gradient(89.17deg, rgba(179, 36, 130, 0.1) 0%, rgba(117, 49, 122, 0.1) 100%);',
        'gradient-tertiary':
          ' linear-gradient(224.08deg, rgba(215, 109, 222, 0.2) 21.62%, rgba(235, 123, 197, 0.2) 74.5%);',
      },
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
      },
      fontFamily: {
        sans: ['"Rubik Variable"', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['"Rubik Variable"', ...defaultTheme.fontFamily.sans],
      },

      animation: {
        fade: 'fadeInUp 1s both',
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    }),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.text-gradient': {
          background: 'linear-gradient(89.17deg, #B32482 0%, #75317A 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
          'text-fill-color': 'transparent',
        },
        '.text-gradient-secondary': {
          background: 'linear-gradient(89.67deg, #EB7BC5 11.13%, #D76DDE 87.59%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
          'text-fill-color': 'transparent',
        },
        '.text-gradient-tertiary': {
          background: 'linear-gradient(90deg, #4D0F38 0%, #B32482 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
          'text-fill-color': 'transparent',
        },
        '.shadow-primary': {
          'box-shadow': '0px 4px 8px 0px #B3248240',
        },
        '.shadow-secondary': {
          'box-shadow': '0px 4px 12px 0px #00000040',
        },
        '.border-gradient': {
          background: 'linear-gradient(89.4deg, rgba(235, 123, 197, 0.7) 0.12%, rgba(215, 109, 222, 0.7) 99.99%)',
          padding: '1px',
        },
        '.border-gradient-primary': {
          position: 'relative',
          background: 'linear-gradient(white, white) padding-box',
          border: '1px solid transparent',
          backgroundClip: 'padding-box',
          backgroundImage:
            'linear-gradient(white, white), linear-gradient(89.4deg, rgba(235, 123, 197, 0.7) 0.12%, rgba(215, 109, 222, 0.7) 99.99%)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
        },
        '.border-gradient-secondary': {
          position: 'relative',
          background: 'linear-gradient(white, white) padding-box',
          border: '1px solid transparent',
          backgroundClip: 'padding-box',
          backgroundImage:
            'linear-gradient(white, white), linear-gradient(89.4deg, rgba(179, 36, 130, 0.7) 0.12%, rgba(163, 39, 128, 0.7) 26.52%, rgba(117, 49, 122, 0.7) 99.99%)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
        },
        '.border-gradient-custom': {
          position: 'relative',
          borderRadius: '32px',
          background:
            'linear-gradient(#ffffff, #ffffff) padding-box, linear-gradient(88.29deg, #75317A 3.64%, #B32482 97.3%) border-box',
          border: '2px solid transparent',
          backgroundClip: 'padding-box, border-box',
          backgroundOrigin: 'padding-box, border-box',
        },
        '.border-t-gradient-primary': {
          'border-top-color': '#B32482',
        },
        '.after-triangle-primary': {
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-12px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '24px',
            height: '12px',
            background: 'linear-gradient(89.17deg, #B32482 0%, #75317A 100%)',
            clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
          },
        },
      });
    }),
    plugin(function ({ addBase }) {
      addBase({
        'h1, h2, h3, h4, h5, h6, p, ul, li': {
          lineHeight: '1.2',
        },
      });
    }),
  ],
  darkMode: 'class',
};
