/** @type {import("prettier").Config} */
export default {
    plugins: ['prettier-plugin-astro'],
    overrides: [
        {
            files: ['*.astro', '*.mdx'],
            options: {
                parser: 'astro',
                tabWidth: 4,
            }
        },
        {
            files: ['src/**/*.ts'],
            options: {
                tabWidth: 4,
            }
        }
    ]
};