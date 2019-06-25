const axios = require('axios');
import { pullScriptsFromSN, configureRegistryData } from './GrabScripts';

(async () => {
	const result = await pullScriptsFromSN('sys_script_client', 'NeedIt');
	console.log(JSON.stringify(result));
})();