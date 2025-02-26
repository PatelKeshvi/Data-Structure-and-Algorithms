const arr=[3,7,1,9,2];
const findLargest=(arr)=>{
    let largest=arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i]>largest)
            largest=arr[i];
    }
    return largest;
}
const findSmallest=(arr)=>{
    let smallest=arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i]<smallest)
            smallest=arr[i];
    }
    return smallest;
}
console.log((findLargest(arr)),findSmallest(arr));
