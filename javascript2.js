// Expected Result = true
// Direction : need to check if each of array value has value less than 91
const array1 = [1, 29, 88, 37, 22, '90'];

function result(array1) {
    for (let i = 0; i < array1.length; i++) {
        return array1[i] < 91;
    }
}

console.log(result(array1));