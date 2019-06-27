"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GrabScripts_1 = require("./GrabScripts");
const utils_1 = require("./utils/utils");
const table_map = require('../config/table-map.json');
const tables = Object.keys(table_map).map(key => table_map[key]);
(async () => {
    utils_1.async_for_each(tables, async (table) => {
        const result = await GrabScripts_1.pullScriptsFromSN(table, 'NeedIt');
        const scripts = result.data;
        const registryData = GrabScripts_1.configureRegistryData(result.data);
        utils_1.write_json_registry('registry', JSON.stringify(registryData, null, '\t'));
        scripts.forEach((script) => {
            utils_1.write_javascript_file(script.name, script.script, script.sys_class_name);
        });
    });
})();
//# sourceMappingURL=App.js.map