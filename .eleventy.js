module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/js/");
  eleventyConfig.addPassthroughCopy("./src/img/");
  eleventyConfig.addPassthroughCopy("./src/images/");
  eleventyConfig.addPassthroughCopy("./src/slider-images/");
  eleventyConfig.addPassthroughCopy("./src/css/main.css");
  
  // Add .nojekyll file to disable Jekyll processing on GitHub Pages
  eleventyConfig.addPassthroughCopy({
    "src/_nojekyll": ".nojekyll"
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};
