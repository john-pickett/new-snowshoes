"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GrabScripts_1 = require("./GrabScripts");
const utils_1 = require("./utils/utils");
(async () => {
    const result = await GrabScripts_1.pullScriptsFromSN('sys_script_client', 'NeedIt');
    const registryData = GrabScripts_1.configureRegistryData(result.data);
    utils_1.write_json_registry('registry', JSON.stringify(registryData, null, '\t'));
})();
//# sourceMappingURL=App.js.map