module.exports = {
    "maximumFileSizeToCacheInBytes": 5 * 1024 * 1024,
    "globDirectory": "docs",
    "globPatterns": [
      "**/*.{css,eot,svg,ttf,woff,json,png,gif,ico,woff2work,js,html,webmanifest}"
    ],
    "swDest": "docs/service-worker.js",
    skipWaiting: true,
    clientsClaim: true,
    navigateFallback: "/index.html"
  };