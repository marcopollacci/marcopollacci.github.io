/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "98d5256e238606063773f3bd730e37cc"
  },
  {
    "url": "assets/cv_marco_pollacci.pdf",
    "revision": "3cd075f85ddc97db31bb465cf6fd77af"
  },
  {
    "url": "assets/favicon/android-icon-144x144.png",
    "revision": "4706c2d15685b90e613b8911a35dc37d"
  },
  {
    "url": "assets/favicon/android-icon-192x192.png",
    "revision": "51fcc12fda524f7814aa2ae9d1761a05"
  },
  {
    "url": "assets/favicon/android-icon-36x36.png",
    "revision": "325fcfcde3a6ac0e266b54998868ce69"
  },
  {
    "url": "assets/favicon/android-icon-48x48.png",
    "revision": "2920bff34bb54c08bab7460b8814f909"
  },
  {
    "url": "assets/favicon/android-icon-72x72.png",
    "revision": "c7d068d46f32d30cb98c7abab4cf7475"
  },
  {
    "url": "assets/favicon/android-icon-96x96.png",
    "revision": "6cefa3f739713d5316b1ffbca84b470d"
  },
  {
    "url": "assets/favicon/apple-icon-114x114.png",
    "revision": "fc4b2cc6a5ea639d67aef566c02d5d10"
  },
  {
    "url": "assets/favicon/apple-icon-120x120.png",
    "revision": "d88de38b21f050b60d6e0b94e2a04342"
  },
  {
    "url": "assets/favicon/apple-icon-144x144.png",
    "revision": "4706c2d15685b90e613b8911a35dc37d"
  },
  {
    "url": "assets/favicon/apple-icon-152x152.png",
    "revision": "59b2ebc7c35e709d0eb3933e1fc06b2a"
  },
  {
    "url": "assets/favicon/apple-icon-180x180.png",
    "revision": "e5060c6849898e2894ce141aa1b77ca5"
  },
  {
    "url": "assets/favicon/apple-icon-57x57.png",
    "revision": "86b0e50a64fce169279eae30abc66665"
  },
  {
    "url": "assets/favicon/apple-icon-60x60.png",
    "revision": "41fdecde5ac5ffa2b2c395ee1ec2271b"
  },
  {
    "url": "assets/favicon/apple-icon-72x72.png",
    "revision": "c7d068d46f32d30cb98c7abab4cf7475"
  },
  {
    "url": "assets/favicon/apple-icon-76x76.png",
    "revision": "47ffd68684fe28268d3ec496f7fd8a61"
  },
  {
    "url": "assets/favicon/apple-icon-precomposed.png",
    "revision": "d71c8597b422882c48b8afbd28ad65cd"
  },
  {
    "url": "assets/favicon/apple-icon.png",
    "revision": "d71c8597b422882c48b8afbd28ad65cd"
  },
  {
    "url": "assets/favicon/favicon-16x16.png",
    "revision": "89a07106b82537b5c0f51e66ee854b32"
  },
  {
    "url": "assets/favicon/favicon-32x32.png",
    "revision": "e26f71f8c0d02e2b30db10165feec23c"
  },
  {
    "url": "assets/favicon/favicon-96x96.png",
    "revision": "6cefa3f739713d5316b1ffbca84b470d"
  },
  {
    "url": "assets/favicon/favicon.ico",
    "revision": "223cf4ecf4afaa9c2d4698c8698d49f9"
  },
  {
    "url": "assets/favicon/manifest.json",
    "revision": "b58fcfa7628c9205cb11a1b2c3e8f99a"
  },
  {
    "url": "assets/favicon/ms-icon-144x144.png",
    "revision": "4706c2d15685b90e613b8911a35dc37d"
  },
  {
    "url": "assets/favicon/ms-icon-150x150.png",
    "revision": "537834c88d3af7b17657bc8550a59deb"
  },
  {
    "url": "assets/favicon/ms-icon-310x310.png",
    "revision": "6484697f55c3bb809b8e6e3db4528a91"
  },
  {
    "url": "assets/favicon/ms-icon-70x70.png",
    "revision": "74f7c290a30841df7ede5a1025e9d268"
  },
  {
    "url": "assets/icons/icon-128x128.png",
    "revision": "bdea26929eaa66b24980a9ad63047349"
  },
  {
    "url": "assets/icons/icon-144x144.png",
    "revision": "f3b718c48508359ac6d041f2e034075e"
  },
  {
    "url": "assets/icons/icon-152x152.png",
    "revision": "32ef128c809b6bfab7bc677f89d854f0"
  },
  {
    "url": "assets/icons/icon-192x192.png",
    "revision": "138a37cb2062ae5cc6e0d041bad665f0"
  },
  {
    "url": "assets/icons/icon-384x384.png",
    "revision": "de2a671e2f9eaa1dfec679cea2c53d69"
  },
  {
    "url": "assets/icons/icon-512x512.png",
    "revision": "de2a671e2f9eaa1dfec679cea2c53d69"
  },
  {
    "url": "assets/icons/icon-72x72.png",
    "revision": "af4c8c10bb69eb72829c3b9c3931a2ee"
  },
  {
    "url": "assets/icons/icon-96x96.png",
    "revision": "80beba34d4a5b5165db275e8d0a08b47"
  },
  {
    "url": "assets/img/avatar.png",
    "revision": "64f768b25a215d1a3dcbd266a185dcea"
  },
  {
    "url": "assets/img/dribbble.png",
    "revision": "56f0e46190c824a453a3a78ee7756108"
  },
  {
    "url": "assets/img/facebook.png",
    "revision": "a8b6348ba8072e54283ae276e328a5f2"
  },
  {
    "url": "assets/img/flickr-logo.png",
    "revision": "a01ea8febd85ac353fd074d3c16e9b66"
  },
  {
    "url": "assets/img/flickr.png",
    "revision": "a4c68144aa474fc60eb8aa4c8f353393"
  },
  {
    "url": "assets/img/github.png",
    "revision": "a0ab94c5c4d821e950038c65b1d44f13"
  },
  {
    "url": "assets/img/googleplus.png",
    "revision": "94b1457475f2f1d2af55c31e5a646e8a"
  },
  {
    "url": "assets/img/insta.png",
    "revision": "0f4f3c1cc30776dca472f633efe28eea"
  },
  {
    "url": "assets/img/instagram.png",
    "revision": "768af447271ebaebe260fa9260abbd40"
  },
  {
    "url": "assets/img/linkedin-shiny-icon-logo-5.png",
    "revision": "a061d0e330cec52abcb6cacaa17aadad"
  },
  {
    "url": "assets/img/twitter.png",
    "revision": "8903cb7e175af616d51f6dea2bf89257"
  },
  {
    "url": "assets/img/twitter3.png",
    "revision": "e405bdc6ab2dae3c738ba7511f704c0e"
  },
  {
    "url": "bootstrap-italia/dist/fonts/Lora/Lora-Bold.ttf",
    "revision": "eb2b8c98a8fc70a6cf461d7ead627e9e"
  },
  {
    "url": "bootstrap-italia/dist/fonts/Lora/Lora-Bold.woff",
    "revision": "d4d81e202ab1792a05eea0622fea3fb8"
  },
  {
    "url": "bootstrap-italia/dist/fonts/Lora/Lora-Regular.ttf",
    "revision": "c87345ceb65eb56514768c598074a102"
  },
  {
    "url": "bootstrap-italia/dist/fonts/Lora/Lora-Regular.woff",
    "revision": "06b572af3d54cd72dfaa0028e85b2880"
  },
  {
    "url": "bootstrap-italia/dist/fonts/Roboto_Mono/RobotoMono-Bold.ttf",
    "revision": "c0c4a33786b0278c385d0f647b57490f"
  },
  {
    "url": "bootstrap-italia/dist/fonts/Roboto_Mono/RobotoMono-Bold.woff",
    "revision": "318a89207d1d420efc6e3ba79e480732"
  },
  {
    "url": "bootstrap-italia/dist/fonts/Roboto_Mono/RobotoMono-Light.ttf",
    "revision": "b82d827ba127c43e9272942682b88dc3"
  },
  {
    "url": "bootstrap-italia/dist/fonts/Roboto_Mono/RobotoMono-Light.woff",
    "revision": "2e1268c05f81c25f9bea4405e76e9f1a"
  },
  {
    "url": "bootstrap-italia/dist/fonts/Roboto_Mono/RobotoMono-Medium.ttf",
    "revision": "5a45b286f59824f5d3b2d761871ced29"
  },
  {
    "url": "bootstrap-italia/dist/fonts/Roboto_Mono/RobotoMono-Medium.woff",
    "revision": "ca93e3a1150344bfc27506453f64b81d"
  },
  {
    "url": "bootstrap-italia/dist/fonts/Roboto_Mono/RobotoMono-Regular.ttf",
    "revision": "a48ac41620cd818c5020d0f4302489ff"
  },
  {
    "url": "bootstrap-italia/dist/fonts/Roboto_Mono/RobotoMono-Regular.woff",
    "revision": "a4b127a9e2c97d30fc3e39631d533dcd"
  },
  {
    "url": "bootstrap-italia/dist/fonts/Roboto_Mono/RobotoMono-Thin.ttf",
    "revision": "b93c2ad436ccb747ae415c1e865819a4"
  },
  {
    "url": "bootstrap-italia/dist/fonts/Roboto_Mono/RobotoMono-Thin.woff",
    "revision": "835f83267522324a6e6fb26b746e9249"
  },
  {
    "url": "bootstrap-italia/dist/fonts/Titillium_Web/TitilliumWeb-Black.ttf",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "bootstrap-italia/dist/fonts/Titillium_Web/TitilliumWeb-Black.woff",
    "revision": "539b9af6ea6fe4e99663f9b45ca5683a"
  },
  {
    "url": "bootstrap-italia/dist/fonts/Titillium_Web/TitilliumWeb-Bold.ttf",
    "revision": "a9f517c1ea874345a3951d5ec4ea545c"
  },
  {
    "url": "bootstrap-italia/dist/fonts/Titillium_Web/TitilliumWeb-Bold.woff",
    "revision": "156a79f7efa6213b9d4933024e80f37d"
  },
  {
    "url": "bootstrap-italia/dist/fonts/Titillium_Web/TitilliumWeb-ExtraLight.ttf",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "bootstrap-italia/dist/fonts/Titillium_Web/TitilliumWeb-ExtraLight.woff",
    "revision": "ef74e0b55ab434829ddcb4d814c902ef"
  },
  {
    "url": "bootstrap-italia/dist/fonts/Titillium_Web/TitilliumWeb-Light.ttf",
    "revision": "1615bb1c6d9f3aa65c1dc69444072f9a"
  },
  {
    "url": "bootstrap-italia/dist/fonts/Titillium_Web/TitilliumWeb-Light.woff",
    "revision": "b9f25e91023f39c84aad839b06a71f83"
  },
  {
    "url": "bootstrap-italia/dist/fonts/Titillium_Web/TitilliumWeb-Regular.ttf",
    "revision": "4f5848e6a415f5a4964a272d8b633164"
  },
  {
    "url": "bootstrap-italia/dist/fonts/Titillium_Web/TitilliumWeb-Regular.woff",
    "revision": "4c2bb99449e72688328d5e800131204c"
  },
  {
    "url": "bootstrap-italia/dist/fonts/Titillium_Web/TitilliumWeb-SemiBold.ttf",
    "revision": "600f2d0861eeddb39f0d8b0ff13ef59c"
  },
  {
    "url": "bootstrap-italia/dist/fonts/Titillium_Web/TitilliumWeb-SemiBold.woff",
    "revision": "b898230d289d9b1e0f861a9d9a383702"
  },
  {
    "url": "bootstrap-italia/dist/svg/sprite.svg",
    "revision": "370cd789b20170415a06e461fd54de4e"
  },
  {
    "url": "index.html",
    "revision": "ccd20b3d6c910c489a1d61f97b62ffa4"
  },
  {
    "url": "main-es2015.49d06056792655f1cdc8.js",
    "revision": "40c66aaa192c9e3f1d80e81d24539893"
  },
  {
    "url": "main-es5.49d06056792655f1cdc8.js",
    "revision": "02e94a77414ae1b447421b0e971bc80b"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "69b4d3678c00bf62e75501a191a09580"
  },
  {
    "url": "polyfills-es2015.379b9a67f474f2d93ef9.js",
    "revision": "07e03e65266e31961956467d1e731e7d"
  },
  {
    "url": "polyfills-es5.b8ea3827958e01125d44.js",
    "revision": "a39ef8b39aa23083b8d47b54ac8a82e9"
  },
  {
    "url": "runtime-es2015.a4dadbc03350107420a4.js",
    "revision": "1244d3f2f28ecc6619157927aca95200"
  },
  {
    "url": "runtime-es5.a4dadbc03350107420a4.js",
    "revision": "1244d3f2f28ecc6619157927aca95200"
  },
  {
    "url": "scripts.6f7ee637089a46f94ef5.js",
    "revision": "9cdba089427000371fc3f18d7d41c1fe"
  },
  {
    "url": "styles.8cbdd040066d0edb2488.css",
    "revision": "d55192d2b894ddab955dbddaebccc262"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"));
