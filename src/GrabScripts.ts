import { ClientScript, RegistryScript } from './config/GrabScriptsConfig';
//import { rejects } from 'assert';
const config = require('../config/snow-config.json');
const axios = require('axios');

// export const addTwoNums = (x: number, y: number): number => {
// 	return x + y;
// }

export const pullScriptsFromSN = async (table: string, app_name: string): Promise<{}> => {
	const request = await axios.get(`https://dev54390.service-now.com/api/now/table/${table}` + `?sysparm_query=sys_scopeLIKE${app_name}`, {
				auth: {
					username: config.username,
					password: config.password
				}
			})
	return new Promise((resolve, reject) => {
		try {
			resolve({
				status: request.status,
				data: request.data.result
			});
		} catch (err) {
			reject(err);
		}
	})
	
}

export const configureRegistryData = (scripts: Array<ClientScript>): Array<object> => {
	let registryData: object[] = [];

	scripts.forEach((item: ClientScript) => {
		let currentScript = <RegistryScript>{};
		currentScript.sys_id = item.sys_id;
		currentScript.name = item.name;
		currentScript.table = item.sys_class_name;
		currentScript.created_on = item.sys_created_on;
		currentScript.updated_on = item.sys_updated_on;
		registryData.push(currentScript);
	});

	return registryData;
}


