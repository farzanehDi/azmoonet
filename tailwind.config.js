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
                "200":'#9c9c9c',
            },
            dark: {
                DEFAULT: '#000000',
                "200":'#343434',
                "300":'#464545',
            },
            orange: {
                DEFAULT: '#ea5b27',
                light: '#f4b641',
            },
            green: {
                DEFAULT: '#0a5f1c',
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
