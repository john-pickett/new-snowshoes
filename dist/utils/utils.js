"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
exports.write_json_registry = (file_name, file_data) => {
    const dir = __dirname + '/../../config';
    const existingRegistryData = JSON.parse(fs.readFileSync(`${dir}/${file_name}.json`, 'utf8'));
    file_data.forEach((item) => {
        existingRegistryData.push(item);
    });
    fs.writeFileSync(`${dir}/${file_name}.json`, JSON.stringify(existingRegistryData, null, '\t'));
    console.log('done writing json file');
};
exports.write_javascript_file = (file_name, data, class_name) => {
    const sn_dir = __dirname + `/../../service-now-files`;
    if (!fs.existsSync(sn_dir)) {
        fs.mkdirSync(sn_dir);
    }
    const class_dir = sn_dir + `/${class_name}`;
    if (!fs.existsSync(class_dir)) {
        fs.mkdirSync(class_dir);
    }
    fs.writeFileSync(`${class_dir}/${file_name}.js`, data);
    console.log('done writing javascript file');
};
exports.async_for_each = async (array, functionCallback) => {
    for (let index = 0; index < array.length; index++) {
        await functionCallback(array[index]);
    }
};
//# sourceMappingURL=utils.js.map