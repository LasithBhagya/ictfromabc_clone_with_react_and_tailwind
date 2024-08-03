/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                dark0: 'var(--dark0)',
                dark1: 'var(--dark1)',
                dark1x: 'var(--dark1x)',
                dark1t: 'var(--dark1t)',
                dark2: 'var(--dark2)',
                dark2x: 'var(--dark2x)',
                dark3: 'var(--dark3)',
                dark4: 'var(--dark4)',
                dark5: 'var(--dark5)',
                light1: 'var(--light1)',
                light2: 'var(--light2)',
                light3: 'var(--light3)',
                light4: 'var(--light4)',
                light5: 'var(--light5)',
                light6: 'var(--light6)',
                light7: 'var(--light7)',
                red1: 'var(--red1)',
                red1x: 'var(--red1x)',
                red2: 'var(--red2)',
                red2x: 'var(--red2x)',
                red3: 'var(--red3)',
                green1: 'var(--green1)',
            },
            rotate: {
                '120': '120deg',
            },
            screens: {
                'minh': { 'raw': '(min-height: 1000px)' },
            },
        },
        fontFamily: {
            'fredoka': ['Fredoka'],
            'cursive': ['cursive'],
            'monospace': ['monospace'],
            'sans': ['sans-serif'],
        },
    },
    plugins: [],
}

