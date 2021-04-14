
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['b8GBhp4v58Jd3xYumTKCHY'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  