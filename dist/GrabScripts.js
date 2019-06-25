"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = require('../config/snow-config.json');
const axios = require('axios');
exports.pullScriptsFromSN = async (table, app_name) => {
    const request = await axios.get(`https://dev54390.service-now.com/api/now/table/${table}` + `?sysparm_query=sys_scopeLIKE${app_name}`, {
        auth: {
            username: config.username,
            password: config.password
        }
    });
    return new Promise((resolve, reject) => {
        try {
            resolve({
                status: request.status,
                data: request.data.result
            });
        }
        catch (err) {
            reject(err);
        }
    });
};
exports.configureRegistryData = (scripts) => {
    let registryData = [];
    scripts.forEach((item) => {
        let currentScript = {};
        currentScript.sys_id = item.sys_id;
        currentScript.name = item.name;
        currentScript.table = item.sys_class_name;
        currentScript.created_on = item.sys_created_on;
        currentScript.updated_on = item.sys_updated_on;
        registryData.push(currentScript);
    });
    return registryData;
};
//# sourceMappingURL=GrabScripts.js.map