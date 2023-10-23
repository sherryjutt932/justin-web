/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'ClashDisplayR': ['ClashDisplay-Regular', 'system-ui'],
      'ClashDisplayM': ['ClashDisplay-Medium', 'system-ui'],
      'ClashDisplayB': ['ClashDisplay-Bold', 'system-ui'],
      'ClashDisplaySB': ['ClashDisplay-SemiBold', 'system-ui'],
      'NohemiT': ['Nohemi-Thin', 'system-ui'],
      'NohemiEL': ['Nohemi-ExtraLight', 'system-ui'],
      'NohemiL': ['Nohemi-Light', 'system-ui'],
      'NohemiR': ['Nohemi-Regular', 'system-ui'],
      'NohemiM': ['Nohemi-Medium', 'system-ui'],
      'NohemiB': ['Nohemi-Bold', 'system-ui'],
      'NohemiSB': ['Nohemi-SemiBold', 'system-ui'],
      'NohemiBL': ['Nohemi-Black', 'system-ui'],
    },
    extend: {
      colors: {
        // normal: {
        //   DEFAULT: '#fff',
        //   hover: '#e7e7e7',
        //   text: '#222',
        //   outline: "#adafbc",
        //   shadow: "#b3b3b9",
        //   border: "#222",
        // },
        "main": "#EAEAEA",
        "sec": "#FF2626",
        "dark": "#000000",
        "light": "#ffffff"
      },
    },
  },
  plugins: [],
}

