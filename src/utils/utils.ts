const fs = require('fs');

type functionCallback = () => any;

// ideally, this function wouldn't contain business logic
// should be utility function only to write the file
export const write_json_registry = (file_name: string, file_data: Array<object>): void => {
	const dir: string = __dirname + '/../../config';

	// parse JSON registry => array
	const existingRegistryData: Array<object> = JSON.parse(fs.readFileSync(`${dir}/${file_name}.json`, 'utf8'));

	// push each array in file_data to registry array
	file_data.forEach((item: object) => {
		existingRegistryData.push(item);
	})

	// write entire existing array to file // all new items are appended
	fs.writeFileSync(`${dir}/${file_name}.json`, JSON.stringify(existingRegistryData, null, '\t'));
	console.log('done writing json file');
}

export const write_javascript_file = (file_name: string, data: string, class_name: string): void => {
	// checking for/writing service-now file folder
	const sn_dir = __dirname + `/../../service-now-files`;
	if (!fs.existsSync(sn_dir)) {
		fs.mkdirSync(sn_dir);
	}

	// checking for/writing each class name/script type folder
	const class_dir = sn_dir + `/${class_name}`;
	if (!fs.existsSync(class_dir)) {
		fs.mkdirSync(class_dir);
	}
	fs.writeFileSync(`${class_dir}/${file_name}.js`, data);
	console.log('done writing javascript file');
}

export const async_for_each = async (array: Array<object>, functionCallback: any) => {
	for (let index = 0; index < array.length; index++) {
	  await functionCallback(array[index]);
	}
}