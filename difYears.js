let howManyYears = function(date1, date2){
    let a=date1.split('').splice(0,4);
     let b=date2.split('').splice(0,4);
     let c= a.map(Number).join('');
     let d= b.map(Number).join('');
     return Math.abs(d-c)
 }