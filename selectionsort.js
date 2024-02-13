let arr=[10,20,4,6,2]
let n=arr.length
for(let i=0;i<n-1;i++){
    var min=i
    for(let j=i+1;j<n;j++){
        if(arr[j]<arr[min]){
          min=j
        }
    }
    const temp=arr[min]
    arr[min]=arr[i]
    arr[i]=temp

}
console.log(arr)
