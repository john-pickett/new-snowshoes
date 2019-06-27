const fs = require('fs');

type functionCallback = () => any;

export const write_json_registry = (file_name: string, file_data: string): void => {
	const dir: string = __dirname + '/../../config';
	fs.writeFileSync(`${dir}/${file_name}.json`, file_data);
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
}

export const async_for_each = async (array: string[], functionCallback: any) => {
	for (let index = 0; index < array.length; index++) {
	  await functionCallback(array[index]);
	}
}