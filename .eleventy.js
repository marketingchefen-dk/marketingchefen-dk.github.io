module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/favicon/*": "/" });
  eleventyConfig.addPassthroughCopy({ "src/images/*": "/images/" });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};