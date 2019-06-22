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
    "revision": "2b282481dc00c5e9732c46562f2a9538"
  },
  {
    "url": "about/index.html",
    "revision": "ee88447b43209baf32a9d1a6d7e42bfa"
  },
  {
    "url": "assets/css/0.styles.c64eb42f.css",
    "revision": "bf89f1642774688c4b52d837745f9f3a"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
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
    "url": "assets/js/16.56e17172.js",
    "revision": "703185189d3ef2b2e06a68bcbbcc0927"
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
    "url": "assets/js/2.af16cb48.js",
    "revision": "7cdebf4d6cf5e7139c3a629267239008"
  },
  {
    "url": "assets/js/3.ae1edefa.js",
    "revision": "000625f82c6f6b4e3467e0a6e60ac7a5"
  },
  {
    "url": "assets/js/4.4b2e749c.js",
    "revision": "377c5859f3381632f273f53dddadeeab"
  },
  {
    "url": "assets/js/5.23ca8b95.js",
    "revision": "ef1d282f489cc50aba7b6dab8ba48621"
  },
  {
    "url": "assets/js/6.617a445e.js",
    "revision": "d3cef8e55799ac8736f29a707bd499f6"
  },
  {
    "url": "assets/js/7.2762017d.js",
    "revision": "6577d245f0c0fddad33d3f72466e4915"
  },
  {
    "url": "assets/js/8.0371e81a.js",
    "revision": "07659bfd02b77a7e9a3ad0663bad9ee9"
  },
  {
    "url": "assets/js/9.febe774a.js",
    "revision": "98067c78446a3fc883e1197aaf9b937d"
  },
  {
    "url": "assets/js/app.d08fdf74.js",
    "revision": "6f270475193517df1eb8387b43845700"
  },
  {
    "url": "img/logo.jpeg",
    "revision": "d76114559a4051b25790e629b997acbb"
  },
  {
    "url": "index.html",
    "revision": "9f9790e7e2f9a050f5e57905942f18c8"
  },
  {
    "url": "life/2019-06-21.html",
    "revision": "f9c56d56f849790f3e5d5dfa5618e92b"
  },
  {
    "url": "life/index.html",
    "revision": "6411fbea8454f43f9ea0eb782e5be7cc"
  },
  {
    "url": "massage/index.html",
    "revision": "5d89198e2f2460bcf5bd8679693de6a8"
  },
  {
    "url": "ponder/index.html",
    "revision": "55ca850e922a69d38463660d04448ca7"
  },
  {
    "url": "tags/index.html",
    "revision": "61c54f08f15122fb3c3fc95490fc56a9"
  },
  {
    "url": "technology/2019-06-21.html",
    "revision": "f94aff05347fd3e830714f2a48c37a94"
  },
  {
    "url": "technology/index.html",
    "revision": "d5ea251cfd6454783e0d8df9806f2e10"
  },
  {
    "url": "timeLine/index.html",
    "revision": "8eebda0dc9c3bea7f8ecfd2ce8fc8df7"
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
