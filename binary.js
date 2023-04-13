let num =[3,4,5,6,7,8,9,10]
let target=7;

function binarysearch(num,target){
  
    let left=0;
    let right=num.length-1;
   
    while(left<=right){
        let middle=Math.floor((left+right)/2);
        if(num[middle]===target){
            return middle
        }
        else if(num[middle]<target){
             left=middle+1
        }
        else{
         right=middle-1
        }
         
    }
    return null  
}
  console.log(binarysearch(num,target))  
        

    let nums=[6,8,10,12,16,20]
    let target2=12;
function binary(nums,target){

   let left=0;
   let right=nums.length-1;

   while(left<=right){
       let middle=Math.floor((left+right)/2);
       if(nums[middle]===target){
        return middle
        
    }     
       else if(nums[middle]<target){
        left= middle+1
       }
       else{
        right=middle-1
       }
    }
       return null
    }
      
console.log(binary(nums,target))

            
        
    


    
