/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: { ink: "#000000", line: "#1a1a20", brand: "#e22424" },
      fontFamily: {
        sans: ['ui-sans-serif','system-ui','-apple-system','BlinkMacSystemFont','"Segoe UI"','Helvetica Neue','Arial','"PingFang SC"','"Microsoft YaHei"','sans-serif'],
        mono: ['ui-monospace','SFMono-Regular','Menlo','Consolas','monospace']
      }
    }
  },
  plugins: []
}
