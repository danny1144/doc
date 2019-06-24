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
    "revision": "e14f837b50fa3d6024960968e7f0a4d4"
  },
  {
    "url": "about/index.html",
    "revision": "7fa708099df5eb33d6cc19c4fcb610ef"
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
    "url": "assets/js/10.e318fc11.js",
    "revision": "6bec31eba04af376550ebd62e2647ec5"
  },
  {
    "url": "assets/js/11.8c37c994.js",
    "revision": "3b371031a3b72b65eb4ddca2d071c6d3"
  },
  {
    "url": "assets/js/12.e9cf4945.js",
    "revision": "566b5cff0ea0d56f2ffaf6dcd03b2501"
  },
  {
    "url": "assets/js/13.9bdef388.js",
    "revision": "d49fbcc665403daf0b2e3b9b9b6e166c"
  },
  {
    "url": "assets/js/14.00f01860.js",
    "revision": "88d4b94e6baf9461a8165878485cc83c"
  },
  {
    "url": "assets/js/15.047f3050.js",
    "revision": "12175b86319114c1c0868ed8282a5149"
  },
  {
    "url": "assets/js/16.455eacb0.js",
    "revision": "438cf8812ee79395780e2716cef91972"
  },
  {
    "url": "assets/js/17.d720ecc7.js",
    "revision": "ce8ba2cc6737f70399704378166d4178"
  },
  {
    "url": "assets/js/18.bbe7c25d.js",
    "revision": "cf60d8bc1381c607d0656d1eaff3592e"
  },
  {
    "url": "assets/js/19.50b11d97.js",
    "revision": "125c241106f0c8ba2a4d417e5c7c55d8"
  },
  {
    "url": "assets/js/2.945cf730.js",
    "revision": "7cdebf4d6cf5e7139c3a629267239008"
  },
  {
    "url": "assets/js/3.91ef2cbf.js",
    "revision": "000625f82c6f6b4e3467e0a6e60ac7a5"
  },
  {
    "url": "assets/js/4.0e8d6289.js",
    "revision": "377c5859f3381632f273f53dddadeeab"
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
    "url": "assets/js/8.c9c5c7ae.js",
    "revision": "07659bfd02b77a7e9a3ad0663bad9ee9"
  },
  {
    "url": "assets/js/9.febe774a.js",
    "revision": "98067c78446a3fc883e1197aaf9b937d"
  },
  {
    "url": "assets/js/app.9b8d04a5.js",
    "revision": "0b2fc0be6e56aa20e0b645dcb164e512"
  },
  {
    "url": "img/logo.jpeg",
    "revision": "d76114559a4051b25790e629b997acbb"
  },
  {
    "url": "index.html",
    "revision": "383bfdccbb49416f5e19b20382952fa0"
  },
  {
    "url": "life/2019-06-21.html",
    "revision": "a43fa9c52f2e4b686bd3b801f319277c"
  },
  {
    "url": "life/index.html",
    "revision": "04485cb8bc4a1445146052e0cf1af0b9"
  },
  {
    "url": "massage/index.html",
    "revision": "bf12bdd2f27b834aeccfe64bd06d448d"
  },
  {
    "url": "ponder/index.html",
    "revision": "9144c8f97c931221990e810a954709cc"
  },
  {
    "url": "tags/index.html",
    "revision": "8eef80d0b22cee235c4d5c196688e9d6"
  },
  {
    "url": "technology/2019-06-21.html",
    "revision": "80792f51e5c8703f576254186a4e52e7"
  },
  {
    "url": "technology/index.html",
    "revision": "3250f2253abc16523594fa16a593ba6b"
  },
  {
    "url": "timeLine/index.html",
    "revision": "855ae334d52a9dc81dc0fb8a4033d6c2"
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
