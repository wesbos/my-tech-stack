module.exports = {
  theme: {
    extend: {},
    screens: {
      'maxXl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'maxLg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'maxMd': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'maxSm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      'minXl': {'min': '1280px'},
      // => @media (min-width: 1279px) { ... }

      'minLg': {'min': '1024px'},
      // => @media (min-width: 1023px) { ... }

      'minMd': {'min': '7678px'},
      // => @media (min-width: 767px) { ... }

      'minSm': {'min': '640px'},
      // => @media (min-width: 639px) { ... }
    }
  },
  variants: {},
  plugins: [],
}
