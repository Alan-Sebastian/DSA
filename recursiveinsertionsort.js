function recursinsertion(arr,begin,n){
    if(begin>n){
        return;
    }
     var j=begin
     while(j>0 && arr[j-1]>arr[j]){
         var temp=arr[j-1]
         arr[j-1]=arr[j]
         arr[j]=temp
         j--;
     }
     recursinsertion(arr,begin+1,n)
    }
 let arr=[20,2,1,90,50]
 let n=arr.length
 recursinsertion(arr,0,n)
 console.log(arr)
 
