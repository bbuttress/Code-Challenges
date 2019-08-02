
const solution = (arr) => {
    const arrLength = arr.length;
    const left = 'Left';
    const right = 'Right';
    let leftSum = 0;
    let rightSum = 0;
    let largestBranch = '';
    
    const findBranchSum = (array, index, arrayLength) => {
        let leftChildSum = 0;
        let rightChildSum = 0;
        if (index >= arrayLength || array[index] === -1) {
            return 0;
        } else {
            leftChildSum = findBranchSum(array, 2*index + 1, arrayLength);
            rightChildSum = findBranchSum(array, 2*index + 2, arrayLength);
        }
        return array[index] + leftChildSum + rightChildSum;
    }
    
    if (arrLength === 1) {
        return '';
    }
    
    leftSum = findBranchSum(arr, 1, arrLength);
    rightSum = findBranchSum(arr, 2, arrLength);
    
    if (leftSum > rightSum) {
        largestBranch = left;
    } else if (leftSum < rightSum) {
        largestBranch = right;
    }
    
    return largestBranch;
};

