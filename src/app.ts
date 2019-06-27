import { pullScriptsFromSN, configureRegistryData } from './GrabScripts';
import { write_json_registry, write_javascript_file, async_for_each } from './utils/utils';
import { ClientScript } from './config/GrabScriptsConfig';
const table_map = require('../config/table-map.json');

const tables = Object.keys(table_map).map(key => table_map[key]);

(async () => {
	async_for_each(tables, async (table: string) => {
		const result: any = await pullScriptsFromSN(table, 'NeedIt');
		const scripts: [ClientScript] = result.data;
		const registryData: object[] = configureRegistryData(result.data);
		// console.log(JSON.stringify(registryData, null, '\t'));
		write_json_registry('registry', JSON.stringify(registryData, null, '\t'));
		// console.log(JSON.stringify(scripts))
		scripts.forEach((script) => {
			write_javascript_file(script.name, script.script, script.sys_class_name)
		});
	});
	
})();



