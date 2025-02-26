const arr = [1,2,3,4,5];
const reverseArray=(arr)=>{
    let reversedArray=[];
    for(let i=arr.length-1;i>=0;i--){
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}
console.log(reverseArray(arr));
