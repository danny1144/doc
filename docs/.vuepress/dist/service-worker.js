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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e43efe87518dddaa74329211a107cf85"
  },
  {
    "url": "about/index.html",
    "revision": "45daa779bd95d6023c89d4a3a3a6faee"
  },
  {
    "url": "assets/css/0.styles.2fe02907.css",
    "revision": "c0b61e9efc4a97f6859cff9b854b4739"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.03a003a9.js",
    "revision": "a31e67204c3348c617d25b542dda29dd"
  },
  {
    "url": "assets/js/11.8c37c994.js",
    "revision": "3b371031a3b72b65eb4ddca2d071c6d3"
  },
  {
    "url": "assets/js/12.5837184e.js",
    "revision": "8bd440ce6d7f7fd6ff6e0388df8be0d0"
  },
  {
    "url": "assets/js/13.ac10c7fc.js",
    "revision": "f7fa09a24f6fafb83eaec6f24bd70fee"
  },
  {
    "url": "assets/js/14.daead8d6.js",
    "revision": "132290f446c51c8af84ce693eb61a90d"
  },
  {
    "url": "assets/js/15.e72c7a32.js",
    "revision": "db172e4862e2a3900ebc3148db39f055"
  },
  {
    "url": "assets/js/16.cc6e6174.js",
    "revision": "b8d65a56c4da0255fca2a103e9b391ec"
  },
  {
    "url": "assets/js/17.0ac7767f.js",
    "revision": "52ae93ac5b28b274d540175eac762b70"
  },
  {
    "url": "assets/js/18.daade532.js",
    "revision": "33ea2d03d2047eba891698656a5f1081"
  },
  {
    "url": "assets/js/19.2b78ee78.js",
    "revision": "3b978c6889e9ff48d90a3481a94f960a"
  },
  {
    "url": "assets/js/2.efa39bfc.js",
    "revision": "3fae7e2340aea3e607b6ce1712264929"
  },
  {
    "url": "assets/js/20.97e7aa8f.js",
    "revision": "9c8c8f658035eab3a0800883d23e34e4"
  },
  {
    "url": "assets/js/3.4db53525.js",
    "revision": "5e8dfaeb5e387024e72e4c7f311a25fe"
  },
  {
    "url": "assets/js/4.959a1d94.js",
    "revision": "7fc3a2da90e187a79bff561a28eb8cb7"
  },
  {
    "url": "assets/js/5.23ca8b95.js",
    "revision": "ef1d282f489cc50aba7b6dab8ba48621"
  },
  {
    "url": "assets/js/6.5e40a74d.js",
    "revision": "d3cef8e55799ac8736f29a707bd499f6"
  },
  {
    "url": "assets/js/7.0b3bba1b.js",
    "revision": "069b75176be0c1624c0690b3c56c7f86"
  },
  {
    "url": "assets/js/8.cc98b897.js",
    "revision": "f6259094176c3e8f42d04a4ab9303852"
  },
  {
    "url": "assets/js/9.2186f9d5.js",
    "revision": "665c860de9d900df96032a8743e46881"
  },
  {
    "url": "assets/js/app.58c18483.js",
    "revision": "6529302ab31d0bbc71bf808e51c859d4"
  },
  {
    "url": "img/logo.jpeg",
    "revision": "d76114559a4051b25790e629b997acbb"
  },
  {
    "url": "index.html",
    "revision": "d55668c42054f72daa415dae87c71536"
  },
  {
    "url": "life/2019-06-21.html",
    "revision": "af937650ebabae5b4bdfef08e63d1a08"
  },
  {
    "url": "life/index.html",
    "revision": "a23ba5d92179bcbe8aacd91d1cfe3caf"
  },
  {
    "url": "massage/index.html",
    "revision": "fd38335325c19e5fffe1ef29cf47f8bf"
  },
  {
    "url": "ponder/index.html",
    "revision": "2394221f021acf5fe47223b9b32ea945"
  },
  {
    "url": "tags/index.html",
    "revision": "93d4b8258c8c410e1ef67887a3b4d01b"
  },
  {
    "url": "technology/2019-06-21.html",
    "revision": "c9b2f0ee678fc5f0605bc3e53892b836"
  },
  {
    "url": "technology/2019-06-27.html",
    "revision": "48f2a2eefc6ff4d891df7f4d758a53dd"
  },
  {
    "url": "technology/index.html",
    "revision": "fa58c07b99ed076bc04981edea4f3d1f"
  },
  {
    "url": "timeLine/index.html",
    "revision": "689ff4d71c555bd24e2dc7d63ecb5127"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
