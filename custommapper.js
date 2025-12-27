function Sq( x){
    return x*x;
}

const arr =[ 1,2,3,4,5,6,7,8,9,10];

function customMapper(arr,Sq){
    for(let i=0;i<arr.length;i++){
        arr[i] = Sq(arr[i]);
    }
}

console.log(arr);
customMapper(arr,Sq);
console.log(arr);

