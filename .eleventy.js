module.exports = function(eleventyConfig){


    eleventyConfig.setTemplateFormats([
        "pdf",
        "md",
        "njk",
        "css"
      ]);

      eleventyConfig.addPassthroughCopy("img");
      eleventyConfig.addPassthroughCopy("fonts");
      eleventyConfig.addPassthroughCopy("js");
      eleventyConfig.addPassthroughCopy("css");
    

    return {
        markdownTemplateEngine: "njk",    
    dir: {
        layouts: "_layouts"

    },
    }
    
   
};