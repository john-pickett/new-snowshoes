"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GrabScripts_1 = require("./GrabScripts");
(async () => {
    const result = await GrabScripts_1.pullScriptsFromSN('sys_script_client', 'NeedIt');
    const registryData = GrabScripts_1.configureRegistryData(result.data);
    console.log(JSON.stringify(registryData, null, '\t'));
})();
//# sourceMappingURL=App.js.map