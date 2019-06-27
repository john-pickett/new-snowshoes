"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
function logger(message) {
    console.log(message);
}
exports.logger = logger;
exports.write_json_registry = (file_name, file_data) => {
    const dir = __dirname + '/../../config';
    fs.writeFileSync(`${dir}/${file_name}.json`, file_data);
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
};
exports.async_for_each = async (array, functionCallback) => {
    for (let index = 0; index < array.length; index++) {
        await functionCallback(array[index]);
    }
};
//# sourceMappingURL=utils.js.map