var maxSubArray = function(nums) {
    let res = nums[0];
    let sum = 0;
    for (let num of nums) {
        if (sum > 0){
            sum += num;
        }
        else{
            sum = num;
        }
        res = Math.max(res, sum);
    }
    return res;
};
// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4,7]));

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let banLen = Math.floor(nums.length / 2); 
    let index = 0;
    while (index < nums.length) {
        if(nums[index] === target){
            return -1
        }
        if(target > banLen && banLen < index){
            index += 1;
        }else{
            index++;
        }
    }
    return index === nums.length ? -1 : index;
};


var searchInsert = function(nums, target) {
    let banLen = Math.floor(nums.length / 2); 
    let index = banLen;
    while (index < nums.length && index >= 0) {
        if(nums[index] === target){
            return index;
        }
        console.log(index);
        if(target > nums[banLen]){
            index += 1;
        }else{
            index -= 1;
        }
    }
    return -1;
};

// console.time('')
// console.log('结果为：' , searchInsert([-1,0,3,5,9,12],13) );
// console.timeEnd('')



var twoSum = function(nums, target) {   
    for (let index = 0; index < nums.length - 1; index++) {
        for (let jeu = index + 1; jeu < nums.length; jeu++) {
            let number = nums[index] + nums[jeu];
            if(number === target){
                return [index , jeu];
            }
        }
    }
};
// console.time('')
// console.log('结果为：' , twoSum([3,2,3],6) );
// console.timeEnd('')


var merge = function(nums1, m, nums2, n) {
    nums1.length = m + n;
    nums2.length = n;
    // 合并数组
    for (let index = 0; index < nums1.length; index++) index >= m && nums1.splice(index,1,nums2[index - m]);
    for (let index = 0; index < nums1.length; index++) {
        for (let jeu = index + 1; jeu < nums1.length; jeu++) {
            if(nums1[index] > nums1[jeu]){
                let number = nums1[index];
                nums1[index] = nums1[jeu];
                nums1[jeu] = number;
            }
        }
    }
};

// console.time('')
// console.log('结果为：' , merge([0],0,[1],1) );
// console.timeEnd('')

var generate = function(numRows) {
    let result = [[1]];
    let index = 1;
    while (index < numRows) {
        let arr = [1];
        for (let jin = 1; jin < index; jin++) {
            let f = result[result.length - 1];
            f && arr.push(f[jin- 1] + f[jin]);
        }
        arr.push(1)
        result.push(arr);
        index ++;
    }
    return result;
};


var printNumbers = function(n) {
    let result = [];
    let whileIndex = 1;
    let forLength = '1';
    for (let index = 0; index < n; index++) {
        forLength += '0';
    }
    while (whileIndex < forLength) {
        result.push(Math.ceil(whileIndex));
        whileIndex = whileIndex + 1;
    }
    return result;
};

// console.time('')
// console.log('结果为：' , printNumbers(3) ); 
// console.timeEnd('')


// 无重复字符的最长子串
var lengthOfLongestSubstring = function(s) {
    let f = '';
    let arr = [];
    for (let index = 0; index < s.length; index++) {
        if(!f.includes(s[index])){
            f += s[index];
            arr.push(f);
        }else{
            arr.push(f);
            let startIndex = f.indexOf(s[index]) + 1;
            f = f.substring(startIndex) + s[index];
        }
    }
    console.log(arr);
    for (let index = 0; index < arr.length; index++) {
        arr[index].length > f.length ? f = arr[index] : '';
    }
    return f.length;
};

console.time('')
console.log('结果为：' , lengthOfLongestSubstring("bbbb") ); 
console.timeEnd('')