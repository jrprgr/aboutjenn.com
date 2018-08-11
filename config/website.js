const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: "Jenn's Portfolio", // Navigation and Site Title
  siteTitleAlt: 'Jenn', // Alternative Site title for SEO
  siteUrl: 'https://www.aboutjenn.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: "Jenn's Portfolio" ,

  siteFBAppID: '', // Facebook App ID
  userTwitter: '', // Twitter Username
  ogSiteName: "Jenn's Portfolio", // Facebook Site Name
  ogLanguage: 'de_DE', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
