function abc() {
    const a = b = 2;
}
abc();
console.log(b);
console.log(process.b);


const a = [1, 2, 3, 4, 5, 6];
// input: 2 
// output: [0,0,1,2,3,4]
function rotate(a, input) {
    let output = [];
    for (let i = 0; i < a.length; i++) {
        if (input === i) {
            for (let j = 1; j < a.length - input + 1; j++) {
                output.push(j);
            }
            break;
        } else {
            output.push(0);
        }
    }
    console.log(output);
    return output;
}

rotate(a, 0);