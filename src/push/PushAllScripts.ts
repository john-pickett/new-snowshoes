const fs = require('fs');
const axios = require('axios');
const config = require('../../config/snow-config.json');
const base_url:string = config.url;

// this function is strictly for sending/receiving data from SN
// no business logic should be contained here
export const pushScriptToSN = async (script: any): Promise<string> => {
	console.log(`updating ${script.name}`);
	const updated_script: string = fs.readFileSync(`./service-now-files/${script.table}/${script.name}.js`, 'utf8');
	const request = await axios.put(`${base_url}/api/now/table/${script.table}/${script.sys_id}`,
				{ script: updated_script },
				{ auth:  {username: config.username, password: config.password }
				
			})
	return new Promise((resolve, reject) => {
		try {
			console.log(request.status);
			resolve(request.status);
		} catch (err) {
			console.log('an error occured on update =(');
			reject(err);
		}
	})
}
