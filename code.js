 
let myArr = [10, 15, 3, -3, -10];
const k = 0;

function sumZero(myArr, k){
 for (var i = 0; i < myArr.length; i++) {
  myArr.forEach(num => {
   if (num != myArr[i]) {
    if (myArr[i] + num == k) {
     console.log(`${num} + ${myArr[i]} = ${k} (true)`);
    }
   }
  })
 }
}

sumZero(myArr, k);
//runtime will be dependent on the size and numbers of the array and whether or not there are multiple values that add up to zero. The more numbers that there are that add up to zero, the longer the runtime will be.