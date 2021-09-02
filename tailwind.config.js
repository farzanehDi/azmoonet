module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                'sans': ['yekan', 'Arial', 'sans-serif']
            }
        },
        colors: {
            gold: {
                DEFAULT: '#fcc91b',
                "300":'#f7b121',
           },
            light: {
                DEFAULT: '#ffffff',
            },
            dark: {
                DEFAULT: '#000000',
                "300":'#343434'

            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [   ({ addComponents, theme }) => {
        addComponents({
            ".container": {
                // Breakpoints
                "@screen sm": {
                    maxWidth: theme("screens.md"),
                },
                "@screen md": {
                    maxWidth: theme("screens.xl"),
                },
            },
        });
    },],
}
