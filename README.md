Setup steps

1. npm init -y
    To initiallize the directory for NodeJs
2. npm install -D tailwindcss postcss autoprefixer
    Install the required Packages
3. npx tailwindcss init -p
    postcss.config.js will contain the following:
    module.exports = {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        }
    }
4. Add tailwind.config.js
    module.exports = {
        content: ['*'],
        theme: {
            extend: {},
        },
        plugins: [],
    }
5. create any source and destination folder
    src/styles.css
        @tailwind base;
        @tailwind components;
        @tailwind utilities;

    css/styles.css (create a empty folder)
6. Update package.json file
    "scripts": {
        "build": "tailwindcss build ./src/styles.css -o ./css/styles.css -w --verbose"
    },
7. Add the output style sheet link in index.html
    <link rel="stylesheet" media="screen" href="./assets/css/styles.css" >
8. To run project type
    npm run build
