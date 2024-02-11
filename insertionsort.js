//insertion sort
let arr=[10,20,3,4,80,5]
let n=arr.length
for(var i=0;i<n;i++){
    var j=i;
    while(j>0 && arr[j-1]>arr[j]){
        var temp=arr[j-1]
        arr[j-1]=arr[j]
        arr[j]=temp
        j--;

    }
}
console.log(arr)
