function pyramid(arr){
    let n=arr.length
    arr.sort((a,b)=>a-b)
    for(let i=1;n/2>i;i++){
        temp=arr[i]
        index=n-i+1;
        arr.splice(index,0,temp)
        arr.splice(i,1)
    }
}


let arr=[ 1, 4, 3, 6, 8, 7, 9, 2, 5, 0, 12, 23, -1, 67]
pyramid(arr)
console.log(arr);