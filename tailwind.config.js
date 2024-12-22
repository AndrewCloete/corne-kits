module.exports = {
    content: ["./index.html"], // Specify the files to scan for Tailwind classes
    theme: {
        extend: {
            fontFamily: {
                mono: ['"JetBrains Mono"', "monospace"],
            },
            colors: {
                facebook: '#1877f2',
                'facebook-dark': '#145dbf',
              },
        },
    },
    plugins: [],
};
