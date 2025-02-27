const isExist = (arr,target)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i] === target)
            return i;
    }
    return -1;
}
let arr = [10,20,30,40,50,60,70,80,90,100];
let target = 110;

let result = isExist(arr,target);
console.log(result);
