var nestedObject = {
    key: 5,
    value: {
        key:4,
        value: {
            key: 3,
            value:{
                key: 2,
                value:{
                    key: 1,
                    value: {}
                }
            }
        }
    }
}

let sum = 0;
let result = addKey(nestedObject); // true
console.log(result);

function addKey(obj){
	for(var key in obj){
		if(typeof obj[key] === 'object'){
			return addKey(obj[key]);
		}else{
            sum += obj[key];
        }
	}
	return sum;
}
