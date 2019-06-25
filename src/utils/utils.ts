const fs = require('fs');

export const write_json_registry = (file_name: string, file_data: string): void => {
	const dir: string = __dirname + '/../../config';

	fs.writeFile(`${dir}/${file_name}.json`, file_data, 'utf8', () => {
		console.log('done writing registry file to json');
	})
}


// const write_json_registry = (file_name, file_data) => { // data must be a string e.g., JSON.stringify(data)
// 	const dir = __dirname + '/../config';

// 	fs.writeFile(`${dir}/${file_name}.json`, file_data, 'utf8', () => {
// 		console.log('done writing to json');
// 	});
// }
