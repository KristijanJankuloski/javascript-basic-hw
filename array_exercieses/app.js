// CHECK IF SRINGS ARE ANAGRAMS AND GROUP THEM IN AN ARRAY-----------------
// function areAnagrams(str1, str2){
//     if(str1.length !== str2.length){
//         return false;
//     }
//     if(str1.split('').sort().join('') === str2.split('').sort().join('')){
//         return true;
//     }
//     return false;
// }
// function groupAnagrams(strs){
//     let output = [];
//     for(let word of strs){
//         let wasFound = false;
//         for(let i in output){
//             if(areAnagrams(output[i][0], word)){
//                 output[i].push(word);
//                 wasFound = true;
//                 break;
//             }
//         }
//         if(!wasFound){
//             let newAnagram = [word];
//             output.push(newAnagram);
//         }
//     }
//     return output;
// }

// const array = ["car", "cat", "tac", "rac", "bat"];
// console.log(groupAnagrams(array));



// TOP K MOST FREQUENT ELEMENTS IN AN ARRAY-----------------
// function topKFrequent(nums, k) {
//     let frequency = new Map();
//     for(item of nums){
//         if(frequency.has(item)){
//             frequency.set(item, frequency.get(item) + 1);
//         }
//         else{
//             frequency.set(item, 1);
//         }
//     }
//     let sorted = new Map([...frequency].sort((a,b) => (b[1] - a[1])));
//     return Array.from(sorted.keys()).slice(0,k);
// };

// const testArr = [1,1,1,2,2,3];
// console.log(topKFrequent(testArr, 2));

// PRODUCTS ARRAY
// function productOfArrayExceptSelf(nums) {
//     // Create an array of the products of all the numbers before each index.
//     const beforeProduct = []
//     let productSoFar = 1
//     for (let i = 0; i < nums.length; i++) {
//       beforeProduct[i] = productSoFar
//       productSoFar *= nums[i]
//     }
//     // Create an array of the products of all the numbers after each index.
//     const afterProduct = []
//     productSoFar = 1
//     for (let i = nums.length - 1; i >= 0; i--) {
//       afterProduct[i] = productSoFar
//       productSoFar *= nums[i]
//     } 
//     // Create the final array by multiplying the beforeProduct and afterProduct
//     // arrays at each index.
//     const answer = []
//     for (let i = 0; i < nums.length; i++) {
//       answer[i] = beforeProduct[i] * afterProduct[i]
//     } 
//     return answer
//   }

//   console.log(productOfArrayExceptSelf([1,2,3,4]))


// VALID SUDOKU BOARD-----------------not solved
// function validateSudoku(board){
//   let row = new Set();
//   let column = new Set();
//   let block = new Set();
//   for(let i=0; i < board.length; i++){
//     row.clear();
//     column.clear();
//     block.clear();
//     for(let inner = 0; inner < board[i].length; inner++){
//       let char = board[i][inner];
//       if(char === "."){
//         continue;
//       }
//       if(row.has(char)){
//         return false;
//       }
//       if(column.has(char)){
//         return false;
//       }
//       if(block.has(char)){
//         return false;
//       }
//       row.add(board[i][inner]);
//       column.add(board[inner][i]);
//       block.add(board[(Math.floor(row / 3) * 3) + Math.floor(col / 3)][i]);
//     }
//   }
//   return true;
// }
// const testBoard = [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]];

// console.log(validateSudoku(testBoard));

// longest consecutive sequence
var longestConsecutive = function(nums) {
  let longestSet = new Set();
  for(let num of nums){
    // console.log(num);
    if(nums.find(element => element === num+1) || nums.find(element => element === num-1)){
      longestSet.add(num);
    }
  }
  return longestSet.size;
};

console.log(longestConsecutive([100,4,200,1,2,3]));