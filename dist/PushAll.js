"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const registry = require('../config/registry.json');
const utils_1 = require("./utils/utils");
const PushAllScripts_1 = require("./push/PushAllScripts");
(async () => {
    console.log('pushing all scripts to ServiceNow');
    utils_1.async_for_each(registry, async (script) => {
        await PushAllScripts_1.pushScriptToSN(script);
    });
})();
//# sourceMappingURL=PushAll.js.map