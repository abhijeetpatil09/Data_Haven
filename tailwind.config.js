/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  important: true,

  theme: {
    extend: {
      colors: {
        "deep-navy": "#0A2756",
        "electric-green": "#00FFB4",
        ash: "#f5f5f5",
        smoke: "#eeeeee",
        silver: "#bfbfbf",
        coal: "#242424",
        "true-teal": "#00B5B1",
        "bright-blue": "#0080FF",
        "orange-highlight": "#EF5B2B",
        "new-gold": "#FFA800",
        'amaranth': {
          '50': '#f0f8fe',
          '100': '#dceefd',
          '200': '#c2e2fb',
          '300': '#97d1f9',
          '400': '#67b7f3',
          '500': '#4399ee',
          '600': '#2d7de3',
          '700': '#2567d0',
          '800': '#2454a9',
          '900': '#234885',
          '950': '#162746',
      },
      //   'sky': {
      //     '50': '#f0f9ff',
      //     '100': '#e0f2fe',
      //     '200': '#bae6fd',
      //     '300': '#7dd3fc',
      //     '400': '#38bdf8',
      //     '500': '#0ea5e9',
      //     '600': '#0284c7',
      //     '700': '#0369a1',
      //     '800': '#075985',
      //     '900': '#0c4a6e',
      //     '950': '#082f49',
      // },
     
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

// 'amaranth': {
//   '50': '#fff1f4',
//   '100': '#ffe3e8',
//   '200': '#ffcbd8',
//   '300': '#ffa1b8',
//   '400': '#ff6d94',
//   '500': '#fa3972',
//   '600': '#e91f64',
//   '700': '#c40c4f',
//   '800': '#a40d49',
//   '900': '#8c0f45',
//   '950': '#4e0321',
// },
