var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, Promise, generator) {
    return new Promise(function (resolve, reject) {
        generator = generator.call(thisArg, _arguments);
        function cast(value) { return value instanceof Promise && value.constructor === Promise ? value : new Promise(function (resolve) { resolve(value); }); }
        function onfulfill(value) { try { step("next", value); } catch (e) { reject(e); } }
        function onreject(value) { try { step("throw", value); } catch (e) { reject(e); } }
        function step(verb, value) {
            var result = generator[verb](value);
            result.done ? resolve(result.value) : cast(result.value).then(onfulfill, onreject);
        }
        step("next", void 0);
    });
};
require('zone.js/dist/zone-node');
require('reflect-metadata');
var platform_server_1 = require('@angular/platform-server');
var core_1 = require('@angular/core');
var module_map_ngfactory_loader_1 = require('@nguniversal/module-map-ngfactory-loader');
var express = require('express');
var path_1 = require('path');
var fs_1 = require('fs');
// Faster server renders w/ Prod mode (dev mode never needed)
core_1.enableProdMode();
// Express server
var app = express();
var PORT = process.env.PORT || 4000;
var DIST_FOLDER = path_1.join(process.cwd(), 'dist');
// Our index.html we'll use as our template
var template = fs_1.readFileSync(path_1.join(DIST_FOLDER, 'browser', 'index.html')).toString();
var _a = require('./dist/server/main'), AppServerModuleNgFactory = _a.AppServerModuleNgFactory, LAZY_MODULE_MAP = _a.LAZY_MODULE_MAP;
app.engine('html', function (_, options, callback) {
    platform_server_1.renderModuleFactory(AppServerModuleNgFactory, {
        // Our index.html
        document: template,
        url: options.req.url,
        // DI so that we can get lazy-loading to work differently (since we need it to just instantly render it)
        extraProviders: [
            module_map_ngfactory_loader_1.provideModuleMap(LAZY_MODULE_MAP)
        ]
    }).then(function (html) {
        callback(null, html);
    });
});
app.set('view engine', 'html');
app.set('views', path_1.join(DIST_FOLDER, 'browser'));
// Server static files from /browser
app.get('*.*', express.static(path_1.join(DIST_FOLDER, 'browser')));
// All regular routes use the Universal engine
app.get('*', function (req, res) {
    res.render(path_1.join(DIST_FOLDER, 'browser', 'index.html'), { req: req });
});
// Start up the Node server
app.listen(PORT, function () {
    console.log("Node server listening on http://localhost:" + PORT);
});
//# sourceMappingURL=server.js.map