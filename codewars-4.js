//Sum of positive
function positiveSum(arr) {
  let sum = 0;
  arr.forEach(num =>{
    if(num>0) sum+=num;
    else return;
  })
  return sum;
}
console.log(positiveSum([1,2,3,4,5]));