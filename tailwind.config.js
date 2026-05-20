/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                blinkit: {
                    green: '#0c831f',
                    yellow: '#f7d117',
                    light: '#f8f8f8',
                }
            }
        },
    },
    plugins: [],
}
