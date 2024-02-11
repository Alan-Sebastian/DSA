//recursive bubblesort
function bubblesort(arr,n){
for(var i=0;i<n-1;i++){
    if(n==1){
        return;
    }
    if(arr[i]>arr[i+1]){
        let temp=arr[i]
        arr[i]=arr[i+1]
        arr[i+1]=temp
    }
    bubblesort(arr,n-1);
}


}
let arr=[10,0,2,1,20,3,7,6,5]
let n=arr.length
bubblesort(arr,n);
console.log(arr)
