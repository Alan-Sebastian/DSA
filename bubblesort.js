//bubblesort.js
let arr=[10,20,4,6,2]
let n=arr.length
for(var i=0;i<n-1;i++){
    for(var j=i+1;j<n;j++){
        if(arr[i]>arr[j]){
            var temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
    }
}
console.log(arr)
