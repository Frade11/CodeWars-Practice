//Count of positives / sum of negatives

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
const newArray = [];
let count = 0;
let summ = 0;

array.forEach(num =>{
    if(num === 0) return;
    if(num >0){
        count++;
        return;
    }else if(num<0){
        summ+=num;
        return;
    }
})
newArray.push(count,summ);
console.log(newArray);