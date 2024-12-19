module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/favicon/*": "/" });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};