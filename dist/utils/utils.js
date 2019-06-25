"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
exports.write_json_registry = (file_name, file_data) => {
    const dir = __dirname + '/../../config';
    fs.writeFile(`${dir}/${file_name}.json`, file_data, 'utf8', () => {
        console.log('done writing registry file to json');
    });
};
//# sourceMappingURL=utils.js.map