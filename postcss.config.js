module.exports = {
    plugins: [
    	require('postcss-node-sass'),
    	require('postcss-clean'),
    	require('postcss-gradient-transparency-fix'),
        require('autoprefixer')({
        	"overrideBrowserslist": "last 2 versions"
        }),
        require('cssnano')({
            preset: 'default',
        }),
        require('postcss-hash')({
        	trim	: 8,
        	manifest: './dist/manifest.css.json'
        })
    ],
};