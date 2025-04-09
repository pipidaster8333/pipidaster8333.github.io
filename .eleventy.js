// const addFilters = require('jekyll-liquid-filters');

module.exports = function(eleventyConfig) {
	// https://github.com/jekyll/jekyll/tree/master/lib/jekyll/filters
	// addFilters(eleventyConfig);

	// Turn off filename quoting in include tags
	eleventyConfig.setLiquidOptions({
		dynamicPartials: false
	});

	// Alias each layout file
	
	eleventyConfig.addLayoutAlias('blog', 'layouts/blog.html');
	
	eleventyConfig.addLayoutAlias('default', 'layouts/default.html');
	
	eleventyConfig.addLayoutAlias('home', 'layouts/home.html');
	
	eleventyConfig.addLayoutAlias('post', 'layouts/post.html');
	

	// Add collections
	

	// Copy the `assets` directory to the compiled site folder
	eleventyConfig.addPassthroughCopy('assets');
	
	return {
		dir: {
			input: './',
			output: './_site'
		},
		passthroughFileCopy: true
	};
};
