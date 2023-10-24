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
      'Satoshi': ['Satoshi-Regular', 'system-ui'],
        'Satoshi-Light': ['Satoshi-Light', 'system-ui'],
        'Satoshi-Medium': ['Satoshi-Medium', 'system-ui'],
        'Satoshi-Bold': ['Satoshi-Bold', 'system-ui'],
        'Satoshi-Black': ['Satoshi-Black', 'system-ui'],
    },
    extend: {
      colors: {
        gray: {
          DEFAULT: '#595959',
          "79": '#797979',
          'c5':'#C5C5C5'
        },
        "main": "#EAEAEA",
        "sec": "#FF2626",
        "dark": "#000000",
        "light": "#ffffff"
      },
    },
  },
  plugins: [],
}

