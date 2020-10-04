self.addEventListener('fetch', function(event) {

  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('the-magic-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/404.html',
        '/manifest.json',
        '/assets/img/favicon.ico',
        '/assets/js/main.js',
        '/assets/js/breakpoints.min.js',
        '/assets/js/browser.min.js',
        '/assets/js/jquery.scrollex.min.js',
        '/assets/js/jquery.scrolly.min.js',
        '/assets/css/main.css',
        '/assets/css/fontawesome-all.min.css',
        '/assets/sass/libs/_breakpoints.scss',
        '/assets/sass/libs/_functions.scss',
        '/assets/sass/libs/_html-grid.scss',
        '/assets/sass/libs/_mixins.scss',
        '/assets/sass/libs/_vars.scss',
        '/assets/sass/libs/_vendor.scss',
        '/assets/sass/main.scss',
        '/assets/webfonts/fa-brands-400.eot',
        '/assets/webfonts/fa-brands-400.svg',
        '/assets/webfonts/fa-brands-400.ttf',
        '/assets/webfonts/fa-brands-400.woff',
        '/assets/webfonts/fa-brands-400.woff2',
        '/assets/webfonts/fa-regular-400.eot',
        '/assets/webfonts/fa-regular-400.svg',
        '/assets/webfonts/fa-regular-400.ttf',
        '/assets/webfonts/fa-regular-400.woff',
        '/assets/webfonts/fa-regular-400.woff2',
        '/assets/webfonts/fa-solid-900.eot',
        '/assets/webfonts/fa-solid-900.svg',
        '/assets/webfonts/fa-solid-900.ttf',
        '/assets/webfonts/fa-solid-900.woff',
        '/assets/webfonts/fa-solid-900.woff2',
        '/images/logo.jpeg',
        '/html/',
      ]);
    })
  );
});


