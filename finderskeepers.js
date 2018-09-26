function findElement(arr, func) {
  // loops through an array to see if a number contained within is % 2 === 0 returns the first correct number. 
  let num = [];
  
  for(let i = 0; i < arr.length; i++){
    
    if(func(arr[i]) === true){
       num.push(arr[i]);
       break;
       

    }
  }
   if(num === undefined || num.length === 0){
     return undefined;
   }
   else{
     num.join();
     num = Number(num);
     return num;
     
   }
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
