"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/memer/index.html","807ffdcf6b331feddc61c27452bd0d44"],["/memer/static/css/main.f1992df8.css","336836d661e679cbd039c4b885d55ebc"],["/memer/static/js/main.068f8fb4.js","b68457ae741bcbdebcae4018e439676d"],["/memer/static/media/10meme.928aacd5.jpg","928aacd5a51b4612c898803935a2c275"],["/memer/static/media/11meme.dc3bb92b.jpg","dc3bb92bc6dc8660b43aa99a0df490f8"],["/memer/static/media/12meme.57f005e0.jpg","57f005e079898926e435c27e7e1bb512"],["/memer/static/media/13meme.85c2997d.jpg","85c2997d6fb9a780ba41858b9279e643"],["/memer/static/media/14meme.e9502f8a.jpg","e9502f8a9659acc02874b6dd2feb9013"],["/memer/static/media/15meme.6d9d107b.jpg","6d9d107b12ab54e3ad96b66321c1d23a"],["/memer/static/media/16meme.b2a5d94c.jpg","b2a5d94c9ab95f0ce8bd13b6a447a5ec"],["/memer/static/media/17meme.3f1d7d7f.jpg","3f1d7d7f72529568233e1933803582e2"],["/memer/static/media/18meme.cd0c40e4.jpg","cd0c40e45778b23a338f43aee81cd12c"],["/memer/static/media/1meme.aef25dcf.jpg","aef25dcfefd917879a22e05895768ab3"],["/memer/static/media/2meme.490a177c.jpg","490a177c53d183be4a5072754a9ba774"],["/memer/static/media/3meme.7228a7c2.jpg","7228a7c213d355726dac1375fd3bfe14"],["/memer/static/media/4meme.6c3fccc3.jpg","6c3fccc38a89efef173999728c27b817"],["/memer/static/media/5meme.3969c792.jpg","3969c79209a2f879b3e40c6106173614"],["/memer/static/media/6meme.6d140e49.jpg","6d140e49076f726f75b72ef8cb9a99a9"],["/memer/static/media/7meme.43f25496.jpg","43f25496fa07b0e5366365d805794bdd"],["/memer/static/media/8meme.da9b7070.jpg","da9b7070017dc661eb186f2c55338253"],["/memer/static/media/9meme.d2800640.jpg","d280064085f90b4a2aece8f1abb6ab16"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var r=new Request(a,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/memer/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});