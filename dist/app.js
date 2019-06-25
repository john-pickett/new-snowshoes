"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require('axios');
const GrabScripts_1 = require("./GrabScripts");
(async () => {
    const result = await GrabScripts_1.pullScriptsFromSN('sys_script_client', 'NeedIt');
    console.log(JSON.stringify(result));
})();
//# sourceMappingURL=app.js.map