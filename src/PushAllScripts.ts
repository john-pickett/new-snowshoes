const axios = require('axios');
const config = require('../config/snow-config.json');
const base_url = config.url;
import { ClientScript, RegistryEntry } from './config/GrabScriptsConfig';


// this function is strictly for sending/receiving data from SN
// no business logic should be contained here
export const pushScriptToSN = async (script: any): Promise<string> => {
	const request = await axios.put(`${base_url}/api/now/table/${script.table}/${script.sys_id}`, 
				{ auth:  {username: config.username, password: config.password }
			})
	return new Promise((resolve, reject) => {
		try {
			resolve(request.status);
		} catch (err) {
			reject(err);
		}
	})
}