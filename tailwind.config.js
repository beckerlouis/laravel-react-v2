import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'node_modules/flowbite-react/lib/esm/**/*.js',
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/react/**/*.tsx',
  ],

  theme: { extend: { fontFamily: { sans: [ 'Roboto', ...defaultTheme.fontFamily.sans ]}}},

  plugins: [ require('flowbite/plugin') ],
};
