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
    "revision": "6b09e3fc022a496de0ba0331af60f0a6"
  },
  {
    "url": "about/index.html",
    "revision": "1812ee0d48e598dfc30543f001600be8"
  },
  {
    "url": "assets/css/0.styles.ec5334b5.css",
    "revision": "af9039551113e915f9013ab214c61459"
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
    "url": "assets/js/10.89f811b8.js",
    "revision": "a6bf83744f1a9b732648fd3033a4812e"
  },
  {
    "url": "assets/js/11.0e190245.js",
    "revision": "d4064a03071dc1d165be69f2a8b8bf09"
  },
  {
    "url": "assets/js/12.13a8ea5f.js",
    "revision": "03a10cf4bf0bbf66ab78eb365f6172da"
  },
  {
    "url": "assets/js/13.8f8f40c0.js",
    "revision": "94e8a44a3480081199b56984cb56276f"
  },
  {
    "url": "assets/js/14.e75033fb.js",
    "revision": "0168165c67e67566edb97121879084f1"
  },
  {
    "url": "assets/js/15.205f722e.js",
    "revision": "17f7d9c98b97a4a8965b8ca716af0950"
  },
  {
    "url": "assets/js/16.66673bf2.js",
    "revision": "028b8dc4394eef59f03dac0485a26934"
  },
  {
    "url": "assets/js/17.5435c650.js",
    "revision": "224fb8ec6b4c5c26c2ff3eec7cd69be6"
  },
  {
    "url": "assets/js/18.71b2c1fb.js",
    "revision": "d5b7a49b85d5488c63bbe47992479926"
  },
  {
    "url": "assets/js/19.5f8b3901.js",
    "revision": "9efed52f9095dee8b446cc0c05ab3419"
  },
  {
    "url": "assets/js/2.63f3f567.js",
    "revision": "b5dfbc5b27704c3879bc3a9560011263"
  },
  {
    "url": "assets/js/20.bb4d6477.js",
    "revision": "cef64abe02a79630cfd46d1b72acbfd9"
  },
  {
    "url": "assets/js/21.d59072e9.js",
    "revision": "be15d4ff3a9959f7e7bb319ac816b699"
  },
  {
    "url": "assets/js/22.4d0029c9.js",
    "revision": "d67cab611bba5805e432314f596b9b85"
  },
  {
    "url": "assets/js/23.03a51856.js",
    "revision": "218ac7171931c78a523517a2275ee077"
  },
  {
    "url": "assets/js/24.351ac71c.js",
    "revision": "fd9fb3d86b4451ee2f85f7f38c224cc1"
  },
  {
    "url": "assets/js/25.fcd7cac4.js",
    "revision": "956f8fbd3726df04dd3a2c54940ef1e6"
  },
  {
    "url": "assets/js/26.b2613bc7.js",
    "revision": "732ccbf42537362ff9596150ad49dff8"
  },
  {
    "url": "assets/js/27.164921bf.js",
    "revision": "aceba1c49a1ad634135ecbf3c7600d07"
  },
  {
    "url": "assets/js/28.0251e2b8.js",
    "revision": "ea3a9339188bb40025b8e4522ace5deb"
  },
  {
    "url": "assets/js/29.da86b351.js",
    "revision": "6491f9c9d6630d35ae1a3dcb97918ffd"
  },
  {
    "url": "assets/js/3.67263ba4.js",
    "revision": "3fa0818c67c0cce4fabfa833e0699b15"
  },
  {
    "url": "assets/js/30.deb53385.js",
    "revision": "6d4f11fefe8168a36493764643af8e3a"
  },
  {
    "url": "assets/js/31.60246431.js",
    "revision": "103a8702743a08bcb480a83d26c90c38"
  },
  {
    "url": "assets/js/32.88b0ca03.js",
    "revision": "32638c84de9af711821c1ac45f0041a0"
  },
  {
    "url": "assets/js/33.49d346dd.js",
    "revision": "74a963edae66e861eb55cb1c33fac7d8"
  },
  {
    "url": "assets/js/34.04b2e52e.js",
    "revision": "a981a554b5cd01560263e78efee8a6a1"
  },
  {
    "url": "assets/js/35.a9c5bc55.js",
    "revision": "74c63c572887b86fbb3e0afed1ee28c7"
  },
  {
    "url": "assets/js/36.7c2c67e1.js",
    "revision": "819e4a3e637fccfdca751c1552e78e4f"
  },
  {
    "url": "assets/js/37.ebb59915.js",
    "revision": "b7843901cc88103d7ef5d7c2bad74b0f"
  },
  {
    "url": "assets/js/38.8597b6ef.js",
    "revision": "e778bacaa3a51f36a74978f14b5b081e"
  },
  {
    "url": "assets/js/39.50923ae2.js",
    "revision": "a288f638d913b5cb7bbfba04a7368b37"
  },
  {
    "url": "assets/js/4.287bab32.js",
    "revision": "183c32098962a0e249bd4a912e8ad919"
  },
  {
    "url": "assets/js/40.483fa3c9.js",
    "revision": "65cc2d43ff393f40ee108ffe5b36ba45"
  },
  {
    "url": "assets/js/5.ce17c05f.js",
    "revision": "6f5d775dd17c294205300f918f4a7654"
  },
  {
    "url": "assets/js/6.6b7bba6e.js",
    "revision": "8264640f9b1863632526de28e3837f54"
  },
  {
    "url": "assets/js/7.02ebcd87.js",
    "revision": "82b3dbbc3342b3999fb37addf92f5fd8"
  },
  {
    "url": "assets/js/8.6b440de9.js",
    "revision": "69c06f5f4e73dcc185570cc095226cf6"
  },
  {
    "url": "assets/js/9.da60ceff.js",
    "revision": "2e4e0cc5635ce5055498956f3afc8841"
  },
  {
    "url": "assets/js/app.fbf1b08b.js",
    "revision": "729e0e506f2c8031d78c870f5e675592"
  },
  {
    "url": "img/logo.jpeg",
    "revision": "d76114559a4051b25790e629b997acbb"
  },
  {
    "url": "index.html",
    "revision": "5e8658bf5e6567a433d87f4820a0f30c"
  },
  {
    "url": "life/2019-06-21.html",
    "revision": "f7f7f13d4eb1392bad3fe6d18f0e15e1"
  },
  {
    "url": "life/index.html",
    "revision": "e58161aa658d91e696d6c1d5f0dceddf"
  },
  {
    "url": "massage/index.html",
    "revision": "16ca72e9fd935fd365872e6836b7f215"
  },
  {
    "url": "ponder/2019-09-05.html",
    "revision": "e7edaf72fde07c42a94fb3f835bd8c32"
  },
  {
    "url": "ponder/2019-09-10.html",
    "revision": "dca4ce80843e77408cd39dd775e1e681"
  },
  {
    "url": "ponder/2019-09-28.html",
    "revision": "7f493ab59403c25f3658a0cd2b82ecc2"
  },
  {
    "url": "ponder/2019-10.31.html",
    "revision": "dc7a98f774229ae0610580c3ee969b62"
  },
  {
    "url": "ponder/index.html",
    "revision": "a1ac20183120b86d711ce7c65ed47d3e"
  },
  {
    "url": "tags/index.html",
    "revision": "d65c3ca22a9515fc52f22c99eb42c33f"
  },
  {
    "url": "technology/2019-06-21.html",
    "revision": "1e7f72a660f3032052e854ea93644ab4"
  },
  {
    "url": "technology/2019-06-27.html",
    "revision": "69e179d2c6055b4b423fcd109bd4f05a"
  },
  {
    "url": "technology/2019-06-28.html",
    "revision": "48dfeb64553c0a7aab91aa48a8ea8b98"
  },
  {
    "url": "technology/2019-07-08.html",
    "revision": "39d1a8db72a869b79dcd0ab7bef95978"
  },
  {
    "url": "technology/2019-07-16.html",
    "revision": "cbdb1e85fd0454cfecef2b92ebf861eb"
  },
  {
    "url": "technology/2019-07-17.html",
    "revision": "f50e785d2b81a3ff3eb028f7627d573f"
  },
  {
    "url": "technology/2019-07-19.html",
    "revision": "13c52e889c85cd4f059be5a5e36c1fb7"
  },
  {
    "url": "technology/2019-08-23.html",
    "revision": "402e28b718b9fbeebccb4ba4fe919187"
  },
  {
    "url": "technology/2019-09-04.html",
    "revision": "e88e49226b214dc70fd4b33ad404c217"
  },
  {
    "url": "technology/2019-09-10.html",
    "revision": "d7146b2b926f6a59cf9cddce3394c413"
  },
  {
    "url": "technology/2019-09-15.html",
    "revision": "8b0cba649fe71bb5124fbf72d7fb6e6f"
  },
  {
    "url": "technology/2019-09-22.html",
    "revision": "3e45546db23a71c2073b7f5cb43e9c74"
  },
  {
    "url": "technology/2019-09-23.html",
    "revision": "71678ff187726cac9ca152acf5980077"
  },
  {
    "url": "technology/2020-03-17.html",
    "revision": "9d62c74d1d20e0ab7e69e3320486b120"
  },
  {
    "url": "technology/2020-08-05.html",
    "revision": "b28a47fa4601d28b00d79e0c146e5017"
  },
  {
    "url": "technology/index.html",
    "revision": "f3edc1377fe96e26f23678a9b62c7699"
  },
  {
    "url": "timeLine/index.html",
    "revision": "7a2bde6ebdb53413818ee823e6a5a612"
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
