function isPalindrome(x) {
    // your code here
    if(x.toLowerCase()==x.toLowerCase().split('').reverse().join('')){
      return true;
    }
    return false;
  }