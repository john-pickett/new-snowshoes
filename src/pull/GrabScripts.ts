const axios = require('axios');
import { ClientScript, RegistryEntry } from '../config/GrabScriptsConfig';
const config = require('../../config/snow-config.json');
const base_url = config.url;

// this function is strictly for sending/receiving data from SN
// no business logic should be contained here
export const pullScriptsFromSN = async (table: string, app_name: string): Promise<{}> => {
	const request = await axios.get(`${base_url}/api/now/table/${table}` + `?sysparm_query=sys_scopeLIKE${app_name}`, {
				auth: {
					username: config.username,
					password: config.password
				}
			})
	return new Promise((resolve, reject) => {
		try {
			console.log(request.status);
			resolve({
				status: request.status,
				data: request.data.result
			});
		} catch (err) {
			reject(err);
		}
	})
}

// this creates the script object that is stored in the registry
export const configureRegistryData = (scripts: Array<ClientScript>): Array<object> => {
	let registryData: Array<object> = [];

	scripts.forEach((item: ClientScript) => {
		let currentScript = <RegistryEntry>{};
		currentScript.sys_id = item.sys_id;
		currentScript.name = item.name;
		currentScript.table = item.sys_class_name;
		currentScript.created_on = item.sys_created_on;
		currentScript.updated_on = item.sys_updated_on;
		registryData.push(currentScript);
	});

	return registryData;
}



