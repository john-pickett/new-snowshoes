import { pullScriptsFromSN, configureRegistryData } from './pull/GrabScripts';
import { write_json_registry, write_javascript_file, async_for_each } from './utils/utils';
import { ClientScript } from './config/GrabScriptsConfig';
const table_map = require('../config/table-map.json');

const tables = Object.keys(table_map).map(key => table_map[key]);

(async () => {
	async_for_each(tables, async (table: string) => {
		const result: any = await pullScriptsFromSN(table, 'NeedIt'); // TODO: fix this to use app from config
		const scripts: [ClientScript] = result.data;
		const registryData: Array<object> = configureRegistryData(result.data);
		// console.log('registryData' + JSON.stringify(registryData, null, '\t'));
		
		// RegistryData is an array of objects, but passing it into write_json_registry
		// as a string by JSON.stringify
		write_json_registry('registry', registryData);
		// console.log(JSON.stringify(scripts))
		scripts.forEach((script) => {
			write_javascript_file(script.name, script.script, script.sys_class_name);
		});
	});
	
})();



