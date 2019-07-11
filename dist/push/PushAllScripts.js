"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const axios = require('axios');
const config = require('../../config/snow-config.json');
const base_url = config.url;
exports.pushScriptToSN = async (script) => {
    console.log(`updating ${script.name}`);
    const updated_script = fs.readFileSync(`./service-now-files/${script.table}/${script.name}.js`, 'utf8');
    const request = await axios.put(`${base_url}/api/now/table/${script.table}/${script.sys_id}`, { script: updated_script }, { auth: { username: config.username, password: config.password }
    });
    return new Promise((resolve, reject) => {
        try {
            console.log(request.status);
            resolve(request.status);
        }
        catch (err) {
            console.log('an error occured on update =(');
            reject(err);
        }
    });
};
//# sourceMappingURL=PushAllScripts.js.map