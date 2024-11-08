'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "39cb8914eabf8d72cfb3ce454fbb5b43",
"assets/AssetManifest.json": "8f1d18d9c7afede58795927e350bf09b",
"assets/assets/fonts/AXtSAlwaBoldItalic.ttf": "250451f5c09c52b5715ffbde12d2b7b6",
"assets/assets/images/40.png": "adce5dc5043efd4c333247fceb909cb9",
"assets/assets/images/40m.png": "8329b03f9d90ee0bea24d7eb009f83b7",
"assets/assets/images/40_1.png": "601fe0cfddb7b14aa0ebf607e977c17b",
"assets/assets/images/40_1m.png": "c68bc1b8e7fd48e7f68eff88fb87133c",
"assets/assets/images/41_0.png": "41824aa44d1c5384260dd41c43ddefac",
"assets/assets/images/41_1.png": "6ac35bc7222ab911e7fe7e7cb0f73fcd",
"assets/assets/images/41_1m.png": "51e3a000678bf5de235eeb68402f110e",
"assets/assets/images/41_2.png": "c3d1fd2a58c1af74b540fe928b02b6db",
"assets/assets/images/41_3.png": "2b6b1144306790f28d58ae0c8c441634",
"assets/assets/images/41_4.png": "c1b31759b02b7dc5e3dc6ea76fc44e14",
"assets/assets/images/41_5.png": "bd5aefa2aa957055c8d52eedfe048621",
"assets/assets/images/41_6.png": "39a1cc896b285d94388ea395b63cdfd7",
"assets/assets/images/42.png": "49f60898872010278ba56aa7c88f702c",
"assets/assets/images/42m.png": "25ad6885a3d1da065d5037cf6eede75b",
"assets/assets/images/42_1.png": "670ecd32d29a26f0eb06fd482ff0d2fa",
"assets/assets/images/42_1m.png": "906a94cc2ef709167e9687c8fb8e22f9",
"assets/assets/images/43.png": "1310ff89e63ed67a0e71ba1688b1c9dc",
"assets/assets/images/43m.png": "2b3d7abdea76e0fde3092099cba96c23",
"assets/assets/images/43_1.png": "2a95db1f5f6394814be18904f538da0e",
"assets/assets/images/43_1m.png": "dd8b6553f9c1191d8845f21a4e3e4731",
"assets/assets/images/back.png": "e7296b104bbb6e24517d4f141911319b",
"assets/assets/images/big.png": "a91e84750c238748ad3da7d691dc87cd",
"assets/assets/images/bin.png": "b9ddcf0f32c0b0f613b3963714ef912b",
"assets/assets/images/black.png": "043ba48ffe4c8218bc45b5b800c9f43c",
"assets/assets/images/blue.png": "c69189577028b987d92d97d6ec34e7c0",
"assets/assets/images/brown.png": "3b89e2c2a8c64c145496157120dd7641",
"assets/assets/images/cardBG.png": "df1af4d68f51c638888395db80ae90ba",
"assets/assets/images/eraser.png": "02467602060623ce2f1d3b9b97d1b3a5",
"assets/assets/images/false.png": "7fb61004a3726add7d0354f29b925759",
"assets/assets/images/green.png": "6145c3f9fb33084f3c9996a20951a7e4",
"assets/assets/images/headline.png": "8176c429a6c76ac7ce2038019fc86cc2",
"assets/assets/images/home.png": "965a9eaf74c6216315682196d1c8faef",
"assets/assets/images/home1.png": "eb52f43315440a816793600dac2c19fe",
"assets/assets/images/home2.png": "b8d85c9edf43e1bc94922b17e0cafa18",
"assets/assets/images/homeBG.png": "f0fe9120147d67f4afd4351242d4fa73",
"assets/assets/images/lesson1.jpg": "831f35126da8e53cf556f5afe7a8f2ac",
"assets/assets/images/medium.png": "53d464ffc4bba9eba736c262f16c8382",
"assets/assets/images/next.png": "b5b39bdb5510526a9bd635105d5ee10c",
"assets/assets/images/orange.png": "800b92f49fd47a9ab22e70e623b9c06a",
"assets/assets/images/pink.png": "213bd9b90dc15fd715c9eb400bb6610f",
"assets/assets/images/previous.png": "688a19ed3e358e0e8d23e03ef351adb2",
"assets/assets/images/purple.png": "17f263cdcb54a9e7690321149f11810f",
"assets/assets/images/red.png": "94da4e4e170a4a9a84ebf34f40e69429",
"assets/assets/images/reset.png": "88843fdd07ca0dd9975cf642cdb3e704",
"assets/assets/images/saveIcon.png": "69c3ad39cf7b54aa692eb24da5913232",
"assets/assets/images/shapes.png": "bdb071dbf562873e47faf7d201d50db5",
"assets/assets/images/small.png": "2fe167789368f1d834b7b78e7a05b629",
"assets/assets/images/soundMuted.png": "6c537055ebfbf99bf7d92ffb2fdfe234",
"assets/assets/images/soundPlayed.png": "6825f0a46b35b7aa3715dabb7bfa06a5",
"assets/assets/images/sound_pause.png": "2c6942b922d1613c569463bd21a91627",
"assets/assets/images/sound_play.png": "7dd7099d3e7ab17fb1b59b345ab5d613",
"assets/assets/images/true.png": "5310e3e0bd53dfd8138856443dc48215",
"assets/assets/images/yellow.png": "63e5175f6ceffcf29afc19abbd8a4fd5",
"assets/assets/jsons/celebration.json": "ff63a9b38d34fece66ab25e011855e49",
"assets/assets/jsons/main.json": "dfe52e3d88086a27509f7e6b17548ec3",
"assets/assets/rive/seesaw.riv": "9508a5eeb08370177f949334e66c9ec5",
"assets/assets/sounds/40.mp3": "8fa49677d3c3ddefa7fdb5d9c39acbdc",
"assets/assets/sounds/40_1.mp3": "663d390609e1800db1e2315b5b92dd49",
"assets/assets/sounds/40_2.mp3": "5299dd437adb8a1776c4a363daf354cf",
"assets/assets/sounds/40_3.mp3": "db574ce2c0604199691be7e5b80596dc",
"assets/assets/sounds/40_4.mp3": "fcfcb0812f5709316d9b4bf72a753f4c",
"assets/assets/sounds/40_5.mp3": "38cb04cb9ea36f77ff047149360c5f6e",
"assets/assets/sounds/happySound.mp3": "12ec3069de294d22b349d0b6e92af2b9",
"assets/assets/sounds/sadSound.mp3": "b236c53c9f0c8b50982e1c5bad9cc21b",
"assets/FontManifest.json": "cc17de81cc5fdf7b619b8680bdd3ddf2",
"assets/fonts/MaterialIcons-Regular.otf": "af1a938f8df030dfcdc8d0180caa0b29",
"assets/NOTICES": "55606fbfaaa2db5b0230fb1714d6d7e9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "ae22ec3bc7fddcaee606e6ac380aa2e0",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7ddf825056e29a0a8b9da68b3f664676",
"/": "7ddf825056e29a0a8b9da68b3f664676",
"main.dart.js": "125b5636c7adf34010fadb2e538fc1ef",
"manifest.json": "e1f435cff96173ae051566acf79d548c",
"version.json": "0981196767682290491e5812fd34bd1d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
