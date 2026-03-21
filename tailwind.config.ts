import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        luxeBlack: '#1a1a1a',
        roseGold: '#b76e79',
        cream: '#f5f1e8',
        metallicGold: '#d4af37',
        charcoal: '#2c2c2c'
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-poppins)', 'sans-serif']
      },
      boxShadow: {
        glass: '0 8px 32px rgba(31,38,135,0.16), inset 0 1px 1px rgba(255,255,255,0.25)',
        luxe: '0 0 30px rgba(183, 110, 121, 0.35)',
        neu: '5px 5px 10px rgba(0,0,0,0.1), -5px -5px 10px rgba(255,255,255,0.8), inset 2px 2px 5px rgba(255,255,255,0.5), inset -2px -2px 5px rgba(0,0,0,0.05)'
      },
      backgroundImage: {
        iridescent: 'radial-gradient(circle at top left, rgba(212,175,55,0.28), transparent 28%), linear-gradient(135deg, rgba(183,110,121,0.24), rgba(26,26,26,0.92) 60%, rgba(245,241,232,0.08))',
        liquid: 'linear-gradient(120deg, rgba(183,110,121,0.9), rgba(212,175,55,0.7), rgba(245,241,232,0.85))'
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-14px)' } },
        shimmer: { '0%': { backgroundPosition: '0% 50%' }, '100%': { backgroundPosition: '100% 50%' } },
        pulseGlow: { '0%,100%': { boxShadow: '0 0 0 rgba(183,110,121,0.1)' }, '50%': { boxShadow: '0 0 28px rgba(183,110,121,0.45)' } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        morph: { '0%,100%': { borderRadius: '20px' }, '50%': { borderRadius: '50px' } }
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        shimmer: 'shimmer 8s linear infinite',
        pulseGlow: 'pulseGlow 2.8s ease-in-out infinite',
        morph: 'morph 6s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

export default config;
