// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"f4nyn":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "64cfeb18435ebfcd";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"97H9G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AppClient", ()=>AppClient);
var _toast = require("./../elements/toast/Toast");
var _pjax = require("./../../../client-libs/node_modules/pjax");
var _pjaxDefault = parcelHelpers.interopDefault(_pjax);
var _styleScss = require("./styles/style.scss");
var _bootstrapMinCss = require("./../../../client-libs/node_modules/bootstrap/dist/css/bootstrap.min.css");
var _bootstrapMinJs = require("./../../../client-libs/node_modules/bootstrap/dist/js/bootstrap.min.js");
var _nprogressCss = require("./../../../client-libs/node_modules/nprogress/nprogress.css");
var _nprogressJs = require("./../../../client-libs/node_modules/nprogress/nprogress.js");
var _nprogressJsDefault = parcelHelpers.interopDefault(_nprogressJs);
var _pagesCtrl = require("../elements/pages/PagesCtrl");
var _mainPage = require("../elements/pages/MainPage");
var _contactUsPage = require("../elements/pages/ContactUsPage");
class AppClient {
    constructor(){
        this.initiated = false;
        this.start = ()=>{
            if (this.initiated) return;
            this.initiated = true;
            this.toastLogger = new (0, _toast.Toast)(document.body);
            this.setupPjax();
            this.pagesCtrl = new (0, _pagesCtrl.PagesCtrl)();
            this.pagesCtrl.addPage(new (0, _mainPage.MainPage)(this));
            this.pagesCtrl.addPage(new (0, _contactUsPage.ContactUsPage)(this));
        };
        this.setupPjax = ()=>{
            document.addEventListener("DOMContentLoaded", ()=>{
                new (0, _pjaxDefault.default)({
                    selectors: [
                        "title",
                        "header",
                        "main"
                    ],
                    cacheBust: false
                });
                (0, _nprogressJsDefault.default).configure({
                    parent: "body",
                    showSpinner: false
                });
                this.pagesCtrl.setupPage();
            });
            document.addEventListener("pjax:send", ()=>{
                (0, _nprogressJsDefault.default).start();
            });
            document.addEventListener("pjax:complete", ()=>{
                (0, _nprogressJsDefault.default).done();
            });
            document.addEventListener("pjax:error", ()=>{
                (0, _nprogressJsDefault.default).done();
            });
            document.addEventListener("pjax:success", ()=>{
                (0, _nprogressJsDefault.default).done();
                this.pagesCtrl.setupPage();
            });
        };
        this.getToast = ()=>{
            return this.toastLogger;
        };
    }
}
// Boot
const app = new AppClient();
app.start();

},{"./../elements/toast/Toast":"gPet0","./../../../client-libs/node_modules/pjax":"9N1TC","./styles/style.scss":"eF5Dh","./../../../client-libs/node_modules/bootstrap/dist/css/bootstrap.min.css":"wEldz","./../../../client-libs/node_modules/bootstrap/dist/js/bootstrap.min.js":"kHxkY","./../../../client-libs/node_modules/nprogress/nprogress.css":"bzCMI","./../../../client-libs/node_modules/nprogress/nprogress.js":"3jln2","../elements/pages/PagesCtrl":"dA5jG","../elements/pages/MainPage":"6ju7H","../elements/pages/ContactUsPage":"2AbZk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gPet0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Toast", ()=>Toast);
var _mainScss = require("./styles/main.scss");
class Toast {
    static{
        this.FADE_MS = 200;
    }
    constructor(parent){
        this.REMOVE_TIME_MS = 4000;
        this.showSuccess = (title, message)=>{
            const text = this.getCustomToast(title, message, "success");
            this.addToast(text);
        };
        this.showInfo = (title, message)=>{
            const text = this.getCustomToast(title, message, "info");
            this.addToast(text);
        };
        this.showWarning = (title, message)=>{
            const text = this.getCustomToast(title, message, "warning");
            this.addToast(text);
        };
        this.showError = (title, message)=>{
            const text = this.getCustomToast(title, message, "error");
            this.addToast(text);
        };
        this.getCustomToast = (title, message, type)=>{
            const text = '<div class="dj-toast-icon-' + type + '"></div>' + '<div class="dj-toast-text"><div class="dj-toast-title">' + title + '</div><div class="dj-toast-message">' + message + "</div></div>";
            return text;
        };
        this.addToast = (toastHtml)=>{
            const container = this.getContainer();
            const toast = document.createElement("div");
            toast.className = "dj-toast hide";
            toast.innerHTML = toastHtml;
            container.append(toast);
            // Add close button
            const closeBtn = document.createElement("div");
            closeBtn.className = "dj-toast-icon-close";
            toast.append(closeBtn);
            closeBtn.addEventListener("click", ()=>{
                this.removeToast(toast);
            });
            setTimeout(()=>{
                this.removeToast(toast);
            }, this.duration);
            setTimeout(()=>{
                toast.classList.add("show");
                toast.classList.remove("hide");
            }, Toast.FADE_MS);
            return toast;
        };
        this.getContainer = ()=>{
            const container = document.querySelector(".dj-toast-container");
            if (!!container) return container;
            // Container doesn't exist
            const newContainer = document.createElement("div");
            newContainer.className = "dj-toast-container";
            this.parent.append(newContainer);
            return newContainer;
        };
        this.removeToast = (toast)=>{
            toast.classList.add("hide");
            toast.classList.remove("show");
            setTimeout(()=>{
                toast.remove();
            }, Toast.FADE_MS);
        };
        this.parent = parent;
        this.duration = this.REMOVE_TIME_MS;
    }
}

},{"./styles/main.scss":"ivGkx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ivGkx":[function() {},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"9N1TC":[function(require,module,exports) {
var executeScripts = require("60434c2c9880f4d");
var forEachEls = require("6337f7bb4aed545b");
var parseOptions = require("c372b057af2dddf6");
var switches = require("1f1046ecc0a1ca81");
var newUid = require("1a240e5ab428ba83");
var on = require("23ea27e27abf1fd5");
var trigger = require("2244e95c36d34015");
var clone = require("ee6744dbfd1dbb1");
var contains = require("778694e8921ae0ad");
var extend = require("54ff3f3ca7b5c3b0");
var noop = require("252b02ead7a1027f");
var Pjax = function(options) {
    this.state = {
        numPendingSwitches: 0,
        href: null,
        options: null
    };
    this.options = parseOptions(options);
    this.log("Pjax options", this.options);
    if (this.options.scrollRestoration && "scrollRestoration" in history) history.scrollRestoration = "manual";
    this.maxUid = this.lastUid = newUid();
    this.parseDOM(document);
    on(window, "popstate", (function(st) {
        if (st.state) {
            var opt = clone(this.options);
            opt.url = st.state.url;
            opt.title = st.state.title;
            // Since state already exists, prevent it from being pushed again
            opt.history = false;
            opt.scrollPos = st.state.scrollPos;
            if (st.state.uid < this.lastUid) opt.backward = true;
            else opt.forward = true;
            this.lastUid = st.state.uid;
            // @todo implement history cache here, based on uid
            this.loadUrl(st.state.url, opt);
        }
    }).bind(this));
};
Pjax.switches = switches;
Pjax.prototype = {
    log: require("bd0bdc7923579f6e"),
    getElements: function(el) {
        return el.querySelectorAll(this.options.elements);
    },
    parseDOM: function(el) {
        var parseElement = require("17d473d16bb14b3b");
        forEachEls(this.getElements(el), parseElement, this);
    },
    refresh: function(el) {
        this.parseDOM(el || document);
    },
    reload: function() {
        window.location.reload();
    },
    attachLink: require("1d8e02a0fcbc868c"),
    attachForm: require("693d5ceda284d0b4"),
    forEachSelectors: function(cb, context, DOMcontext) {
        return require("2fc75a171515d6e5").bind(this)(this.options.selectors, cb, context, DOMcontext);
    },
    switchSelectors: function(selectors, fromEl, toEl, options) {
        return require("efb163d86068aa13").bind(this)(this.options.switches, this.options.switchesOptions, selectors, fromEl, toEl, options);
    },
    latestChance: function(href) {
        window.location = href;
    },
    onSwitch: function() {
        trigger(window, "resize scroll");
        this.state.numPendingSwitches--;
        // debounce calls, so we only run this once after all switches are finished.
        if (this.state.numPendingSwitches === 0) this.afterAllSwitches();
    },
    loadContent: function(html, options) {
        if (typeof html !== "string") {
            trigger(document, "pjax:complete pjax:error", options);
            return;
        }
        var tmpEl = document.implementation.createHTMLDocument("pjax");
        // parse HTML attributes to copy them
        // since we are forced to use documentElement.innerHTML (outerHTML can't be used for <html>)
        var htmlRegex = /<html[^>]+>/gi;
        var htmlAttribsRegex = /\s?[a-z:]+(?:=['"][^'">]+['"])*/gi;
        var matches = html.match(htmlRegex);
        if (matches && matches.length) {
            matches = matches[0].match(htmlAttribsRegex);
            if (matches.length) {
                matches.shift();
                matches.forEach(function(htmlAttrib) {
                    var attr = htmlAttrib.trim().split("=");
                    if (attr.length === 1) tmpEl.documentElement.setAttribute(attr[0], true);
                    else tmpEl.documentElement.setAttribute(attr[0], attr[1].slice(1, -1));
                });
            }
        }
        tmpEl.documentElement.innerHTML = html;
        this.log("load content", tmpEl.documentElement.attributes, tmpEl.documentElement.innerHTML.length);
        // Clear out any focused controls before inserting new page contents.
        if (document.activeElement && contains(document, this.options.selectors, document.activeElement)) try {
            document.activeElement.blur();
        } catch (e) {} // eslint-disable-line no-empty
        this.switchSelectors(this.options.selectors, tmpEl, document, options);
    },
    abortRequest: require("f4098a4d49a10a18"),
    doRequest: require("2a2d32c9f4e8cd29"),
    handleResponse: require("4a024f86bfb295c0"),
    loadUrl: function(href, options) {
        options = typeof options === "object" ? extend({}, this.options, options) : clone(this.options);
        this.log("load href", href, options);
        // Abort any previous request
        this.abortRequest(this.request);
        trigger(document, "pjax:send", options);
        // Do the request
        this.request = this.doRequest(href, options, this.handleResponse.bind(this));
    },
    afterAllSwitches: function() {
        // FF bug: Won’t autofocus fields that are inserted via JS.
        // This behavior is incorrect. So if theres no current focus, autofocus
        // the last field.
        //
        // http://www.w3.org/html/wg/drafts/html/master/forms.html
        var autofocusEl = Array.prototype.slice.call(document.querySelectorAll("[autofocus]")).pop();
        if (autofocusEl && document.activeElement !== autofocusEl) autofocusEl.focus();
        // execute scripts when DOM have been completely updated
        this.options.selectors.forEach(function(selector) {
            forEachEls(document.querySelectorAll(selector), function(el) {
                executeScripts(el);
            });
        });
        var state = this.state;
        if (state.options.history) {
            if (!window.history.state) {
                this.lastUid = this.maxUid = newUid();
                window.history.replaceState({
                    url: window.location.href,
                    title: document.title,
                    uid: this.maxUid,
                    scrollPos: [
                        0,
                        0
                    ]
                }, document.title);
            }
            // Update browser history
            this.lastUid = this.maxUid = newUid();
            window.history.pushState({
                url: state.href,
                title: state.options.title,
                uid: this.maxUid,
                scrollPos: [
                    0,
                    0
                ]
            }, state.options.title, state.href);
        }
        this.forEachSelectors(function(el) {
            this.parseDOM(el);
        }, this);
        // Fire Events
        trigger(document, "pjax:complete pjax:success", state.options);
        if (typeof state.options.analytics === "function") state.options.analytics();
        if (state.options.history) {
            // First parse url and check for hash to override scroll
            var a = document.createElement("a");
            a.href = this.state.href;
            if (a.hash) {
                var name = a.hash.slice(1);
                name = decodeURIComponent(name);
                var curtop = 0;
                var target = document.getElementById(name) || document.getElementsByName(name)[0];
                if (target) {
                    // http://stackoverflow.com/questions/8111094/cross-browser-javascript-function-to-find-actual-position-of-an-element-in-page
                    if (target.offsetParent) do {
                        curtop += target.offsetTop;
                        target = target.offsetParent;
                    }while (target);
                }
                window.scrollTo(0, curtop);
            } else if (state.options.scrollTo !== false) {
                // Scroll page to top on new page load
                if (state.options.scrollTo.length > 1) window.scrollTo(state.options.scrollTo[0], state.options.scrollTo[1]);
                else window.scrollTo(0, state.options.scrollTo);
            }
        } else if (state.options.scrollRestoration && state.options.scrollPos) window.scrollTo(state.options.scrollPos[0], state.options.scrollPos[1]);
        this.state = {
            numPendingSwitches: 0,
            href: null,
            options: null
        };
    }
};
Pjax.isSupported = require("d8d261e4c5c884de");
// arguably could do `if( require("./lib/is-supported")()) {` but that might be a little to simple
if (Pjax.isSupported()) module.exports = Pjax;
else {
    var stupidPjax = noop;
    for(var key in Pjax.prototype)if (Pjax.prototype.hasOwnProperty(key) && typeof Pjax.prototype[key] === "function") stupidPjax[key] = noop;
    module.exports = stupidPjax;
}

},{"60434c2c9880f4d":"glsX8","6337f7bb4aed545b":"bRtsW","c372b057af2dddf6":"dbFZN","1f1046ecc0a1ca81":"5lgJU","1a240e5ab428ba83":"aKLdT","23ea27e27abf1fd5":"h176F","2244e95c36d34015":"ffblb","ee6744dbfd1dbb1":"hAnYp","778694e8921ae0ad":"bkToq","54ff3f3ca7b5c3b0":"guGQl","252b02ead7a1027f":"iWo3W","bd0bdc7923579f6e":"a3SPT","17d473d16bb14b3b":"3JoCG","1d8e02a0fcbc868c":"6FXtf","693d5ceda284d0b4":"6FuNj","2fc75a171515d6e5":"4AhaD","efb163d86068aa13":"jVD65","f4098a4d49a10a18":"8lzF2","2a2d32c9f4e8cd29":"2edQF","4a024f86bfb295c0":"fV5lO","d8d261e4c5c884de":"6SlXb"}],"glsX8":[function(require,module,exports) {
var forEachEls = require("a524d1c1a7e0f4b6");
var evalScript = require("65350a0d11e057b");
// Finds and executes scripts (used for newly added elements)
// Needed since innerHTML does not run scripts
module.exports = function(el) {
    if (el.tagName.toLowerCase() === "script") evalScript(el);
    forEachEls(el.querySelectorAll("script"), function(script) {
        if (!script.type || script.type.toLowerCase() === "text/javascript") {
            if (script.parentNode) script.parentNode.removeChild(script);
            evalScript(script);
        }
    });
};

},{"a524d1c1a7e0f4b6":"bRtsW","65350a0d11e057b":"dSOWW"}],"bRtsW":[function(require,module,exports) {
/* global HTMLCollection: true */ module.exports = function(els, fn, context) {
    if (els instanceof HTMLCollection || els instanceof NodeList || els instanceof Array) return Array.prototype.forEach.call(els, fn, context);
    // assume simple DOM element
    return fn.call(context, els);
};

},{}],"dSOWW":[function(require,module,exports) {
module.exports = function(el) {
    var code = el.text || el.textContent || el.innerHTML || "";
    var src = el.src || "";
    var parent = el.parentNode || document.querySelector("head") || document.documentElement;
    var script = document.createElement("script");
    if (code.match("document.write")) {
        if (console && console.log) console.log("Script contains document.write. Can\u2019t be executed correctly. Code skipped ", el);
        return false;
    }
    script.type = "text/javascript";
    script.id = el.id;
    /* istanbul ignore if */ if (src !== "") {
        script.src = src;
        script.async = false; // force synchronous loading of peripheral JS
    }
    if (code !== "") try {
        script.appendChild(document.createTextNode(code));
    } catch (e) {
        /* istanbul ignore next */ // old IEs have funky script nodes
        script.text = code;
    }
    // execute
    parent.appendChild(script);
    // avoid pollution only in head or body tags
    if ((parent instanceof HTMLHeadElement || parent instanceof HTMLBodyElement) && parent.contains(script)) parent.removeChild(script);
    return true;
};

},{}],"dbFZN":[function(require,module,exports) {
/* global _gaq: true, ga: true */ var defaultSwitches = require("fce87c965ea32b30");
module.exports = function(options) {
    options = options || {};
    options.elements = options.elements || "a[href], form[action]";
    options.selectors = options.selectors || [
        "title",
        ".js-Pjax"
    ];
    options.switches = options.switches || {};
    options.switchesOptions = options.switchesOptions || {};
    options.history = typeof options.history === "undefined" ? true : options.history;
    options.analytics = typeof options.analytics === "function" || options.analytics === false ? options.analytics : defaultAnalytics;
    options.scrollTo = typeof options.scrollTo === "undefined" ? 0 : options.scrollTo;
    options.scrollRestoration = typeof options.scrollRestoration !== "undefined" ? options.scrollRestoration : true;
    options.cacheBust = typeof options.cacheBust === "undefined" ? true : options.cacheBust;
    options.debug = options.debug || false;
    options.timeout = options.timeout || 0;
    options.currentUrlFullReload = typeof options.currentUrlFullReload === "undefined" ? false : options.currentUrlFullReload;
    // We can’t replace body.outerHTML or head.outerHTML.
    // It creates a bug where a new body or head are created in the DOM.
    // If you set head.outerHTML, a new body tag is appended, so the DOM has 2 body nodes, and vice versa
    if (!options.switches.head) options.switches.head = defaultSwitches.switchElementsAlt;
    if (!options.switches.body) options.switches.body = defaultSwitches.switchElementsAlt;
    return options;
};
/* istanbul ignore next */ function defaultAnalytics() {
    if (window._gaq) _gaq.push([
        "_trackPageview"
    ]);
    if (window.ga) ga("send", "pageview", {
        page: location.pathname,
        title: document.title
    });
}

},{"fce87c965ea32b30":"5lgJU"}],"5lgJU":[function(require,module,exports) {
var on = require("aebbf55ac43cd5aa");
module.exports = {
    outerHTML: function(oldEl, newEl) {
        oldEl.outerHTML = newEl.outerHTML;
        this.onSwitch();
    },
    innerHTML: function(oldEl, newEl) {
        oldEl.innerHTML = newEl.innerHTML;
        if (newEl.className === "") oldEl.removeAttribute("class");
        else oldEl.className = newEl.className;
        this.onSwitch();
    },
    switchElementsAlt: function(oldEl, newEl) {
        oldEl.innerHTML = newEl.innerHTML;
        // Copy attributes from the new element to the old one
        if (newEl.hasAttributes()) {
            var attrs = newEl.attributes;
            for(var i = 0; i < attrs.length; i++)oldEl.attributes.setNamedItem(attrs[i].cloneNode());
        }
        this.onSwitch();
    },
    // Equivalent to outerHTML(), but doesn't require switchElementsAlt() for <head> and <body>
    replaceNode: function(oldEl, newEl) {
        oldEl.parentNode.replaceChild(newEl, oldEl);
        this.onSwitch();
    },
    sideBySide: function(oldEl, newEl, options, switchOptions) {
        var forEach = Array.prototype.forEach;
        var elsToRemove = [];
        var elsToAdd = [];
        var fragToAppend = document.createDocumentFragment();
        var animationEventNames = "animationend webkitAnimationEnd MSAnimationEnd oanimationend";
        var animatedElsNumber = 0;
        var sexyAnimationEnd = (function(e) {
            if (e.target !== e.currentTarget) // end triggered by an animation on a child
            return;
            animatedElsNumber--;
            if (animatedElsNumber <= 0 && elsToRemove) {
                elsToRemove.forEach(function(el) {
                    // browsing quickly can make the el
                    // already removed by last page update ?
                    if (el.parentNode) el.parentNode.removeChild(el);
                });
                elsToAdd.forEach(function(el) {
                    el.className = el.className.replace(el.getAttribute("data-pjax-classes"), "");
                    el.removeAttribute("data-pjax-classes");
                });
                elsToAdd = null; // free memory
                elsToRemove = null; // free memory
                // this is to trigger some repaint (example: picturefill)
                this.onSwitch();
            }
        }).bind(this);
        switchOptions = switchOptions || {};
        forEach.call(oldEl.childNodes, function(el) {
            elsToRemove.push(el);
            if (el.classList && !el.classList.contains("js-Pjax-remove")) {
                // for fast switch, clean element that just have been added, & not cleaned yet.
                if (el.hasAttribute("data-pjax-classes")) {
                    el.className = el.className.replace(el.getAttribute("data-pjax-classes"), "");
                    el.removeAttribute("data-pjax-classes");
                }
                el.classList.add("js-Pjax-remove");
                if (switchOptions.callbacks && switchOptions.callbacks.removeElement) switchOptions.callbacks.removeElement(el);
                if (switchOptions.classNames) el.className += " " + switchOptions.classNames.remove + " " + (options.backward ? switchOptions.classNames.backward : switchOptions.classNames.forward);
                animatedElsNumber++;
                on(el, animationEventNames, sexyAnimationEnd, true);
            }
        });
        forEach.call(newEl.childNodes, function(el) {
            if (el.classList) {
                var addClasses = "";
                if (switchOptions.classNames) addClasses = " js-Pjax-add " + switchOptions.classNames.add + " " + (options.backward ? switchOptions.classNames.forward : switchOptions.classNames.backward);
                if (switchOptions.callbacks && switchOptions.callbacks.addElement) switchOptions.callbacks.addElement(el);
                el.className += addClasses;
                el.setAttribute("data-pjax-classes", addClasses);
                elsToAdd.push(el);
                fragToAppend.appendChild(el);
                animatedElsNumber++;
                on(el, animationEventNames, sexyAnimationEnd, true);
            }
        });
        // pass all className of the parent
        oldEl.className = newEl.className;
        oldEl.appendChild(fragToAppend);
    }
};

},{"aebbf55ac43cd5aa":"h176F"}],"h176F":[function(require,module,exports) {
var forEachEls = require("5cbe293e67b2c969");
module.exports = function(els, events, listener, useCapture) {
    events = typeof events === "string" ? events.split(" ") : events;
    events.forEach(function(e) {
        forEachEls(els, function(el) {
            el.addEventListener(e, listener, useCapture);
        });
    });
};

},{"5cbe293e67b2c969":"bRtsW"}],"aKLdT":[function(require,module,exports) {
module.exports = function() {
    var counter = 0;
    return function() {
        var id = "pjax" + new Date().getTime() + "_" + counter;
        counter++;
        return id;
    };
}();

},{}],"ffblb":[function(require,module,exports) {
var forEachEls = require("2fc759f1352ef309");
module.exports = function(els, events, opts) {
    events = typeof events === "string" ? events.split(" ") : events;
    events.forEach(function(e) {
        var event;
        event = document.createEvent("HTMLEvents");
        event.initEvent(e, true, true);
        event.eventName = e;
        if (opts) Object.keys(opts).forEach(function(key) {
            event[key] = opts[key];
        });
        forEachEls(els, function(el) {
            var domFix = false;
            if (!el.parentNode && el !== document && el !== window) {
                // THANK YOU IE (9/10/11)
                // dispatchEvent doesn't work if the element is not in the DOM
                domFix = true;
                document.body.appendChild(el);
            }
            el.dispatchEvent(event);
            if (domFix) el.parentNode.removeChild(el);
        });
    });
};

},{"2fc759f1352ef309":"bRtsW"}],"hAnYp":[function(require,module,exports) {
module.exports = function(obj) {
    /* istanbul ignore if */ if (null === obj || "object" !== typeof obj) return obj;
    var copy = obj.constructor();
    for(var attr in obj)if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    return copy;
};

},{}],"bkToq":[function(require,module,exports) {
module.exports = function contains(doc, selectors, el) {
    for(var i = 0; i < selectors.length; i++){
        var selectedEls = doc.querySelectorAll(selectors[i]);
        for(var j = 0; j < selectedEls.length; j++){
            if (selectedEls[j].contains(el)) return true;
        }
    }
    return false;
};

},{}],"guGQl":[function(require,module,exports) {
module.exports = function(target) {
    if (target == null) return null;
    var to = Object(target);
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        if (source != null) {
            for(var key in source)// Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(source, key)) to[key] = source[key];
        }
    }
    return to;
};

},{}],"iWo3W":[function(require,module,exports) {
module.exports = function() {};

},{}],"a3SPT":[function(require,module,exports) {
module.exports = function() {
    if (this.options.debug && console) {
        if (typeof console.log === "function") console.log.apply(console, arguments);
        else if (console.log) console.log(arguments);
    }
};

},{}],"3JoCG":[function(require,module,exports) {
var attrState = "data-pjax-state";
module.exports = function(el) {
    switch(el.tagName.toLowerCase()){
        case "a":
            // only attach link if el does not already have link attached
            if (!el.hasAttribute(attrState)) this.attachLink(el);
            break;
        case "form":
            // only attach link if el does not already have link attached
            if (!el.hasAttribute(attrState)) this.attachForm(el);
            break;
        default:
            throw "Pjax can only be applied on <a> or <form> submit";
    }
};

},{}],"6FXtf":[function(require,module,exports) {
var on = require("7e95d90f733ae845");
var clone = require("fa4f0a279272087f");
var attrState = "data-pjax-state";
var linkAction = function(el, event) {
    if (isDefaultPrevented(event)) return;
    // Since loadUrl modifies options and we may add our own modifications below,
    // clone it so the changes don't persist
    var options = clone(this.options);
    var attrValue = checkIfShouldAbort(el, event);
    if (attrValue) {
        el.setAttribute(attrState, attrValue);
        return;
    }
    event.preventDefault();
    // don’t do "nothing" if user try to reload the page by clicking the same link twice
    if (this.options.currentUrlFullReload && el.href === window.location.href.split("#")[0]) {
        el.setAttribute(attrState, "reload");
        this.reload();
        return;
    }
    el.setAttribute(attrState, "load");
    options.triggerElement = el;
    this.loadUrl(el.href, options);
};
function checkIfShouldAbort(el, event) {
    // Don’t break browser special behavior on links (like page in new window)
    if (event.which > 1 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return "modifier";
    // we do test on href now to prevent unexpected behavior if for some reason
    // user have href that can be dynamically updated
    // Ignore external links.
    if (el.protocol !== window.location.protocol || el.host !== window.location.host) return "external";
    // Ignore anchors on the same page (keep native behavior)
    if (el.hash && el.href.replace(el.hash, "") === window.location.href.replace(location.hash, "")) return "anchor";
    // Ignore empty anchor "foo.html#"
    if (el.href === window.location.href.split("#")[0] + "#") return "anchor-empty";
}
var isDefaultPrevented = function(event) {
    return event.defaultPrevented || event.returnValue === false;
};
module.exports = function(el) {
    var that = this;
    el.setAttribute(attrState, "");
    on(el, "click", function(event) {
        linkAction.call(that, el, event);
    });
    on(el, "keyup", (function(event) {
        if (event.keyCode === 13) linkAction.call(that, el, event);
    }).bind(this));
};

},{"7e95d90f733ae845":"h176F","fa4f0a279272087f":"hAnYp"}],"6FuNj":[function(require,module,exports) {
var on = require("c435c411879ebc69");
var clone = require("afdd8ed3957c4894");
var attrState = "data-pjax-state";
var formAction = function(el, event) {
    if (isDefaultPrevented(event)) return;
    // Since loadUrl modifies options and we may add our own modifications below,
    // clone it so the changes don't persist
    var options = clone(this.options);
    // Initialize requestOptions
    options.requestOptions = {
        requestUrl: el.getAttribute("action") || window.location.href,
        requestMethod: el.getAttribute("method") || "GET"
    };
    // create a testable virtual link of the form action
    var virtLinkElement = document.createElement("a");
    virtLinkElement.setAttribute("href", options.requestOptions.requestUrl);
    var attrValue = checkIfShouldAbort(virtLinkElement, options);
    if (attrValue) {
        el.setAttribute(attrState, attrValue);
        return;
    }
    event.preventDefault();
    if (el.enctype === "multipart/form-data") options.requestOptions.formData = new FormData(el);
    else options.requestOptions.requestParams = parseFormElements(el);
    el.setAttribute(attrState, "submit");
    options.triggerElement = el;
    this.loadUrl(virtLinkElement.href, options);
};
function parseFormElements(el) {
    var requestParams = [];
    var formElements = el.elements;
    for(var i = 0; i < formElements.length; i++){
        var element = formElements[i];
        var tagName = element.tagName.toLowerCase();
        // jscs:disable disallowImplicitTypeConversion
        if (!!element.name && element.attributes !== undefined && tagName !== "button") {
            // jscs:enable disallowImplicitTypeConversion
            var type = element.attributes.type;
            if (!type || type.value !== "checkbox" && type.value !== "radio" || element.checked) {
                // Build array of values to submit
                var values = [];
                if (tagName === "select") {
                    var opt;
                    for(var j = 0; j < element.options.length; j++){
                        opt = element.options[j];
                        if (opt.selected && !opt.disabled) values.push(opt.hasAttribute("value") ? opt.value : opt.text);
                    }
                } else values.push(element.value);
                for(var k = 0; k < values.length; k++)requestParams.push({
                    name: encodeURIComponent(element.name),
                    value: encodeURIComponent(values[k])
                });
            }
        }
    }
    return requestParams;
}
function checkIfShouldAbort(virtLinkElement, options) {
    // Ignore external links.
    if (virtLinkElement.protocol !== window.location.protocol || virtLinkElement.host !== window.location.host) return "external";
    // Ignore click if we are on an anchor on the same page
    if (virtLinkElement.hash && virtLinkElement.href.replace(virtLinkElement.hash, "") === window.location.href.replace(location.hash, "")) return "anchor";
    // Ignore empty anchor "foo.html#"
    if (virtLinkElement.href === window.location.href.split("#")[0] + "#") return "anchor-empty";
    // if declared as a full reload, just normally submit the form
    if (options.currentUrlFullReload && virtLinkElement.href === window.location.href.split("#")[0]) return "reload";
}
var isDefaultPrevented = function(event) {
    return event.defaultPrevented || event.returnValue === false;
};
module.exports = function(el) {
    var that = this;
    el.setAttribute(attrState, "");
    on(el, "submit", function(event) {
        formAction.call(that, el, event);
    });
};

},{"c435c411879ebc69":"h176F","afdd8ed3957c4894":"hAnYp"}],"4AhaD":[function(require,module,exports) {
var forEachEls = require("ef9a0984321e43f1");
module.exports = function(selectors, cb, context, DOMcontext) {
    DOMcontext = DOMcontext || document;
    selectors.forEach(function(selector) {
        forEachEls(DOMcontext.querySelectorAll(selector), cb, context);
    });
};

},{"ef9a0984321e43f1":"bRtsW"}],"jVD65":[function(require,module,exports) {
var forEachEls = require("2f35b081407a53de");
var defaultSwitches = require("b5cf5df455f5bb11");
module.exports = function(switches, switchesOptions, selectors, fromEl, toEl, options) {
    var switchesQueue = [];
    selectors.forEach(function(selector) {
        var newEls = fromEl.querySelectorAll(selector);
        var oldEls = toEl.querySelectorAll(selector);
        if (this.log) this.log("Pjax switch", selector, newEls, oldEls);
        if (newEls.length !== oldEls.length) throw "DOM doesn\u2019t look the same on new loaded page: \u2019" + selector + "\u2019 - new " + newEls.length + ", old " + oldEls.length;
        forEachEls(newEls, function(newEl, i) {
            var oldEl = oldEls[i];
            if (this.log) this.log("newEl", newEl, "oldEl", oldEl);
            var callback = switches[selector] ? switches[selector].bind(this, oldEl, newEl, options, switchesOptions[selector]) : defaultSwitches.outerHTML.bind(this, oldEl, newEl, options);
            switchesQueue.push(callback);
        }, this);
    }, this);
    this.state.numPendingSwitches = switchesQueue.length;
    switchesQueue.forEach(function(queuedSwitch) {
        queuedSwitch();
    });
};

},{"2f35b081407a53de":"bRtsW","b5cf5df455f5bb11":"5lgJU"}],"8lzF2":[function(require,module,exports) {
var noop = require("490f79170cf35993");
module.exports = function(request) {
    if (request && request.readyState < 4) {
        request.onreadystatechange = noop;
        request.abort();
    }
};

},{"490f79170cf35993":"iWo3W"}],"2edQF":[function(require,module,exports) {
var updateQueryString = require("1f751a945ada5a8b");
module.exports = function(location, options, callback) {
    options = options || {};
    var queryString;
    var requestOptions = options.requestOptions || {};
    var requestMethod = (requestOptions.requestMethod || "GET").toUpperCase();
    var requestParams = requestOptions.requestParams || null;
    var formData = requestOptions.formData || null;
    var requestPayload = null;
    var request = new XMLHttpRequest();
    var timeout = options.timeout || 0;
    request.onreadystatechange = function() {
        if (request.readyState === 4) {
            if (request.status === 200) callback(request.responseText, request, location, options);
            else if (request.status !== 0) callback(null, request, location, options);
        }
    };
    request.onerror = function(e) {
        console.log(e);
        callback(null, request, location, options);
    };
    request.ontimeout = function() {
        callback(null, request, location, options);
    };
    // Prepare the request payload for forms, if available
    if (requestParams && requestParams.length) {
        // Build query string
        queryString = requestParams.map(function(param) {
            return param.name + "=" + param.value;
        }).join("&");
        switch(requestMethod){
            case "GET":
                // Reset query string to avoid an issue with repeat submissions where checkboxes that were
                // previously checked are incorrectly preserved
                location = location.split("?")[0];
                // Append new query string
                location += "?" + queryString;
                break;
            case "POST":
                // Send query string as request payload
                requestPayload = queryString;
                break;
        }
    } else if (formData) requestPayload = formData;
    // Add a timestamp as part of the query string if cache busting is enabled
    if (options.cacheBust) location = updateQueryString(location, "t", Date.now());
    request.open(requestMethod, location, true);
    request.timeout = timeout;
    request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    request.setRequestHeader("X-PJAX", "true");
    request.setRequestHeader("X-PJAX-Selectors", JSON.stringify(options.selectors));
    // Send the proper header information for POST forms
    if (requestPayload && requestMethod === "POST" && !formData) request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.send(requestPayload);
    return request;
};

},{"1f751a945ada5a8b":"8Ud8a"}],"8Ud8a":[function(require,module,exports) {
module.exports = function(uri, key, value) {
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf("?") !== -1 ? "&" : "?";
    if (uri.match(re)) return uri.replace(re, "$1" + key + "=" + value + "$2");
    else return uri + separator + key + "=" + value;
};

},{}],"fV5lO":[function(require,module,exports) {
var clone = require("3fd5d8481f19b2d7");
var newUid = require("d591dbfaa17766a5");
var trigger = require("f39414bee4d73a5b");
module.exports = function(responseText, request, href, options) {
    options = clone(options || this.options);
    options.request = request;
    // Fail if unable to load HTML via AJAX
    if (responseText === false) {
        trigger(document, "pjax:complete pjax:error", options);
        return;
    }
    // push scroll position to history
    var currentState = window.history.state || {};
    window.history.replaceState({
        url: currentState.url || window.location.href,
        title: currentState.title || document.title,
        uid: currentState.uid || newUid(),
        scrollPos: [
            document.documentElement.scrollLeft || document.body.scrollLeft,
            document.documentElement.scrollTop || document.body.scrollTop
        ]
    }, document.title, window.location.href);
    // Check for redirects
    var oldHref = href;
    if (request.responseURL) {
        if (href !== request.responseURL) href = request.responseURL;
    } else if (request.getResponseHeader("X-PJAX-URL")) href = request.getResponseHeader("X-PJAX-URL");
    else if (request.getResponseHeader("X-XHR-Redirected-To")) href = request.getResponseHeader("X-XHR-Redirected-To");
    // Add back the hash if it was removed
    var a = document.createElement("a");
    a.href = oldHref;
    var oldHash = a.hash;
    a.href = href;
    if (oldHash && !a.hash) {
        a.hash = oldHash;
        href = a.href;
    }
    this.state.href = href;
    this.state.options = options;
    try {
        this.loadContent(responseText, options);
    } catch (e) {
        trigger(document, "pjax:error", options);
        if (!this.options.debug) {
            if (console && console.error) console.error("Pjax switch fail: ", e);
            return this.latestChance(href);
        } else throw e;
    }
};

},{"3fd5d8481f19b2d7":"hAnYp","d591dbfaa17766a5":"aKLdT","f39414bee4d73a5b":"ffblb"}],"6SlXb":[function(require,module,exports) {
module.exports = function() {
    // Borrowed wholesale from https://github.com/defunkt/jquery-pjax
    return window.history && window.history.pushState && window.history.replaceState && // pushState isn’t reliable on iOS until 5.
    !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/);
};

},{}],"eF5Dh":[function() {},{}],"wEldz":[function() {},{}],"kHxkY":[function(require,module,exports) {
/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */ !function(t, e) {
    module.exports = e(require("26e7e038bbffa6e3"));
}(this, function(t) {
    "use strict";
    function e(t) {
        if (t && t.__esModule) return t;
        const e = Object.create(null);
        if (t) {
            for(const i in t)if ("default" !== i) {
                const s = Object.getOwnPropertyDescriptor(t, i);
                Object.defineProperty(e, i, s.get ? s : {
                    enumerable: !0,
                    get: ()=>t[i]
                });
            }
        }
        return e.default = t, Object.freeze(e);
    }
    const i = e(t), s = "transitionend", n = (t)=>{
        let e = t.getAttribute("data-bs-target");
        if (!e || "#" === e) {
            let i = t.getAttribute("href");
            if (!i || !i.includes("#") && !i.startsWith(".")) return null;
            i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), e = i && "#" !== i ? i.trim() : null;
        }
        return e;
    }, o = (t)=>{
        const e = n(t);
        return e && document.querySelector(e) ? e : null;
    }, r = (t)=>{
        const e = n(t);
        return e ? document.querySelector(e) : null;
    }, a = (t)=>{
        t.dispatchEvent(new Event(s));
    }, l = (t)=>!(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType), c = (t)=>l(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null, h = (t, e, i)=>{
        Object.keys(i).forEach((s)=>{
            const n = i[s], o = e[s], r = o && l(o) ? "element" : null == (a = o) ? `${a}` : ({}).toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
            var a;
            if (!new RegExp(n).test(r)) throw new TypeError(`${t.toUpperCase()}: Option "${s}" provided type "${r}" but expected type "${n}".`);
        });
    }, d = (t)=>!(!l(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility"), u = (t)=>!t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")), g = (t)=>{
        if (!document.documentElement.attachShadow) return null;
        if ("function" == typeof t.getRootNode) {
            const e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null;
        }
        return t instanceof ShadowRoot ? t : t.parentNode ? g(t.parentNode) : null;
    }, _ = ()=>{}, f = (t)=>{
        t.offsetHeight;
    }, p = ()=>{
        const { jQuery: t } = window;
        return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
    }, m = [], b = ()=>"rtl" === document.documentElement.dir, v = (t)=>{
        var e;
        e = ()=>{
            const e = p();
            if (e) {
                const i = t.NAME, s = e.fn[i];
                e.fn[i] = t.jQueryInterface, e.fn[i].Constructor = t, e.fn[i].noConflict = ()=>(e.fn[i] = s, t.jQueryInterface);
            }
        }, "loading" === document.readyState ? (m.length || document.addEventListener("DOMContentLoaded", ()=>{
            m.forEach((t)=>t());
        }), m.push(e)) : e();
    }, y = (t)=>{
        "function" == typeof t && t();
    }, E = (t, e, i = !0)=>{
        if (!i) return void y(t);
        const n = ((t)=>{
            if (!t) return 0;
            let { transitionDuration: e, transitionDelay: i } = window.getComputedStyle(t);
            const s = Number.parseFloat(e), n = Number.parseFloat(i);
            return s || n ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0;
        })(e) + 5;
        let o = !1;
        const r = ({ target: i })=>{
            i === e && (o = !0, e.removeEventListener(s, r), y(t));
        };
        e.addEventListener(s, r), setTimeout(()=>{
            o || a(e);
        }, n);
    }, w = (t, e, i, s)=>{
        let n = t.indexOf(e);
        if (-1 === n) return t[!i && s ? t.length - 1 : 0];
        const o = t.length;
        return n += i ? 1 : -1, s && (n = (n + o) % o), t[Math.max(0, Math.min(n, o - 1))];
    }, A = /[^.]*(?=\..*)\.|.*/, T = /\..*/, C = /::\d+$/, k = {};
    let L = 1;
    const S = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, O = /^(mouseenter|mouseleave)/i, N = new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll"
    ]);
    function D(t, e) {
        return e && `${e}::${L++}` || t.uidEvent || L++;
    }
    function I(t) {
        const e = D(t);
        return t.uidEvent = e, k[e] = k[e] || {}, k[e];
    }
    function P(t, e, i = null) {
        const s = Object.keys(t);
        for(let n = 0, o = s.length; n < o; n++){
            const o = t[s[n]];
            if (o.originalHandler === e && o.delegationSelector === i) return o;
        }
        return null;
    }
    function x(t, e, i) {
        const s = "string" == typeof e, n = s ? i : e;
        let o = H(t);
        return N.has(o) || (o = t), [
            s,
            n,
            o
        ];
    }
    function M(t, e, i, s, n) {
        if ("string" != typeof e || !t) return;
        if (i || (i = s, s = null), O.test(e)) {
            const t = (t)=>function(e) {
                    if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e);
                };
            s ? s = t(s) : i = t(i);
        }
        const [o, r, a] = x(e, i, s), l = I(t), c = l[a] || (l[a] = {}), h = P(c, r, o ? i : null);
        if (h) return void (h.oneOff = h.oneOff && n);
        const d = D(r, e.replace(A, "")), u = o ? function(t, e, i) {
            return function s(n) {
                const o = t.querySelectorAll(e);
                for(let { target: r } = n; r && r !== this; r = r.parentNode)for(let a = o.length; a--;)if (o[a] === r) return n.delegateTarget = r, s.oneOff && $.off(t, n.type, e, i), i.apply(r, [
                    n
                ]);
                return null;
            };
        }(t, i, s) : function(t, e) {
            return function i(s) {
                return s.delegateTarget = t, i.oneOff && $.off(t, s.type, e), e.apply(t, [
                    s
                ]);
            };
        }(t, i);
        u.delegationSelector = o ? i : null, u.originalHandler = r, u.oneOff = n, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o);
    }
    function j(t, e, i, s, n) {
        const o = P(e[i], s, n);
        o && (t.removeEventListener(i, o, Boolean(n)), delete e[i][o.uidEvent]);
    }
    function H(t) {
        return t = t.replace(T, ""), S[t] || t;
    }
    const $ = {
        on (t, e, i, s) {
            M(t, e, i, s, !1);
        },
        one (t, e, i, s) {
            M(t, e, i, s, !0);
        },
        off (t, e, i, s) {
            if ("string" != typeof e || !t) return;
            const [n, o, r] = x(e, i, s), a = r !== e, l = I(t), c = e.startsWith(".");
            if (void 0 !== o) {
                if (!l || !l[r]) return;
                return void j(t, l, r, o, n ? i : null);
            }
            c && Object.keys(l).forEach((i)=>{
                !function(t, e, i, s) {
                    const n = e[i] || {};
                    Object.keys(n).forEach((o)=>{
                        if (o.includes(s)) {
                            const s = n[o];
                            j(t, e, i, s.originalHandler, s.delegationSelector);
                        }
                    });
                }(t, l, i, e.slice(1));
            });
            const h = l[r] || {};
            Object.keys(h).forEach((i)=>{
                const s = i.replace(C, "");
                if (!a || e.includes(s)) {
                    const e = h[i];
                    j(t, l, r, e.originalHandler, e.delegationSelector);
                }
            });
        },
        trigger (t, e, i) {
            if ("string" != typeof e || !t) return null;
            const s = p(), n = H(e), o = e !== n, r = N.has(n);
            let a, l = !0, c = !0, h = !1, d = null;
            return o && s && (a = s.Event(e, i), s(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), h = a.isDefaultPrevented()), r ? (d = document.createEvent("HTMLEvents"), d.initEvent(n, l, !0)) : d = new CustomEvent(e, {
                bubbles: l,
                cancelable: !0
            }), void 0 !== i && Object.keys(i).forEach((t)=>{
                Object.defineProperty(d, t, {
                    get: ()=>i[t]
                });
            }), h && d.preventDefault(), c && t.dispatchEvent(d), d.defaultPrevented && void 0 !== a && a.preventDefault(), d;
        }
    }, B = new Map, z = {
        set (t, e, i) {
            B.has(t) || B.set(t, new Map);
            const s = B.get(t);
            s.has(e) || 0 === s.size ? s.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);
        },
        get: (t, e)=>B.has(t) && B.get(t).get(e) || null,
        remove (t, e) {
            if (!B.has(t)) return;
            const i = B.get(t);
            i.delete(e), 0 === i.size && B.delete(t);
        }
    };
    class R {
        constructor(t){
            (t = c(t)) && (this._element = t, z.set(this._element, this.constructor.DATA_KEY, this));
        }
        dispose() {
            z.remove(this._element, this.constructor.DATA_KEY), $.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((t)=>{
                this[t] = null;
            });
        }
        _queueCallback(t, e, i = !0) {
            E(t, e, i);
        }
        static getInstance(t) {
            return z.get(c(t), this.DATA_KEY);
        }
        static getOrCreateInstance(t, e = {}) {
            return this.getInstance(t) || new this(t, "object" == typeof e ? e : null);
        }
        static get VERSION() {
            return "5.1.3";
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!');
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`;
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`;
        }
    }
    const F = (t, e = "hide")=>{
        const i = `click.dismiss${t.EVENT_KEY}`, s = t.NAME;
        $.on(document, i, `[data-bs-dismiss="${s}"]`, function(i) {
            if ([
                "A",
                "AREA"
            ].includes(this.tagName) && i.preventDefault(), u(this)) return;
            const n = r(this) || this.closest(`.${s}`);
            t.getOrCreateInstance(n)[e]();
        });
    };
    class q extends R {
        static get NAME() {
            return "alert";
        }
        close() {
            if ($.trigger(this._element, "close.bs.alert").defaultPrevented) return;
            this._element.classList.remove("show");
            const t = this._element.classList.contains("fade");
            this._queueCallback(()=>this._destroyElement(), this._element, t);
        }
        _destroyElement() {
            this._element.remove(), $.trigger(this._element, "closed.bs.alert"), this.dispose();
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = q.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    F(q, "close"), v(q);
    const W = '[data-bs-toggle="button"]';
    class U extends R {
        static get NAME() {
            return "button";
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = U.getOrCreateInstance(this);
                "toggle" === t && e[t]();
            });
        }
    }
    function K(t) {
        return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t);
    }
    function V(t) {
        return t.replace(/[A-Z]/g, (t)=>`-${t.toLowerCase()}`);
    }
    $.on(document, "click.bs.button.data-api", W, (t)=>{
        t.preventDefault();
        const e = t.target.closest(W);
        U.getOrCreateInstance(e).toggle();
    }), v(U);
    const X = {
        setDataAttribute (t, e, i) {
            t.setAttribute(`data-bs-${V(e)}`, i);
        },
        removeDataAttribute (t, e) {
            t.removeAttribute(`data-bs-${V(e)}`);
        },
        getDataAttributes (t) {
            if (!t) return {};
            const e = {};
            return Object.keys(t.dataset).filter((t)=>t.startsWith("bs")).forEach((i)=>{
                let s = i.replace(/^bs/, "");
                s = s.charAt(0).toLowerCase() + s.slice(1, s.length), e[s] = K(t.dataset[i]);
            }), e;
        },
        getDataAttribute: (t, e)=>K(t.getAttribute(`data-bs-${V(e)}`)),
        offset (t) {
            const e = t.getBoundingClientRect();
            return {
                top: e.top + window.pageYOffset,
                left: e.left + window.pageXOffset
            };
        },
        position: (t)=>({
                top: t.offsetTop,
                left: t.offsetLeft
            })
    }, Y = {
        find: (t, e = document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e, t)),
        findOne: (t, e = document.documentElement)=>Element.prototype.querySelector.call(e, t),
        children: (t, e)=>[].concat(...t.children).filter((t)=>t.matches(e)),
        parents (t, e) {
            const i = [];
            let s = t.parentNode;
            for(; s && s.nodeType === Node.ELEMENT_NODE && 3 !== s.nodeType;)s.matches(e) && i.push(s), s = s.parentNode;
            return i;
        },
        prev (t, e) {
            let i = t.previousElementSibling;
            for(; i;){
                if (i.matches(e)) return [
                    i
                ];
                i = i.previousElementSibling;
            }
            return [];
        },
        next (t, e) {
            let i = t.nextElementSibling;
            for(; i;){
                if (i.matches(e)) return [
                    i
                ];
                i = i.nextElementSibling;
            }
            return [];
        },
        focusableChildren (t) {
            const e = [
                "a",
                "button",
                "input",
                "textarea",
                "select",
                "details",
                "[tabindex]",
                '[contenteditable="true"]'
            ].map((t)=>`${t}:not([tabindex^="-"])`).join(", ");
            return this.find(e, t).filter((t)=>!u(t) && d(t));
        }
    }, Q = "carousel", G = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }, Z = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }, J = "next", tt = "prev", et = "left", it = "right", st = {
        ArrowLeft: it,
        ArrowRight: et
    }, nt = "slid.bs.carousel", ot = "active", rt = ".active.carousel-item";
    class at extends R {
        constructor(t, e){
            super(t), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._indicatorsElement = Y.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners();
        }
        static get Default() {
            return G;
        }
        static get NAME() {
            return Q;
        }
        next() {
            this._slide(J);
        }
        nextWhenVisible() {
            !document.hidden && d(this._element) && this.next();
        }
        prev() {
            this._slide(tt);
        }
        pause(t) {
            t || (this._isPaused = !0), Y.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (a(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
        }
        cycle(t) {
            t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
        }
        to(t) {
            this._activeElement = Y.findOne(rt, this._element);
            const e = this._getItemIndex(this._activeElement);
            if (t > this._items.length - 1 || t < 0) return;
            if (this._isSliding) return void $.one(this._element, nt, ()=>this.to(t));
            if (e === t) return this.pause(), void this.cycle();
            const i = t > e ? J : tt;
            this._slide(i, this._items[t]);
        }
        _getConfig(t) {
            return t = {
                ...G,
                ...X.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            }, h(Q, t, Z), t;
        }
        _handleSwipe() {
            const t = Math.abs(this.touchDeltaX);
            if (t <= 40) return;
            const e = t / this.touchDeltaX;
            this.touchDeltaX = 0, e && this._slide(e > 0 ? it : et);
        }
        _addEventListeners() {
            this._config.keyboard && $.on(this._element, "keydown.bs.carousel", (t)=>this._keydown(t)), "hover" === this._config.pause && ($.on(this._element, "mouseenter.bs.carousel", (t)=>this.pause(t)), $.on(this._element, "mouseleave.bs.carousel", (t)=>this.cycle(t))), this._config.touch && this._touchSupported && this._addTouchEventListeners();
        }
        _addTouchEventListeners() {
            const t = (t)=>this._pointerEvent && ("pen" === t.pointerType || "touch" === t.pointerType), e = (e)=>{
                t(e) ? this.touchStartX = e.clientX : this._pointerEvent || (this.touchStartX = e.touches[0].clientX);
            }, i = (t)=>{
                this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX;
            }, s = (e)=>{
                t(e) && (this.touchDeltaX = e.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((t)=>this.cycle(t), 500 + this._config.interval));
            };
            Y.find(".carousel-item img", this._element).forEach((t)=>{
                $.on(t, "dragstart.bs.carousel", (t)=>t.preventDefault());
            }), this._pointerEvent ? ($.on(this._element, "pointerdown.bs.carousel", (t)=>e(t)), $.on(this._element, "pointerup.bs.carousel", (t)=>s(t)), this._element.classList.add("pointer-event")) : ($.on(this._element, "touchstart.bs.carousel", (t)=>e(t)), $.on(this._element, "touchmove.bs.carousel", (t)=>i(t)), $.on(this._element, "touchend.bs.carousel", (t)=>s(t)));
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName)) return;
            const e = st[t.key];
            e && (t.preventDefault(), this._slide(e));
        }
        _getItemIndex(t) {
            return this._items = t && t.parentNode ? Y.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t);
        }
        _getItemByOrder(t, e) {
            const i = t === J;
            return w(this._items, e, i, this._config.wrap);
        }
        _triggerSlideEvent(t, e) {
            const i = this._getItemIndex(t), s = this._getItemIndex(Y.findOne(rt, this._element));
            return $.trigger(this._element, "slide.bs.carousel", {
                relatedTarget: t,
                direction: e,
                from: s,
                to: i
            });
        }
        _setActiveIndicatorElement(t) {
            if (this._indicatorsElement) {
                const e = Y.findOne(".active", this._indicatorsElement);
                e.classList.remove(ot), e.removeAttribute("aria-current");
                const i = Y.find("[data-bs-target]", this._indicatorsElement);
                for(let e = 0; e < i.length; e++)if (Number.parseInt(i[e].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
                    i[e].classList.add(ot), i[e].setAttribute("aria-current", "true");
                    break;
                }
            }
        }
        _updateInterval() {
            const t = this._activeElement || Y.findOne(rt, this._element);
            if (!t) return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval;
        }
        _slide(t, e) {
            const i = this._directionToOrder(t), s = Y.findOne(rt, this._element), n = this._getItemIndex(s), o = e || this._getItemByOrder(i, s), r = this._getItemIndex(o), a = Boolean(this._interval), l = i === J, c = l ? "carousel-item-start" : "carousel-item-end", h = l ? "carousel-item-next" : "carousel-item-prev", d = this._orderToDirection(i);
            if (o && o.classList.contains(ot)) return void (this._isSliding = !1);
            if (this._isSliding) return;
            if (this._triggerSlideEvent(o, d).defaultPrevented) return;
            if (!s || !o) return;
            this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(o), this._activeElement = o;
            const u = ()=>{
                $.trigger(this._element, nt, {
                    relatedTarget: o,
                    direction: d,
                    from: n,
                    to: r
                });
            };
            if (this._element.classList.contains("slide")) {
                o.classList.add(h), f(o), s.classList.add(c), o.classList.add(c);
                const t = ()=>{
                    o.classList.remove(c, h), o.classList.add(ot), s.classList.remove(ot, h, c), this._isSliding = !1, setTimeout(u, 0);
                };
                this._queueCallback(t, s, !0);
            } else s.classList.remove(ot), o.classList.add(ot), this._isSliding = !1, u();
            a && this.cycle();
        }
        _directionToOrder(t) {
            return [
                it,
                et
            ].includes(t) ? b() ? t === et ? tt : J : t === et ? J : tt : t;
        }
        _orderToDirection(t) {
            return [
                J,
                tt
            ].includes(t) ? b() ? t === tt ? et : it : t === tt ? it : et : t;
        }
        static carouselInterface(t, e) {
            const i = at.getOrCreateInstance(t, e);
            let { _config: s } = i;
            "object" == typeof e && (s = {
                ...s,
                ...e
            });
            const n = "string" == typeof e ? e : s.slide;
            if ("number" == typeof e) i.to(e);
            else if ("string" == typeof n) {
                if (void 0 === i[n]) throw new TypeError(`No method named "${n}"`);
                i[n]();
            } else s.interval && s.ride && (i.pause(), i.cycle());
        }
        static jQueryInterface(t) {
            return this.each(function() {
                at.carouselInterface(this, t);
            });
        }
        static dataApiClickHandler(t) {
            const e = r(this);
            if (!e || !e.classList.contains("carousel")) return;
            const i = {
                ...X.getDataAttributes(e),
                ...X.getDataAttributes(this)
            }, s = this.getAttribute("data-bs-slide-to");
            s && (i.interval = !1), at.carouselInterface(e, i), s && at.getInstance(e).to(s), t.preventDefault();
        }
    }
    $.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", at.dataApiClickHandler), $.on(window, "load.bs.carousel.data-api", ()=>{
        const t = Y.find('[data-bs-ride="carousel"]');
        for(let e = 0, i = t.length; e < i; e++)at.carouselInterface(t[e], at.getInstance(t[e]));
    }), v(at);
    const lt = "collapse", ct = {
        toggle: !0,
        parent: null
    }, ht = {
        toggle: "boolean",
        parent: "(null|element)"
    }, dt = "show", ut = "collapse", gt = "collapsing", _t = "collapsed", ft = ":scope .collapse .collapse", pt = '[data-bs-toggle="collapse"]';
    class mt extends R {
        constructor(t, e){
            super(t), this._isTransitioning = !1, this._config = this._getConfig(e), this._triggerArray = [];
            const i = Y.find(pt);
            for(let t = 0, e = i.length; t < e; t++){
                const e = i[t], s = o(e), n = Y.find(s).filter((t)=>t === this._element);
                null !== s && n.length && (this._selector = s, this._triggerArray.push(e));
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
        }
        static get Default() {
            return ct;
        }
        static get NAME() {
            return lt;
        }
        toggle() {
            this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (this._isTransitioning || this._isShown()) return;
            let t, e = [];
            if (this._config.parent) {
                const t = Y.find(ft, this._config.parent);
                e = Y.find(".collapse.show, .collapse.collapsing", this._config.parent).filter((e)=>!t.includes(e));
            }
            const i = Y.findOne(this._selector);
            if (e.length) {
                const s = e.find((t)=>i !== t);
                if (t = s ? mt.getInstance(s) : null, t && t._isTransitioning) return;
            }
            if ($.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
            e.forEach((e)=>{
                i !== e && mt.getOrCreateInstance(e, {
                    toggle: !1
                }).hide(), t || z.set(e, "bs.collapse", null);
            });
            const s = this._getDimension();
            this._element.classList.remove(ut), this._element.classList.add(gt), this._element.style[s] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
            const n = `scroll${s[0].toUpperCase() + s.slice(1)}`;
            this._queueCallback(()=>{
                this._isTransitioning = !1, this._element.classList.remove(gt), this._element.classList.add(ut, dt), this._element.style[s] = "", $.trigger(this._element, "shown.bs.collapse");
            }, this._element, !0), this._element.style[s] = `${this._element[n]}px`;
        }
        hide() {
            if (this._isTransitioning || !this._isShown()) return;
            if ($.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
            const t = this._getDimension();
            this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, f(this._element), this._element.classList.add(gt), this._element.classList.remove(ut, dt);
            const e = this._triggerArray.length;
            for(let t = 0; t < e; t++){
                const e = this._triggerArray[t], i = r(e);
                i && !this._isShown(i) && this._addAriaAndCollapsedClass([
                    e
                ], !1);
            }
            this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback(()=>{
                this._isTransitioning = !1, this._element.classList.remove(gt), this._element.classList.add(ut), $.trigger(this._element, "hidden.bs.collapse");
            }, this._element, !0);
        }
        _isShown(t = this._element) {
            return t.classList.contains(dt);
        }
        _getConfig(t) {
            return (t = {
                ...ct,
                ...X.getDataAttributes(this._element),
                ...t
            }).toggle = Boolean(t.toggle), t.parent = c(t.parent), h(lt, t, ht), t;
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
        }
        _initializeChildren() {
            if (!this._config.parent) return;
            const t = Y.find(ft, this._config.parent);
            Y.find(pt, this._config.parent).filter((e)=>!t.includes(e)).forEach((t)=>{
                const e = r(t);
                e && this._addAriaAndCollapsedClass([
                    t
                ], this._isShown(e));
            });
        }
        _addAriaAndCollapsedClass(t, e) {
            t.length && t.forEach((t)=>{
                e ? t.classList.remove(_t) : t.classList.add(_t), t.setAttribute("aria-expanded", e);
            });
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = {};
                "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1);
                const i = mt.getOrCreateInstance(this, e);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t]();
                }
            });
        }
    }
    $.on(document, "click.bs.collapse.data-api", pt, function(t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        const e = o(this);
        Y.find(e).forEach((t)=>{
            mt.getOrCreateInstance(t, {
                toggle: !1
            }).toggle();
        });
    }), v(mt);
    const bt = "dropdown", vt = "Escape", yt = "Space", Et = "ArrowUp", wt = "ArrowDown", At = new RegExp("ArrowUp|ArrowDown|Escape"), Tt = "click.bs.dropdown.data-api", Ct = "keydown.bs.dropdown.data-api", kt = "show", Lt = '[data-bs-toggle="dropdown"]', St = ".dropdown-menu", Ot = b() ? "top-end" : "top-start", Nt = b() ? "top-start" : "top-end", Dt = b() ? "bottom-end" : "bottom-start", It = b() ? "bottom-start" : "bottom-end", Pt = b() ? "left-start" : "right-start", xt = b() ? "right-start" : "left-start", Mt = {
        offset: [
            0,
            2
        ],
        boundary: "clippingParents",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null,
        autoClose: !0
    }, jt = {
        offset: "(array|string|function)",
        boundary: "(string|element)",
        reference: "(string|element|object)",
        display: "string",
        popperConfig: "(null|object|function)",
        autoClose: "(boolean|string)"
    };
    class Ht extends R {
        constructor(t, e){
            super(t), this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar();
        }
        static get Default() {
            return Mt;
        }
        static get DefaultType() {
            return jt;
        }
        static get NAME() {
            return bt;
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (u(this._element) || this._isShown(this._menu)) return;
            const t = {
                relatedTarget: this._element
            };
            if ($.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) return;
            const e = Ht.getParentFromElement(this._element);
            this._inNavbar ? X.setDataAttribute(this._menu, "popper", "none") : this._createPopper(e), "ontouchstart" in document.documentElement && !e.closest(".navbar-nav") && [].concat(...document.body.children).forEach((t)=>$.on(t, "mouseover", _)), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(kt), this._element.classList.add(kt), $.trigger(this._element, "shown.bs.dropdown", t);
        }
        hide() {
            if (u(this._element) || !this._isShown(this._menu)) return;
            const t = {
                relatedTarget: this._element
            };
            this._completeHide(t);
        }
        dispose() {
            this._popper && this._popper.destroy(), super.dispose();
        }
        update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
        }
        _completeHide(t) {
            $.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t)=>$.off(t, "mouseover", _)), this._popper && this._popper.destroy(), this._menu.classList.remove(kt), this._element.classList.remove(kt), this._element.setAttribute("aria-expanded", "false"), X.removeDataAttribute(this._menu, "popper"), $.trigger(this._element, "hidden.bs.dropdown", t));
        }
        _getConfig(t) {
            if (t = {
                ...this.constructor.Default,
                ...X.getDataAttributes(this._element),
                ...t
            }, h(bt, t, this.constructor.DefaultType), "object" == typeof t.reference && !l(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError(`${bt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t;
        }
        _createPopper(t) {
            if (void 0 === i) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let e = this._element;
            "parent" === this._config.reference ? e = t : l(this._config.reference) ? e = c(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);
            const s = this._getPopperConfig(), n = s.modifiers.find((t)=>"applyStyles" === t.name && !1 === t.enabled);
            this._popper = i.createPopper(e, this._menu, s), n && X.setDataAttribute(this._menu, "popper", "static");
        }
        _isShown(t = this._element) {
            return t.classList.contains(kt);
        }
        _getMenuElement() {
            return Y.next(this._element, St)[0];
        }
        _getPlacement() {
            const t = this._element.parentNode;
            if (t.classList.contains("dropend")) return Pt;
            if (t.classList.contains("dropstart")) return xt;
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? Nt : Ot : e ? It : Dt;
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar");
        }
        _getOffset() {
            const { offset: t } = this._config;
            return "string" == typeof t ? t.split(",").map((t)=>Number.parseInt(t, 10)) : "function" == typeof t ? (e)=>t(e, this._element) : t;
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [
                    {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    },
                    {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    }
                ]
            };
            return "static" === this._config.display && (t.modifiers = [
                {
                    name: "applyStyles",
                    enabled: !1
                }
            ]), {
                ...t,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
            };
        }
        _selectMenuItem({ key: t, target: e }) {
            const i = Y.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(d);
            i.length && w(i, e, t === wt, !i.includes(e)).focus();
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Ht.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
        static clearMenus(t) {
            if (t && (2 === t.button || "keyup" === t.type && "Tab" !== t.key)) return;
            const e = Y.find(Lt);
            for(let i = 0, s = e.length; i < s; i++){
                const s = Ht.getInstance(e[i]);
                if (!s || !1 === s._config.autoClose) continue;
                if (!s._isShown()) continue;
                const n = {
                    relatedTarget: s._element
                };
                if (t) {
                    const e = t.composedPath(), i = e.includes(s._menu);
                    if (e.includes(s._element) || "inside" === s._config.autoClose && !i || "outside" === s._config.autoClose && i) continue;
                    if (s._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
                    "click" === t.type && (n.clickEvent = t);
                }
                s._completeHide(n);
            }
        }
        static getParentFromElement(t) {
            return r(t) || t.parentNode;
        }
        static dataApiKeydownHandler(t) {
            if (/input|textarea/i.test(t.target.tagName) ? t.key === yt || t.key !== vt && (t.key !== wt && t.key !== Et || t.target.closest(St)) : !At.test(t.key)) return;
            const e = this.classList.contains(kt);
            if (!e && t.key === vt) return;
            if (t.preventDefault(), t.stopPropagation(), u(this)) return;
            const i = this.matches(Lt) ? this : Y.prev(this, Lt)[0], s = Ht.getOrCreateInstance(i);
            if (t.key !== vt) return t.key === Et || t.key === wt ? (e || s.show(), void s._selectMenuItem(t)) : void (e && t.key !== yt || Ht.clearMenus());
            s.hide();
        }
    }
    $.on(document, Ct, Lt, Ht.dataApiKeydownHandler), $.on(document, Ct, St, Ht.dataApiKeydownHandler), $.on(document, Tt, Ht.clearMenus), $.on(document, "keyup.bs.dropdown.data-api", Ht.clearMenus), $.on(document, Tt, Lt, function(t) {
        t.preventDefault(), Ht.getOrCreateInstance(this).toggle();
    }), v(Ht);
    const $t = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Bt = ".sticky-top";
    class zt {
        constructor(){
            this._element = document.body;
        }
        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t);
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", (e)=>e + t), this._setElementAttributes($t, "paddingRight", (e)=>e + t), this._setElementAttributes(Bt, "marginRight", (e)=>e - t);
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
        }
        _setElementAttributes(t, e, i) {
            const s = this.getWidth();
            this._applyManipulationCallback(t, (t)=>{
                if (t !== this._element && window.innerWidth > t.clientWidth + s) return;
                this._saveInitialAttribute(t, e);
                const n = window.getComputedStyle(t)[e];
                t.style[e] = `${i(Number.parseFloat(n))}px`;
            });
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes($t, "paddingRight"), this._resetElementAttributes(Bt, "marginRight");
        }
        _saveInitialAttribute(t, e) {
            const i = t.style[e];
            i && X.setDataAttribute(t, e, i);
        }
        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, (t)=>{
                const i = X.getDataAttribute(t, e);
                void 0 === i ? t.style.removeProperty(e) : (X.removeDataAttribute(t, e), t.style[e] = i);
            });
        }
        _applyManipulationCallback(t, e) {
            l(t) ? e(t) : Y.find(t, this._element).forEach(e);
        }
        isOverflowing() {
            return this.getWidth() > 0;
        }
    }
    const Rt = {
        className: "modal-backdrop",
        isVisible: !0,
        isAnimated: !1,
        rootElement: "body",
        clickCallback: null
    }, Ft = {
        className: "string",
        isVisible: "boolean",
        isAnimated: "boolean",
        rootElement: "(element|string)",
        clickCallback: "(function|null)"
    }, qt = "show", Wt = "mousedown.bs.backdrop";
    class Ut {
        constructor(t){
            this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
        }
        show(t) {
            this._config.isVisible ? (this._append(), this._config.isAnimated && f(this._getElement()), this._getElement().classList.add(qt), this._emulateAnimation(()=>{
                y(t);
            })) : y(t);
        }
        hide(t) {
            this._config.isVisible ? (this._getElement().classList.remove(qt), this._emulateAnimation(()=>{
                this.dispose(), y(t);
            })) : y(t);
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                t.className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t;
            }
            return this._element;
        }
        _getConfig(t) {
            return (t = {
                ...Rt,
                ..."object" == typeof t ? t : {}
            }).rootElement = c(t.rootElement), h("backdrop", t, Ft), t;
        }
        _append() {
            this._isAppended || (this._config.rootElement.append(this._getElement()), $.on(this._getElement(), Wt, ()=>{
                y(this._config.clickCallback);
            }), this._isAppended = !0);
        }
        dispose() {
            this._isAppended && ($.off(this._element, Wt), this._element.remove(), this._isAppended = !1);
        }
        _emulateAnimation(t) {
            E(t, this._getElement(), this._config.isAnimated);
        }
    }
    const Kt = {
        trapElement: null,
        autofocus: !0
    }, Vt = {
        trapElement: "element",
        autofocus: "boolean"
    }, Xt = ".bs.focustrap", Yt = "backward";
    class Qt {
        constructor(t){
            this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null;
        }
        activate() {
            const { trapElement: t, autofocus: e } = this._config;
            this._isActive || (e && t.focus(), $.off(document, Xt), $.on(document, "focusin.bs.focustrap", (t)=>this._handleFocusin(t)), $.on(document, "keydown.tab.bs.focustrap", (t)=>this._handleKeydown(t)), this._isActive = !0);
        }
        deactivate() {
            this._isActive && (this._isActive = !1, $.off(document, Xt));
        }
        _handleFocusin(t) {
            const { target: e } = t, { trapElement: i } = this._config;
            if (e === document || e === i || i.contains(e)) return;
            const s = Y.focusableChildren(i);
            0 === s.length ? i.focus() : this._lastTabNavDirection === Yt ? s[s.length - 1].focus() : s[0].focus();
        }
        _handleKeydown(t) {
            "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? Yt : "forward");
        }
        _getConfig(t) {
            return t = {
                ...Kt,
                ..."object" == typeof t ? t : {}
            }, h("focustrap", t, Vt), t;
        }
    }
    const Gt = "modal", Zt = "Escape", Jt = {
        backdrop: !0,
        keyboard: !0,
        focus: !0
    }, te = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean"
    }, ee = "hidden.bs.modal", ie = "show.bs.modal", se = "resize.bs.modal", ne = "click.dismiss.bs.modal", oe = "keydown.dismiss.bs.modal", re = "mousedown.dismiss.bs.modal", ae = "modal-open", le = "show", ce = "modal-static";
    class he extends R {
        constructor(t, e){
            super(t), this._config = this._getConfig(e), this._dialog = Y.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollBar = new zt;
        }
        static get Default() {
            return Jt;
        }
        static get NAME() {
            return Gt;
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            this._isShown || this._isTransitioning || $.trigger(this._element, ie, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add(ae), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), $.on(this._dialog, re, ()=>{
                $.one(this._element, "mouseup.dismiss.bs.modal", (t)=>{
                    t.target === this._element && (this._ignoreBackdropClick = !0);
                });
            }), this._showBackdrop(()=>this._showElement(t)));
        }
        hide() {
            if (!this._isShown || this._isTransitioning) return;
            if ($.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
            this._isShown = !1;
            const t = this._isAnimated();
            t && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove(le), $.off(this._element, ne), $.off(this._dialog, re), this._queueCallback(()=>this._hideModal(), this._element, t);
        }
        dispose() {
            [
                window,
                this._dialog
            ].forEach((t)=>$.off(t, ".bs.modal")), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        handleUpdate() {
            this._adjustDialog();
        }
        _initializeBackDrop() {
            return new Ut({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            });
        }
        _initializeFocusTrap() {
            return new Qt({
                trapElement: this._element
            });
        }
        _getConfig(t) {
            return t = {
                ...Jt,
                ...X.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            }, h(Gt, t, te), t;
        }
        _showElement(t) {
            const e = this._isAnimated(), i = Y.findOne(".modal-body", this._dialog);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), e && f(this._element), this._element.classList.add(le), this._queueCallback(()=>{
                this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, $.trigger(this._element, "shown.bs.modal", {
                    relatedTarget: t
                });
            }, this._dialog, e);
        }
        _setEscapeEvent() {
            this._isShown ? $.on(this._element, oe, (t)=>{
                this._config.keyboard && t.key === Zt ? (t.preventDefault(), this.hide()) : this._config.keyboard || t.key !== Zt || this._triggerBackdropTransition();
            }) : $.off(this._element, oe);
        }
        _setResizeEvent() {
            this._isShown ? $.on(window, se, ()=>this._adjustDialog()) : $.off(window, se);
        }
        _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(()=>{
                document.body.classList.remove(ae), this._resetAdjustments(), this._scrollBar.reset(), $.trigger(this._element, ee);
            });
        }
        _showBackdrop(t) {
            $.on(this._element, ne, (t)=>{
                this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition());
            }), this._backdrop.show(t);
        }
        _isAnimated() {
            return this._element.classList.contains("fade");
        }
        _triggerBackdropTransition() {
            if ($.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
            const { classList: t, scrollHeight: e, style: i } = this._element, s = e > document.documentElement.clientHeight;
            !s && "hidden" === i.overflowY || t.contains(ce) || (s || (i.overflowY = "hidden"), t.add(ce), this._queueCallback(()=>{
                t.remove(ce), s || this._queueCallback(()=>{
                    i.overflowY = "";
                }, this._dialog);
            }, this._dialog), this._element.focus());
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._scrollBar.getWidth(), i = e > 0;
            (!i && t && !b() || i && !t && b()) && (this._element.style.paddingLeft = `${e}px`), (i && !t && !b() || !i && t && b()) && (this._element.style.paddingRight = `${e}px`);
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
        }
        static jQueryInterface(t, e) {
            return this.each(function() {
                const i = he.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t](e);
                }
            });
        }
    }
    $.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function(t) {
        const e = r(this);
        [
            "A",
            "AREA"
        ].includes(this.tagName) && t.preventDefault(), $.one(e, ie, (t)=>{
            t.defaultPrevented || $.one(e, ee, ()=>{
                d(this) && this.focus();
            });
        });
        const i = Y.findOne(".modal.show");
        i && he.getInstance(i).hide(), he.getOrCreateInstance(e).toggle(this);
    }), F(he), v(he);
    const de = "offcanvas", ue = {
        backdrop: !0,
        keyboard: !0,
        scroll: !1
    }, ge = {
        backdrop: "boolean",
        keyboard: "boolean",
        scroll: "boolean"
    }, _e = "show", fe = ".offcanvas.show", pe = "hidden.bs.offcanvas";
    class me extends R {
        constructor(t, e){
            super(t), this._config = this._getConfig(e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
        }
        static get NAME() {
            return de;
        }
        static get Default() {
            return ue;
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            this._isShown || $.trigger(this._element, "show.bs.offcanvas", {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || (new zt).hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(_e), this._queueCallback(()=>{
                this._config.scroll || this._focustrap.activate(), $.trigger(this._element, "shown.bs.offcanvas", {
                    relatedTarget: t
                });
            }, this._element, !0));
        }
        hide() {
            this._isShown && ($.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.remove(_e), this._backdrop.hide(), this._queueCallback(()=>{
                this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || (new zt).reset(), $.trigger(this._element, pe);
            }, this._element, !0)));
        }
        dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        _getConfig(t) {
            return t = {
                ...ue,
                ...X.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            }, h(de, t, ge), t;
        }
        _initializeBackDrop() {
            return new Ut({
                className: "offcanvas-backdrop",
                isVisible: this._config.backdrop,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: ()=>this.hide()
            });
        }
        _initializeFocusTrap() {
            return new Qt({
                trapElement: this._element
            });
        }
        _addEventListeners() {
            $.on(this._element, "keydown.dismiss.bs.offcanvas", (t)=>{
                this._config.keyboard && "Escape" === t.key && this.hide();
            });
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = me.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    $.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function(t) {
        const e = r(this);
        if ([
            "A",
            "AREA"
        ].includes(this.tagName) && t.preventDefault(), u(this)) return;
        $.one(e, pe, ()=>{
            d(this) && this.focus();
        });
        const i = Y.findOne(fe);
        i && i !== e && me.getInstance(i).hide(), me.getOrCreateInstance(e).toggle(this);
    }), $.on(window, "load.bs.offcanvas.data-api", ()=>Y.find(fe).forEach((t)=>me.getOrCreateInstance(t).show())), F(me), v(me);
    const be = new Set([
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href"
    ]), ve = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i, ye = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i, Ee = (t, e)=>{
        const i = t.nodeName.toLowerCase();
        if (e.includes(i)) return !be.has(i) || Boolean(ve.test(t.nodeValue) || ye.test(t.nodeValue));
        const s = e.filter((t)=>t instanceof RegExp);
        for(let t = 0, e = s.length; t < e; t++)if (s[t].test(i)) return !0;
        return !1;
    };
    function we(t, e, i) {
        if (!t.length) return t;
        if (i && "function" == typeof i) return i(t);
        const s = (new window.DOMParser).parseFromString(t, "text/html"), n = [].concat(...s.body.querySelectorAll("*"));
        for(let t = 0, i = n.length; t < i; t++){
            const i = n[t], s = i.nodeName.toLowerCase();
            if (!Object.keys(e).includes(s)) {
                i.remove();
                continue;
            }
            const o = [].concat(...i.attributes), r = [].concat(e["*"] || [], e[s] || []);
            o.forEach((t)=>{
                Ee(t, r) || i.removeAttribute(t.nodeName);
            });
        }
        return s.body.innerHTML;
    }
    const Ae = "tooltip", Te = new Set([
        "sanitize",
        "allowList",
        "sanitizeFn"
    ]), Ce = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(array|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacements: "array",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        allowList: "object",
        popperConfig: "(null|object|function)"
    }, ke = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: b() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: b() ? "right" : "left"
    }, Le = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: [
            0,
            0
        ],
        container: !1,
        fallbackPlacements: [
            "top",
            "right",
            "bottom",
            "left"
        ],
        boundary: "clippingParents",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        allowList: {
            "*": [
                "class",
                "dir",
                "id",
                "lang",
                "role",
                /^aria-[\w-]*$/i
            ],
            a: [
                "target",
                "href",
                "title",
                "rel"
            ],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: [
                "src",
                "srcset",
                "alt",
                "title",
                "width",
                "height"
            ],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        popperConfig: null
    }, Se = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip"
    }, Oe = "fade", Ne = "show", De = "show", Ie = "out", Pe = ".tooltip-inner", xe = ".modal", Me = "hide.bs.modal", je = "hover", He = "focus";
    class $e extends R {
        constructor(t, e){
            if (void 0 === i) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(e), this.tip = null, this._setListeners();
        }
        static get Default() {
            return Le;
        }
        static get NAME() {
            return Ae;
        }
        static get Event() {
            return Se;
        }
        static get DefaultType() {
            return Ce;
        }
        enable() {
            this._isEnabled = !0;
        }
        disable() {
            this._isEnabled = !1;
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled;
        }
        toggle(t) {
            if (this._isEnabled) {
                if (t) {
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e);
                } else {
                    if (this.getTipElement().classList.contains(Ne)) return void this._leave(null, this);
                    this._enter(null, this);
                }
            }
        }
        dispose() {
            clearTimeout(this._timeout), $.off(this._element.closest(xe), Me, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), super.dispose();
        }
        show() {
            if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
            if (!this.isWithContent() || !this._isEnabled) return;
            const t = $.trigger(this._element, this.constructor.Event.SHOW), e = g(this._element), s = null === e ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
            if (t.defaultPrevented || !s) return;
            "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(Pe).innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null);
            const n = this.getTipElement(), o = ((t)=>{
                do t += Math.floor(1e6 * Math.random());
                while (document.getElementById(t));
                return t;
            })(this.constructor.NAME);
            n.setAttribute("id", o), this._element.setAttribute("aria-describedby", o), this._config.animation && n.classList.add(Oe);
            const r = "function" == typeof this._config.placement ? this._config.placement.call(this, n, this._element) : this._config.placement, a = this._getAttachment(r);
            this._addAttachmentClass(a);
            const { container: l } = this._config;
            z.set(n, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (l.append(n), $.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = i.createPopper(this._element, n, this._getPopperConfig(a)), n.classList.add(Ne);
            const c = this._resolvePossibleFunction(this._config.customClass);
            c && n.classList.add(...c.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t)=>{
                $.on(t, "mouseover", _);
            });
            const h = this.tip.classList.contains(Oe);
            this._queueCallback(()=>{
                const t = this._hoverState;
                this._hoverState = null, $.trigger(this._element, this.constructor.Event.SHOWN), t === Ie && this._leave(null, this);
            }, this.tip, h);
        }
        hide() {
            if (!this._popper) return;
            const t = this.getTipElement();
            if ($.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
            t.classList.remove(Ne), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t)=>$.off(t, "mouseover", _)), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
            const e = this.tip.classList.contains(Oe);
            this._queueCallback(()=>{
                this._isWithActiveTrigger() || (this._hoverState !== De && t.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), $.trigger(this._element, this.constructor.Event.HIDDEN), this._disposePopper());
            }, this.tip, e), this._hoverState = "";
        }
        update() {
            null !== this._popper && this._popper.update();
        }
        isWithContent() {
            return Boolean(this.getTitle());
        }
        getTipElement() {
            if (this.tip) return this.tip;
            const t = document.createElement("div");
            t.innerHTML = this._config.template;
            const e = t.children[0];
            return this.setContent(e), e.classList.remove(Oe, Ne), this.tip = e, this.tip;
        }
        setContent(t) {
            this._sanitizeAndSetContent(t, this.getTitle(), Pe);
        }
        _sanitizeAndSetContent(t, e, i) {
            const s = Y.findOne(i, t);
            e || !s ? this.setElementContent(s, e) : s.remove();
        }
        setElementContent(t, e) {
            if (null !== t) return l(e) ? (e = c(e), void (this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.append(e)) : t.textContent = e.textContent)) : void (this._config.html ? (this._config.sanitize && (e = we(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML = e) : t.textContent = e);
        }
        getTitle() {
            const t = this._element.getAttribute("data-bs-original-title") || this._config.title;
            return this._resolvePossibleFunction(t);
        }
        updateAttachment(t) {
            return "right" === t ? "end" : "left" === t ? "start" : t;
        }
        _initializeOnDelegatedTarget(t, e) {
            return e || this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig());
        }
        _getOffset() {
            const { offset: t } = this._config;
            return "string" == typeof t ? t.split(",").map((t)=>Number.parseInt(t, 10)) : "function" == typeof t ? (e)=>t(e, this._element) : t;
        }
        _resolvePossibleFunction(t) {
            return "function" == typeof t ? t.call(this._element) : t;
        }
        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [
                    {
                        name: "flip",
                        options: {
                            fallbackPlacements: this._config.fallbackPlacements
                        }
                    },
                    {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    },
                    {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    },
                    {
                        name: "arrow",
                        options: {
                            element: `.${this.constructor.NAME}-arrow`
                        }
                    },
                    {
                        name: "onChange",
                        enabled: !0,
                        phase: "afterWrite",
                        fn: (t)=>this._handlePopperPlacementChange(t)
                    }
                ],
                onFirstUpdate: (t)=>{
                    t.options.placement !== t.placement && this._handlePopperPlacementChange(t);
                }
            };
            return {
                ...e,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
            };
        }
        _addAttachmentClass(t) {
            this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`);
        }
        _getAttachment(t) {
            return ke[t.toUpperCase()];
        }
        _setListeners() {
            this._config.trigger.split(" ").forEach((t)=>{
                if ("click" === t) $.on(this._element, this.constructor.Event.CLICK, this._config.selector, (t)=>this.toggle(t));
                else if ("manual" !== t) {
                    const e = t === je ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN, i = t === je ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                    $.on(this._element, e, this._config.selector, (t)=>this._enter(t)), $.on(this._element, i, this._config.selector, (t)=>this._leave(t));
                }
            }), this._hideModalHandler = ()=>{
                this._element && this.hide();
            }, $.on(this._element.closest(xe), Me, this._hideModalHandler), this._config.selector ? this._config = {
                ...this._config,
                trigger: "manual",
                selector: ""
            } : this._fixTitle();
        }
        _fixTitle() {
            const t = this._element.getAttribute("title"), e = typeof this._element.getAttribute("data-bs-original-title");
            (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""));
        }
        _enter(t, e) {
            e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? He : je] = !0), e.getTipElement().classList.contains(Ne) || e._hoverState === De ? e._hoverState = De : (clearTimeout(e._timeout), e._hoverState = De, e._config.delay && e._config.delay.show ? e._timeout = setTimeout(()=>{
                e._hoverState === De && e.show();
            }, e._config.delay.show) : e.show());
        }
        _leave(t, e) {
            e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? He : je] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = Ie, e._config.delay && e._config.delay.hide ? e._timeout = setTimeout(()=>{
                e._hoverState === Ie && e.hide();
            }, e._config.delay.hide) : e.hide());
        }
        _isWithActiveTrigger() {
            for(const t in this._activeTrigger)if (this._activeTrigger[t]) return !0;
            return !1;
        }
        _getConfig(t) {
            const e = X.getDataAttributes(this._element);
            return Object.keys(e).forEach((t)=>{
                Te.has(t) && delete e[t];
            }), (t = {
                ...this.constructor.Default,
                ...e,
                ..."object" == typeof t && t ? t : {}
            }).container = !1 === t.container ? document.body : c(t.container), "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), h(Ae, t, this.constructor.DefaultType), t.sanitize && (t.template = we(t.template, t.allowList, t.sanitizeFn)), t;
        }
        _getDelegateConfig() {
            const t = {};
            for(const e in this._config)this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
            return t;
        }
        _cleanTipClass() {
            const t = this.getTipElement(), e = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"), i = t.getAttribute("class").match(e);
            null !== i && i.length > 0 && i.map((t)=>t.trim()).forEach((e)=>t.classList.remove(e));
        }
        _getBasicClassPrefix() {
            return "bs-tooltip";
        }
        _handlePopperPlacementChange(t) {
            const { state: e } = t;
            e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)));
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(), this._popper = null);
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = $e.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    v($e);
    const Be = {
        ...$e.Default,
        placement: "right",
        offset: [
            0,
            8
        ],
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }, ze = {
        ...$e.DefaultType,
        content: "(string|element|function)"
    }, Re = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover"
    };
    class Fe extends $e {
        static get Default() {
            return Be;
        }
        static get NAME() {
            return "popover";
        }
        static get Event() {
            return Re;
        }
        static get DefaultType() {
            return ze;
        }
        isWithContent() {
            return this.getTitle() || this._getContent();
        }
        setContent(t) {
            this._sanitizeAndSetContent(t, this.getTitle(), ".popover-header"), this._sanitizeAndSetContent(t, this._getContent(), ".popover-body");
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content);
        }
        _getBasicClassPrefix() {
            return "bs-popover";
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Fe.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    v(Fe);
    const qe = "scrollspy", We = {
        offset: 10,
        method: "auto",
        target: ""
    }, Ue = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }, Ke = "active", Ve = ".nav-link, .list-group-item, .dropdown-item", Xe = "position";
    class Ye extends R {
        constructor(t, e){
            super(t), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(e), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, $.on(this._scrollElement, "scroll.bs.scrollspy", ()=>this._process()), this.refresh(), this._process();
        }
        static get Default() {
            return We;
        }
        static get NAME() {
            return qe;
        }
        refresh() {
            const t = this._scrollElement === this._scrollElement.window ? "offset" : Xe, e = "auto" === this._config.method ? t : this._config.method, i = e === Xe ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), Y.find(Ve, this._config.target).map((t)=>{
                const s = o(t), n = s ? Y.findOne(s) : null;
                if (n) {
                    const t = n.getBoundingClientRect();
                    if (t.width || t.height) return [
                        X[e](n).top + i,
                        s
                    ];
                }
                return null;
            }).filter((t)=>t).sort((t, e)=>t[0] - e[0]).forEach((t)=>{
                this._offsets.push(t[0]), this._targets.push(t[1]);
            });
        }
        dispose() {
            $.off(this._scrollElement, ".bs.scrollspy"), super.dispose();
        }
        _getConfig(t) {
            return (t = {
                ...We,
                ...X.getDataAttributes(this._element),
                ..."object" == typeof t && t ? t : {}
            }).target = c(t.target) || document.documentElement, h(qe, t, Ue), t;
        }
        _getScrollTop() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
        }
        _getScrollHeight() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        }
        _getOffsetHeight() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
        }
        _process() {
            const t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(), i = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(), t >= i) {
                const t = this._targets[this._targets.length - 1];
                this._activeTarget !== t && this._activate(t);
            } else {
                if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                for(let e = this._offsets.length; e--;)this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e]);
            }
        }
        _activate(t) {
            this._activeTarget = t, this._clear();
            const e = Ve.split(",").map((e)=>`${e}[data-bs-target="${t}"],${e}[href="${t}"]`), i = Y.findOne(e.join(","), this._config.target);
            i.classList.add(Ke), i.classList.contains("dropdown-item") ? Y.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add(Ke) : Y.parents(i, ".nav, .list-group").forEach((t)=>{
                Y.prev(t, ".nav-link, .list-group-item").forEach((t)=>t.classList.add(Ke)), Y.prev(t, ".nav-item").forEach((t)=>{
                    Y.children(t, ".nav-link").forEach((t)=>t.classList.add(Ke));
                });
            }), $.trigger(this._scrollElement, "activate.bs.scrollspy", {
                relatedTarget: t
            });
        }
        _clear() {
            Y.find(Ve, this._config.target).filter((t)=>t.classList.contains(Ke)).forEach((t)=>t.classList.remove(Ke));
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Ye.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    $.on(window, "load.bs.scrollspy.data-api", ()=>{
        Y.find('[data-bs-spy="scroll"]').forEach((t)=>new Ye(t));
    }), v(Ye);
    const Qe = "active", Ge = "fade", Ze = "show", Je = ".active", ti = ":scope > li > .active";
    class ei extends R {
        static get NAME() {
            return "tab";
        }
        show() {
            if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(Qe)) return;
            let t;
            const e = r(this._element), i = this._element.closest(".nav, .list-group");
            if (i) {
                const e = "UL" === i.nodeName || "OL" === i.nodeName ? ti : Je;
                t = Y.find(e, i), t = t[t.length - 1];
            }
            const s = t ? $.trigger(t, "hide.bs.tab", {
                relatedTarget: this._element
            }) : null;
            if ($.trigger(this._element, "show.bs.tab", {
                relatedTarget: t
            }).defaultPrevented || null !== s && s.defaultPrevented) return;
            this._activate(this._element, i);
            const n = ()=>{
                $.trigger(t, "hidden.bs.tab", {
                    relatedTarget: this._element
                }), $.trigger(this._element, "shown.bs.tab", {
                    relatedTarget: t
                });
            };
            e ? this._activate(e, e.parentNode, n) : n();
        }
        _activate(t, e, i) {
            const s = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? Y.children(e, Je) : Y.find(ti, e))[0], n = i && s && s.classList.contains(Ge), o = ()=>this._transitionComplete(t, s, i);
            s && n ? (s.classList.remove(Ze), this._queueCallback(o, t, !0)) : o();
        }
        _transitionComplete(t, e, i) {
            if (e) {
                e.classList.remove(Qe);
                const t = Y.findOne(":scope > .dropdown-menu .active", e.parentNode);
                t && t.classList.remove(Qe), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
            }
            t.classList.add(Qe), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), f(t), t.classList.contains(Ge) && t.classList.add(Ze);
            let s = t.parentNode;
            if (s && "LI" === s.nodeName && (s = s.parentNode), s && s.classList.contains("dropdown-menu")) {
                const e = t.closest(".dropdown");
                e && Y.find(".dropdown-toggle", e).forEach((t)=>t.classList.add(Qe)), t.setAttribute("aria-expanded", !0);
            }
            i && i();
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = ei.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    $.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function(t) {
        [
            "A",
            "AREA"
        ].includes(this.tagName) && t.preventDefault(), u(this) || ei.getOrCreateInstance(this).show();
    }), v(ei);
    const ii = "toast", si = "hide", ni = "show", oi = "showing", ri = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }, ai = {
        animation: !0,
        autohide: !0,
        delay: 5e3
    };
    class li extends R {
        constructor(t, e){
            super(t), this._config = this._getConfig(e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
        }
        static get DefaultType() {
            return ri;
        }
        static get Default() {
            return ai;
        }
        static get NAME() {
            return ii;
        }
        show() {
            $.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(si), f(this._element), this._element.classList.add(ni), this._element.classList.add(oi), this._queueCallback(()=>{
                this._element.classList.remove(oi), $.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide();
            }, this._element, this._config.animation));
        }
        hide() {
            this._element.classList.contains(ni) && ($.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(oi), this._queueCallback(()=>{
                this._element.classList.add(si), this._element.classList.remove(oi), this._element.classList.remove(ni), $.trigger(this._element, "hidden.bs.toast");
            }, this._element, this._config.animation)));
        }
        dispose() {
            this._clearTimeout(), this._element.classList.contains(ni) && this._element.classList.remove(ni), super.dispose();
        }
        _getConfig(t) {
            return t = {
                ...ai,
                ...X.getDataAttributes(this._element),
                ..."object" == typeof t && t ? t : {}
            }, h(ii, t, this.constructor.DefaultType), t;
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(()=>{
                this.hide();
            }, this._config.delay)));
        }
        _onInteraction(t, e) {
            switch(t.type){
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = e;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = e;
            }
            if (e) return void this._clearTimeout();
            const i = t.relatedTarget;
            this._element === i || this._element.contains(i) || this._maybeScheduleHide();
        }
        _setListeners() {
            $.on(this._element, "mouseover.bs.toast", (t)=>this._onInteraction(t, !0)), $.on(this._element, "mouseout.bs.toast", (t)=>this._onInteraction(t, !1)), $.on(this._element, "focusin.bs.toast", (t)=>this._onInteraction(t, !0)), $.on(this._element, "focusout.bs.toast", (t)=>this._onInteraction(t, !1));
        }
        _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null;
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = li.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    return F(li), v(li), {
        Alert: q,
        Button: U,
        Carousel: at,
        Collapse: mt,
        Dropdown: Ht,
        Modal: he,
        Offcanvas: me,
        Popover: Fe,
        ScrollSpy: Ye,
        Tab: ei,
        Toast: li,
        Tooltip: $e
    };
});

},{"26e7e038bbffa6e3":"8fU5k"}],"8fU5k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "popperGenerator", ()=>(0, _createPopperJs.popperGenerator)) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _createPopperJs.detectOverflow));
parcelHelpers.export(exports, "createPopperBase", ()=>(0, _createPopperJs.createPopper));
parcelHelpers.export(exports, "createPopper", ()=>(0, _popperJs.createPopper)) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "createPopperLite", ()=>(0, _popperLiteJs.createPopper));
var _enumsJs = require("./enums.js");
parcelHelpers.exportAll(_enumsJs, exports);
var _indexJs = require("./modifiers/index.js"); // eslint-disable-next-line import/no-unused-modules
parcelHelpers.exportAll(_indexJs, exports);
var _createPopperJs = require("./createPopper.js");
var _popperJs = require("./popper.js");
var _popperLiteJs = require("./popper-lite.js");

},{"./enums.js":"iZsWv","./modifiers/index.js":"jqfiX","./createPopper.js":"26twY","./popper.js":"5SArp","./popper-lite.js":"l1GvT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iZsWv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "top", ()=>top);
parcelHelpers.export(exports, "bottom", ()=>bottom);
parcelHelpers.export(exports, "right", ()=>right);
parcelHelpers.export(exports, "left", ()=>left);
parcelHelpers.export(exports, "auto", ()=>auto);
parcelHelpers.export(exports, "basePlacements", ()=>basePlacements);
parcelHelpers.export(exports, "start", ()=>start);
parcelHelpers.export(exports, "end", ()=>end);
parcelHelpers.export(exports, "clippingParents", ()=>clippingParents);
parcelHelpers.export(exports, "viewport", ()=>viewport);
parcelHelpers.export(exports, "popper", ()=>popper);
parcelHelpers.export(exports, "reference", ()=>reference);
parcelHelpers.export(exports, "variationPlacements", ()=>variationPlacements);
parcelHelpers.export(exports, "placements", ()=>placements);
parcelHelpers.export(exports, "beforeRead", ()=>beforeRead);
parcelHelpers.export(exports, "read", ()=>read);
parcelHelpers.export(exports, "afterRead", ()=>afterRead);
parcelHelpers.export(exports, "beforeMain", ()=>beforeMain);
parcelHelpers.export(exports, "main", ()=>main);
parcelHelpers.export(exports, "afterMain", ()=>afterMain);
parcelHelpers.export(exports, "beforeWrite", ()=>beforeWrite);
parcelHelpers.export(exports, "write", ()=>write);
parcelHelpers.export(exports, "afterWrite", ()=>afterWrite);
parcelHelpers.export(exports, "modifierPhases", ()=>modifierPhases);
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [
    top,
    bottom,
    right,
    left
];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /*#__PURE__*/ basePlacements.reduce(function(acc, placement) {
    return acc.concat([
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []);
var placements = /*#__PURE__*/ [].concat(basePlacements, [
    auto
]).reduce(function(acc, placement) {
    return acc.concat([
        placement,
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []); // modifiers that need to read the DOM
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead"; // pure-logic modifiers
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain"; // modifier with the purpose to write to the DOM (or write into a framework state)
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [
    beforeRead,
    read,
    afterRead,
    beforeMain,
    main,
    afterMain,
    beforeWrite,
    write,
    afterWrite
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jqfiX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyStyles", ()=>(0, _applyStylesJsDefault.default));
parcelHelpers.export(exports, "arrow", ()=>(0, _arrowJsDefault.default));
parcelHelpers.export(exports, "computeStyles", ()=>(0, _computeStylesJsDefault.default));
parcelHelpers.export(exports, "eventListeners", ()=>(0, _eventListenersJsDefault.default));
parcelHelpers.export(exports, "flip", ()=>(0, _flipJsDefault.default));
parcelHelpers.export(exports, "hide", ()=>(0, _hideJsDefault.default));
parcelHelpers.export(exports, "offset", ()=>(0, _offsetJsDefault.default));
parcelHelpers.export(exports, "popperOffsets", ()=>(0, _popperOffsetsJsDefault.default));
parcelHelpers.export(exports, "preventOverflow", ()=>(0, _preventOverflowJsDefault.default));
var _applyStylesJs = require("./applyStyles.js");
var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs);
var _arrowJs = require("./arrow.js");
var _arrowJsDefault = parcelHelpers.interopDefault(_arrowJs);
var _computeStylesJs = require("./computeStyles.js");
var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs);
var _eventListenersJs = require("./eventListeners.js");
var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs);
var _flipJs = require("./flip.js");
var _flipJsDefault = parcelHelpers.interopDefault(_flipJs);
var _hideJs = require("./hide.js");
var _hideJsDefault = parcelHelpers.interopDefault(_hideJs);
var _offsetJs = require("./offset.js");
var _offsetJsDefault = parcelHelpers.interopDefault(_offsetJs);
var _popperOffsetsJs = require("./popperOffsets.js");
var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs);
var _preventOverflowJs = require("./preventOverflow.js");
var _preventOverflowJsDefault = parcelHelpers.interopDefault(_preventOverflowJs);

},{"./applyStyles.js":"lCT8B","./arrow.js":"c8Kk7","./computeStyles.js":"cOU4Y","./eventListeners.js":"1GOzY","./flip.js":"6yQQf","./hide.js":"dCbvT","./offset.js":"3fOjp","./popperOffsets.js":"hzsmD","./preventOverflow.js":"bxZhH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lCT8B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNodeNameJs = require("../dom-utils/getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("../dom-utils/instanceOf.js"); // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow
function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name) {
        var style = state.styles[name] || {};
        var attributes = state.attributes[name] || {};
        var element = state.elements[name]; // arrow is optional + virtual elements
        if (!(0, _instanceOfJs.isHTMLElement)(element) || !(0, _getNodeNameJsDefault.default)(element)) return;
         // Flow doesn't support to extend this property, but it's the most
        // effective way to apply styles to an HTMLElement
        // $FlowFixMe[cannot-write]
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(name) {
            var value = attributes[name];
            if (value === false) element.removeAttribute(name);
            else element.setAttribute(name, value === true ? "" : value);
        });
    });
}
function effect(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
        popper: {
            position: state.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
        },
        arrow: {
            position: "absolute"
        },
        reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
    return function() {
        Object.keys(state.elements).forEach(function(name) {
            var element = state.elements[name];
            var attributes = state.attributes[name] || {};
            var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them
            var style = styleProperties.reduce(function(style, property) {
                style[property] = "";
                return style;
            }, {}); // arrow is optional + virtual elements
            if (!(0, _instanceOfJs.isHTMLElement)(element) || !(0, _getNodeNameJsDefault.default)(element)) return;
            Object.assign(element.style, style);
            Object.keys(attributes).forEach(function(attribute) {
                element.removeAttribute(attribute);
            });
        });
    };
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: applyStyles,
    effect: effect,
    requires: [
        "computeStyles"
    ]
};

},{"../dom-utils/getNodeName.js":"6tswu","../dom-utils/instanceOf.js":"6LUGk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6tswu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getNodeName);
function getNodeName(element) {
    return element ? (element.nodeName || "").toLowerCase() : null;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6LUGk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isElement", ()=>isElement);
parcelHelpers.export(exports, "isHTMLElement", ()=>isHTMLElement);
parcelHelpers.export(exports, "isShadowRoot", ()=>isShadowRoot);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function isElement(node) {
    var OwnElement = (0, _getWindowJsDefault.default)(node).Element;
    return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
    var OwnElement = (0, _getWindowJsDefault.default)(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === "undefined") return false;
    var OwnElement = (0, _getWindowJsDefault.default)(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
}

},{"./getWindow.js":"cr5KP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cr5KP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getWindow);
function getWindow(node) {
    if (node == null) return window;
    if (node.toString() !== "[object Window]") {
        var ownerDocument = node.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c8Kk7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getLayoutRectJs = require("../dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _containsJs = require("../dom-utils/contains.js");
var _containsJsDefault = parcelHelpers.interopDefault(_containsJs);
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getMainAxisFromPlacementJs = require("../utils/getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _withinJs = require("../utils/within.js");
var _mergePaddingObjectJs = require("../utils/mergePaddingObject.js");
var _mergePaddingObjectJsDefault = parcelHelpers.interopDefault(_mergePaddingObjectJs);
var _expandToHashMapJs = require("../utils/expandToHashMap.js");
var _expandToHashMapJsDefault = parcelHelpers.interopDefault(_expandToHashMapJs);
var _enumsJs = require("../enums.js");
var _instanceOfJs = require("../dom-utils/instanceOf.js"); // eslint-disable-next-line import/no-unused-modules
var toPaddingObject = function toPaddingObject(padding, state) {
    padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
        placement: state.placement
    })) : padding;
    return (0, _mergePaddingObjectJsDefault.default)(typeof padding !== "number" ? padding : (0, _expandToHashMapJsDefault.default)(padding, (0, _enumsJs.basePlacements)));
};
function arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = (0, _getBasePlacementJsDefault.default)(state.placement);
    var axis = (0, _getMainAxisFromPlacementJsDefault.default)(basePlacement);
    var isVertical = [
        (0, _enumsJs.left),
        (0, _enumsJs.right)
    ].indexOf(basePlacement) >= 0;
    var len = isVertical ? "height" : "width";
    if (!arrowElement || !popperOffsets) return;
    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = (0, _getLayoutRectJsDefault.default)(arrowElement);
    var minProp = axis === "y" ? (0, _enumsJs.top) : (0, _enumsJs.left);
    var maxProp = axis === "y" ? (0, _enumsJs.bottom) : (0, _enumsJs.right);
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = (0, _getOffsetParentJsDefault.default)(arrowElement);
    var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds
    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = (0, _withinJs.within)(min, center, max); // Prevents breaking syntax highlighting...
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}
function effect(_ref2) {
    var state = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
    if (arrowElement == null) return;
     // CSS selector
    if (typeof arrowElement === "string") {
        arrowElement = state.elements.popper.querySelector(arrowElement);
        if (!arrowElement) return;
    }
    if (!(0, _instanceOfJs.isHTMLElement)(arrowElement)) console.error([
        'Popper: "arrow" element must be an HTMLElement (not an SVGElement).',
        "To use an SVG arrow, wrap it in an HTMLElement that will be used as",
        "the arrow."
    ].join(" "));
    if (!(0, _containsJsDefault.default)(state.elements.popper, arrowElement)) {
        console.error([
            'Popper: "arrow" modifier\'s `element` must be a child of the popper',
            "element."
        ].join(" "));
        return;
    }
    state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: arrow,
    effect: effect,
    requires: [
        "popperOffsets"
    ],
    requiresIfExists: [
        "preventOverflow"
    ]
};

},{"../utils/getBasePlacement.js":"k9Mxy","../dom-utils/getLayoutRect.js":"8HSW6","../dom-utils/contains.js":"hqDlN","../dom-utils/getOffsetParent.js":"87ojO","../utils/getMainAxisFromPlacement.js":"gL8pX","../utils/within.js":"3shyM","../utils/mergePaddingObject.js":"fbIQ4","../utils/expandToHashMap.js":"ffXtI","../enums.js":"iZsWv","../dom-utils/instanceOf.js":"6LUGk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k9Mxy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getBasePlacement);
var _enumsJs = require("../enums.js");
function getBasePlacement(placement) {
    return placement.split("-")[0];
}

},{"../enums.js":"iZsWv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8HSW6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getLayoutRect);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js"); // Returns the layout rect of an element relative to its offsetParent. Layout
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
function getLayoutRect(element) {
    var clientRect = (0, _getBoundingClientRectJsDefault.default)(element); // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) width = clientRect.width;
    if (Math.abs(clientRect.height - height) <= 1) height = clientRect.height;
    return {
        x: element.offsetLeft,
        y: element.offsetTop,
        width: width,
        height: height
    };
}

},{"./getBoundingClientRect.js":"hfUqe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hfUqe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getBoundingClientRect);
var _instanceOfJs = require("./instanceOf.js");
var _mathJs = require("../utils/math.js");
function getBoundingClientRect(element, includeScale) {
    if (includeScale === void 0) includeScale = false;
    var rect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if ((0, _instanceOfJs.isHTMLElement)(element) && includeScale) {
        var offsetHeight = element.offsetHeight;
        var offsetWidth = element.offsetWidth; // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
        // Fallback to 1 in case both values are `0`
        if (offsetWidth > 0) scaleX = (0, _mathJs.round)(rect.width) / offsetWidth || 1;
        if (offsetHeight > 0) scaleY = (0, _mathJs.round)(rect.height) / offsetHeight || 1;
    }
    return {
        width: rect.width / scaleX,
        height: rect.height / scaleY,
        top: rect.top / scaleY,
        right: rect.right / scaleX,
        bottom: rect.bottom / scaleY,
        left: rect.left / scaleX,
        x: rect.left / scaleX,
        y: rect.top / scaleY
    };
}

},{"./instanceOf.js":"6LUGk","../utils/math.js":"fGLG4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fGLG4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "max", ()=>max);
parcelHelpers.export(exports, "min", ()=>min);
parcelHelpers.export(exports, "round", ()=>round);
var max = Math.max;
var min = Math.min;
var round = Math.round;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hqDlN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>contains);
var _instanceOfJs = require("./instanceOf.js");
function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method
    if (parent.contains(child)) return true;
    else if (rootNode && (0, _instanceOfJs.isShadowRoot)(rootNode)) {
        var next = child;
        do {
            if (next && parent.isSameNode(next)) return true;
             // $FlowFixMe[prop-missing]: need a better way to handle this...
            next = next.parentNode || next.host;
        }while (next);
    } // Give up, the result is false
    return false;
}

},{"./instanceOf.js":"6LUGk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"87ojO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getOffsetParent);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _instanceOfJs = require("./instanceOf.js");
var _isTableElementJs = require("./isTableElement.js");
var _isTableElementJsDefault = parcelHelpers.interopDefault(_isTableElementJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
function getTrueOffsetParent(element) {
    if (!(0, _instanceOfJs.isHTMLElement)(element) || // https://github.com/popperjs/popper-core/issues/837
    (0, _getComputedStyleJsDefault.default)(element).position === "fixed") return null;
    return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block
function getContainingBlock(element) {
    var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
    var isIE = navigator.userAgent.indexOf("Trident") !== -1;
    if (isIE && (0, _instanceOfJs.isHTMLElement)(element)) {
        // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
        var elementCss = (0, _getComputedStyleJsDefault.default)(element);
        if (elementCss.position === "fixed") return null;
    }
    var currentNode = (0, _getParentNodeJsDefault.default)(element);
    while((0, _instanceOfJs.isHTMLElement)(currentNode) && [
        "html",
        "body"
    ].indexOf((0, _getNodeNameJsDefault.default)(currentNode)) < 0){
        var css = (0, _getComputedStyleJsDefault.default)(currentNode); // This is non-exhaustive but covers the most common CSS properties that
        // create a containing block.
        // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
        if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || [
            "transform",
            "perspective"
        ].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") return currentNode;
        else currentNode = currentNode.parentNode;
    }
    return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
function getOffsetParent(element) {
    var window = (0, _getWindowJsDefault.default)(element);
    var offsetParent = getTrueOffsetParent(element);
    while(offsetParent && (0, _isTableElementJsDefault.default)(offsetParent) && (0, _getComputedStyleJsDefault.default)(offsetParent).position === "static")offsetParent = getTrueOffsetParent(offsetParent);
    if (offsetParent && ((0, _getNodeNameJsDefault.default)(offsetParent) === "html" || (0, _getNodeNameJsDefault.default)(offsetParent) === "body" && (0, _getComputedStyleJsDefault.default)(offsetParent).position === "static")) return window;
    return offsetParent || getContainingBlock(element) || window;
}

},{"./getWindow.js":"cr5KP","./getNodeName.js":"6tswu","./getComputedStyle.js":"eDRGN","./instanceOf.js":"6LUGk","./isTableElement.js":"gdbKN","./getParentNode.js":"bCy7L","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eDRGN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getComputedStyle);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function getComputedStyle(element) {
    return (0, _getWindowJsDefault.default)(element).getComputedStyle(element);
}

},{"./getWindow.js":"cr5KP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gdbKN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isTableElement);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
function isTableElement(element) {
    return [
        "table",
        "td",
        "th"
    ].indexOf((0, _getNodeNameJsDefault.default)(element)) >= 0;
}

},{"./getNodeName.js":"6tswu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bCy7L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getParentNode);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _instanceOfJs = require("./instanceOf.js");
function getParentNode(element) {
    if ((0, _getNodeNameJsDefault.default)(element) === "html") return element;
    return(// $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ((0, _instanceOfJs.isShadowRoot)(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    (0, _getDocumentElementJsDefault.default)(element) // fallback
    );
}

},{"./getNodeName.js":"6tswu","./getDocumentElement.js":"ccOam","./instanceOf.js":"6LUGk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ccOam":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getDocumentElement);
var _instanceOfJs = require("./instanceOf.js");
function getDocumentElement(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return (((0, _instanceOfJs.isElement)(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}

},{"./instanceOf.js":"6LUGk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gL8pX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getMainAxisFromPlacement);
function getMainAxisFromPlacement(placement) {
    return [
        "top",
        "bottom"
    ].indexOf(placement) >= 0 ? "x" : "y";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3shyM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "within", ()=>within);
parcelHelpers.export(exports, "withinMaxClamp", ()=>withinMaxClamp);
var _mathJs = require("./math.js");
function within(min, value, max) {
    return (0, _mathJs.max)(min, (0, _mathJs.min)(value, max));
}
function withinMaxClamp(min, value, max) {
    var v = within(min, value, max);
    return v > max ? max : v;
}

},{"./math.js":"fGLG4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fbIQ4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>mergePaddingObject);
var _getFreshSideObjectJs = require("./getFreshSideObject.js");
var _getFreshSideObjectJsDefault = parcelHelpers.interopDefault(_getFreshSideObjectJs);
function mergePaddingObject(paddingObject) {
    return Object.assign({}, (0, _getFreshSideObjectJsDefault.default)(), paddingObject);
}

},{"./getFreshSideObject.js":"2BRxy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2BRxy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getFreshSideObject);
function getFreshSideObject() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ffXtI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>expandToHashMap);
function expandToHashMap(value, keys) {
    return keys.reduce(function(hashMap, key) {
        hashMap[key] = value;
        return hashMap;
    }, {});
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cOU4Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mapToStyles", ()=>mapToStyles);
var _enumsJs = require("../enums.js");
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getWindowJs = require("../dom-utils/getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getDocumentElementJs = require("../dom-utils/getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("../dom-utils/getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getVariationJs = require("../utils/getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _mathJs = require("../utils/math.js"); // eslint-disable-next-line import/no-unused-modules
var unsetSides = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function roundOffsetsByDPR(_ref) {
    var x = _ref.x, y = _ref.y;
    var win = window;
    var dpr = win.devicePixelRatio || 1;
    return {
        x: (0, _mathJs.round)(x * dpr) / dpr || 0,
        y: (0, _mathJs.round)(y * dpr) / dpr || 0
    };
}
function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === "function" ? roundOffsets(offsets) : offsets, _ref3$x = _ref3.x, x = _ref3$x === void 0 ? 0 : _ref3$x, _ref3$y = _ref3.y, y = _ref3$y === void 0 ? 0 : _ref3$y;
    var hasX = offsets.hasOwnProperty("x");
    var hasY = offsets.hasOwnProperty("y");
    var sideX = (0, _enumsJs.left);
    var sideY = (0, _enumsJs.top);
    var win = window;
    if (adaptive) {
        var offsetParent = (0, _getOffsetParentJsDefault.default)(popper);
        var heightProp = "clientHeight";
        var widthProp = "clientWidth";
        if (offsetParent === (0, _getWindowJsDefault.default)(popper)) {
            offsetParent = (0, _getDocumentElementJsDefault.default)(popper);
            if ((0, _getComputedStyleJsDefault.default)(offsetParent).position !== "static" && position === "absolute") {
                heightProp = "scrollHeight";
                widthProp = "scrollWidth";
            }
        } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
        offsetParent;
        if (placement === (0, _enumsJs.top) || (placement === (0, _enumsJs.left) || placement === (0, _enumsJs.right)) && variation === (0, _enumsJs.end)) {
            sideY = (0, _enumsJs.bottom);
            var offsetY = isFixed && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
            y -= offsetY - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
        }
        if (placement === (0, _enumsJs.left) || (placement === (0, _enumsJs.top) || placement === (0, _enumsJs.bottom)) && variation === (0, _enumsJs.end)) {
            sideX = (0, _enumsJs.right);
            var offsetX = isFixed && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
            x -= offsetX - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
        }
    }
    var commonStyles = Object.assign({
        position: position
    }, adaptive && unsetSides);
    if (gpuAcceleration) {
        var _Object$assign;
        return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref4) {
    var state = _ref4.state, options = _ref4.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var transitionProperty = (0, _getComputedStyleJsDefault.default)(state.elements.popper).transitionProperty || "";
    if (adaptive && [
        "transform",
        "top",
        "right",
        "bottom",
        "left"
    ].some(function(property) {
        return transitionProperty.indexOf(property) >= 0;
    })) console.warn([
        "Popper: Detected CSS transitions on at least one of the following",
        'CSS properties: "transform", "top", "right", "bottom", "left".',
        "\n\n",
        'Disable the "computeStyles" modifier\'s `adaptive` option to allow',
        "for smooth transitions, or remove these properties from the CSS",
        "transition declaration on the popper element if only transitioning",
        "opacity or background-color for example.",
        "\n\n",
        "We recommend using the popper element as a wrapper around an inner",
        "element that can have any CSS property transitioned for animations."
    ].join(" "));
    var commonStyles = {
        placement: (0, _getBasePlacementJsDefault.default)(state.placement),
        variation: (0, _getVariationJsDefault.default)(state.placement),
        popper: state.elements.popper,
        popperRect: state.rects.popper,
        gpuAcceleration: gpuAcceleration,
        isFixed: state.options.strategy === "fixed"
    };
    if (state.modifiersData.popperOffsets != null) state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
    })));
    if (state.modifiersData.arrow != null) state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: "absolute",
        adaptive: false,
        roundOffsets: roundOffsets
    })));
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
        "data-popper-placement": state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: computeStyles,
    data: {}
};

},{"../enums.js":"iZsWv","../dom-utils/getOffsetParent.js":"87ojO","../dom-utils/getWindow.js":"cr5KP","../dom-utils/getDocumentElement.js":"ccOam","../dom-utils/getComputedStyle.js":"eDRGN","../utils/getBasePlacement.js":"k9Mxy","../utils/getVariation.js":"kyKtc","../utils/math.js":"fGLG4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kyKtc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getVariation);
function getVariation(placement) {
    return placement.split("-")[1];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1GOzY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("../dom-utils/getWindow.js"); // eslint-disable-next-line import/no-unused-modules
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var passive = {
    passive: true
};
function effect(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window = (0, _getWindowJsDefault.default)(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener("scroll", instance.update, passive);
    });
    if (resize) window.addEventListener("resize", instance.update, passive);
    return function() {
        if (scroll) scrollParents.forEach(function(scrollParent) {
            scrollParent.removeEventListener("scroll", instance.update, passive);
        });
        if (resize) window.removeEventListener("resize", instance.update, passive);
    };
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function fn() {},
    effect: effect,
    data: {}
};

},{"../dom-utils/getWindow.js":"cr5KP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6yQQf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getOppositePlacementJs = require("../utils/getOppositePlacement.js");
var _getOppositePlacementJsDefault = parcelHelpers.interopDefault(_getOppositePlacementJs);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getOppositeVariationPlacementJs = require("../utils/getOppositeVariationPlacement.js");
var _getOppositeVariationPlacementJsDefault = parcelHelpers.interopDefault(_getOppositeVariationPlacementJs);
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _computeAutoPlacementJs = require("../utils/computeAutoPlacement.js");
var _computeAutoPlacementJsDefault = parcelHelpers.interopDefault(_computeAutoPlacementJs);
var _enumsJs = require("../enums.js");
var _getVariationJs = require("../utils/getVariation.js"); // eslint-disable-next-line import/no-unused-modules
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
function getExpandedFallbackPlacements(placement) {
    if ((0, _getBasePlacementJsDefault.default)(placement) === (0, _enumsJs.auto)) return [];
    var oppositePlacement = (0, _getOppositePlacementJsDefault.default)(placement);
    return [
        (0, _getOppositeVariationPlacementJsDefault.default)(placement),
        oppositePlacement,
        (0, _getOppositeVariationPlacementJsDefault.default)(oppositePlacement)
    ];
}
function flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) return;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = (0, _getBasePlacementJsDefault.default)(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [
        (0, _getOppositePlacementJsDefault.default)(preferredPlacement)
    ] : getExpandedFallbackPlacements(preferredPlacement));
    var placements = [
        preferredPlacement
    ].concat(fallbackPlacements).reduce(function(acc, placement) {
        return acc.concat((0, _getBasePlacementJsDefault.default)(placement) === (0, _enumsJs.auto) ? (0, _computeAutoPlacementJsDefault.default)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding,
            flipVariations: flipVariations,
            allowedAutoPlacements: allowedAutoPlacements
        }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];
    for(var i = 0; i < placements.length; i++){
        var placement = placements[i];
        var _basePlacement = (0, _getBasePlacementJsDefault.default)(placement);
        var isStartVariation = (0, _getVariationJsDefault.default)(placement) === (0, _enumsJs.start);
        var isVertical = [
            (0, _enumsJs.top),
            (0, _enumsJs.bottom)
        ].indexOf(_basePlacement) >= 0;
        var len = isVertical ? "width" : "height";
        var overflow = (0, _detectOverflowJsDefault.default)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            altBoundary: altBoundary,
            padding: padding
        });
        var mainVariationSide = isVertical ? isStartVariation ? (0, _enumsJs.right) : (0, _enumsJs.left) : isStartVariation ? (0, _enumsJs.bottom) : (0, _enumsJs.top);
        if (referenceRect[len] > popperRect[len]) mainVariationSide = (0, _getOppositePlacementJsDefault.default)(mainVariationSide);
        var altVariationSide = (0, _getOppositePlacementJsDefault.default)(mainVariationSide);
        var checks = [];
        if (checkMainAxis) checks.push(overflow[_basePlacement] <= 0);
        if (checkAltAxis) checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
        if (checks.every(function(check) {
            return check;
        })) {
            firstFittingPlacement = placement;
            makeFallbackChecks = false;
            break;
        }
        checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
        // `2` may be desired in some cases – research later
        var numberOfChecks = flipVariations ? 3 : 1;
        var _loop = function _loop(_i) {
            var fittingPlacement = placements.find(function(placement) {
                var checks = checksMap.get(placement);
                if (checks) return checks.slice(0, _i).every(function(check) {
                    return check;
                });
            });
            if (fittingPlacement) {
                firstFittingPlacement = fittingPlacement;
                return "break";
            }
        };
        for(var _i = numberOfChecks; _i > 0; _i--){
            var _ret = _loop(_i);
            if (_ret === "break") break;
        }
    }
    if (state.placement !== firstFittingPlacement) {
        state.modifiersData[name]._skip = true;
        state.placement = firstFittingPlacement;
        state.reset = true;
    }
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: flip,
    requiresIfExists: [
        "offset"
    ],
    data: {
        _skip: false
    }
};

},{"../utils/getOppositePlacement.js":"6olVH","../utils/getBasePlacement.js":"k9Mxy","../utils/getOppositeVariationPlacement.js":"h8y2Z","../utils/detectOverflow.js":"3taLe","../utils/computeAutoPlacement.js":"fUn0x","../enums.js":"iZsWv","../utils/getVariation.js":"kyKtc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6olVH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getOppositePlacement);
var hash = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
};
function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
        return hash[matched];
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h8y2Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getOppositeVariationPlacement);
var hash = {
    start: "end",
    end: "start"
};
function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
        return hash[matched];
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3taLe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>detectOverflow);
var _getClippingRectJs = require("../dom-utils/getClippingRect.js");
var _getClippingRectJsDefault = parcelHelpers.interopDefault(_getClippingRectJs);
var _getDocumentElementJs = require("../dom-utils/getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getBoundingClientRectJs = require("../dom-utils/getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _computeOffsetsJs = require("./computeOffsets.js");
var _computeOffsetsJsDefault = parcelHelpers.interopDefault(_computeOffsetsJs);
var _rectToClientRectJs = require("./rectToClientRect.js");
var _rectToClientRectJsDefault = parcelHelpers.interopDefault(_rectToClientRectJs);
var _enumsJs = require("../enums.js");
var _instanceOfJs = require("../dom-utils/instanceOf.js");
var _mergePaddingObjectJs = require("./mergePaddingObject.js");
var _mergePaddingObjectJsDefault = parcelHelpers.interopDefault(_mergePaddingObjectJs);
var _expandToHashMapJs = require("./expandToHashMap.js"); // eslint-disable-next-line import/no-unused-modules
var _expandToHashMapJsDefault = parcelHelpers.interopDefault(_expandToHashMapJs);
function detectOverflow(state, options) {
    if (options === void 0) options = {};
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? (0, _enumsJs.clippingParents) : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? (0, _enumsJs.viewport) : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? (0, _enumsJs.popper) : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = (0, _mergePaddingObjectJsDefault.default)(typeof padding !== "number" ? padding : (0, _expandToHashMapJsDefault.default)(padding, (0, _enumsJs.basePlacements)));
    var altContext = elementContext === (0, _enumsJs.popper) ? (0, _enumsJs.reference) : (0, _enumsJs.popper);
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = (0, _getClippingRectJsDefault.default)((0, _instanceOfJs.isElement)(element) ? element : element.contextElement || (0, _getDocumentElementJsDefault.default)(state.elements.popper), boundary, rootBoundary);
    var referenceClientRect = (0, _getBoundingClientRectJsDefault.default)(state.elements.reference);
    var popperOffsets = (0, _computeOffsetsJsDefault.default)({
        reference: referenceClientRect,
        element: popperRect,
        strategy: "absolute",
        placement: placement
    });
    var popperClientRect = (0, _rectToClientRectJsDefault.default)(Object.assign({}, popperRect, popperOffsets));
    var elementClientRect = elementContext === (0, _enumsJs.popper) ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect
    var overflowOffsets = {
        top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
        bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
        left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
        right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element
    if (elementContext === (0, _enumsJs.popper) && offsetData) {
        var offset = offsetData[placement];
        Object.keys(overflowOffsets).forEach(function(key) {
            var multiply = [
                (0, _enumsJs.right),
                (0, _enumsJs.bottom)
            ].indexOf(key) >= 0 ? 1 : -1;
            var axis = [
                (0, _enumsJs.top),
                (0, _enumsJs.bottom)
            ].indexOf(key) >= 0 ? "y" : "x";
            overflowOffsets[key] += offset[axis] * multiply;
        });
    }
    return overflowOffsets;
}

},{"../dom-utils/getClippingRect.js":"h8Eb3","../dom-utils/getDocumentElement.js":"ccOam","../dom-utils/getBoundingClientRect.js":"hfUqe","./computeOffsets.js":"l7j5I","./rectToClientRect.js":"c30v2","../enums.js":"iZsWv","../dom-utils/instanceOf.js":"6LUGk","./mergePaddingObject.js":"fbIQ4","./expandToHashMap.js":"ffXtI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h8Eb3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getClippingRect);
var _enumsJs = require("../enums.js");
var _getViewportRectJs = require("./getViewportRect.js");
var _getViewportRectJsDefault = parcelHelpers.interopDefault(_getViewportRectJs);
var _getDocumentRectJs = require("./getDocumentRect.js");
var _getDocumentRectJsDefault = parcelHelpers.interopDefault(_getDocumentRectJs);
var _listScrollParentsJs = require("./listScrollParents.js");
var _listScrollParentsJsDefault = parcelHelpers.interopDefault(_listScrollParentsJs);
var _getOffsetParentJs = require("./getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _instanceOfJs = require("./instanceOf.js");
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _containsJs = require("./contains.js");
var _containsJsDefault = parcelHelpers.interopDefault(_containsJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _rectToClientRectJs = require("../utils/rectToClientRect.js");
var _rectToClientRectJsDefault = parcelHelpers.interopDefault(_rectToClientRectJs);
var _mathJs = require("../utils/math.js");
function getInnerBoundingClientRect(element) {
    var rect = (0, _getBoundingClientRectJsDefault.default)(element);
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
}
function getClientRectFromMixedType(element, clippingParent) {
    return clippingParent === (0, _enumsJs.viewport) ? (0, _rectToClientRectJsDefault.default)((0, _getViewportRectJsDefault.default)(element)) : (0, _instanceOfJs.isElement)(clippingParent) ? getInnerBoundingClientRect(clippingParent) : (0, _rectToClientRectJsDefault.default)((0, _getDocumentRectJsDefault.default)((0, _getDocumentElementJsDefault.default)(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
function getClippingParents(element) {
    var clippingParents = (0, _listScrollParentsJsDefault.default)((0, _getParentNodeJsDefault.default)(element));
    var canEscapeClipping = [
        "absolute",
        "fixed"
    ].indexOf((0, _getComputedStyleJsDefault.default)(element).position) >= 0;
    var clipperElement = canEscapeClipping && (0, _instanceOfJs.isHTMLElement)(element) ? (0, _getOffsetParentJsDefault.default)(element) : element;
    if (!(0, _instanceOfJs.isElement)(clipperElement)) return [];
     // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
    return clippingParents.filter(function(clippingParent) {
        return (0, _instanceOfJs.isElement)(clippingParent) && (0, _containsJsDefault.default)(clippingParent, clipperElement) && (0, _getNodeNameJsDefault.default)(clippingParent) !== "body" && (canEscapeClipping ? (0, _getComputedStyleJsDefault.default)(clippingParent).position !== "static" : true);
    });
} // Gets the maximum area that the element is visible in due to any number of
function getClippingRect(element, boundary, rootBoundary) {
    var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [
        rootBoundary
    ]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function(accRect, clippingParent) {
        var rect = getClientRectFromMixedType(element, clippingParent);
        accRect.top = (0, _mathJs.max)(rect.top, accRect.top);
        accRect.right = (0, _mathJs.min)(rect.right, accRect.right);
        accRect.bottom = (0, _mathJs.min)(rect.bottom, accRect.bottom);
        accRect.left = (0, _mathJs.max)(rect.left, accRect.left);
        return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
}

},{"../enums.js":"iZsWv","./getViewportRect.js":"99GUa","./getDocumentRect.js":"cmzTZ","./listScrollParents.js":"atUPa","./getOffsetParent.js":"87ojO","./getDocumentElement.js":"ccOam","./getComputedStyle.js":"eDRGN","./instanceOf.js":"6LUGk","./getBoundingClientRect.js":"hfUqe","./getParentNode.js":"bCy7L","./contains.js":"hqDlN","./getNodeName.js":"6tswu","../utils/rectToClientRect.js":"c30v2","../utils/math.js":"fGLG4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"99GUa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getViewportRect);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
function getViewportRect(element) {
    var win = (0, _getWindowJsDefault.default)(element);
    var html = (0, _getDocumentElementJsDefault.default)(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
    // can be obscured underneath it.
    // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
    // if it isn't open, so if this isn't available, the popper will be detected
    // to overflow the bottom of the screen too early.
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
        // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
        // errors due to floating point numbers, so we need to check precision.
        // Safari returns a number <= 0, usually < -1 when pinch-zoomed
        // Feature detection fails in mobile emulation mode in Chrome.
        // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
        // 0.001
        // Fallback here: "Not Safari" userAgent
        if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    return {
        width: width,
        height: height,
        x: x + (0, _getWindowScrollBarXJsDefault.default)(element),
        y: y
    };
}

},{"./getWindow.js":"cr5KP","./getDocumentElement.js":"ccOam","./getWindowScrollBarX.js":"hMWxg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hMWxg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getWindowScrollBarX);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return (0, _getBoundingClientRectJsDefault.default)((0, _getDocumentElementJsDefault.default)(element)).left + (0, _getWindowScrollJsDefault.default)(element).scrollLeft;
}

},{"./getBoundingClientRect.js":"hfUqe","./getDocumentElement.js":"ccOam","./getWindowScroll.js":"dJtT9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dJtT9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getWindowScroll);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function getWindowScroll(node) {
    var win = (0, _getWindowJsDefault.default)(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
    };
}

},{"./getWindow.js":"cr5KP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cmzTZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getDocumentRect);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
var _mathJs = require("../utils/math.js"); // Gets the entire size of the scrollable document area, even extending outside
function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = (0, _getDocumentElementJsDefault.default)(element);
    var winScroll = (0, _getWindowScrollJsDefault.default)(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = (0, _mathJs.max)(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = (0, _mathJs.max)(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + (0, _getWindowScrollBarXJsDefault.default)(element);
    var y = -winScroll.scrollTop;
    if ((0, _getComputedStyleJsDefault.default)(body || html).direction === "rtl") x += (0, _mathJs.max)(html.clientWidth, body ? body.clientWidth : 0) - width;
    return {
        width: width,
        height: height,
        x: x,
        y: y
    };
}

},{"./getDocumentElement.js":"ccOam","./getComputedStyle.js":"eDRGN","./getWindowScrollBarX.js":"hMWxg","./getWindowScroll.js":"dJtT9","../utils/math.js":"fGLG4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"atUPa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>listScrollParents);
var _getScrollParentJs = require("./getScrollParent.js");
var _getScrollParentJsDefault = parcelHelpers.interopDefault(_getScrollParentJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) list = [];
    var scrollParent = (0, _getScrollParentJsDefault.default)(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = (0, _getWindowJsDefault.default)(scrollParent);
    var target = isBody ? [
        win
    ].concat(win.visualViewport || [], (0, _isScrollParentJsDefault.default)(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : updatedList.concat(listScrollParents((0, _getParentNodeJsDefault.default)(target)));
}

},{"./getScrollParent.js":"7JOpe","./getParentNode.js":"bCy7L","./getWindow.js":"cr5KP","./isScrollParent.js":"7kJBG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7JOpe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getScrollParent);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("./instanceOf.js");
function getScrollParent(node) {
    if ([
        "html",
        "body",
        "#document"
    ].indexOf((0, _getNodeNameJsDefault.default)(node)) >= 0) // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
    if ((0, _instanceOfJs.isHTMLElement)(node) && (0, _isScrollParentJsDefault.default)(node)) return node;
    return getScrollParent((0, _getParentNodeJsDefault.default)(node));
}

},{"./getParentNode.js":"bCy7L","./isScrollParent.js":"7kJBG","./getNodeName.js":"6tswu","./instanceOf.js":"6LUGk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7kJBG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isScrollParent);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = (0, _getComputedStyleJsDefault.default)(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

},{"./getComputedStyle.js":"eDRGN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c30v2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>rectToClientRect);
function rectToClientRect(rect) {
    return Object.assign({}, rect, {
        left: rect.x,
        top: rect.y,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l7j5I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>computeOffsets);
var _getBasePlacementJs = require("./getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getVariationJs = require("./getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _getMainAxisFromPlacementJs = require("./getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _enumsJs = require("../enums.js");
function computeOffsets(_ref) {
    var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? (0, _getBasePlacementJsDefault.default)(placement) : null;
    var variation = placement ? (0, _getVariationJsDefault.default)(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;
    switch(basePlacement){
        case 0, _enumsJs.top:
            offsets = {
                x: commonX,
                y: reference.y - element.height
            };
            break;
        case 0, _enumsJs.bottom:
            offsets = {
                x: commonX,
                y: reference.y + reference.height
            };
            break;
        case 0, _enumsJs.right:
            offsets = {
                x: reference.x + reference.width,
                y: commonY
            };
            break;
        case 0, _enumsJs.left:
            offsets = {
                x: reference.x - element.width,
                y: commonY
            };
            break;
        default:
            offsets = {
                x: reference.x,
                y: reference.y
            };
    }
    var mainAxis = basePlacement ? (0, _getMainAxisFromPlacementJsDefault.default)(basePlacement) : null;
    if (mainAxis != null) {
        var len = mainAxis === "y" ? "height" : "width";
        switch(variation){
            case 0, _enumsJs.start:
                offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
                break;
            case 0, _enumsJs.end:
                offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
                break;
            default:
        }
    }
    return offsets;
}

},{"./getBasePlacement.js":"k9Mxy","./getVariation.js":"kyKtc","./getMainAxisFromPlacement.js":"gL8pX","../enums.js":"iZsWv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fUn0x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>computeAutoPlacement);
var _getVariationJs = require("./getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _enumsJs = require("../enums.js");
var _detectOverflowJs = require("./detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _getBasePlacementJs = require("./getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
function computeAutoPlacement(state, options) {
    if (options === void 0) options = {};
    var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? (0, _enumsJs.placements) : _options$allowedAutoP;
    var variation = (0, _getVariationJsDefault.default)(placement);
    var placements = variation ? flipVariations ? (0, _enumsJs.variationPlacements) : (0, _enumsJs.variationPlacements).filter(function(placement) {
        return (0, _getVariationJsDefault.default)(placement) === variation;
    }) : (0, _enumsJs.basePlacements);
    var allowedPlacements = placements.filter(function(placement) {
        return allowedAutoPlacements.indexOf(placement) >= 0;
    });
    if (allowedPlacements.length === 0) {
        allowedPlacements = placements;
        console.error([
            "Popper: The `allowedAutoPlacements` option did not allow any",
            "placements. Ensure the `placement` option matches the variation",
            "of the allowed placements.",
            'For example, "auto" cannot be used to allow "bottom-start".',
            'Use "auto-start" instead.'
        ].join(" "));
    } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
    var overflows = allowedPlacements.reduce(function(acc, placement) {
        acc[placement] = (0, _detectOverflowJsDefault.default)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding
        })[(0, _getBasePlacementJsDefault.default)(placement)];
        return acc;
    }, {});
    return Object.keys(overflows).sort(function(a, b) {
        return overflows[a] - overflows[b];
    });
}

},{"./getVariation.js":"kyKtc","../enums.js":"iZsWv","./detectOverflow.js":"3taLe","./getBasePlacement.js":"k9Mxy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dCbvT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) preventedOffsets = {
        x: 0,
        y: 0
    };
    return {
        top: overflow.top - rect.height - preventedOffsets.y,
        right: overflow.right - rect.width + preventedOffsets.x,
        bottom: overflow.bottom - rect.height + preventedOffsets.y,
        left: overflow.left - rect.width - preventedOffsets.x
    };
}
function isAnySideFullyClipped(overflow) {
    return [
        (0, _enumsJs.top),
        (0, _enumsJs.right),
        (0, _enumsJs.bottom),
        (0, _enumsJs.left)
    ].some(function(side) {
        return overflow[side] >= 0;
    });
}
function hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = (0, _detectOverflowJsDefault.default)(state, {
        elementContext: "reference"
    });
    var popperAltOverflow = (0, _detectOverflowJsDefault.default)(state, {
        altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
        referenceClippingOffsets: referenceClippingOffsets,
        popperEscapeOffsets: popperEscapeOffsets,
        isReferenceHidden: isReferenceHidden,
        hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
        "data-popper-reference-hidden": isReferenceHidden,
        "data-popper-escaped": hasPopperEscaped
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: [
        "preventOverflow"
    ],
    fn: hide
};

},{"../enums.js":"iZsWv","../utils/detectOverflow.js":"3taLe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3fOjp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "distanceAndSkiddingToXY", ()=>distanceAndSkiddingToXY);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _enumsJs = require("../enums.js"); // eslint-disable-next-line import/no-unused-modules
function distanceAndSkiddingToXY(placement, rects, offset) {
    var basePlacement = (0, _getBasePlacementJsDefault.default)(placement);
    var invertDistance = [
        (0, _enumsJs.left),
        (0, _enumsJs.top)
    ].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset === "function" ? offset(Object.assign({}, rects, {
        placement: placement
    })) : offset, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [
        (0, _enumsJs.left),
        (0, _enumsJs.right)
    ].indexOf(basePlacement) >= 0 ? {
        x: distance,
        y: skidding
    } : {
        x: skidding,
        y: distance
    };
}
function offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset = _options$offset === void 0 ? [
        0,
        0
    ] : _options$offset;
    var data = (0, _enumsJs.placements).reduce(function(acc, placement) {
        acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
        return acc;
    }, {});
    var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
        state.modifiersData.popperOffsets.x += x;
        state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: [
        "popperOffsets"
    ],
    fn: offset
};

},{"../utils/getBasePlacement.js":"k9Mxy","../enums.js":"iZsWv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hzsmD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _computeOffsetsJs = require("../utils/computeOffsets.js");
var _computeOffsetsJsDefault = parcelHelpers.interopDefault(_computeOffsetsJs);
function popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step
    state.modifiersData[name] = (0, _computeOffsetsJsDefault.default)({
        reference: state.rects.reference,
        element: state.rects.popper,
        strategy: "absolute",
        placement: state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: popperOffsets,
    data: {}
};

},{"../utils/computeOffsets.js":"l7j5I","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bxZhH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getMainAxisFromPlacementJs = require("../utils/getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _getAltAxisJs = require("../utils/getAltAxis.js");
var _getAltAxisJsDefault = parcelHelpers.interopDefault(_getAltAxisJs);
var _withinJs = require("../utils/within.js");
var _getLayoutRectJs = require("../dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _getVariationJs = require("../utils/getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _getFreshSideObjectJs = require("../utils/getFreshSideObject.js");
var _getFreshSideObjectJsDefault = parcelHelpers.interopDefault(_getFreshSideObjectJs);
var _mathJs = require("../utils/math.js");
function preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = (0, _detectOverflowJsDefault.default)(state, {
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        altBoundary: altBoundary
    });
    var basePlacement = (0, _getBasePlacementJsDefault.default)(state.placement);
    var variation = (0, _getVariationJsDefault.default)(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = (0, _getMainAxisFromPlacementJsDefault.default)(basePlacement);
    var altAxis = (0, _getAltAxisJsDefault.default)(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
        placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
        mainAxis: tetherOffsetValue,
        altAxis: tetherOffsetValue
    } : Object.assign({
        mainAxis: 0,
        altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
        x: 0,
        y: 0
    };
    if (!popperOffsets) return;
    if (checkMainAxis) {
        var _offsetModifierState$;
        var mainSide = mainAxis === "y" ? (0, _enumsJs.top) : (0, _enumsJs.left);
        var altSide = mainAxis === "y" ? (0, _enumsJs.bottom) : (0, _enumsJs.right);
        var len = mainAxis === "y" ? "height" : "width";
        var offset = popperOffsets[mainAxis];
        var min = offset + overflow[mainSide];
        var max = offset - overflow[altSide];
        var additive = tether ? -popperRect[len] / 2 : 0;
        var minLen = variation === (0, _enumsJs.start) ? referenceRect[len] : popperRect[len];
        var maxLen = variation === (0, _enumsJs.start) ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
        // outside the reference bounds
        var arrowElement = state.elements.arrow;
        var arrowRect = tether && arrowElement ? (0, _getLayoutRectJsDefault.default)(arrowElement) : {
            width: 0,
            height: 0
        };
        var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : (0, _getFreshSideObjectJsDefault.default)();
        var arrowPaddingMin = arrowPaddingObject[mainSide];
        var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
        // to include its full size in the calculation. If the reference is small
        // and near the edge of a boundary, the popper can overflow even if the
        // reference is not overflowing as well (e.g. virtual elements with no
        // width or height)
        var arrowLen = (0, _withinJs.within)(0, referenceRect[len], arrowRect[len]);
        var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
        var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
        var arrowOffsetParent = state.elements.arrow && (0, _getOffsetParentJsDefault.default)(state.elements.arrow);
        var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
        var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
        var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
        var tetherMax = offset + maxOffset - offsetModifierValue;
        var preventedOffset = (0, _withinJs.within)(tether ? (0, _mathJs.min)(min, tetherMin) : min, offset, tether ? (0, _mathJs.max)(max, tetherMax) : max);
        popperOffsets[mainAxis] = preventedOffset;
        data[mainAxis] = preventedOffset - offset;
    }
    if (checkAltAxis) {
        var _offsetModifierState$2;
        var _mainSide = mainAxis === "x" ? (0, _enumsJs.top) : (0, _enumsJs.left);
        var _altSide = mainAxis === "x" ? (0, _enumsJs.bottom) : (0, _enumsJs.right);
        var _offset = popperOffsets[altAxis];
        var _len = altAxis === "y" ? "height" : "width";
        var _min = _offset + overflow[_mainSide];
        var _max = _offset - overflow[_altSide];
        var isOriginSide = [
            (0, _enumsJs.top),
            (0, _enumsJs.left)
        ].indexOf(basePlacement) !== -1;
        var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
        var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
        var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
        var _preventedOffset = tether && isOriginSide ? (0, _withinJs.withinMaxClamp)(_tetherMin, _offset, _tetherMax) : (0, _withinJs.within)(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
        popperOffsets[altAxis] = _preventedOffset;
        data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: preventOverflow,
    requiresIfExists: [
        "offset"
    ]
};

},{"../enums.js":"iZsWv","../utils/getBasePlacement.js":"k9Mxy","../utils/getMainAxisFromPlacement.js":"gL8pX","../utils/getAltAxis.js":"k1sHV","../utils/within.js":"3shyM","../dom-utils/getLayoutRect.js":"8HSW6","../dom-utils/getOffsetParent.js":"87ojO","../utils/detectOverflow.js":"3taLe","../utils/getVariation.js":"kyKtc","../utils/getFreshSideObject.js":"2BRxy","../utils/math.js":"fGLG4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k1sHV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getAltAxis);
function getAltAxis(axis) {
    return axis === "x" ? "y" : "x";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"26twY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "popperGenerator", ()=>popperGenerator);
parcelHelpers.export(exports, "createPopper", ()=>createPopper);
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _detectOverflowJsDefault.default));
var _getCompositeRectJs = require("./dom-utils/getCompositeRect.js");
var _getCompositeRectJsDefault = parcelHelpers.interopDefault(_getCompositeRectJs);
var _getLayoutRectJs = require("./dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _listScrollParentsJs = require("./dom-utils/listScrollParents.js");
var _listScrollParentsJsDefault = parcelHelpers.interopDefault(_listScrollParentsJs);
var _getOffsetParentJs = require("./dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getComputedStyleJs = require("./dom-utils/getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _orderModifiersJs = require("./utils/orderModifiers.js");
var _orderModifiersJsDefault = parcelHelpers.interopDefault(_orderModifiersJs);
var _debounceJs = require("./utils/debounce.js");
var _debounceJsDefault = parcelHelpers.interopDefault(_debounceJs);
var _validateModifiersJs = require("./utils/validateModifiers.js");
var _validateModifiersJsDefault = parcelHelpers.interopDefault(_validateModifiersJs);
var _uniqueByJs = require("./utils/uniqueBy.js");
var _uniqueByJsDefault = parcelHelpers.interopDefault(_uniqueByJs);
var _getBasePlacementJs = require("./utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _mergeByNameJs = require("./utils/mergeByName.js");
var _mergeByNameJsDefault = parcelHelpers.interopDefault(_mergeByNameJs);
var _detectOverflowJs = require("./utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _instanceOfJs = require("./dom-utils/instanceOf.js");
var _enumsJs = require("./enums.js");
var INVALID_ELEMENT_ERROR = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
var INFINITE_LOOP_ERROR = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
var DEFAULT_OPTIONS = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
};
function areValidElements() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    return !args.some(function(element) {
        return !(element && typeof element.getBoundingClientRect === "function");
    });
}
function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) generatorOptions = {};
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference, popper, options) {
        if (options === void 0) options = defaultOptions;
        var state = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
            modifiersData: {},
            elements: {
                reference: reference,
                popper: popper
            },
            attributes: {},
            styles: {}
        };
        var effectCleanupFns = [];
        var isDestroyed = false;
        var instance = {
            state: state,
            setOptions: function setOptions(setOptionsAction) {
                var options = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
                cleanupModifierEffects();
                state.options = Object.assign({}, defaultOptions, state.options, options);
                state.scrollParents = {
                    reference: (0, _instanceOfJs.isElement)(reference) ? (0, _listScrollParentsJsDefault.default)(reference) : reference.contextElement ? (0, _listScrollParentsJsDefault.default)(reference.contextElement) : [],
                    popper: (0, _listScrollParentsJsDefault.default)(popper)
                }; // Orders the modifiers based on their dependencies and `phase`
                // properties
                var orderedModifiers = (0, _orderModifiersJsDefault.default)((0, _mergeByNameJsDefault.default)([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers
                state.orderedModifiers = orderedModifiers.filter(function(m) {
                    return m.enabled;
                }); // Validate the provided modifiers so that the consumer will get warned
                var modifiers = (0, _uniqueByJsDefault.default)([].concat(orderedModifiers, state.options.modifiers), function(_ref) {
                    var name = _ref.name;
                    return name;
                });
                (0, _validateModifiersJsDefault.default)(modifiers);
                if ((0, _getBasePlacementJsDefault.default)(state.options.placement) === (0, _enumsJs.auto)) {
                    var flipModifier = state.orderedModifiers.find(function(_ref2) {
                        var name = _ref2.name;
                        return name === "flip";
                    });
                    if (!flipModifier) console.error([
                        'Popper: "auto" placements require the "flip" modifier be',
                        "present and enabled to work."
                    ].join(" "));
                }
                var _getComputedStyle = (0, _getComputedStyleJsDefault.default)(popper), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
                // cause bugs with positioning, so we'll warn the consumer
                if ([
                    marginTop,
                    marginRight,
                    marginBottom,
                    marginLeft
                ].some(function(margin) {
                    return parseFloat(margin);
                })) console.warn([
                    'Popper: CSS "margin" styles cannot be used to apply padding',
                    "between the popper and its reference element or boundary.",
                    "To replicate margin, use the `offset` modifier, as well as",
                    "the `padding` option in the `preventOverflow` and `flip`",
                    "modifiers."
                ].join(" "));
                runModifierEffects();
                return instance.update();
            },
            // Sync update – it will always be executed, even if not necessary. This
            // is useful for low frequency updates where sync behavior simplifies the
            // logic.
            // For high frequency updates (e.g. `resize` and `scroll` events), always
            // prefer the async Popper#update method
            forceUpdate: function forceUpdate() {
                if (isDestroyed) return;
                var _state$elements = state.elements, reference = _state$elements.reference, popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
                // anymore
                if (!areValidElements(reference, popper)) {
                    console.error(INVALID_ELEMENT_ERROR);
                    return;
                } // Store the reference and popper rects to be read by modifiers
                state.rects = {
                    reference: (0, _getCompositeRectJsDefault.default)(reference, (0, _getOffsetParentJsDefault.default)(popper), state.options.strategy === "fixed"),
                    popper: (0, _getLayoutRectJsDefault.default)(popper)
                }; // Modifiers have the ability to reset the current update cycle. The
                // most common use case for this is the `flip` modifier changing the
                // placement, which then needs to re-run all the modifiers, because the
                // logic was previously ran for the previous placement and is therefore
                // stale/incorrect
                state.reset = false;
                state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
                // is filled with the initial data specified by the modifier. This means
                // it doesn't persist and is fresh on each update.
                // To ensure persistent data, use `${name}#persistent`
                state.orderedModifiers.forEach(function(modifier) {
                    return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
                });
                var __debug_loops__ = 0;
                for(var index = 0; index < state.orderedModifiers.length; index++){
                    __debug_loops__ += 1;
                    if (__debug_loops__ > 100) {
                        console.error(INFINITE_LOOP_ERROR);
                        break;
                    }
                    if (state.reset === true) {
                        state.reset = false;
                        index = -1;
                        continue;
                    }
                    var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
                    if (typeof fn === "function") state = fn({
                        state: state,
                        options: _options,
                        name: name,
                        instance: instance
                    }) || state;
                }
            },
            // Async and optimistically optimized update – it will not be executed if
            // not necessary (debounced to run at most once-per-tick)
            update: (0, _debounceJsDefault.default)(function() {
                return new Promise(function(resolve) {
                    instance.forceUpdate();
                    resolve(state);
                });
            }),
            destroy: function destroy() {
                cleanupModifierEffects();
                isDestroyed = true;
            }
        };
        if (!areValidElements(reference, popper)) {
            console.error(INVALID_ELEMENT_ERROR);
            return instance;
        }
        instance.setOptions(options).then(function(state) {
            if (!isDestroyed && options.onFirstUpdate) options.onFirstUpdate(state);
        }); // Modifiers have the ability to execute arbitrary code before the first
        // update cycle runs. They will be executed in the same order as the update
        // cycle. This is useful when a modifier adds some persistent data that
        // other modifiers need to use, but the modifier is run after the dependent
        // one.
        function runModifierEffects() {
            state.orderedModifiers.forEach(function(_ref3) {
                var name = _ref3.name, _ref3$options = _ref3.options, options = _ref3$options === void 0 ? {} : _ref3$options, effect = _ref3.effect;
                if (typeof effect === "function") {
                    var cleanupFn = effect({
                        state: state,
                        name: name,
                        instance: instance,
                        options: options
                    });
                    var noopFn = function noopFn() {};
                    effectCleanupFns.push(cleanupFn || noopFn);
                }
            });
        }
        function cleanupModifierEffects() {
            effectCleanupFns.forEach(function(fn) {
                return fn();
            });
            effectCleanupFns = [];
        }
        return instance;
    };
}
var createPopper = /*#__PURE__*/ popperGenerator(); // eslint-disable-next-line import/no-unused-modules

},{"./dom-utils/getCompositeRect.js":"hVbRx","./dom-utils/getLayoutRect.js":"8HSW6","./dom-utils/listScrollParents.js":"atUPa","./dom-utils/getOffsetParent.js":"87ojO","./dom-utils/getComputedStyle.js":"eDRGN","./utils/orderModifiers.js":"8tPPA","./utils/debounce.js":"btw4v","./utils/validateModifiers.js":"jRUS0","./utils/uniqueBy.js":"5Cq1O","./utils/getBasePlacement.js":"k9Mxy","./utils/mergeByName.js":"cX5BG","./utils/detectOverflow.js":"3taLe","./dom-utils/instanceOf.js":"6LUGk","./enums.js":"iZsWv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hVbRx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getCompositeRect);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getNodeScrollJs = require("./getNodeScroll.js");
var _getNodeScrollJsDefault = parcelHelpers.interopDefault(_getNodeScrollJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("./instanceOf.js");
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
var _mathJs = require("../utils/math.js");
function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = (0, _mathJs.round)(rect.width) / element.offsetWidth || 1;
    var scaleY = (0, _mathJs.round)(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) isFixed = false;
    var isOffsetParentAnElement = (0, _instanceOfJs.isHTMLElement)(offsetParent);
    var offsetParentIsScaled = (0, _instanceOfJs.isHTMLElement)(offsetParent) && isElementScaled(offsetParent);
    var documentElement = (0, _getDocumentElementJsDefault.default)(offsetParent);
    var rect = (0, _getBoundingClientRectJsDefault.default)(elementOrVirtualElement, offsetParentIsScaled);
    var scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    var offsets = {
        x: 0,
        y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ((0, _getNodeNameJsDefault.default)(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
        (0, _isScrollParentJsDefault.default)(documentElement)) scroll = (0, _getNodeScrollJsDefault.default)(offsetParent);
        if ((0, _instanceOfJs.isHTMLElement)(offsetParent)) {
            offsets = (0, _getBoundingClientRectJsDefault.default)(offsetParent, true);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
        } else if (documentElement) offsets.x = (0, _getWindowScrollBarXJsDefault.default)(documentElement);
    }
    return {
        x: rect.left + scroll.scrollLeft - offsets.x,
        y: rect.top + scroll.scrollTop - offsets.y,
        width: rect.width,
        height: rect.height
    };
}

},{"./getBoundingClientRect.js":"hfUqe","./getNodeScroll.js":"17DHZ","./getNodeName.js":"6tswu","./instanceOf.js":"6LUGk","./getWindowScrollBarX.js":"hMWxg","./getDocumentElement.js":"ccOam","./isScrollParent.js":"7kJBG","../utils/math.js":"fGLG4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"17DHZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getNodeScroll);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _instanceOfJs = require("./instanceOf.js");
var _getHTMLElementScrollJs = require("./getHTMLElementScroll.js");
var _getHTMLElementScrollJsDefault = parcelHelpers.interopDefault(_getHTMLElementScrollJs);
function getNodeScroll(node) {
    if (node === (0, _getWindowJsDefault.default)(node) || !(0, _instanceOfJs.isHTMLElement)(node)) return (0, _getWindowScrollJsDefault.default)(node);
    else return (0, _getHTMLElementScrollJsDefault.default)(node);
}

},{"./getWindowScroll.js":"dJtT9","./getWindow.js":"cr5KP","./instanceOf.js":"6LUGk","./getHTMLElementScroll.js":"ehLPy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ehLPy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getHTMLElementScroll);
function getHTMLElementScroll(element) {
    return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8tPPA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>orderModifiers);
var _enumsJs = require("../enums.js"); // source: https://stackoverflow.com/questions/49875255
function order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
        map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively
    function sort(modifier) {
        visited.add(modifier.name);
        var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
        requires.forEach(function(dep) {
            if (!visited.has(dep)) {
                var depModifier = map.get(dep);
                if (depModifier) sort(depModifier);
            }
        });
        result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
        if (!visited.has(modifier.name)) // check for visited object
        sort(modifier);
    });
    return result;
}
function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order(modifiers); // order based on phase
    return (0, _enumsJs.modifierPhases).reduce(function(acc, phase) {
        return acc.concat(orderedModifiers.filter(function(modifier) {
            return modifier.phase === phase;
        }));
    }, []);
}

},{"../enums.js":"iZsWv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"btw4v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>debounce);
function debounce(fn) {
    var pending;
    return function() {
        if (!pending) pending = new Promise(function(resolve) {
            Promise.resolve().then(function() {
                pending = undefined;
                resolve(fn());
            });
        });
        return pending;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jRUS0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>validateModifiers);
var _formatJs = require("./format.js");
var _formatJsDefault = parcelHelpers.interopDefault(_formatJs);
var _enumsJs = require("../enums.js");
var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = [
    "name",
    "enabled",
    "phase",
    "fn",
    "effect",
    "requires",
    "options"
];
function validateModifiers(modifiers) {
    modifiers.forEach(function(modifier) {
        [].concat(Object.keys(modifier), VALID_PROPERTIES) // IE11-compatible replacement for `new Set(iterable)`
        .filter(function(value, index, self) {
            return self.indexOf(value) === index;
        }).forEach(function(key) {
            switch(key){
                case "name":
                    if (typeof modifier.name !== "string") console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', '"' + String(modifier.name) + '"'));
                    break;
                case "enabled":
                    if (typeof modifier.enabled !== "boolean") console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', '"' + String(modifier.enabled) + '"'));
                    break;
                case "phase":
                    if ((0, _enumsJs.modifierPhases).indexOf(modifier.phase) < 0) console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + (0, _enumsJs.modifierPhases).join(", "), '"' + String(modifier.phase) + '"'));
                    break;
                case "fn":
                    if (typeof modifier.fn !== "function") console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', '"' + String(modifier.fn) + '"'));
                    break;
                case "effect":
                    if (modifier.effect != null && typeof modifier.effect !== "function") console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', '"' + String(modifier.fn) + '"'));
                    break;
                case "requires":
                    if (modifier.requires != null && !Array.isArray(modifier.requires)) console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', '"' + String(modifier.requires) + '"'));
                    break;
                case "requiresIfExists":
                    if (!Array.isArray(modifier.requiresIfExists)) console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', '"' + String(modifier.requiresIfExists) + '"'));
                    break;
                case "options":
                case "data":
                    break;
                default:
                    console.error('PopperJS: an invalid property has been provided to the "' + modifier.name + '" modifier, valid properties are ' + VALID_PROPERTIES.map(function(s) {
                        return '"' + s + '"';
                    }).join(", ") + '; but "' + key + '" was provided.');
            }
            modifier.requires && modifier.requires.forEach(function(requirement) {
                if (modifiers.find(function(mod) {
                    return mod.name === requirement;
                }) == null) console.error((0, _formatJsDefault.default)(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
            });
        });
    });
}

},{"./format.js":"67bPg","../enums.js":"iZsWv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"67bPg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>format);
function format(str) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
    return [].concat(args).reduce(function(p, c) {
        return p.replace(/%s/, c);
    }, str);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Cq1O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>uniqueBy);
function uniqueBy(arr, fn) {
    var identifiers = new Set();
    return arr.filter(function(item) {
        var identifier = fn(item);
        if (!identifiers.has(identifier)) {
            identifiers.add(identifier);
            return true;
        }
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cX5BG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>mergeByName);
function mergeByName(modifiers) {
    var merged = modifiers.reduce(function(merged, current) {
        var existing = merged[current.name];
        merged[current.name] = existing ? Object.assign({}, existing, current, {
            options: Object.assign({}, existing.options, current.options),
            data: Object.assign({}, existing.data, current.data)
        }) : current;
        return merged;
    }, {}); // IE11 does not support Object.values
    return Object.keys(merged).map(function(key) {
        return merged[key];
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5SArp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPopperLite", ()=>(0, _popperLiteJs.createPopper)) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "createPopper", ()=>createPopper) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "popperGenerator", ()=>(0, _createPopperJs.popperGenerator));
parcelHelpers.export(exports, "defaultModifiers", ()=>defaultModifiers);
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _createPopperJs.detectOverflow));
var _createPopperJs = require("./createPopper.js");
var _eventListenersJs = require("./modifiers/eventListeners.js");
var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs);
var _popperOffsetsJs = require("./modifiers/popperOffsets.js");
var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs);
var _computeStylesJs = require("./modifiers/computeStyles.js");
var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs);
var _applyStylesJs = require("./modifiers/applyStyles.js");
var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs);
var _offsetJs = require("./modifiers/offset.js");
var _offsetJsDefault = parcelHelpers.interopDefault(_offsetJs);
var _flipJs = require("./modifiers/flip.js");
var _flipJsDefault = parcelHelpers.interopDefault(_flipJs);
var _preventOverflowJs = require("./modifiers/preventOverflow.js");
var _preventOverflowJsDefault = parcelHelpers.interopDefault(_preventOverflowJs);
var _arrowJs = require("./modifiers/arrow.js");
var _arrowJsDefault = parcelHelpers.interopDefault(_arrowJs);
var _hideJs = require("./modifiers/hide.js");
var _hideJsDefault = parcelHelpers.interopDefault(_hideJs);
var _popperLiteJs = require("./popper-lite.js");
var _indexJs = require("./modifiers/index.js");
parcelHelpers.exportAll(_indexJs, exports);
var defaultModifiers = [
    (0, _eventListenersJsDefault.default),
    (0, _popperOffsetsJsDefault.default),
    (0, _computeStylesJsDefault.default),
    (0, _applyStylesJsDefault.default),
    (0, _offsetJsDefault.default),
    (0, _flipJsDefault.default),
    (0, _preventOverflowJsDefault.default),
    (0, _arrowJsDefault.default),
    (0, _hideJsDefault.default)
];
var createPopper = /*#__PURE__*/ (0, _createPopperJs.popperGenerator)({
    defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

},{"./createPopper.js":"26twY","./modifiers/eventListeners.js":"1GOzY","./modifiers/popperOffsets.js":"hzsmD","./modifiers/computeStyles.js":"cOU4Y","./modifiers/applyStyles.js":"lCT8B","./modifiers/offset.js":"3fOjp","./modifiers/flip.js":"6yQQf","./modifiers/preventOverflow.js":"bxZhH","./modifiers/arrow.js":"c8Kk7","./modifiers/hide.js":"dCbvT","./popper-lite.js":false,"./modifiers/index.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l1GvT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPopper", ()=>createPopper);
parcelHelpers.export(exports, "popperGenerator", ()=>(0, _createPopperJs.popperGenerator));
parcelHelpers.export(exports, "defaultModifiers", ()=>defaultModifiers);
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _createPopperJs.detectOverflow));
var _createPopperJs = require("./createPopper.js");
var _eventListenersJs = require("./modifiers/eventListeners.js");
var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs);
var _popperOffsetsJs = require("./modifiers/popperOffsets.js");
var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs);
var _computeStylesJs = require("./modifiers/computeStyles.js");
var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs);
var _applyStylesJs = require("./modifiers/applyStyles.js");
var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs);
var defaultModifiers = [
    (0, _eventListenersJsDefault.default),
    (0, _popperOffsetsJsDefault.default),
    (0, _computeStylesJsDefault.default),
    (0, _applyStylesJsDefault.default)
];
var createPopper = /*#__PURE__*/ (0, _createPopperJs.popperGenerator)({
    defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

},{"./createPopper.js":"26twY","./modifiers/eventListeners.js":"1GOzY","./modifiers/popperOffsets.js":"hzsmD","./modifiers/computeStyles.js":"cOU4Y","./modifiers/applyStyles.js":"lCT8B","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bzCMI":[function() {},{}],"3jln2":[function(require,module,exports) {
(function(root, factory) {
    if (typeof define === "function" && define.amd) define(factory);
    else module.exports = factory();
})(this, function() {
    var NProgress = {};
    NProgress.version = "0.2.0";
    var Settings = NProgress.settings = {
        minimum: 0.08,
        easing: "ease",
        positionUsing: "",
        speed: 200,
        trickle: true,
        trickleRate: 0.02,
        trickleSpeed: 800,
        showSpinner: true,
        barSelector: '[role="bar"]',
        spinnerSelector: '[role="spinner"]',
        parent: "body",
        template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };
    /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */ NProgress.configure = function(options) {
        var key, value;
        for(key in options){
            value = options[key];
            if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
        }
        return this;
    };
    /**
   * Last number.
   */ NProgress.status = null;
    /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */ NProgress.set = function(n) {
        var started = NProgress.isStarted();
        n = clamp(n, Settings.minimum, 1);
        NProgress.status = n === 1 ? null : n;
        var progress = NProgress.render(!started), bar = progress.querySelector(Settings.barSelector), speed = Settings.speed, ease = Settings.easing;
        progress.offsetWidth; /* Repaint */ 
        queue(function(next) {
            // Set positionUsing if it hasn't already been set
            if (Settings.positionUsing === "") Settings.positionUsing = NProgress.getPositioningCSS();
            // Add transition
            css(bar, barPositionCSS(n, speed, ease));
            if (n === 1) {
                // Fade out
                css(progress, {
                    transition: "none",
                    opacity: 1
                });
                progress.offsetWidth; /* Repaint */ 
                setTimeout(function() {
                    css(progress, {
                        transition: "all " + speed + "ms linear",
                        opacity: 0
                    });
                    setTimeout(function() {
                        NProgress.remove();
                        next();
                    }, speed);
                }, speed);
            } else setTimeout(next, speed);
        });
        return this;
    };
    NProgress.isStarted = function() {
        return typeof NProgress.status === "number";
    };
    /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */ NProgress.start = function() {
        if (!NProgress.status) NProgress.set(0);
        var work = function() {
            setTimeout(function() {
                if (!NProgress.status) return;
                NProgress.trickle();
                work();
            }, Settings.trickleSpeed);
        };
        if (Settings.trickle) work();
        return this;
    };
    /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */ NProgress.done = function(force) {
        if (!force && !NProgress.status) return this;
        return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
    };
    /**
   * Increments by a random amount.
   */ NProgress.inc = function(amount) {
        var n = NProgress.status;
        if (!n) return NProgress.start();
        else {
            if (typeof amount !== "number") amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
            n = clamp(n + amount, 0, 0.994);
            return NProgress.set(n);
        }
    };
    NProgress.trickle = function() {
        return NProgress.inc(Math.random() * Settings.trickleRate);
    };
    /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */ (function() {
        var initial = 0, current = 0;
        NProgress.promise = function($promise) {
            if (!$promise || $promise.state() === "resolved") return this;
            if (current === 0) NProgress.start();
            initial++;
            current++;
            $promise.always(function() {
                current--;
                if (current === 0) {
                    initial = 0;
                    NProgress.done();
                } else NProgress.set((initial - current) / initial);
            });
            return this;
        };
    })();
    /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */ NProgress.render = function(fromStart) {
        if (NProgress.isRendered()) return document.getElementById("nprogress");
        addClass(document.documentElement, "nprogress-busy");
        var progress = document.createElement("div");
        progress.id = "nprogress";
        progress.innerHTML = Settings.template;
        var bar = progress.querySelector(Settings.barSelector), perc = fromStart ? "-100" : toBarPerc(NProgress.status || 0), parent = document.querySelector(Settings.parent), spinner;
        css(bar, {
            transition: "all 0 linear",
            transform: "translate3d(" + perc + "%,0,0)"
        });
        if (!Settings.showSpinner) {
            spinner = progress.querySelector(Settings.spinnerSelector);
            spinner && removeElement(spinner);
        }
        if (parent != document.body) addClass(parent, "nprogress-custom-parent");
        parent.appendChild(progress);
        return progress;
    };
    /**
   * Removes the element. Opposite of render().
   */ NProgress.remove = function() {
        removeClass(document.documentElement, "nprogress-busy");
        removeClass(document.querySelector(Settings.parent), "nprogress-custom-parent");
        var progress = document.getElementById("nprogress");
        progress && removeElement(progress);
    };
    /**
   * Checks if the progress bar is rendered.
   */ NProgress.isRendered = function() {
        return !!document.getElementById("nprogress");
    };
    /**
   * Determine which positioning CSS rule to use.
   */ NProgress.getPositioningCSS = function() {
        // Sniff on document.body.style
        var bodyStyle = document.body.style;
        // Sniff prefixes
        var vendorPrefix = "WebkitTransform" in bodyStyle ? "Webkit" : "MozTransform" in bodyStyle ? "Moz" : "msTransform" in bodyStyle ? "ms" : "OTransform" in bodyStyle ? "O" : "";
        if (vendorPrefix + "Perspective" in bodyStyle) // Modern browsers with 3D support, e.g. Webkit, IE10
        return "translate3d";
        else if (vendorPrefix + "Transform" in bodyStyle) // Browsers without 3D support, e.g. IE9
        return "translate";
        else // Browsers without translate() support, e.g. IE7-8
        return "margin";
    };
    /**
   * Helpers
   */ function clamp(n, min, max) {
        if (n < min) return min;
        if (n > max) return max;
        return n;
    }
    /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */ function toBarPerc(n) {
        return (-1 + n) * 100;
    }
    /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */ function barPositionCSS(n, speed, ease) {
        var barCSS;
        if (Settings.positionUsing === "translate3d") barCSS = {
            transform: "translate3d(" + toBarPerc(n) + "%,0,0)"
        };
        else if (Settings.positionUsing === "translate") barCSS = {
            transform: "translate(" + toBarPerc(n) + "%,0)"
        };
        else barCSS = {
            "margin-left": toBarPerc(n) + "%"
        };
        barCSS.transition = "all " + speed + "ms " + ease;
        return barCSS;
    }
    /**
   * (Internal) Queues a function to be executed.
   */ var queue = function() {
        var pending = [];
        function next() {
            var fn = pending.shift();
            if (fn) fn(next);
        }
        return function(fn) {
            pending.push(fn);
            if (pending.length == 1) next();
        };
    }();
    /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */ var css = function() {
        var cssPrefixes = [
            "Webkit",
            "O",
            "Moz",
            "ms"
        ], cssProps = {};
        function camelCase(string) {
            return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
                return letter.toUpperCase();
            });
        }
        function getVendorProp(name) {
            var style = document.body.style;
            if (name in style) return name;
            var i = cssPrefixes.length, capName = name.charAt(0).toUpperCase() + name.slice(1), vendorName;
            while(i--){
                vendorName = cssPrefixes[i] + capName;
                if (vendorName in style) return vendorName;
            }
            return name;
        }
        function getStyleProp(name) {
            name = camelCase(name);
            return cssProps[name] || (cssProps[name] = getVendorProp(name));
        }
        function applyCss(element, prop, value) {
            prop = getStyleProp(prop);
            element.style[prop] = value;
        }
        return function(element, properties) {
            var args = arguments, prop, value;
            if (args.length == 2) for(prop in properties){
                value = properties[prop];
                if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
            }
            else applyCss(element, args[1], args[2]);
        };
    }();
    /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */ function hasClass(element, name) {
        var list = typeof element == "string" ? element : classList(element);
        return list.indexOf(" " + name + " ") >= 0;
    }
    /**
   * (Internal) Adds a class to an element.
   */ function addClass(element, name) {
        var oldList = classList(element), newList = oldList + name;
        if (hasClass(oldList, name)) return;
        // Trim the opening space.
        element.className = newList.substring(1);
    }
    /**
   * (Internal) Removes a class from an element.
   */ function removeClass(element, name) {
        var oldList = classList(element), newList;
        if (!hasClass(element, name)) return;
        // Replace the class name.
        newList = oldList.replace(" " + name + " ", " ");
        // Trim the opening and closing spaces.
        element.className = newList.substring(1, newList.length - 1);
    }
    /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */ function classList(element) {
        return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
    }
    /**
   * (Internal) Removes an element from the DOM.
   */ function removeElement(element) {
        element && element.parentNode && element.parentNode.removeChild(element);
    }
    return NProgress;
});

},{}],"dA5jG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PagesCtrl", ()=>PagesCtrl);
class PagesCtrl {
    constructor(){
        this.pages = new Array();
        this.addPage = (page)=>{
            this.pages.push(page);
        };
        this.getCurrentPageId = ()=>{
            if (!this.currentPage) return "";
            return this.currentPage.getPageId();
        };
        this.setupPage = ()=>{
            this.closePage();
            let page = this.executeCurrentPageLogic();
            if (page) this.currentPage = page;
        };
        this.closePage = ()=>{
            if (this.currentPage) {
                this.currentPage.onPageClose();
                this.currentPage = null;
            }
        };
        this.executeCurrentPageLogic = ()=>{
            const pageIdElement = document.querySelector("#pageId");
            if (!pageIdElement) return;
            pageIdElement.parentNode.removeChild(pageIdElement);
            const pageId = pageIdElement.innerText;
            if (!pageId || pageId.length === 0) return;
            for(let i = 0; i < this.pages.length; i++){
                let page = this.pages[i];
                if (pageId == page.getPageId()) {
                    page.execute();
                    return page;
                }
            }
            return null;
        };
        this.pages = new Array();
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6ju7H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MainPage", ()=>MainPage);
class MainPage {
    constructor(listener){
        this.getPageId = ()=>{
            return "main";
        };
        this.execute = ()=>{
            const toast = this.listener.getToast();
            const showToast = document.querySelector("#showToast");
            showToast.addEventListener("click", ()=>{
                const results = 5;
                const executeToast = results * Math.random();
                if (executeToast < 1) toast.showInfo("This is info. It is really long and it doesn't really fit into this small toast", "This is info message");
                else if (executeToast < 2) toast.showWarning("This is warning", "This is warning message.");
                else if (executeToast < 3) toast.showSuccess("Success", "You made it. Congratulations!");
                else if (executeToast < 4) toast.showError("This is error", "This is error message.");
                else if (executeToast <= 5) this.showMultipleToasts();
            });
        };
        this.showMultipleToasts = ()=>{
            const toast = this.listener.getToast();
            toast.showInfo("This is info", "This is info message");
            toast.showSuccess("Success", "You made it. Congratulations!");
            toast.showWarning("This is warning", "This is warning message");
            toast.showError("This is error", "This is error message");
        };
        this.onPageClose = ()=>{};
        this.listener = listener;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2AbZk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ContactUsPage", ()=>ContactUsPage);
class ContactUsPage {
    constructor(listener){
        this.getPageId = ()=>{
            return "contact-us";
        };
        this.execute = ()=>{
            const toast = this.listener.getToast();
            toast.showInfo("You can contact us by email", "hello@email.com");
        };
        this.onPageClose = ()=>{};
        this.listener = listener;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["f4nyn","97H9G"], "97H9G", "parcelRequirefa15")

//# sourceMappingURL=AppClient.js.map
