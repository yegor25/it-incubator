function narcissistic(value) {
    // Code me to return true or false
      let sum=0;
      let a=value.toString().split('');
      for(let i=0;i<a.length;i++){
           sum+=(Math.pow(a[i],a.length))
          
          }
      if(sum==value){
          return true
      }
      return false
      
  }
  narcissistic(7)