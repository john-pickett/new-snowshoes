import { pullScriptsFromSN, configureRegistryData } from './GrabScripts';
import { write_json_registry } from './utils/utils';

(async () => {
	const result: any = await pullScriptsFromSN('sys_script_client', 'NeedIt');
	const registryData: object[] = configureRegistryData(result.data);
	// console.log(JSON.stringify(registryData, null, '\t'));
	write_json_registry('registry', JSON.stringify(registryData, null, '\t'));
})();