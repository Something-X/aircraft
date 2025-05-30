import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
             keyframes: {
             slideInFromLeft: {
             '0%': { transform: 'translateX(-100%)', opacity: '0' },
             '100%': { transform: 'translateX(-70%)', opacity: '1' },
             },
              fadeInUp: {
             '0%': { opacity: 0, transform: 'translateY(20px)' },
             '100%': { opacity: 1, transform: 'translateY(0)' },
             },
           },
             animation: {
             slideInFromLeft: 'slideInFromLeft 2s ease-out forwards',
             fadeInUp: 'fadeInUp 0.8s ease-out forwards',
             fadeInUpDelay: 'fadeInUp 0.8s ease-out forwards 0.4s',
             fadeInUpDelay2: 'fadeInUp 0.8s ease-out forwards 0.8s',
           },
        },
    },

    plugins: [forms],
};
