const fs = require('fs');

// type NumberCallback = (n: number) => any;
type functionCallback = () => any;

export const logger = (message: string): void => {
	console.log(message);
}

export const write_json_registry = (file_name: string, file_data: string): void => {
	const dir: string = __dirname + '/../../config';
	fs.writeFile(`${dir}/${file_name}.json`, file_data, 'utf8', logger('done writing registry file to json'));
}

export const async_for_each = async (array: [], functionCallback: any) => {
	for (let index = 0; index < array.length; index++) {
	  await functionCallback(array[index])
	}
}
