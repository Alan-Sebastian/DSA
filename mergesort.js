
//merge sort
function merge(arr,lb,mid,ub){
   var i=lb;
   var j=mid+1;
   var k=lb;
    var b=new Array();
    while(i<=mid && j<=ub){
        if(arr[i]<=arr[j]){
            b[k]=arr[i]
            i++;  k++;
        }
      
        else{
            b[k]=arr[j]
            k++;j++;
        }
    }
    if(i>mid){
        while(j<=ub){
            b[k]=arr[j]
            j++;  k++;
        }
  
    }
    else{
        while(i<=mid){
            b[k]=arr[i]
            i++;    k++;
        }
      
    }
    for(var k=lb;k<=ub;k++){
        arr[k]=b[k];
    }
}
function mergesort(arr,lb,ub){
    if(lb<ub){
        let mid=Math.floor((lb+ub)/2)
        mergesort(arr,lb,mid);
        mergesort(arr,mid+1,ub);
        merge(arr,lb,mid,ub)

    }
}
let arr=[10,0,2,1,20,3,7,6,5]
let n=arr.length
mergesort(arr,0,n-1);
console.log(arr)
