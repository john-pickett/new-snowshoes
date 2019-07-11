const registry: Array<object> = require('../config/registry.json');
import { async_for_each } from './utils/utils'; 
import { RegistryEntry } from './config/GrabScriptsConfig';
import { pushScriptToSN } from './push/PushAllScripts';


(async () => {
	console.log('pushing all scripts to ServiceNow');
	async_for_each(registry, async (script: RegistryEntry) => {
		await pushScriptToSN(script)
	});
	
})();