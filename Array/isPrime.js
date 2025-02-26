let arr=[5,9,63,29,35,6,55,23];
let prime=[];
const isPrime = (item)=>{
    let identifier=item/2;
    for(let i=2; i<=identifier;i++){
        if(item%i==0)
            return false;
    }
    return true;
}
for(let j=0;j<arr.length;j++){
    if(isPrime(arr[j]))
        prime.push(arr[j]);
}
console.log(prime);
