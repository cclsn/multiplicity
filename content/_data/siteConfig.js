const packageJson = require("../../package.json");

module.exports = {
  title: "Multiplicity",
  description: "Eleventy-based RSS/JSON feed aggregator",
  author: "Multiple Authors",
  url: "https://eleventy-m10y.lkmt.us/",
  github: {
    project: "https://github.com/lwojcik/eleventy-template-multiplicity",
  },
  userAgent: "m10y-https://eleventy-m10y.lkmt.us",
  generator: {
    name: "Eleventy",
    version: packageJson.dependencies["@11ty/eleventy"].replace("^", ""),
  },
  dateFormats: {
    readable: "d LLL yyyy", // date format used alongside posts
  },
  maxPostLength: 200, // How many characters per each post excerpt?
  maxItemsPerFeed: 20, // How many items should be fetched from each feed?
  logPrefix: "11ty-template-multiplicity", // prefix used to denote console logs generated by the template
  localCacheDuration: "7d", // For how long should network calls be cached locally? See https://www.11ty.dev/docs/plugins/fetch/#change-the-cache-duration
  cacheDirectory: ".cache", // location to store cached feed data. Change this to any other writable location if needed
  cacheDryRun: false, // change to true to disable caching entirely
  defaultArticleTitle: "Untitled", // placeholder for missing / non-existent article titles. Set to false to disable displaying titles entirely
  verbose: false, // set to true to enable additional logging messages during the build process
  clickableDescriptions: false // set to true if you want whole articles to be clickable. With false, only article titles are clickable
};
