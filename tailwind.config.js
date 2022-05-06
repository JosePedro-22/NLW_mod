module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors:{
        brand:{
          300: "#FDB487",
          500: '#FF914D',
        },
      },
      borderRadius: {
        md: "4px",
      },
    },
  },
  plugins:  [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
}