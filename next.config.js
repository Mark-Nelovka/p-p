const withVideos = require("next-videos");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([withVideos], {
  images: {
    domains: [`ibb.co`, "i.ibb.co", "i.vimeocdn.com"],
  },
});
