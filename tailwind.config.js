module.exports = {
  purge: {
    content: ['./src/**/*.html', './src/**/*.ts'],
  },
  theme: {
    extend: {
      height: {
        almost: 'calc(100vh - 88px)',
      },
      animation: {
        'bounce-right': 'bounceRight 2s infinite',
      },

      keyframes: {
        bounceRight: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateX(0)' },
          '40%': { transform: 'translateX(-8px)' },
          '60%': { transform: 'translateX(-4px)' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
