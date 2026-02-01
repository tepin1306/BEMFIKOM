/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            colors: {
                brand: {
                    blue: '#3b82f6',
                    cyan: '#22d3ee',
                    purple: '#a855f7',
                    dark: '#020617',
                    glass: '#0f172a',
                }
            },
            fontFamily: {
                plus: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                mono: ['ui-monospace', 'SFMono-Regular', 'Roboto Mono', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
            }
        },
    },
    plugins: [],
}
