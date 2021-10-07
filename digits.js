function digPow(n, p){
    // convert the number into string
    let str = String(n);
    let add = 0;
    // convert string into array using split()
    str.split('').forEach(num=>{
      add += Math.pow(Number(num) , p);
      p++;
    });

    return (add % n) ? -1 : add/n;
  }