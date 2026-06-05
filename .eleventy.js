module.exports = function(eleventyConfig){

// Copy NYSDS CSS from node_modules into the compile css files
eleventyConfig.addPassthroughCopy({
    "./node_modules/@nysds/styles/dist/nysds-full.min.css": "css/nysds-full.min.css"
});

// Copy NYSDS JS from node_modules into the compile js files
eleventyConfig.addPassthroughCopy({
    "./node_modules/@nysds/components/dist/nysds-full.min.js": "js/nysds-full.min.js"
});

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