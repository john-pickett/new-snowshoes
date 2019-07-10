"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require('axios');
const config = require('../config/snow-config.json');
const base_url = config.url;
exports.pushScriptToSN = async (script) => {
    const request = await axios.put(`${base_url}/api/now/table/${script.table}/${script.sys_id}`, { auth: { username: config.username, password: config.password }
    });
    return new Promise((resolve, reject) => {
        try {
            resolve(request.status);
        }
        catch (err) {
            reject(err);
        }
    });
};
//# sourceMappingURL=PushAllScripts.js.map